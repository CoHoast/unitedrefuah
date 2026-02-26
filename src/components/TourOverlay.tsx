"use client";

import { useEffect, useState } from "react";
import { driver, DriveStep } from "driver.js";
import "driver.js/dist/driver.css";
import { Button } from "@/components/ui/button";

interface TourOverlayProps {
  tourType: "marketing" | "member" | "admin" | "apply";
}

const tourConfigs: Record<string, DriveStep[]> = {
  marketing: [
    {
      element: "header",
      popover: {
        title: "Smart Navigation",
        description: "Dropdown menus organized by user type: members, providers, and general visitors. Mobile-optimized hamburger menu.",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: "section:first-of-type",
      popover: {
        title: "Conversion-Focused Hero",
        description: "Bold blue design establishes trust. Clear value proposition with CTAs above the fold. Stats build credibility instantly.",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: "#how-it-works",
      popover: {
        title: "How It Works",
        description: "Simple 4-step explainer removes confusion. Icons and clean layout make it scannable on mobile.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "#pricing",
      popover: {
        title: "Transparent Pricing",
        description: "Side-by-side plan comparison. Popular plan highlighted. PreShare/CoShare amounts clearly shown.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "#faq",
      popover: {
        title: "FAQ Section",
        description: "Accordion-style FAQs address common objections. Reduces support inquiries and builds confidence.",
        side: "top",
        align: "center",
      },
    },
  ],
  member: [
    {
      element: "[data-tour='welcome-card']",
      popover: {
        title: "Personalized Dashboard",
        description: "Member sees their name, ID number, and key stats immediately upon login.",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: "[data-tour='id-card']",
      popover: {
        title: "Digital ID Card",
        description: "Instant access to member ID. Can download PDF or add to Apple Wallet.",
        side: "left",
        align: "center",
      },
    },
    {
      element: "[data-tour='preshare-progress']",
      popover: {
        title: "PreShare Progress",
        description: "Visual tracker shows how much of their annual PreShare has been used vs remaining.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='quick-actions']",
      popover: {
        title: "Quick Actions",
        description: "One-tap access to most common tasks: submit claim, call TeleRefuah, view documents.",
        side: "top",
        align: "center",
      },
    },
  ],
  admin: [
    {
      element: "[data-tour='stats']",
      popover: {
        title: "Dashboard Overview",
        description: "Quick stats on pending applications, total members, and key metrics at a glance.",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: "[data-tour='ai-score']",
      popover: {
        title: "AI Risk Analysis",
        description: "Each application is automatically scored 0-100 based on health history, age, and other factors. Flags potential issues for review.",
        side: "left",
        align: "center",
      },
    },
    {
      element: "[data-tour='actions']",
      popover: {
        title: "Quick Actions",
        description: "One-click approve or deny. Add notes for audit trail. All actions are logged.",
        side: "top",
        align: "center",
      },
    },
  ],
  apply: [
    {
      element: "[data-tour='progress']",
      popover: {
        title: "Progress Tracking",
        description: "Visual progress bar shows completion. Users can see how many steps remain.",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: "[data-tour='dynamic-questions']",
      popover: {
        title: "Smart Branching",
        description: "Questions adapt based on previous answers. Smokers see tobacco-related questions. Families see dependent sections.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='validation']",
      popover: {
        title: "Real-Time Validation",
        description: "Instant feedback on required fields. Prevents submission errors and frustration.",
        side: "left",
        align: "center",
      },
    },
  ],
};

export function TourOverlay({ tourType }: TourOverlayProps) {
  const [isClient, setIsClient] = useState(false);
  const [tourStarted, setTourStarted] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      animate: true,
      smoothScroll: true,
      stagePadding: 10,
      stageRadius: 8,
      popoverClass: "tour-popover",
      steps: tourConfigs[tourType] || [],
      onDestroyed: () => setTourStarted(false),
    });

    driverObj.drive();
    setTourStarted(true);
  };

  if (!isClient) return null;

  return (
    <>
      {/* Tour trigger button - fixed position */}
      {!tourStarted && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button 
            onClick={startTour}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg rounded-full px-6 py-3 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
            Take Guided Tour
          </Button>
        </div>
      )}

      {/* Custom styles for the tour */}
      <style jsx global>{`
        .driver-popover {
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important;
          border: 1px solid rgba(34, 211, 238, 0.3) !important;
          border-radius: 12px !important;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4) !important;
        }
        .driver-popover-title {
          color: #22d3ee !important;
          font-weight: 600 !important;
          font-size: 1.1rem !important;
        }
        .driver-popover-description {
          color: #cbd5e1 !important;
          font-size: 0.95rem !important;
          line-height: 1.5 !important;
        }
        .driver-popover-progress-text {
          color: #64748b !important;
        }
        .driver-popover-prev-btn,
        .driver-popover-next-btn {
          background: #22d3ee !important;
          color: #0f172a !important;
          border: none !important;
          border-radius: 6px !important;
          padding: 8px 16px !important;
          font-weight: 500 !important;
        }
        .driver-popover-prev-btn:hover,
        .driver-popover-next-btn:hover {
          background: #67e8f9 !important;
        }
        .driver-popover-close-btn {
          color: #64748b !important;
        }
        .driver-popover-close-btn:hover {
          color: #cbd5e1 !important;
        }
        .driver-overlay {
          background: rgba(15, 23, 42, 0.8) !important;
        }
      `}</style>
    </>
  );
}
