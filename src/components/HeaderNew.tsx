"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

interface DropdownItem {
  name: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navigation: NavItem[] = [
  {
    name: "General Information",
    dropdown: [
      { name: "Application", href: "/apply" },
      { name: "Sharing Guidelines", href: "/sharing-guidelines" },
      { name: "FAQs", href: "/faqs" },
    ],
  },
  {
    name: "Member Resources",
    dropdown: [
      { name: "TeleRefuah 24/7 Telemedicine", href: "/telerefuah" },
      { name: "Submit Sharing Request", href: "/member/submit" },
      { name: "Member Portal", href: "/member" },
      { name: "Claim Status Request", href: "/claim-status" },
      { name: "Tax Information", href: "/tax-information" },
    ],
  },
  {
    name: "Provider Services",
    dropdown: [
      { name: "Billing & Payment", href: "/providers/billing" },
      { name: "Contact Provider Services", href: "/providers/contact" },
      { name: "Become a Preferred Provider", href: "/providers/become-preferred" },
      { name: "Claim Status Request", href: "/providers/claim-status" },
    ],
  },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

function DropdownMenu({ items, isOpen, onClose }: { items: DropdownItem[]; isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
          onClick={onClose}
        >
          {item.name}
          {item.external && (
            <span className="ml-1 text-xs text-gray-400">»</span>
          )}
        </Link>
      ))}
    </div>
  );
}

export function HeaderNew() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      {/* Top bar - hidden on mobile, visible on sm+ */}
      <div className="hidden sm:block bg-primary text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <a href="tel:4407720700" className="flex items-center gap-2 hover:text-white/80">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (440) 772-0700
            </a>
            <div className="flex items-center gap-4">
              <Link href="/login" className="hover:text-white/80">Member Login</Link>
              <Link href="/member/submit" className="hover:text-white/80 hidden md:inline">Submit Sharing Request</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={dropdownRef}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/united-refuah-logo-full.svg" 
              alt="United Refuah HealthShare" 
              width={200} 
              height={82}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <button
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                      openDropdown === item.name
                        ? "text-primary bg-primary/5"
                        : "text-gray-700 hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  >
                    {item.name}
                    <svg className={`w-4 h-4 transition-transform ${openDropdown === item.name ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
                {item.dropdown && (
                  <DropdownMenu
                    items={item.dropdown}
                    isOpen={openDropdown === item.name}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary hover:bg-primary/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-primary/5 rounded-md"
                        onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                      >
                        {item.name}
                        <svg className={`w-4 h-4 transition-transform ${mobileExpanded === item.name ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpanded === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-md"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-md"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border mt-2">
                <Button asChild className="w-full">
                  <Link href="/apply" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
