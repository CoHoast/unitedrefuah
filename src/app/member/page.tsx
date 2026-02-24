"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock member data
const member = {
  firstName: "David",
  lastName: "Cohen",
  memberId: "UR-2024-78432",
  plan: "Family",
  monthlyAmount: 495,
  memberSince: "March 2023",
  preShareAmount: 4500,
  preShareUsed: 2847,
  coShareMax: 9000,
  coShareUsed: 1250,
};

const recentActivity = [
  { id: 1, type: "claim", description: "Pediatric visit - Dr. Goldberg", amount: 185, status: "shared", date: "Feb 18" },
  { id: 2, type: "payment", description: "Monthly contribution", amount: 495, status: "paid", date: "Feb 1" },
  { id: 3, type: "claim", description: "Lab work - Quest Diagnostics", amount: 342, status: "processing", date: "Jan 28" },
];

export default function MemberDashboard() {
  const preShareProgress = (member.preShareUsed / member.preShareAmount) * 100;
  const preShareRemaining = member.preShareAmount - member.preShareUsed;

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Shalom, {member.firstName}! 👋
          </h1>
          <p className="text-gray-500 text-sm">Member since {member.memberSince}</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-bold text-lg">
            {member.firstName[0]}{member.lastName[0]}
          </span>
        </div>
      </div>

      {/* Digital ID Card */}
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
        <CardContent className="p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <Image 
                src="/images/UnitedRefuahLogoHands-2.svg" 
                alt="United Refuah" 
                width={40} 
                height={40}
                className="brightness-0 invert opacity-90"
              />
            </div>
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
              {member.plan} Plan
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-xl font-semibold">{member.firstName} {member.lastName}</p>
            <p className="text-white/70 text-sm font-mono">{member.memberId}</p>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20 flex justify-between text-sm">
            <div>
              <p className="text-white/60 text-xs">Monthly Share</p>
              <p className="font-semibold">${member.monthlyAmount}</p>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-xs">TeleRefuah</p>
              <p className="font-semibold">24/7 Access</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* PreShare Progress */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-900">Annual PreShare</h3>
            <span className="text-sm text-gray-500">
              ${member.preShareUsed.toLocaleString()} / ${member.preShareAmount.toLocaleString()}
            </span>
          </div>
          <Progress value={preShareProgress} className="h-3 mb-2" />
          <p className="text-sm text-gray-600">
            <span className="text-primary font-medium">${preShareRemaining.toLocaleString()}</span> remaining until 80% sharing begins
          </p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Link href="/member/submit">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <p className="font-medium text-sm">Submit Claim</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/member/telemedicine">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <p className="font-medium text-sm">TeleRefuah</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/member/documents">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <p className="font-medium text-sm">Documents</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/member/chat">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <p className="font-medium text-sm">Get Help</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Recent Activity */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-900">Recent Activity</h3>
          <Link href="/member/claims" className="text-primary text-sm font-medium">
            View All
          </Link>
        </div>
        <Card>
          <CardContent className="p-0 divide-y">
            {recentActivity.map((item) => (
              <div key={item.id} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.type === "claim" ? "bg-blue-100" : "bg-green-100"
                  }`}>
                    {item.type === "claim" ? (
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-900">{item.description}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">${item.amount}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    item.status === "shared" ? "bg-green-100 text-green-700" :
                    item.status === "paid" ? "bg-blue-100 text-blue-700" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
