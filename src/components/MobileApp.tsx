import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  { icon: "📱", text: "Access anywhere, anytime" },
  { icon: "💳", text: "Digital ID card in your pocket" },
  { icon: "📊", text: "Track PreShare progress" },
  { icon: "📄", text: "Submit claims on the go" },
  { icon: "🔔", text: "Real-time notifications" },
  { icon: "📞", text: "One-tap TeleRefuah access" },
];

export function MobileApp() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <span className="text-white/70 font-semibold text-sm uppercase tracking-wide">
              Mobile Member Portal
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Your Health Sharing in Your Pocket
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Manage your membership, track claims, and access TeleRefuah 24/7 - 
              all from your smartphone. No app download required.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <span className="text-xl">{feature.icon}</span>
                  <span className="text-white/90">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/apply">
                  Become a Member
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/member">
                  Try Demo Portal
                </Link>
              </Button>
            </div>
          </div>

          {/* Phone Mockups */}
          <div className="relative flex justify-center items-center min-h-[520px]">
            {/* Phone 1 - Dashboard (front) */}
            <div className="relative z-10 transform rotate-[-5deg]">
              <div className="relative w-[260px] h-[460px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-20" />
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <Image
                    src="/images/mobile-dashboard.jpg"
                    alt="Mobile Dashboard"
                    width={614}
                    height={983}
                    className="w-full h-full object-contain bg-slate-100"
                  />
                </div>
              </div>
            </div>

            {/* Phone 2 - Profile (back) */}
            <div className="absolute right-0 lg:right-[-20px] top-12 transform rotate-[8deg]">
              <div className="relative w-[220px] h-[400px] bg-gray-800 rounded-[2rem] p-2 shadow-xl">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-lg z-20" />
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                  <Image
                    src="/images/mobile-profile.jpg"
                    alt="Mobile Profile"
                    width={619}
                    height={1047}
                    className="w-full h-full object-contain bg-slate-100"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
