"use client";

import { HeaderNew } from "@/components/HeaderNew";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const billingSteps = [
  {
    step: "1",
    title: "Verify Member Eligibility",
    description: "Confirm the patient is an active United Refuah member by checking their member ID card or calling our verification line.",
  },
  {
    step: "2",
    title: "Provide Services",
    description: "Deliver healthcare services as usual. United Refuah has an open network—members can see any provider.",
  },
  {
    step: "3",
    title: "Submit Your Bill",
    description: "Send itemized bills with required information via fax, mail, or electronic submission.",
  },
  {
    step: "4",
    title: "Receive Payment",
    description: "Once processed, eligible amounts are shared directly to your practice within 30-45 days.",
  },
];

const requiredInfo = [
  "Patient name and member ID",
  "Date(s) of service",
  "Itemized charges with CPT/HCPCS codes",
  "Diagnosis codes (ICD-10)",
  "Provider NPI number",
  "Provider tax ID (EIN)",
  "Billing address and contact information",
  "Medical records (if requested)",
];

export default function ProviderBillingPage() {
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
                <span>Billing & Payment</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Billing & Payment
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/80">
                Submit bills and receive payment for services provided to United Refuah members.
              </p>
            </div>
          </div>
        </section>

        {/* Billing Process */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Billing Process</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to submit bills for services provided to our members.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {billingSteps.map((item) => (
                <Card key={item.step} className="relative">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Required Information */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Required Information</h2>
                <p className="text-muted-foreground mb-6">
                  To ensure timely processing, please include the following information with each bill submission:
                </p>
                <ul className="space-y-3">
                  {requiredInfo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Submission Methods</CardTitle>
                    <CardDescription>Choose your preferred method to submit bills</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Fax (Preferred)</h3>
                        <p className="text-muted-foreground text-sm">(440) 772-0330</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <a href="mailto:billing@unitedrefuahhs.org" className="text-primary hover:underline text-sm">billing@unitedrefuahhs.org</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Mail</h3>
                        <p className="text-muted-foreground text-sm">
                          United Refuah HealthShare<br />
                          Attn: Provider Services<br />
                          PO Box 18523<br />
                          Cleveland Heights, OH 44118
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <div className="space-y-4 text-gray-700">
                      <h3 className="font-semibold text-amber-800">Important Billing Notes</h3>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>United Refuah HealthShare is not insurance. We facilitate the sharing of medical expenses among members.</li>
                        <li>Payment is not guaranteed and is subject to member eligibility and sharing guidelines.</li>
                        <li>Please collect the member&apos;s PreShare or CoShare amount at time of service when applicable.</li>
                        <li>Processing time is typically 30-45 days from receipt of complete documentation.</li>
                        <li>For claim status inquiries, please wait at least 30 days before contacting us.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Questions About Billing?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our provider services team is here to help with any billing questions or concerns.
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
