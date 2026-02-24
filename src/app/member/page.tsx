"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
  { id: 1, type: "claim", description: "Pediatric visit - Dr. Goldberg", amount: 185, status: "shared", date: "Feb 18, 2024" },
  { id: 2, type: "payment", description: "Monthly contribution", amount: 495, status: "paid", date: "Feb 1, 2024" },
  { id: 3, type: "claim", description: "Lab work - Quest Diagnostics", amount: 342, status: "processing", date: "Jan 28, 2024" },
  { id: 4, type: "claim", description: "Annual checkup - Dr. Stern", amount: 275, status: "shared", date: "Jan 15, 2024" },
];

const quickActions = [
  { icon: "📄", label: "Submit Claim", href: "/member/submit", color: "bg-green-100 text-green-600" },
  { icon: "📞", label: "TeleRefuah", href: "/telerefuah", color: "bg-blue-100 text-blue-600" },
  { icon: "💳", label: "ID Card", href: "/member/id-card", color: "bg-indigo-100 text-indigo-600" },
  { icon: "👨‍👩‍👧", label: "Family", href: "/member/family", color: "bg-pink-100 text-pink-600" },
  { icon: "📁", label: "Documents", href: "/member/documents", color: "bg-purple-100 text-purple-600" },
  { icon: "💵", label: "Billing", href: "/member/billing", color: "bg-emerald-100 text-emerald-600" },
];

export default function MemberDashboard() {
  const preShareProgress = (member.preShareUsed / member.preShareAmount) * 100;
  const preShareRemaining = member.preShareAmount - member.preShareUsed;
  const coShareProgress = (member.coShareUsed / member.coShareMax) * 100;

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block space-y-8">
        {/* Welcome + Quick Stats */}
        <div className="grid grid-cols-3 gap-6">
          {/* Welcome Card */}
          <Card className="col-span-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Shalom, {member.firstName}! 👋
                  </h2>
                  <p className="text-muted-foreground">
                    Welcome back to your United Refuah Member Portal
                  </p>
                </div>
                <Badge variant="secondary" className="text-sm">
                  {member.plan} Plan
                </Badge>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Member ID</p>
                  <p className="font-mono font-semibold">{member.memberId}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Monthly Share</p>
                  <p className="font-semibold text-xl">${member.monthlyAmount}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p className="font-semibold">{member.memberSince}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Digital ID Card */}
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <Image 
                  src="/images/UnitedRefuahLogoHands-2.svg" 
                  alt="United Refuah" 
                  width={40} 
                  height={40}
                  className="brightness-0 invert opacity-90"
                />
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {member.plan}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-xl font-semibold">{member.firstName} {member.lastName}</p>
                <p className="text-white/70 text-sm font-mono">{member.memberId}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 flex justify-between text-sm">
                <div>
                  <p className="text-white/60 text-xs">TeleRefuah</p>
                  <p className="font-semibold">24/7 Access</p>
                </div>
                <Button size="sm" variant="secondary" className="text-primary" asChild>
                  <Link href="/telerefuah">Call Now</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* PreShare and CoShare Progress */}
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Annual PreShare Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  ${member.preShareUsed.toLocaleString()} of ${member.preShareAmount.toLocaleString()}
                </span>
                <span className="text-sm font-medium text-primary">
                  {Math.round(preShareProgress)}%
                </span>
              </div>
              <Progress value={preShareProgress} className="h-3 mb-3" />
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">${preShareRemaining.toLocaleString()}</span> remaining until 80% sharing begins
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Annual CoShare Maximum</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  ${member.coShareUsed.toLocaleString()} of ${member.coShareMax.toLocaleString()}
                </span>
                <span className="text-sm font-medium text-green-600">
                  {Math.round(coShareProgress)}%
                </span>
              </div>
              <Progress value={coShareProgress} className="h-3 mb-3" />
              <p className="text-sm text-muted-foreground">
                After reaching max, eligible expenses shared at <span className="font-semibold">100%</span>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions + Recent Activity */}
        <div className="grid grid-cols-3 gap-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action) => (
                <Link key={action.label} href={action.href}>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${action.color}`}>
                      {action.icon}
                    </div>
                    <span className="font-medium">{action.label}</span>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Recent Activity</CardTitle>
              <Link href="/member/claims" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {recentActivity.map((item) => (
                  <div key={item.id} className="py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
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
                        <p className="font-medium text-gray-900">{item.description}</p>
                        <p className="text-sm text-muted-foreground">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${item.amount}</p>
                      <Badge variant={
                        item.status === "shared" ? "default" :
                        item.status === "paid" ? "secondary" :
                        "outline"
                      } className="text-xs">
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-4 space-y-6">
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
              <Image 
                src="/images/UnitedRefuahLogoHands-2.svg" 
                alt="United Refuah" 
                width={40} 
                height={40}
                className="brightness-0 invert opacity-90"
              />
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
          {quickActions.map((action) => (
            <Link key={action.label} href={action.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl ${action.color}`}>
                    {action.icon}
                  </div>
                  <p className="font-medium text-sm">{action.label}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
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
              {recentActivity.slice(0, 3).map((item) => (
                <div key={item.id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.type === "claim" ? "bg-blue-100" : "bg-green-100"
                    }`}>
                      {item.type === "claim" ? "📋" : "✓"}
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
    </>
  );
}
