"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tourStops = [
  {
    id: "marketing",
    title: "Modern Marketing Website",
    description: "A premium, conversion-focused website that builds trust and drives applications.",
    features: [
      "Mobile-first responsive design",
      "Premium SaaS-quality UI (Stripe/Linear level)",
      "Clear value proposition & pricing",
      "Trust indicators & testimonials",
      "SEO-optimized structure",
    ],
    link: "/?proposal=true",
    linkText: "View Marketing Site →",
  },
  {
    id: "application",
    title: "Smart Application System",
    description: "An intelligent multi-step wizard that adapts to applicant answers.",
    features: [
      "9-step guided wizard",
      "Dynamic branching questions",
      "Real-time validation",
      "Progress tracking",
      "AI-powered risk analysis",
    ],
    link: "/apply?proposal=true",
    linkText: "Try Application Wizard →",
  },
  {
    id: "member-portal",
    title: "Member Portal & Mobile App",
    description: "A beautiful PWA that members can install on their phones - no app store needed.",
    features: [
      "Digital ID card (Apple Wallet ready)",
      "PreShare & CoShare tracking",
      "Submit claims in seconds",
      "24/7 TeleRefuah access",
      "Real-time notifications",
    ],
    link: "/member?proposal=true",
    linkText: "Explore Member Portal →",
  },
  {
    id: "admin",
    title: "Admin Dashboard",
    description: "Powerful tools to manage applications, members, and operations.",
    features: [
      "AI-powered application scoring",
      "One-click approve/deny",
      "Member management",
      "Claims oversight",
      "Analytics & reporting",
    ],
    link: "/admin?proposal=true",
    linkText: "View Admin Dashboard →",
  },
];

const optimizations = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "SEO Optimization",
    description: "Schema markup, meta tags, sitemap, fast load times - rank higher on Google",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Lightning Fast",
    description: "Core Web Vitals optimized, edge caching, lazy loading - sub-2s load times",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Mobile-First PWA",
    description: "Works offline, installable on phones, push notifications ready",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Security First",
    description: "HTTPS, encrypted data, secure authentication, audit logging",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.72.608 5.18 1.64" />
      </svg>
    ),
    title: "Accessibility",
    description: "WCAG compliant, screen reader friendly, keyboard navigation",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Analytics Ready",
    description: "Google Analytics, conversion tracking, user behavior insights",
  },
];

const packages = [
  {
    name: "Essentials",
    price: "$35,000 - $45,000",
    description: "Everything you need to launch",
    features: [
      "Marketing website (all sections)",
      "9-step application wizard",
      "AI application analysis",
      "Admin dashboard",
      "Member portal PWA",
      "Basic authentication",
      "Standard security",
      "Deployment & training",
    ],
    timeline: "6-8 weeks",
  },
  {
    name: "Full Production",
    price: "$55,000 - $70,000",
    description: "Enterprise-ready with all integrations",
    features: [
      "Everything in Essentials",
      "AI Chat assistant (real AI)",
      "Email/SMS notifications",
      "Payment integration (Stripe)",
      "Multi-factor authentication",
      "API Configuration Dashboard",
      "5-7 system integrations",
      "90-day support",
    ],
    timeline: "10-12 weeks",
    popular: true,
  },
];

