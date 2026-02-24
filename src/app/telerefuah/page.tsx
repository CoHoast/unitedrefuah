import Link from "next/link";
import Image from "next/image";
import { HeaderNew } from "@/components/HeaderNew";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🕐",
    title: "24/7 Availability",
    description: "Access a doctor anytime, day or night, 365 days a year. No waiting rooms, no appointments needed.",
  },
  {
    icon: "💰",
    title: "$250 Average Savings",
    description: "Each TeleRefuah visit saves an average of $250 compared to urgent care or ER visits.",
  },
  {
    icon: "🧠",
    title: "Mental Health Included",
    description: "12 mental health visits per year included, subject to pre-existing condition limitations.",
  },
  {
    icon: "📱",
    title: "Phone or Video",
    description: "Connect with doctors via phone call or video chat - whatever works best for you.",
  },
  {
    icon: "💊",
    title: "Prescriptions",
    description: "Doctors can prescribe medications and send them directly to your local pharmacy.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Whole Family Coverage",
    description: "All household members on your plan have access to TeleRefuah services.",
  },
];

const conditions = [
  "Cold & Flu Symptoms",
  "Allergies",
  "Sinus Infections",
  "Ear Infections",
  "Skin Rashes",
  "Pink Eye",
  "Urinary Tract Infections",
  "Respiratory Issues",
  "Digestive Problems",
  "Minor Injuries",
  "Anxiety & Depression",
  "Medication Refills",
];

export default function TeleRefuahPage() {
  return (
    <>
      <HeaderNew />
      <main className="pt-32">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  TeleRefuah <span className="text-primary">24/7 Telemedicine</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  See a doctor anytime, anywhere. No waiting rooms, no appointments, 
                  no hassle. Just quality healthcare when you need it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/member">Access TeleRefuah</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:4407720700">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Image 
                    src="/images/doctorMotherBaby.png"
                    alt="TeleRefuah Telemedicine"
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Why Members Love TeleRefuah
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What Can Be Treated */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Conditions We Can Treat
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                TeleRefuah doctors can diagnose and treat many common conditions, 
                prescribe medications, and provide referrals when needed.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {conditions.map((condition) => (
                <div 
                  key={condition}
                  className="flex items-center gap-2 p-4 bg-white rounded-lg border border-border"
                >
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              How TeleRefuah Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Request a Visit</h3>
                <p className="text-muted-foreground">
                  Log into the Member Portal or call our TeleRefuah line to request a consultation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect with a Doctor</h3>
                <p className="text-muted-foreground">
                  A licensed physician will connect with you via phone or video within minutes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Treatment</h3>
                <p className="text-muted-foreground">
                  Receive diagnosis, treatment plan, and prescriptions sent to your pharmacy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience TeleRefuah?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join United Refuah HealthShare and get unlimited access to TeleRefuah telemedicine services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/apply">Become a Member</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/login">Member Login</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
