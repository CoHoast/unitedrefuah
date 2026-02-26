"use client";

import { HeaderNew } from "@/components/HeaderNew";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Link from "next/link";

const benefits = [
  {
    title: "Direct Access to Members",
    description: "Connect with United Refuah members seeking quality healthcare providers in their area.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Provider Directory Listing",
    description: "Be featured in our provider directory, making it easy for members to find you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Streamlined Billing",
    description: "Simplified billing process with dedicated support for preferred providers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description: "Priority access to our provider services team for questions and assistance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

const specialties = [
  "Primary Care",
  "Family Medicine",
  "Internal Medicine",
  "Pediatrics",
  "OB/GYN",
  "Cardiology",
  "Dermatology",
  "Orthopedics",
  "Ophthalmology",
  "Psychiatry/Mental Health",
  "Emergency Medicine",
  "Urgent Care",
  "Surgery",
  "Imaging/Radiology",
  "Laboratory Services",
  "Physical Therapy",
  "Other",
];

export default function BecomePreferredPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeaderNew />
      <main className="pt-16 sm:pt-[104px]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-white/70 mb-4">
                <Link href="/providers" className="hover:text-white">Provider Services</Link>
                <span>/</span>
                <span>Become a Preferred Provider</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Become a Preferred Provider
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/80">
                Join our network and connect with United Refuah members seeking quality healthcare services.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Join Our Network?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                As a preferred provider, you&apos;ll enjoy these benefits while serving our growing membership.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit) => (
                <Card key={benefit.title}>
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              {submitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Application Submitted!</h2>
                    <p className="text-green-700 mb-6">
                      Thank you for your interest in becoming a preferred provider. Our team will review 
                      your application and contact you within 5-7 business days.
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/providers">Return to Provider Services</Link>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Provider Application</CardTitle>
                    <CardDescription>
                      Complete the form below to apply to become a preferred provider with United Refuah HealthShare.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Practice Information */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Practice Information</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="practiceName">Practice/Facility Name *</Label>
                            <Input id="practiceName" required placeholder="Enter practice name" />
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="npi">NPI Number *</Label>
                              <Input id="npi" required placeholder="10-digit NPI" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="taxId">Tax ID (EIN) *</Label>
                              <Input id="taxId" required placeholder="XX-XXXXXXX" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="specialty">Primary Specialty *</Label>
                            <select 
                              id="specialty" 
                              required 
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            >
                              <option value="">Select specialty</option>
                              {specialties.map((spec) => (
                                <option key={spec} value={spec}>{spec}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="contactName">Contact Name *</Label>
                              <Input id="contactName" required placeholder="Primary contact" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="contactTitle">Title/Role *</Label>
                              <Input id="contactTitle" required placeholder="e.g., Office Manager" />
                            </div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="email">Email *</Label>
                              <Input id="email" type="email" required placeholder="contact@practice.com" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone *</Label>
                              <Input id="phone" type="tel" required placeholder="(440) 555-1234" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Address */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Practice Address</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="address">Street Address *</Label>
                            <Input id="address" required placeholder="123 Main Street" />
                          </div>
                          <div className="grid sm:grid-cols-3 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="city">City *</Label>
                              <Input id="city" required placeholder="Cleveland" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="state">State *</Label>
                              <Input id="state" required placeholder="OH" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="zip">ZIP Code *</Label>
                              <Input id="zip" required placeholder="44118" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea 
                          id="additionalInfo" 
                          placeholder="Any additional information about your practice (services offered, languages spoken, special accommodations, etc.)"
                          rows={4}
                        />
                      </div>

                      {/* Agreement */}
                      <div className="flex items-start space-x-3">
                        <Checkbox id="agreement" required />
                        <Label htmlFor="agreement" className="text-sm text-gray-700 leading-relaxed">
                          I understand that United Refuah HealthShare is not insurance and that membership 
                          in the preferred provider network does not guarantee payment. Payment is subject 
                          to member eligibility and sharing guidelines.
                        </Label>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Questions CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our provider services team is here to answer any questions about joining our network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:4407720700">(440) 772-0700</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                <Link href="/providers/contact">Contact Provider Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