export default function ProposalPage() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = ["welcome", "tour", "optimizations", "pricing", "next-steps"];

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary to-primary/95">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-primary-foreground/20">
        <div 
          className="h-full bg-accent transition-all duration-500"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        />
      </div>

      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {sections.map((section, idx) => (
          <button
            key={section}
            onClick={() => setCurrentSection(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSection 
                ? "bg-accent scale-125" 
                : idx < currentSection 
                ? "bg-accent/50" 
                : "bg-white/30"
            }`}
            title={section}
          />
        ))}
      </div>

      {/* Section: Welcome */}
      {currentSection === 0 && (
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
              <span className="block text-accent mt-2">Complete Digital Transformation</span>
            </h1>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              A modern, member-first platform that will streamline operations, 
              boost conversions, and deliver an exceptional experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={nextSection}
                variant="secondary"
                className="font-semibold px-8"
              >
                Start the Tour
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => setCurrentSection(3)}
              >
                Skip to Pricing
              </Button>
            </div>

            <p className="text-white/50 text-sm mt-12">
              Prepared by CorSynq • February 2026
            </p>
          </div>
        </section>
      )}

      {/* Section: Interactive Tour */}
      {currentSection === 1 && (
        <section className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Interactive Demo
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Explore the Platform
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Click through to experience each component live. These are fully functional demos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {tourStops.map((stop, idx) => (
                <Card 
                  key={stop.id}
                  className="bg-white/10 border-white/20 hover:bg-white/15 hover:border-accent/50 transition-all group backdrop-blur"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{stop.title}</h3>
                        <p className="text-white/60 text-sm">{stop.description}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {stop.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
                          <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link href={stop.link} target="_blank">
                      <Button 
                        variant="secondary"
                        className="w-full group-hover:bg-accent group-hover:text-white transition-colors"
                      >
                        {stop.linkText}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-between mt-12">
              <Button variant="ghost" onClick={prevSection} className="text-white/70 hover:text-white hover:bg-white/10">
                ← Back
              </Button>
              <Button onClick={nextSection} variant="secondary">
                SEO & Optimizations →
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Section: Optimizations */}
      {currentSection === 2 && (
        <section className="min-h-screen py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                Built for Growth
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                SEO & Performance Optimizations
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Every site we build is engineered for speed, search rankings, and conversions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {optimizations.map((opt) => (
                <Card key={opt.title} className="bg-white/10 border-white/20 backdrop-blur">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center mb-4">
                      {opt.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{opt.title}</h3>
                    <p className="text-white/60 text-sm">{opt.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Performance preview */}
            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">&lt;2s</div>
                    <div className="text-white/60">Page Load Time</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">95+</div>
                    <div className="text-white/60">Google PageSpeed Score</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">100%</div>
                    <div className="text-white/60">Mobile Optimized</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between mt-12">
              <Button variant="ghost" onClick={prevSection} className="text-white/70 hover:text-white hover:bg-white/10">
                ← Back
              </Button>
              <Button onClick={nextSection} variant="secondary">
                View Pricing →
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Section: Pricing */}
      {currentSection === 3 && (
        <section className="min-h-screen py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
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

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-foreground">
                          <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${
                        pkg.popular 
                          ? '' 
                          : 'bg-primary/10 text-primary hover:bg-primary/20'
                      }`}
                      variant={pkg.popular ? "default" : "ghost"}
                    >
                      Select {pkg.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white/10 border-white/20 backdrop-blur">
              <CardContent className="p-6 text-center">
                <p className="text-white/80">
                  <strong className="text-white">Ongoing Support:</strong> Optional hosting & maintenance at $500-1,000/month. 
                  Feature updates billed at $150/hour as needed.
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

      {/* Section: Next Steps */}
      {currentSection === 4 && (
        <section className="min-h-screen flex items-center justify-center py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Platform?
            </h2>
            
            <p className="text-xl text-white/80 mb-8">
              Let&apos;s discuss your specific needs and timeline.
            </p>

            <Card className="bg-white/10 border-white/20 backdrop-blur mb-8 text-left">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-white mb-4">Next Steps:</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 font-bold">1</span>
                    <div>
                      <p className="text-white font-medium">Schedule a call</p>
                      <p className="text-white/60 text-sm">Review the demo together and answer any questions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 font-bold">2</span>
                    <div>
                      <p className="text-white font-medium">Discuss integrations</p>
                      <p className="text-white/60 text-sm">Map out your existing systems and API requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 font-bold">3</span>
                    <div>
                      <p className="text-white font-medium">Finalize scope & kick off</p>
                      <p className="text-white/60 text-sm">Lock in timeline and begin development</p>
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
                Schedule a Call
              </Button>
              <a href="tel:4407720700">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                  <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Chris Directly
                </Button>
              </a>
            </div>

            <p className="text-white/50 text-sm">
              CorSynq • AI-Powered Business Solutions
            </p>

            <Button 
              variant="ghost" 
              onClick={() => setCurrentSection(0)} 
              className="mt-8 text-white/50 hover:text-white hover:bg-white/10"
            >
              ← Restart Tour
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
