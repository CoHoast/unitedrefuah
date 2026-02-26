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

export default function ClaimStatusPage() {
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Claim Status Request
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/80">
                Submit a request to check the status of your sharing request. 
                A representative will reach out to provide an update or send you an Explanation of Sharing.
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
                      and reach out to you within 2-3 business days.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild>
                        <Link href="/member">Go to Member Portal</Link>
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
                    <CardTitle>Request Claim Status</CardTitle>
                    <CardDescription>
                      Please complete the form below in its entirety and a representative will reach out to you 
                      and provide an update or send you an Explanation of Sharing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required placeholder="Enter your last name" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="memberId">Member ID *</Label>
                        <Input id="memberId" required placeholder="e.g., UR-2024-12345" />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" required placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" type="tel" required placeholder="(440) 555-1234" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="claimNumber">Claim/Sharing Request Number (if known)</Label>
                        <Input id="claimNumber" placeholder="e.g., CLM-2024-00123" />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="serviceDate">Date of Service *</Label>
                          <Input id="serviceDate" type="date" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="providerName">Provider/Facility Name *</Label>
                          <Input id="providerName" required placeholder="e.g., Cleveland Clinic" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="serviceDescription">Description of Service *</Label>
                        <Textarea 
                          id="serviceDescription" 
                          required 
                          placeholder="Please describe the medical service or procedure"
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea 
                          id="additionalInfo" 
                          placeholder="Any other details that may help us locate your claim"
                          rows={3}
                        />
                      </div>

                      <div className="pt-4">
                        <Button type="submit" size="lg" className="w-full">
                          Submit Status Request
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Alternative Options */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Other Ways to Check Your Claim</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Member Portal</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Log in to view your claims and sharing requests in real-time.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/member/claims">View My Claims</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Speak with a representative directly about your claim.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="tel:4407720700">(440) 772-0700</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Send us an email with your claim details.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="mailto:claims@unitedrefuahhs.org">Send Email</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
