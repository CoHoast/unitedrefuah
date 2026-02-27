"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { usePWA } from "@/hooks/usePWA";

export function PWAInstallPrompt() {
  const { isIOS, isStandalone, canInstall } = usePWA();
  const [showPrompt, setShowPrompt] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed before
    const hasDismissed = localStorage.getItem("pwa-prompt-dismissed");
    if (hasDismissed) {
      setDismissed(true);
      return;
    }

    // Show prompt after a short delay if conditions are met
    if (canInstall && !isStandalone) {
      const timer = setTimeout(() => {
        setShowPrompt(true);
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [canInstall, isStandalone]);

  const handleDismiss = () => {
    setShowPrompt(false);
    setDismissed(true);
    localStorage.setItem("pwa-prompt-dismissed", "true");
  };

  if (!showPrompt || dismissed || isStandalone) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-24 z-50 mx-auto max-w-sm px-4 animate-in slide-in-from-bottom duration-300">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">Install United Refuah</h3>
            <p className="text-sm text-gray-500 mt-1">
              Add to your home screen for quick access to your membership.
            </p>
            {isIOS ? (
              <div className="mt-3 text-xs text-gray-600 bg-gray-50 rounded-lg p-2">
                <p className="flex items-center gap-1">
                  Tap 
                  <svg className="w-4 h-4 inline text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                  then &quot;Add to Home Screen&quot;
                </p>
              </div>
            ) : (
              <Button size="sm" className="mt-3" onClick={handleDismiss}>
                Got it
              </Button>
            )}
          </div>
          <button 
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
