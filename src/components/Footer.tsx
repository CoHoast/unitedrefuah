import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  information: [
    { name: "Application", href: "/apply" },
    { name: "Sharing Guidelines", href: "/guidelines" },
    { name: "FAQs", href: "#faq" },
    { name: "Tax Information", href: "/tax-info" },
  ],
  members: [
    { name: "Member Portal", href: "/login" },
    { name: "Submit Sharing Request", href: "/submit-request" },
    { name: "TeleRefuah 24/7", href: "/telemedicine" },
    { name: "Claim Status", href: "/claim-status" },
  ],
  providers: [
    { name: "Billing & Payment", href: "/providers/billing" },
    { name: "Provider Services", href: "/providers" },
    { name: "Become a Provider", href: "/providers/join" },
    { name: "Claim Status Request", href: "/providers/claims" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Legal", href: "/legal" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-12 h-12">
                <Image 
                  src="/images/UnitedRefuahLogoHands-2.svg" 
                  alt="United Refuah" 
                  fill 
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <span className="font-semibold text-lg text-white">United Refuah</span>
                <span className="text-sm text-white/60 block -mt-1">HealthShare</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              A compassionate, affordable, and Torah-aligned solution to managing health care expenses.
            </p>
            <div className="mt-6 space-y-2">
              <a href="tel:4407720700" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (440) 772-0700
              </a>
              <a href="mailto:info@unitedrefuahhs.org" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@unitedrefuahhs.org
              </a>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                </svg>
                Fax: (440) 772-0330
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-3">
              {footerLinks.information.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Members</h3>
            <ul className="space-y-3">
              {footerLinks.members.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Providers</h3>
            <ul className="space-y-3">
              {footerLinks.providers.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} United Refuah HealthShare. All rights reserved.
          </p>
          <p className="text-xs text-white/40 max-w-md text-center sm:text-right">
            United Refuah HealthShare is not insurance. Members share medical expenses according to sharing guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
}
