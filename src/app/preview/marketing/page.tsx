import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Full static marketing site preview - showcasing the complete page design

export default function MarketingPreview() {
  return (
    <div className="bg-white">
      {/* Static Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="bg-primary text-white text-sm py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (440) 772-0700
            </span>
            <span className="text-white/80">Member Login</span>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Image 
            src="/images/UnitedRefuahLogoHands-2.svg" 
            alt="United Refuah" 
            width={50} 
            height={50}
          />
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <span>General Information ▾</span>
            <span>Member Resources ▾</span>
            <span>Provider Services ▾</span>
            <span>About Us</span>
            <span>Contact Us</span>
          </div>
          <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">
            Apply Now
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9.5 7.5H3L7.5 12L3 16.5H9.5L12 22L14.5 16.5H21L16.5 12L21 7.5H14.5L12 2Z" />
              </svg>
              Serving the Jewish Community Since 2018
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Healthcare Costs,
              <span className="text-accent block">Shared Together</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-8">
              A compassionate, affordable, and Torah-aligned solution to managing health care expenses. Join thousands of families sharing in each other's medical needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white text-primary px-6 py-3 rounded-lg font-semibold">
                Apply Now →
              </div>
              <div className="border border-white/30 text-white px-6 py-3 rounded-lg">
                View Plans
              </div>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Network Restrictions
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Up to $1M Per Incident
              </span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white rounded-3xl shadow-2xl p-6 max-w-md ml-auto">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-4">
                <Image 
                  src="/images/family2.png" 
                  alt="Happy family" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-primary/5 rounded-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">24/7 TeleRefuah</div>
                  <div className="text-xs text-gray-500">Talk to a doctor anytime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Glass Morphism Style */}
      <section className="bg-primary/95 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "60%", label: "Average Savings" },
              { value: "5,000+", label: "Member Families" },
              { value: "$50M+", label: "Bills Shared" },
              { value: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-xl p-4 text-center text-white">
                <div className="text-3xl lg:text-4xl font-bold">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How Health Sharing Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple, transparent approach to managing healthcare costs together as a community.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Join Our Community", desc: "Complete a simple application and become part of our caring community.", icon: "users" },
              { num: "02", title: "Contribute Monthly", desc: "Your monthly share helps other members with their medical expenses.", icon: "heart" },
              { num: "03", title: "Receive Care Anywhere", desc: "No network restrictions—see any provider you choose.", icon: "globe" },
              { num: "04", title: "Submit & Share", desc: "After meeting your PreShare, the community shares 80% of eligible expenses.", icon: "check" },
            ].map((step) => (
              <Card key={step.num} className="relative border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-primary">{step.num}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator Preview */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Calculate Your Savings</h2>
              <p className="text-gray-600 mb-6">
                See how much you could save compared to traditional health insurance. 
                Our members save an average of 60% on their healthcare costs.
              </p>
              <div className="space-y-4">
                {[
                  "Lower monthly contributions",
                  "No deductibles - just simple PreShare amounts",
                  "80% of eligible expenses shared by the community",
                  "No network restrictions on providers",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Family Size</label>
                  <div className="flex gap-2">
                    {["Individual", "Couple", "Family"].map((size, idx) => (
                      <div 
                        key={size}
                        className={`flex-1 text-center py-3 rounded-lg text-sm font-medium cursor-pointer ${
                          idx === 2 ? 'bg-primary text-white' : 'bg-white border border-gray-200'
                        }`}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Traditional Insurance</span>
                    <span className="text-2xl font-bold text-gray-900">$1,250/mo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">United Refuah</span>
                    <span className="text-2xl font-bold text-primary">$495/mo</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-green-600">Your Savings</span>
                      <span className="text-2xl font-bold text-green-600">$755/mo</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">That's $9,060 per year!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600">Save up to 60% compared to traditional health insurance.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Individual", price: "$175", features: ["80% sharing", "$1M per incident", "24/7 TeleRefuah"] },
              { name: "Couple", price: "$395", features: ["80% sharing", "$1M per incident", "24/7 TeleRefuah", "Maternity available"], popular: true },
              { name: "Family", price: "$495", features: ["80% sharing", "$1M per incident", "24/7 TeleRefuah", "Maternity available", "Pediatric care"] },
            ].map((plan) => (
              <Card key={plan.name} className={`relative border-0 ${plan.popular ? 'shadow-xl ring-2 ring-primary' : 'shadow-sm'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary border-0">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-1">{plan.price}</div>
                  <div className="text-gray-500 text-sm mb-6">/month</div>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6 text-left">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className={`py-3 rounded-lg font-medium ${plan.popular ? 'bg-primary text-white' : 'border border-gray-200 text-gray-700'}`}>
                    Apply Now
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Health Sharing?</h2>
            <p className="text-gray-600">See how we compare to traditional health insurance.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-50 p-4">
                <div className="font-semibold text-gray-900">Feature</div>
                <div className="font-semibold text-center text-gray-500">Traditional Insurance</div>
                <div className="font-semibold text-center text-primary">United Refuah</div>
              </div>
              {[
                { feature: "Monthly Cost (Family)", insurance: "$1,200+", urhs: "$495" },
                { feature: "Annual Deductible", insurance: "$5,000+", urhs: "$4,500 PreShare" },
                { feature: "Provider Network", insurance: "Restricted", urhs: "Any Provider" },
                { feature: "24/7 Telemedicine", insurance: "Extra Cost", urhs: "Included" },
                { feature: "Faith-Based Community", insurance: "No", urhs: "Yes" },
                { feature: "Pre-existing Conditions", insurance: "Varies", urhs: "Waiting Period" },
              ].map((row, idx) => (
                <div key={row.feature} className={`grid grid-cols-3 p-4 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <div className="font-medium text-gray-900">{row.feature}</div>
                  <div className="text-center text-gray-500">{row.insurance}</div>
                  <div className="text-center font-semibold text-primary">{row.urhs}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-gray-600">Join thousands of families who've found a better way.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah G.", location: "Brooklyn, NY", quote: "United Refuah has been a blessing for our family. The savings are incredible and the community support is amazing." },
              { name: "David K.", location: "Cleveland, OH", quote: "After years of expensive insurance, we finally found an affordable option that aligns with our values. Highly recommend!" },
              { name: "Rachel M.", location: "Los Angeles, CA", quote: "The TeleRefuah service alone is worth it. Having 24/7 access to doctors has been invaluable with young children." },
            ].map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Get answers to common questions about health sharing.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "Is this health insurance?", a: "No, this is a health cost sharing ministry where members voluntarily share in each other's medical expenses." },
              { q: "Can I see any doctor?", a: "Yes! There are no network restrictions. You can see any licensed provider you choose." },
              { q: "What is the PreShare amount?", a: "The PreShare is similar to a deductible - it's the amount you pay before the community shares 80% of eligible expenses." },
              { q: "Are pre-existing conditions covered?", a: "Pre-existing conditions are eligible for sharing after a waiting period, typically 12-36 months depending on the condition." },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-white/80 mb-8">
            Start saving today with Torah-aligned health cost sharing.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-4">
            <div className="bg-white text-primary px-8 py-4 rounded-lg font-semibold">
              Apply Now
            </div>
            <div className="border border-white/30 px-8 py-4 rounded-lg">
              Call (440) 772-0700
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image 
                src="/images/UnitedRefuahLogoHands-2.svg" 
                alt="United Refuah" 
                width={50} 
                height={50}
                className="brightness-0 invert mb-4"
              />
              <p className="text-gray-400 text-sm">
                A compassionate, Torah-aligned approach to healthcare.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Application</li>
                <li>Sharing Guidelines</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Members</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Member Portal</li>
                <li>TeleRefuah 24/7</li>
                <li>Submit Request</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>(440) 772-0700</li>
                <li>info@unitedrefuahhs.org</li>
                <li>Fax: (440) 772-0330</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2026 United Refuah HealthShare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
