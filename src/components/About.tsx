import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Baruch Chaim Manies",
    role: "Founder",
    image: "/images/IMG_7089-Edit-scaled.jpg",
    bio: "Founder and driving force behind United Refuah HealthShare.",
  },
  {
    name: "John Brown",
    role: "CPA",
    image: "/images/johnBrownSm.jpg",
    bio: "Received his BA from Cleveland State University before pursuing his CPA.",
  },
  {
    name: "Dr. Salamon",
    role: "MD, FRCSC, FACS",
    image: "/images/solomon.jpg",
    bio: "Board-certified ophthalmologist and founder of The Cataract Eye Center of Cleveland.",
  },
  {
    name: "Alan Schabes",
    role: "Legal Counsel",
    image: "/images/Schabes_Alan_Cropped2019sm.jpg",
    bio: "Graduated Magna Cum Laude from Hofstra University Law School in 1981.",
  },
  {
    name: "Zvi Rokowsky",
    role: "Board Member",
    image: "/images/rokowsky.jpg",
    bio: "Has been involved with United Refuah HealthShare since its inception.",
  },
  {
    name: "Mike Sharman",
    role: "Legal Advisor",
    image: "/images/sharman.jpg",
    bio: "Received his JD from University of Wyoming and LLM from Regent University School of Law.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Founded by the Community,{" "}
              <span className="text-primary">For the Community</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              United Refuah HealthShare was founded by successful businessmen, employers, and parents 
              of the Cleveland Jewish community who saw the challenges of providing appropriate 
              healthcare to their employees and their families.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2018, our founders have engaged industry and community leaders to ensure that 
              the culture and needs of the Jewish community are maintained and revered, while 
              creating a superior HealthShare organization.
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image 
                src="/images/customerRep.png" 
                alt="United Refuah team member helping a member" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20">
              <Image src="/images/plantGreen.png" alt="" fill className="object-contain" />
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Our Leadership Team
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals committed to serving our community with excellence and integrity.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div 
              key={member.name} 
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold text-foreground">{member.name}</h4>
              <p className="text-sm text-primary mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
