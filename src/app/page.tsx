import { HeaderNew } from "@/components/HeaderNew";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Comparison } from "@/components/Comparison";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { PortalPreview } from "@/components/PortalPreview";
import { MobileApp } from "@/components/MobileApp";
import { Podcasts } from "@/components/Podcasts";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeaderNew />
      <main className="pt-16 sm:pt-[104px]">
        <Hero />
        <HowItWorks />
        <PortalPreview />
        <MobileApp />
        <Comparison />
        <Pricing />
        <Testimonials />
        <About />
        <Podcasts />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
