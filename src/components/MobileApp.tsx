import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ), 
    text: "Access anywhere, anytime" 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ), 
    text: "Digital ID card in your pocket" 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ), 
    text: "Track PreShare progress" 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ), 
    text: "Submit claims on the go" 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ), 
    text: "Real-time notifications" 
  },
  { 
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ), 
    text: "One-tap TeleRefuah access" 
  },
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
                  <span className="text-accent">{feature.icon}</span>
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
