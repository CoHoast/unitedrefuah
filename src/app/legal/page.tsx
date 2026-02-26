import { HeaderNew } from "@/components/HeaderNew";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LegalPage() {
  return (
    <>
      <HeaderNew />
      <main className="pt-16 sm:pt-[104px]">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Legal Information
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-white/80">
                Terms of Use and Legal Notices for United Refuah HealthShare
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              <Card className="mb-8 border-amber-200 bg-amber-50">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notice</h3>
                      <p className="text-amber-800">
                        United Refuah HealthShare is <strong>not insurance</strong>. Members share medical expenses 
                        according to sharing guidelines. Sharing is not guaranteed and is subject to the guidelines 
                        and membership agreement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Terms of Use</h2>
              
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Acceptance of Terms</h3>
                  <p className="text-gray-700">
                    By accessing and using the United Refuah HealthShare website, you accept and agree to be bound 
                    by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not 
                    use our website or services.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Use of Website</h3>
                  <p className="text-gray-700 mb-4">
                    This website is intended for informational purposes and to facilitate membership in United Refuah 
                    HealthShare. You agree to use this website only for lawful purposes and in accordance with these Terms.
                  </p>
                  <p className="text-gray-700">You agree NOT to:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
                    <li>Use the website in any way that violates applicable laws</li>
                    <li>Attempt to gain unauthorized access to any portion of the website</li>
                    <li>Use the website to transmit harmful or malicious content</li>
                    <li>Interfere with the proper operation of the website</li>
                    <li>Collect or harvest any information from the website without authorization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Health Care Sharing Ministry</h3>
                  <p className="text-gray-700 mb-4">
                    United Refuah HealthShare operates as a health care sharing ministry under section 5000A(d)(2)(B)(ii) 
                    of the Internal Revenue Code. As a health care sharing ministry:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Members share a common set of ethical or religious beliefs</li>
                    <li>Members share medical expenses among themselves in accordance with those beliefs</li>
                    <li>The organization has been in existence continuously since December 31, 1999</li>
                    <li>Members retain membership even after they develop a medical condition</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">No Guarantee of Sharing</h3>
                  <p className="text-gray-700">
                    United Refuah HealthShare facilitates the sharing of medical expenses among members. However, 
                    participation in the sharing program does not guarantee that any particular medical expense will 
                    be shared. All sharing is subject to the Sharing Guidelines and membership agreement. Members 
                    are responsible for understanding the guidelines and their own healthcare costs.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Intellectual Property</h3>
                  <p className="text-gray-700">
                    All content on this website, including text, graphics, logos, images, and software, is the property 
                    of United Refuah HealthShare or its content suppliers and is protected by copyright and trademark laws. 
                    You may not reproduce, distribute, modify, or create derivative works from any content without express 
                    written permission.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                  <p className="text-gray-700">
                    United Refuah HealthShare, its officers, directors, employees, and agents shall not be liable for 
                    any direct, indirect, incidental, special, consequential, or punitive damages arising from your 
                    use of the website or services, even if we have been advised of the possibility of such damages. 
                    This limitation applies to the fullest extent permitted by law.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h3>
                  <p className="text-gray-700">
                    These Terms of Use shall be governed by and construed in accordance with the laws of the State of Ohio, 
                    without regard to its conflict of law provisions. Any disputes arising from these terms or your use of 
                    the website shall be resolved in the courts of Ohio.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Changes to Terms</h3>
                  <p className="text-gray-700">
                    We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately 
                    upon posting to this website. Your continued use of the website after changes are posted constitutes 
                    your acceptance of the modified terms.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Contact Information</h2>
              
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">
                    For questions about these terms or our services, please contact:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold">United Refuah HealthShare℠</p>
                    <p>PO Box 18523</p>
                    <p>Cleveland Heights, OH 44118</p>
                    <p className="pt-2">Phone: <a href="tel:4407720700" className="text-primary hover:underline">(440) 772-0700</a></p>
                    <p>Email: <a href="mailto:info@unitedrefuahhs.org" className="text-primary hover:underline">info@unitedrefuahhs.org</a></p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-12 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/privacy">Privacy Policy</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/sharing-guidelines">Sharing Guidelines</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
