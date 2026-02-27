"use client";

import { useState, useEffect } from "react";

interface PWAState {
  isInstalled: boolean;
  isStandalone: boolean;
  isIOS: boolean;
  isAndroid: boolean;
  canInstall: boolean;
}

export function usePWA(): PWAState {
  const [state, setState] = useState<PWAState>({
    isInstalled: false,
    isStandalone: false,
    isIOS: false,
    isAndroid: false,
    canInstall: false,
  });

  useEffect(() => {
    // Check if running in standalone mode (installed PWA)
    const isStandalone = 
      window.matchMedia("(display-mode: standalone)").matches ||
      // @ts-expect-error - iOS Safari specific
      window.navigator.standalone === true;

    // Detect platform
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);

    // Check if already installed
    const isInstalled = isStandalone;

    // Can show install prompt (simplified check)
    const canInstall = !isInstalled && (isIOS || isAndroid);

    setState({
      isInstalled,
      isStandalone,
      isIOS,
      isAndroid,
      canInstall,
    });

    // Listen for display mode changes
    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    const handleChange = (e: MediaQueryListEvent) => {
      setState((prev) => ({
        ...prev,
        isStandalone: e.matches,
        isInstalled: e.matches,
      }));
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return state;
}

// Haptic feedback utility (works on supported devices)
export function triggerHaptic(type: "light" | "medium" | "heavy" = "light") {
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    const durations = {
      light: 10,
      medium: 20,
      heavy: 30,
    };
    navigator.vibrate(durations[type]);
  }
}
