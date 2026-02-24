"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export function ProposalBanner() {
  const searchParams = useSearchParams();
  const [showBanner, setShowBanner] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show banner if ?proposal=true is in URL
    const isProposal = searchParams.get("proposal") === "true";
    setShowBanner(isProposal && !dismissed);
  }, [searchParams, dismissed]);

  if (!showBanner) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-primary text-white py-3 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="bg-accent/20 text-accent text-xs font-semibold px-2 py-1 rounded">
            DEMO MODE
          </span>
          <span className="text-sm text-white/80 hidden sm:inline">
            You&apos;re viewing a live demo of the proposed United Refuah platform
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/proposal">
            <button className="text-sm bg-white hover:bg-white/90 text-primary font-medium px-4 py-1.5 rounded-lg transition-colors">
              Back to Proposal
            </button>
          </Link>
          <button 
            onClick={() => setDismissed(true)}
            className="text-white/60 hover:text-white p-1"
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
