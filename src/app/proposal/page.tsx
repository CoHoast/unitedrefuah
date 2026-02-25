"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Screenshot data with annotations
const sections = [
  {
    id: "welcome",
    type: "intro",
  },
  {
    id: "marketing",
    type: "showcase",
    title: "Modern Marketing Website",
    subtitle: "Premium design that converts visitors to members",
    description: "A beautiful, mobile-first website that builds trust and drives applications with clear messaging and strong calls-to-action.",
    screenshot: "/proposal-screenshots/marketing-hero.jpg",
    features: [
      { label: "Conversion-Focused Hero", description: "Bold headline, clear value proposition, and prominent CTAs above the fold" },
      { label: "Trust Indicators", description: "Member count, satisfaction rate, and community stats build instant credibility" },
      { label: "Mobile-First Design", description: "Looks stunning on any device - phones, tablets, and desktops" },
      { label: "SEO Optimized", description: "Built for search engines with proper structure, meta tags, and fast load times" },
    ],
  },
  {
    id: "calculator",
    type: "showcase",
    title: "Interactive Savings Calculator",
    subtitle: "Let visitors see their potential savings instantly",
    description: "An engaging tool that lets prospects compare their current insurance costs and see exactly how much they could save with United Refuah.",
    screenshot: "/proposal-screenshots/savings-calculator.jpg",
    features: [
      { label: "Household Selection", description: "Individual, couple, or family options with instant pricing" },
      { label: "Real-Time Calculations", description: "Monthly and yearly savings displayed immediately" },
      { label: "Strong CTA", description: "Drives visitors to apply while they're excited about savings" },
    ],
  },
  {
    id: "member-portal",
    type: "showcase",
    title: "Member Dashboard",
    subtitle: "Everything members need at their fingertips",
    description: "A clean, intuitive dashboard where members can track their PreShare, view their ID card, and manage their account.",
    screenshot: "/images/member-portal-dashboard.jpg",
    features: [
      { label: "Digital ID Card", description: "Instant access to member ID - download PDF or add to Apple Wallet" },
      { label: "PreShare Tracking", description: "Visual progress bar shows remaining annual PreShare amount" },
      { label: "Quick Actions", description: "One-tap access to submit claims, call TeleRefuah, view documents" },
      { label: "Recent Activity", description: "Track claims, payments, and notifications in one place" },
    ],
  },
  {
    id: "mobile-app",
    type: "showcase",
    title: "Mobile App Experience",
    subtitle: "Healthcare management in their pocket",
    description: "A Progressive Web App (PWA) that members can install on their phones - no app store needed. Works offline and sends push notifications.",
    screenshot: "/images/mobile-dashboard.jpg",
    screenshotAlt: "/images/mobile-profile.jpg",
    isMobile: true,
    features: [
      { label: "Install on Any Phone", description: "Works on iPhone and Android without app store approval" },
      { label: "Native App Feel", description: "Smooth animations, offline support, push notifications" },
      { label: "24/7 TeleRefuah Access", description: "One tap to connect with a doctor anytime" },
      { label: "Submit Claims Anywhere", description: "Take photos of bills and submit from your phone" },
    ],
  },
  {
    id: "admin",
    type: "showcase",
    title: "Admin Dashboard",
    subtitle: "Powerful tools to manage operations",
    description: "A comprehensive admin panel for reviewing applications, managing members, and overseeing claims.",
    screenshot: "/proposal-screenshots/admin-dashboard.jpg",
    features: [
      { label: "Application Queue", description: "Review, approve, or deny applications with one click" },
      { label: "AI Risk Scoring", description: "Automatic analysis flags potential issues for review" },
      { label: "Member Management", description: "Search, view, and manage all member accounts" },
      { label: "Analytics & Reports", description: "Track key metrics and generate reports" },
    ],
  },
  {
    id: "pricing",
    type: "pricing",
  },
  {
    id: "next-steps",
    type: "cta",
  },
];

