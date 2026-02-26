"use client";

import { useState, useEffect } from "react";

const notifications = [
  { name: "The Cohen Family", location: "Cleveland, OH", action: "just joined" },
  { name: "David M.", location: "Lakewood, NJ", action: "saved $1,200/month" },
  { name: "The Goldstein Family", location: "Brooklyn, NY", action: "just joined" },
  { name: "Sarah K.", location: "Baltimore, MD", action: "submitted a claim" },
  { name: "The Schwartz Family", location: "Chicago, IL", action: "just joined" },
  { name: "Rabbi Friedman", location: "Los Angeles, CA", action: "saved $850/month" },
];

export function SocialProofToast() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Wait 5 seconds before showing first notification
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Hide after 4 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    // Show next notification after 15 seconds
    const nextTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
      setIsVisible(true);
    }, 15000);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [isVisible, currentIndex]);

  if (!isClient) return null;

  const notification = notifications[currentIndex];

  return (
    <div
      className={`fixed bottom-24 left-4 z-40 max-w-xs transition-all duration-500 hidden sm:block ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-foreground text-sm">{notification.name}</p>
          <p className="text-muted-foreground text-xs">
            {notification.location} • {notification.action}
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 p-1 -mr-1 -mt-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="text-xs text-muted-foreground mt-1 ml-1">
        a few seconds ago
      </div>
    </div>
  );
}
