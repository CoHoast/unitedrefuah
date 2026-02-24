import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-20 pb-12 sm:pt-32 sm:pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 opacity-10 -z-10">
        <Image src="/images/watermarkLightBlue-300x300-1.png" alt="" fill className="object-contain" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6">
              ✡️ Serving the Jewish Community Since 2018
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Healthcare Costs,{" "}
              <span className="text-primary">Shared Together</span>
            </h1>
            
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              A compassionate, affordable, and Torah-aligned solution to managing health care expenses. 
              Join thousands of families sharing in each other&apos;s medical needs.
            </p>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto text-base px-6 sm:px-8 h-12">
                <Link href="/apply">
                  Apply Now
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto text-base px-6 sm:px-8 h-12">
                <Link href="#pricing">
                  View Plans
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Network Restrictions
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Up to $1M Per Incident
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 Telemedicine
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main image */}
              <div className="absolute inset-4 rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="/images/family2.png" 
                  alt="Happy family with healthcare coverage" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating card - doctor */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src="/images/doctorMotherBaby.png" alt="Doctor with patient" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold">24/7 TeleRefuah</div>
                  <div className="text-xs text-muted-foreground">Talk to a doctor anytime</div>
                </div>
              </div>
              {/* Floating card - savings */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4">
                <div className="text-2xl font-bold text-success">60%</div>
                <div className="text-xs text-muted-foreground">Average Savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 max-w-4xl mx-auto lg:max-w-none">
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">60%</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">Avg. Savings</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">5,000+</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">Member Families</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">$50M+</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">Bills Shared</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">98%</div>
            <div className="text-xs sm:text-sm text-muted-foreground mt-1">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
