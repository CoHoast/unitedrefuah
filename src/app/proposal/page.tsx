"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const previews = [
  {
    id: "marketing",
    title: "Marketing Website",
    description: "Premium, conversion-focused design that builds trust and drives applications",
    href: "/preview/marketing",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    features: ["Modern hero section", "Pricing comparison", "Testimonials", "FAQ section"],
  },
  {
    id: "dashboard",
    title: "Member Dashboard",
    description: "Intuitive portal where members manage their account and track claims",
    href: "/preview/dashboard",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    features: ["Digital ID card", "PreShare tracking", "Quick actions", "Activity feed"],
  },
  {
    id: "admin",
    title: "Admin Panel",
    description: "Powerful tools for managing applications, members, and operations",
    href: "/preview/admin",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    features: ["AI risk scoring", "Application queue", "One-click actions", "Activity logs"],
  },
  {
    id: "mobile",
    title: "Mobile App",
    description: "Progressive Web App that works on any smartphone - no app store needed",
    href: "/preview/mobile",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    features: ["Native app feel", "Push notifications", "Offline support", "One-tap TeleRefuah"],
  },
  {
    id: "dokit",
    title: "AI Document Intake",
    description: "Automated document processing and MCO submission powered by DOKit",
    href: "/preview/dokit",
    badge: "Add-On",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    features: ["Auto FTP retrieval", "AI data extraction", "MCO integration", "95%+ accuracy"],
  },
];

const packages = [
  {
    name: "Essentials",
    price: "$35,000 - $45,000",
    description: "Everything you need to launch",
    features: [
      "Marketing website",
      "Member application",
      "AI analysis",
      "Admin dashboard",
      "Member portal",
      "Basic auth",
      "Deployment",
    ],
    timeline: "6-8 weeks",
  },
  {
    name: "Full Production",
    price: "$55,000 - $70,000",
    description: "Enterprise-ready",
    features: [
      "Everything in Essentials",
      "AI Chat assistant",
      "Email/SMS alerts",
      "Stripe payments",
      "MFA",
      "API integrations",
      "90-day support",
    ],
    timeline: "10-12 weeks",
    popular: true,
  },
];

export default function ProposalPage() {
  const [activeSection, setActiveSection] = useState<"previews" | "pricing">("previews");

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary to-primary/95">
      {/* Header */}
      <header className="py-8 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/UnitedRefuahLogoHands-2.svg"
              alt="United Refuah"
              width={50}
              height={50}
              className="brightness-0 invert"
            />
            <div>
              <p className="font-bold text-white">United Refuah</p>
              <p className="text-xs text-white/60">Digital Platform Proposal</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant={activeSection === "previews" ? "secondary" : "ghost"}
              onClick={() => setActiveSection("previews")}
              className={activeSection === "previews" ? "" : "text-white/70 hover:text-white hover:bg-white/10"}
            >
              Previews
            </Button>
            <Button
              variant={activeSection === "pricing" ? "secondary" : "ghost"}
              onClick={() => setActiveSection("pricing")}
              className={activeSection === "pricing" ? "" : "text-white/70 hover:text-white hover:bg-white/10"}
            >
              Pricing
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            Interactive Proposal
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your New Digital Platform
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Click through to preview each component. These are static design previews 
            showcasing the look and feel of your new system.
          </p>
        </div>
      </section>

      {/* Previews Section */}
      {activeSection === "previews" && (
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {previews.map((preview) => (
                <Link key={preview.id} href={preview.href}>
                  <Card className={`h-full bg-white/10 border-white/20 hover:bg-white/20 hover:border-accent/50 transition-all cursor-pointer group backdrop-blur ${preview.id === 'dokit' ? 'md:col-span-2' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:text-white transition-colors ${
                          preview.id === 'dokit' 
                            ? 'bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500' 
                            : 'bg-accent/20 text-accent group-hover:bg-accent'
                        }`}>
                          {preview.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-semibold text-white">{preview.title}</h3>
                            {preview.badge && (
                              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
                                {preview.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-white/60 text-sm">{preview.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {preview.features.map((feature) => (
                          <span 
                            key={feature}
                            className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className={`mt-4 flex items-center group-hover:text-white transition-colors ${
                        preview.id === 'dokit' ? 'text-emerald-400' : 'text-accent'
                      }`}>
                        <span className="text-sm font-medium">View Preview</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Included Features */}
            <div className="mt-12 bg-white/10 backdrop-blur rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-white mb-6 text-center">Also Included</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: "🔍", title: "SEO Optimization", desc: "Rank higher on Google" },
                  { icon: "⚡", title: "Fast Load Times", desc: "Under 2 second loads" },
                  { icon: "📱", title: "Mobile-First", desc: "Works on all devices" },
                  { icon: "🔒", title: "Secure", desc: "HTTPS + encryption" },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <span className="text-3xl mb-2 block">{item.icon}</span>
                    <h3 className="font-medium text-white">{item.title}</h3>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {activeSection === "pricing" && (
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
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
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    </div>

                    <p className="text-xs text-muted-foreground mb-4">
                      Timeline: <span className="font-medium text-foreground">{pkg.timeline}</span>
                    </p>

                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
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
                  <strong className="text-white">Ongoing:</strong> Hosting & maintenance $500-1,000/month
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Move Forward?</h2>
          <p className="text-white/70 mb-8">
            Schedule a call to discuss your specific requirements and see a live demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="font-semibold">
              <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now
            </Button>
          </div>
          <p className="text-white/40 text-sm mt-8">
            Prepared by CorSynq • February 2026
          </p>
        </div>
      </section>
    </div>
  );
}
