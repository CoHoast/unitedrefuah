import { HeaderNew } from "@/components/HeaderNew";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const guidelines = [
  {
    title: "Eligible Medical Expenses",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      "Doctor visits (primary care, specialists)",
      "Hospital stays and surgical procedures",
      "Emergency room visits",
      "Diagnostic tests (lab work, X-rays, MRIs)",
      "Prescription medications",
      "Mental health services (12 visits per year)",
      "Maternity care (after waiting period)",
      "Physical therapy and rehabilitation",
    ],
  },
  {
    title: "Non-Eligible Expenses",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    items: [
      "Pre-existing conditions (first 36 months)",
      "Cosmetic or elective procedures",
      "Experimental treatments",
      "Weight loss surgery",
      "Dental and vision (routine care)",
      "Long-term care or nursing home",
      "Workers' compensation injuries",
      "Self-inflicted injuries",
    ],
  },
];

const sharingProcess = [
  {
    step: "1",
    title: "Meet Your PreShare",
    description: "Each year, you're responsible for your Annual PreShare Amount before sharing begins. This is similar to a deductible.",
  },
  {
    step: "2",
    title: "Submit Your Bills",
    description: "After meeting your PreShare, submit eligible medical bills through your Member Portal or by mail/fax.",
  },
  {
    step: "3",
    title: "Community Sharing",
    description: "United Refuah shares 80% of eligible expenses. You pay a 20% CoShare up to your annual maximum.",
  },
  {
    step: "4",
    title: "100% Sharing",
    description: "Once you reach your CoShare Maximum, eligible expenses are shared at 100% up to $1,000,000 per incident.",
  },
];

const preShareAmounts = [
  { plan: "Individual", monthly: "$175", preShare: "$1,500", coShareMax: "$3,000" },
  { plan: "Couple", monthly: "$395", preShare: "$3,000", coShareMax: "$6,000" },
  { plan: "Family", monthly: "$495", preShare: "$4,500", coShareMax: "$9,000" },
];

export default function SharingGuidelinesPage() {
  return (
    <>
      <HeaderNew />
      <main className="pt-16 sm:pt-[104px]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Sharing Guidelines
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/80">
                Understand how medical expense sharing works at United Refuah HealthShare. 
                Our guidelines ensure transparent, fair sharing among all members.
              </p>
            </div>
          </div>
        </section>

        {/* How Sharing Works */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How Sharing Works</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A simple, transparent process for sharing medical expenses with your community.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sharingProcess.map((item) => (
                <Card key={item.step} className="relative overflow-hidden">
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

        {/* PreShare Amounts Table */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Annual PreShare & CoShare Amounts</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Your responsibility before and during the sharing process.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-primary text-white">
                          <th className="px-6 py-4 text-left font-semibold">Plan Type</th>
                          <th className="px-6 py-4 text-left font-semibold">Monthly Share</th>
                          <th className="px-6 py-4 text-left font-semibold">Annual PreShare</th>
                          <th className="px-6 py-4 text-left font-semibold">CoShare Maximum</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {preShareAmounts.map((row) => (
                          <tr key={row.plan} className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{row.plan}</td>
                            <td className="px-6 py-4 text-gray-600">{row.monthly}</td>
                            <td className="px-6 py-4 text-gray-600">{row.preShare}</td>
                            <td className="px-6 py-4 text-gray-600">{row.coShareMax}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              <p className="mt-4 text-sm text-muted-foreground text-center">
                After reaching your CoShare Maximum, eligible expenses are shared at 100% up to $1,000,000 per incident.
              </p>
            </div>
          </div>
        </section>

        {/* Eligible / Non-Eligible */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {guidelines.map((section, idx) => (
                <Card key={section.title} className={idx === 0 ? "border-green-200" : "border-red-200"}>
                  <CardContent className="p-6">
                    <div className={`flex items-center gap-3 mb-6 ${idx === 0 ? "text-green-600" : "text-red-600"}`}>
                      {section.icon}
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg 
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${idx === 0 ? "text-green-500" : "text-red-500"}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            {idx === 0 ? (
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            ) : (
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            )}
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Important Information</h2>
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        <strong>United Refuah HealthShare is not insurance.</strong> Members share medical expenses according to these sharing guidelines. 
                        Sharing is not guaranteed and is subject to the guidelines and membership agreement.
                      </p>
                      <p>
                        <strong>Pre-existing conditions</strong> are subject to a 36-month waiting period. 
                        Conditions that existed or showed symptoms within 36 months prior to enrollment may not be eligible for sharing during the first 36 months of membership.
                      </p>
                      <p>
                        <strong>Open network:</strong> You can see any doctor or visit any hospital you choose. 
                        There are no network restrictions — you have the freedom to see the providers you trust.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Have Questions About Our Guidelines?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our team is here to help you understand how sharing works and answer any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                <Link href="/faqs">View FAQs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
