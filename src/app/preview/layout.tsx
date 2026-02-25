"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <div className="min-h-screen">
      {/* Preview Banner */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-primary to-primary/90 text-white py-2 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-accent/30 text-accent text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
              Preview
            </span>
            <span className="text-sm text-white/80 hidden sm:inline">
              Static design preview - functionality disabled
            </span>
          </div>
          <Link 
            href="/proposal"
            className="text-sm bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-lg transition-colors"
          >
            ← Back to Proposal
          </Link>
        </div>
      </div>
      
      {/* Preview Navigation */}
      <div className="fixed top-12 left-0 right-0 z-[99] bg-white/95 backdrop-blur border-b border-gray-200 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto">
          <span className="text-xs text-gray-500 mr-2 flex-shrink-0">Jump to:</span>
          {[
            { href: "/preview/marketing", label: "Marketing Site" },
            { href: "/preview/dashboard", label: "Member Dashboard" },
            { href: "/preview/admin", label: "Admin Panel" },
            { href: "/preview/mobile", label: "Mobile App" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors flex-shrink-0 ${
                pathname === link.href
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Content with offset for banners */}
      <div className="pt-24">
        {children}
      </div>

      {/* Floating "This is a preview" reminder */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-primary text-white text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Preview Mode
        </div>
      </div>
    </div>
  );
}
