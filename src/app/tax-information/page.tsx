import { HeaderNew } from "@/components/HeaderNew";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stateRequirements = [
  {
    state: "Massachusetts",
    description: "Members must complete Form HC when filing state taxes.",
    link: "https://www.mass.gov/forms/schedule-hc-health-care-information",
    linkText: "Download Form HC",
  },
  {
    state: "New Jersey",
    description: "Members must visit the NJ Health Insurance Mandate Coverage Exemption website.",
    link: "https://www.nj.gov/treasury/taxation/healthcare-mandate.shtml",
    linkText: "NJ Exemption Portal",
  },
  {
    state: "Washington, D.C.",
    description: "Members must file income tax Form D-40 along with Schedule HSR (DC Health Care Shared Responsibility form).",
    link: "https://otr.cfo.dc.gov/",
    linkText: "DC Tax Forms",
  },
  {
    state: "California",
    description: "Members may need to apply for an exemption. Consult with your tax professional.",
    link: "https://www.ftb.ca.gov/",
    linkText: "CA Franchise Tax Board",
  },
  {
    state: "Rhode Island",
    description: "Members may need to claim an exemption when filing state taxes.",
    link: "https://tax.ri.gov/",
    linkText: "RI Tax Division",
  },
];

export default function TaxInformationPage() {
  return (
    <>
      <HeaderNew />
      <main className="pt-16 sm:pt-[104px]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Tax Information
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/80">
                Important tax information for United Refuah HealthShare members regarding federal and state requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Federal Requirements */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <CardTitle className="text-green-800">No Federal Health Insurance Mandate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800">
                    Starting with tax year 2019, there is no longer a federal mandate to have health insurance. 
                    Since the individual mandate is no longer required and exemptions are not relevant, 
                    there is no additional federal form to complete as in previous years.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* State Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">State Income Tax Requirements</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                For members in certain states, there are additional requirements when filing state taxes. 
                Please see the information below if you live in one of these states.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid gap-6">
              {stateRequirements.map((state) => (
                <Card key={state.state}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {state.state}
                        </h3>
                        <p className="mt-2 text-muted-foreground">{state.description}</p>
                      </div>
                      <Button variant="outline" asChild className="flex-shrink-0">
                        <a href={state.link} target="_blank" rel="noopener noreferrer">
                          {state.linkText}
                          <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Member Documents */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Access Your Tax Documents</h2>
              <p className="text-muted-foreground mb-8">
                Members can access their Explanation of Sharing (EOS) statements and other tax-related documents 
                through the Member Portal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/member/documents">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    View My Documents
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/login">
                    Member Login
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card className="bg-amber-50 border-amber-200">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <div className="text-gray-700">
                      <p className="font-semibold text-amber-800 mb-2">Important Tax Disclaimer</p>
                      <p>
                        Members should always consult their tax professional with specific questions. 
                        This information is provided only as a guide and does not constitute tax advice. 
                        Tax laws and requirements may change, and individual circumstances vary.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Help With Tax Questions?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our member services team can help answer questions about your membership and provide documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:4407720700">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (440) 772-0700
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
