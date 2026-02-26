import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Join Our Community?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Start saving on healthcare while being part of a caring, value-aligned community.
              Apply today and see how much you could save.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="w-full sm:w-auto text-base px-8 bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link href="/apply">
                  Apply Now
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-base px-8 border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="tel:4407720700">
                  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Schedule a Call
                </Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/60">
              Enrollment for March membership ends February 15th
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