const packages = [
  {
    name: "Essentials",
    price: "$35,000 - $45,000",
    description: "Everything you need to launch",
    features: [
      "Marketing website (all pages)",
      "Member application wizard",
      "AI application analysis",
      "Admin dashboard",
      "Member portal & mobile app",
      "Basic authentication",
      "Deployment & training",
    ],
    timeline: "6-8 weeks",
  },
  {
    name: "Full Production",
    price: "$55,000 - $70,000",
    description: "Enterprise-ready with integrations",
    features: [
      "Everything in Essentials",
      "AI Chat assistant",
      "Email/SMS notifications",
      "Payment integration (Stripe)",
      "Multi-factor authentication",
      "API integrations (5-7 systems)",
      "90-day support",
    ],
    timeline: "10-12 weeks",
    popular: true,
  },
];

export default function ProposalPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSection = sections[currentIndex];
  const totalSections = sections.length;

  const nextSection = () => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSection = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary to-primary/95">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/20">
        <div 
          className="h-full bg-accent transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / totalSections) * 100}%` }}
        />
      </div>

      {/* Navigation */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <span className="text-white/60 text-sm">
          {currentIndex + 1} / {totalSections}
        </span>
      </div>

      {/* Welcome Section */}
      {currentSection.type === "intro" && (
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/images/UnitedRefuahLogoHands-2.svg"
                alt="United Refuah"
                width={100}
                height={100}
                className="mx-auto mb-6 brightness-0 invert"
              />
              <Badge className="bg-white/20 text-white border-white/30 mb-6">
                Digital Platform Proposal
              </Badge>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              United Refuah HealthShare
              <span className="block text-accent mt-2">Digital Transformation</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              A preview of what your new digital platform could look like. 
              Modern design, powerful features, seamless member experience.
            </p>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 mb-8 max-w-md mx-auto">
              <h3 className="text-white font-semibold mb-3">What You&apos;ll See:</h3>
              <ul className="text-left text-white/80 space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Marketing Website Design
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Member Portal Preview
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Mobile App Concept
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Admin Dashboard Overview
                </li>
              </ul>
            </div>

            <Button 
              size="lg" 
              onClick={nextSection}
              variant="secondary"
              className="font-semibold px-8"
            >
              Start Preview
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>

            <p className="text-white/40 text-sm mt-12">
              Prepared by CorSynq • February 2026
            </p>
          </div>
        </section>
      )}

      {/* Screenshot Showcase Sections */}
      {currentSection.type === "showcase" && (
        <section className="min-h-screen py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                {currentIndex} of {totalSections - 2}
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
                {currentSection.title}
              </h2>
              <p className="text-accent text-lg sm:text-xl mb-2">{currentSection.subtitle}</p>
              <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
                {currentSection.description}
              </p>
            </div>

            {/* Screenshot with annotations */}
            <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start">
              {/* Screenshot */}
              <div className={`${currentSection.isMobile ? 'lg:col-span-2' : 'lg:col-span-3'} order-2 lg:order-1`}>
                <div className={`relative ${currentSection.isMobile ? 'flex justify-center gap-4' : ''}`}>
                  {currentSection.isMobile ? (
                    <>
                      {/* Phone mockup 1 */}
                      <div className="relative w-[160px] sm:w-[200px]">
                        <div className="bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-xl z-10" />
                          <div className="rounded-[1.5rem] overflow-hidden bg-white">
                            <Image
                              src={currentSection.screenshot || ""}
                              alt="Mobile Dashboard"
                              width={400}
                              height={700}
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                      {/* Phone mockup 2 */}
                      <div className="relative w-[140px] sm:w-[180px] mt-8 hidden sm:block">
                        <div className="bg-gray-800 rounded-[1.75rem] p-2 shadow-xl">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-gray-800 rounded-b-lg z-10" />
                          <div className="rounded-[1.25rem] overflow-hidden bg-white">
                            <Image
                              src={currentSection.screenshotAlt || ""}
                              alt="Mobile Profile"
                              width={400}
                              height={700}
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                      <div className="bg-gray-100 px-4 py-2 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-400 text-center">
                          unitedrefuahhs.org
                        </div>
                      </div>
                      {currentSection.screenshot ? (
                        <Image
                          src={currentSection.screenshot}
                          alt={currentSection.title || "Screenshot"}
                          width={1200}
                          height={800}
                          className="w-full h-auto"
                        />
                      ) : (
                        <div className="aspect-video bg-gray-200 flex items-center justify-center text-gray-400">
                          Screenshot placeholder
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className={`${currentSection.isMobile ? 'lg:col-span-3' : 'lg:col-span-2'} order-1 lg:order-2`}>
                <h3 className="text-white font-semibold mb-4 text-lg">Key Features:</h3>
                <div className="space-y-4">
                  {currentSection.features?.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="bg-white/10 backdrop-blur rounded-xl p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{feature.label}</h4>
                          <p className="text-white/60 text-sm mt-1">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8 sm:mt-12">
              <Button 
                variant="ghost" 
                onClick={prevSection} 
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                ← Back
              </Button>
              <Button onClick={nextSection} variant="secondary">
                {currentIndex < sections.length - 3 ? "Next Feature →" : "View Pricing →"}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {currentSection.type === "pricing" && (
        <section className="min-h-screen py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Investment
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Choose Your Package
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Two options designed to fit your timeline and integration needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.name}
                  className={`relative bg-white border-0 ${
                    pkg.popular ? 'ring-4 ring-accent shadow-2xl' : 'shadow-xl'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-accent text-white border-0">Recommended</Badge>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-4">{pkg.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    </div>

                    <div className="text-sm text-muted-foreground mb-6">
                      Timeline: <span className="text-foreground font-medium">{pkg.timeline}</span>
                    </div>

                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-foreground">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="p-6 text-center">
                <p className="text-white/80">
                  <strong className="text-white">Ongoing Support:</strong> Optional hosting & maintenance at $500-1,000/month.
                </p>
              </CardContent>
            </Card>

            <div className="flex justify-between mt-12">
              <Button variant="ghost" onClick={prevSection} className="text-white/70 hover:text-white hover:bg-white/10">
                ← Back
              </Button>
              <Button onClick={nextSection} variant="secondary">
                Next Steps →
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {currentSection.type === "cta" && (
        <section className="min-h-screen flex items-center justify-center py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to See the Full Demo?
            </h2>
            
            <p className="text-xl text-white/80 mb-8">
              Schedule a call to walk through the complete platform 
              and discuss your specific requirements.
            </p>

            <Card className="bg-white/10 border-white/20 backdrop-blur mb-8 text-left">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-white mb-4">What&apos;s Next:</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 font-bold">1</span>
                    <div>
                      <p className="text-white font-medium">Live Demo Call</p>
                      <p className="text-white/60 text-sm">See the full working platform with all features</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 font-bold">2</span>
                    <div>
                      <p className="text-white font-medium">Requirements Discussion</p>
                      <p className="text-white/60 text-sm">Map out your existing systems and integrations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 font-bold">3</span>
                    <div>
                      <p className="text-white font-medium">Custom Proposal</p>
                      <p className="text-white/60 text-sm">Tailored scope and timeline based on your needs</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="font-semibold px-8">
                <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Schedule Demo Call
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email Us
              </Button>
            </div>

            <p className="text-white/50 text-sm">
              CorSynq • AI-Powered Business Solutions
            </p>

            <Button 
              variant="ghost" 
              onClick={() => setCurrentIndex(0)} 
              className="mt-8 text-white/50 hover:text-white hover:bg-white/10"
            >
              ← Restart Preview
            </Button>
          </div>
        </section>
      )}

      {/* Keyboard navigation hint */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-sm hidden lg:block">
        Use arrow keys or click to navigate
      </div>
    </div>
  );
}
