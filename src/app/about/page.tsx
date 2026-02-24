import Image from "next/image";
import Link from "next/link";
import { HeaderNew } from "@/components/HeaderNew";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const leadership = [
  {
    name: "Baruch Chaim Manies",
    role: "Founder",
    bio: "Baruch Chaim Manies is the founder and driving force behind United Refuah HealthShare. His vision was to create a healthcare sharing organization specifically designed for the Jewish community.",
    image: null,
  },
];

const boardMembers = [
  {
    name: "John Brown",
    role: "Board Member",
    bio: "John Brown received his BA from Cleveland State University before pursuing his CPA. He brings financial expertise and strategic guidance to United Refuah.",
    image: "/images/johnBrownSm.jpg",
  },
  {
    name: "Dr. Salamon",
    role: "Board Member",
    bio: "Dr. Salamon MD, FRCSC, FACS is a board-certified ophthalmologist and one of the founders of The Cataract Eye Center of Cleveland. He provides medical expertise to the organization.",
    image: "/images/solomon.jpg",
  },
  {
    name: "Alan Schabes",
    role: "Board Member",
    bio: "Alan Schabes graduated Magna Cum Laude from Hofstra University Law School in 1981. His legal expertise helps ensure United Refuah operates with integrity and compliance.",
    image: "/images/Schabes_Alan_Cropped2019sm.jpg",
  },
  {
    name: "Nathan Wiedemann",
    role: "Board Member",
    bio: "Nathan Wiedemann received his BS in Finance from the University of Baltimore and his JD from Case Western Reserve University (2007). He brings both legal and financial insight.",
    image: null,
  },
  {
    name: "Zvi Rokowsky",
    role: "Board Member",
    bio: "Zvi Rokowsky has been involved with United Refuah HealthShare since its inception. His dedication to the community has been instrumental in the organization's growth.",
    image: "/images/rokowsky.jpg",
  },
  {
    name: "Moishe Katz",
    role: "Board Member",
    bio: "Moishe Katz has a long history of health care advocacy. His passion for helping families access affordable healthcare drives United Refuah's mission.",
    image: "/images/mKatzSm.jpg",
  },
  {
    name: "Mike Sharman",
    role: "Board Member",
    bio: "Mike Sharman received his JD from the University of Wyoming (1983) and an LLM in International Taxation from Regent University School of Law. He provides legal and tax expertise.",
    image: "/images/sharman.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeaderNew />
      <main className="pt-32">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">United Refuah</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The first and only Jewish-based Health Care Sharing Organization, 
              designed with the unique characteristics of the American Jewish population in mind.
            </p>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Is United Refuah For You?
            </h2>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <video 
                className="w-full h-full"
                controls
                preload="metadata"
                poster="/images/family2.png"
              >
                <source 
                  src="https://unitedrefuahhs.org/wp-content/uploads/2023/08/is_united_refuah_for_you_-1080p.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  United Refuah HealthShare was founded by successful businessmen, employers, and 
                  parents of the Cleveland Jewish community who saw the challenges of providing 
                  appropriate healthcare to their employees and their families.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Since 2018, the founders engaged industry and community leaders to ensure that 
                  the culture and the needs of the Jewish community within the Health Share were 
                  maintained and revered, while creating a superior HealthShare organization.
                </p>
                <p className="text-lg text-muted-foreground">
                  This is important because now Jewish Americans may join a Health Sharing organization 
                  without making representations which are contrary to their faith beliefs.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-primary/10 flex items-center justify-center">
                  <Image 
                    src="/images/family2.png" 
                    alt="Jewish Family" 
                    width={400}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 sm:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              What Makes Us Different
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Health Focused</h3>
                  <p className="text-muted-foreground">
                    Each member participates in health coaching to discuss and set realistic goals. 
                    Through proactive management, our membership becomes healthier, driving down costs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Access</h3>
                  <p className="text-muted-foreground">
                    Each member has 24/7 access to a doctor through TeleRefuah telemedicine. 
                    Average savings of $250 per visit, plus mental health services included.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Advice</h3>
                  <p className="text-muted-foreground">
                    Our medical concierge service helps you navigate the healthcare system, 
                    find specialists, and get the lowest costs for procedures.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              Leadership
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              United Refuah is led by visionary leaders committed to serving 
              the Jewish community with integrity and excellence.
            </p>
            
            {/* Founder - Featured */}
            <div className="max-w-2xl mx-auto mb-16">
              {leadership.map((person) => (
                <Card key={person.name} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center p-8">
                      {person.image ? (
                        <Image 
                          src={person.image} 
                          alt={person.name}
                          width={200}
                          height={200}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center">
                          <span className="text-4xl font-bold text-primary">
                            {person.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      )}
                    </div>
                    <CardContent className="md:w-2/3 p-6 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-foreground">{person.name}</h3>
                      <p className="text-primary font-medium mb-3">{person.role}</p>
                      <p className="text-muted-foreground">{person.bio}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Board of Directors */}
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Board of Directors
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {boardMembers.map((member) => (
                <Card key={member.name} className="overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    {member.image ? (
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-primary/30 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground">{member.name}</h4>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground line-clamp-3">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-primary text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Klal Yisroel&apos;s HealthShare?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Experience healthcare that puts you first – and can save you thousands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
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
