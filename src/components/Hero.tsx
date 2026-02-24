import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/images/watermarkLightBlue-300x300-1.png')] bg-repeat opacity-5 -z-10" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 inline-flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9.5 7.5H3L7.5 12L3 16.5H9.5L12 22L14.5 16.5H21L16.5 12L21 7.5H14.5L12 2Z" />
              </svg>
              Serving the Jewish Community Since 2018
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Healthcare Costs,{" "}
              <span className="text-accent">Shared Together</span>
            </h1>
            
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
              A compassionate, affordable, and Torah-aligned solution to managing health care expenses. 
              Join thousands of families sharing in each other&apos;s medical needs.
            </p>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4">
              <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto text-base px-6 sm:px-8 h-12 font-semibold">
                <Link href="/apply">
                  Apply Now
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="w-full sm:w-auto text-base px-6 sm:px-8 h-12 border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="#pricing">
                  View Plans
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Network Restrictions
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Up to $1M Per Incident
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <svg className="h-4 w-4 sm:h-5 sm:w-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 Telemedicine
              </div>
            </div>
          </div>

          {/* Right image - Card style */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main image card */}
              <div className="bg-white rounded-3xl shadow-2xl p-6 pb-4">
                <div className="relative w-full" style={{ height: '420px' }}>
                  <Image 
                    src="/images/family2.png" 
                    alt="Happy family with healthcare coverage" 
                    fill 
                    className="object-contain object-bottom"
                    priority
                  />
                </div>
                {/* TeleRefuah badge inside card */}
                <div className="mt-4 bg-primary/5 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">24/7 TeleRefuah</div>
                    <div className="text-xs text-muted-foreground">Talk to a doctor anytime</div>
                  </div>
                </div>
              </div>
              
              {/* Floating savings badge */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-2xl shadow-xl p-4 border-4 border-white">
                <div className="text-2xl font-bold text-white">60%</div>
                <div className="text-xs text-white/80">Avg. Savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto lg:max-w-none">
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur border border-white/20">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">60%</div>
            <div className="text-xs sm:text-sm text-white/70 mt-1">Avg. Savings</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur border border-white/20">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">5,000+</div>
            <div className="text-xs sm:text-sm text-white/70 mt-1">Member Families</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur border border-white/20">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">$50M+</div>
            <div className="text-xs sm:text-sm text-white/70 mt-1">Bills Shared</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur border border-white/20">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">98%</div>
            <div className="text-xs sm:text-sm text-white/70 mt-1">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
