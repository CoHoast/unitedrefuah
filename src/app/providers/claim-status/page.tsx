"use client";

import { HeaderNew } from "@/components/HeaderNew";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Link from "next/link";

export default function ProviderClaimStatusPage() {
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
                <span>Claim Status</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Provider Claim Status
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/80">
                Check the status of submitted claims and request Explanation of Sharing documents.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
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
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Request Submitted!</h2>
                    <p className="text-green-700 mb-6">
                      Thank you for your claim status request. A representative will review your information 
                      and respond within 2-3 business days with an update or Explanation of Sharing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild>
                        <Link href="/providers">Provider Services</Link>
                      </Button>
                      <Button variant="outline" onClick={() => setSubmitted(false)}>
                        Submit Another Request
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Claim Status Request</CardTitle>
                    <CardDescription>
                      Complete the form below to check the status of a submitted claim. 
                      Please allow at least 30 days from submission before requesting status.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Provider Information */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Provider Information</h3>
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
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="contactName">Contact Name *</Label>
                              <Input id="contactName" required placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="contactPhone">Phone *</Label>
                              <Input id="contactPhone" type="tel" required placeholder="(440) 555-1234" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contactEmail">Email *</Label>
                            <Input id="contactEmail" type="email" required placeholder="billing@practice.com" />
                          </div>
                        </div>
                      </div>

                      {/* Claim Information */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Claim Information</h3>
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="memberName">Member Name *</Label>
                              <Input id="memberName" required placeholder="Patient name" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="memberId">Member ID (if known)</Label>
                              <Input id="memberId" placeholder="e.g., UR-2024-12345" />
                            </div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="serviceDate">Date of Service *</Label>
                              <Input id="serviceDate" type="date" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="billedAmount">Billed Amount *</Label>
                              <Input id="billedAmount" required placeholder="$0.00" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="claimNumber">Claim/Reference Number (if known)</Label>
                            <Input id="claimNumber" placeholder="Reference number from submission" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="submissionDate">Date Bill Was Submitted *</Label>
                            <Input id="submissionDate" type="date" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="serviceDescription">Description of Services *</Label>
                            <Textarea 
                              id="serviceDescription" 
                              required 
                              placeholder="Please describe the services provided"
                              rows={3}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="additionalInfo">Additional Information</Label>
                            <Textarea 
                              id="additionalInfo" 
                              placeholder="Any other details that may help locate the claim"
                              rows={3}
                            />
                          </div>
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Submit Status Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Processing Times */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Processing Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Processing Time</h3>
                        <p className="text-muted-foreground text-sm">
                          Claims are typically processed within 30-45 days from receipt of complete documentation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Explanation of Sharing</h3>
                        <p className="text-muted-foreground text-sm">
                          Once processed, you will receive an Explanation of Sharing detailing the claim decision.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              For urgent claim inquiries, please contact our provider services team directly.
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
