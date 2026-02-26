"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const member = {
  firstName: "David",
  lastName: "Cohen",
  memberId: "UR-2024-78432",
  plan: "Family",
  groupNumber: "URHS-001",
  effectiveDate: "March 1, 2023",
  preShare: "$4,500",
  coShareMax: "$9,000",
  sharingPercent: "80%",
};

const familyMembers = [
  { name: "David Cohen", id: "UR-2024-78432-01", relationship: "Primary" },
  { name: "Sarah Cohen", id: "UR-2024-78432-02", relationship: "Spouse" },
  { name: "Miriam Cohen", id: "UR-2024-78432-03", relationship: "Dependent" },
  { name: "Jacob Cohen", id: "UR-2024-78432-04", relationship: "Dependent" },
  { name: "Rebecca Cohen", id: "UR-2024-78432-05", relationship: "Dependent" },
];

export default function IDCardPage() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Member ID Card</h2>
          <p className="text-muted-foreground">Download or print your digital member ID card</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ID Card Front */}
          <div>
            <h3 className="font-medium mb-3">Card Front</h3>
            <Card className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <Image 
                      src="/images/UnitedRefuahLogoHands-2.svg" 
                      alt="United Refuah" 
                      width={40} 
                      height={40}
                      className="brightness-0 invert"
                    />
                    <div>
                      <p className="font-bold text-lg">United Refuah</p>
                      <p className="text-white/70 text-sm">HealthShare</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/60">Plan Type</p>
                    <p className="font-semibold">{member.plan}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-white/60">Member Name</p>
                    <p className="text-xl font-bold">{member.firstName} {member.lastName}</p>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <p className="text-xs text-white/60">Member ID</p>
                      <p className="font-mono font-semibold">{member.memberId}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Group Number</p>
                      <p className="font-mono font-semibold">{member.groupNumber}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Effective Date</p>
                    <p className="font-semibold">{member.effectiveDate}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/20 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-white/60">PreShare</p>
                    <p className="font-bold">{member.preShare}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Sharing</p>
                    <p className="font-bold">{member.sharingPercent}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">CoShare Max</p>
                    <p className="font-bold">{member.coShareMax}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ID Card Back */}
          <div>
            <h3 className="font-medium mb-3">Card Back</h3>
            <Card className="bg-gray-100 overflow-hidden h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase">Important Information</p>
                    <p className="text-sm mt-2">
                      This card identifies the holder as a member of United Refuah HealthShare. 
                      This is NOT insurance. Members share in each other&apos;s eligible medical expenses.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Member Services</p>
                      <p className="text-primary">(440) 772-0700</p>
                    </div>
                    <div>
                      <p className="font-semibold">TeleRefuah 24/7</p>
                      <p className="text-primary">(800) 555-0199</p>
                    </div>
                    <div>
                      <p className="font-semibold">Submit Claims</p>
                      <p className="text-muted-foreground text-xs">unitedrefuahhs.org/member</p>
                    </div>
                    <div>
                      <p className="font-semibold">Fax</p>
                      <p className="text-muted-foreground">(440) 772-0330</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-300">
                  <p className="text-xs text-muted-foreground text-center">
                    United Refuah HealthShare • Cleveland, OH • unitedrefuahhs.org
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Download Options */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Download Options</h3>
            <div className="flex flex-wrap gap-3">
              <Button>
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download PDF
              </Button>
              <Button variant="outline">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                </svg>
                Print Card
              </Button>
              <Button variant="outline">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
                Email Card
              </Button>
              <Button variant="outline">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                Add to Apple Wallet
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Family Member Cards */}
        <div>
          <h3 className="font-semibold mb-4">Family Member Cards</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {familyMembers.map((fm) => (
              <Card key={fm.id}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{fm.name}</p>
                    <p className="text-sm text-muted-foreground">{fm.relationship}</p>
                    <p className="text-xs font-mono text-muted-foreground mt-1">{fm.id}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden p-4 space-y-4">
        <h1 className="text-xl font-bold">Member ID Card</h1>

        {/* Card Preview */}
        <Card className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
          <CardContent className="p-5">
            <div className="flex justify-between items-start mb-4">
              <Image 
                src="/images/UnitedRefuahLogoHands-2.svg" 
                alt="United Refuah" 
                width={32} 
                height={32}
                className="brightness-0 invert"
              />
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{member.plan}</span>
            </div>
            
            <p className="text-lg font-bold">{member.firstName} {member.lastName}</p>
            <p className="text-white/70 font-mono text-sm">{member.memberId}</p>
            
            <div className="mt-4 pt-3 border-t border-white/20 grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <p className="text-white/60">PreShare</p>
                <p className="font-bold">{member.preShare}</p>
              </div>
              <div>
                <p className="text-white/60">Sharing</p>
                <p className="font-bold">{member.sharingPercent}</p>
              </div>
              <div>
                <p className="text-white/60">CoShare</p>
                <p className="font-bold">{member.coShareMax}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Options */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="h-auto py-3">
            <div className="text-center">
              <svg className="w-5 h-5 mx-auto mb-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span className="text-sm">Download PDF</span>
            </div>
          </Button>
          <Button variant="outline" className="h-auto py-3">
            <div className="text-center">
              <svg className="w-5 h-5 mx-auto mb-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
              <span className="text-sm">Add to Wallet</span>
            </div>
          </Button>
        </div>

        {/* Family Members */}
        <div>
          <h2 className="font-semibold mb-3">Family Cards</h2>
          <div className="space-y-2">
            {familyMembers.map((fm) => (
              <Card key={fm.id}>
                <CardContent className="p-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">{fm.name}</p>
                    <p className="text-xs text-muted-foreground">{fm.relationship} • {fm.id}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
