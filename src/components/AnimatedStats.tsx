"use client";

import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

function AnimatedStat({ value, suffix = "", prefix = "", label, duration = 2000 }: StatProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * value));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(value);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm sm:text-base text-white/70 mt-2">{label}</div>
    </div>
  );
}

export function AnimatedStats() {
  return (
    <section className="py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedStat value={60} suffix="%" label="Average Savings" />
          <AnimatedStat value={5000} suffix="+" label="Member Families" />
          <AnimatedStat value={50} prefix="$" suffix="M+" label="Bills Shared" />
          <AnimatedStat value={98} suffix="%" label="Member Satisfaction" />
        </div>
      </div>
    </section>
  );
}
