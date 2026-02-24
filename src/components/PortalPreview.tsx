import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: "📊",
    title: "Track Your PreShare",
    description: "See exactly where you stand with your annual PreShare and CoShare amounts",
  },
  {
    icon: "📄",
    title: "Submit Claims Online",
    description: "Easy online submission for sharing requests - no paperwork hassles",
  },
  {
    icon: "💳",
    title: "Digital ID Card",
    description: "Access your member ID instantly, download PDF, or add to Apple Wallet",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Manage Family Members",
    description: "View all covered family members and their individual ID cards",
  },
  {
    icon: "📁",
    title: "Documents & EOS",
    description: "Access all your Explanation of Sharing statements and tax documents",
  },
  {
    icon: "🔔",
    title: "Real-Time Notifications",
    description: "Get instant updates on claim status, payments, and important alerts",
  },
];

export function PortalPreview() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wide">
            Member Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Your Health Sharing, <span className="text-primary">Simplified</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Manage everything from one intuitive dashboard. Track claims, view documents, 
            and access TeleRefuah 24/7 - all at your fingertips.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Screenshot */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/member-portal-dashboard.jpg"
                alt="United Refuah Member Portal Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-4 -right-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          </div>

          {/* Features list */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div 
                  key={feature.title}
                  className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" asChild>
                <Link href="/apply">
                  Join Today
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/member">
                  View Demo Portal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
