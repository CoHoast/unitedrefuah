"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Total Members", value: "5,247", change: "+12%", changeType: "positive" },
  { label: "Active Plans", value: "4,892", change: "+8%", changeType: "positive" },
  { label: "Past Due", value: "127", change: "-5%", changeType: "positive" },
  { label: "Documents Today", value: "342", change: "+23%", changeType: "neutral" },
];

const recentMembers = [
  { id: "UR-2024-78432", name: "David Cohen", plan: "Family", status: "active", joined: "Mar 2023" },
  { id: "UR-2024-78433", name: "Sarah Levy", plan: "Couple", status: "active", joined: "Feb 2024" },
  { id: "UR-2024-78434", name: "Michael Stern", plan: "Individual", status: "past_due", joined: "Jan 2024" },
  { id: "UR-2024-78435", name: "Rachel Green", plan: "Family", status: "active", joined: "Feb 2024" },
  { id: "UR-2024-78436", name: "Joshua Rosen", plan: "Couple", status: "delinquent", joined: "Dec 2023" },
];

const recentDocuments = [
  { id: "DOC-001", type: "EOB", status: "processed", member: "David Cohen", time: "2 min ago" },
  { id: "DOC-002", type: "Claim", status: "processing", member: "Sarah Levy", time: "5 min ago" },
  { id: "DOC-003", type: "EOB", status: "processed", member: "Michael Stern", time: "12 min ago" },
  { id: "DOC-004", type: "Invoice", status: "error", member: "Rachel Green", time: "15 min ago" },
  { id: "DOC-005", type: "Claim", status: "processed", member: "Joshua Rosen", time: "18 min ago" },
];

const alerts = [
  { type: "warning", message: "127 members have past due payments", action: "View Members" },
  { type: "error", message: "3 document processing errors in last hour", action: "View Errors" },
  { type: "info", message: "12 new applications pending review", action: "Review" },
];

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back! 👋</h1>
        <p className="text-gray-600 mt-1">Here&apos;s what&apos;s happening with United Refuah today.</p>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="mb-8 space-y-3">
          {alerts.map((alert, i) => (
            <div 
              key={i}
              className={`p-4 rounded-lg flex items-center justify-between ${
                alert.type === "error" ? "bg-red-50 border border-red-200" :
                alert.type === "warning" ? "bg-yellow-50 border border-yellow-200" :
                "bg-blue-50 border border-blue-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  alert.type === "error" ? "bg-red-500" :
                  alert.type === "warning" ? "bg-yellow-500" :
                  "bg-blue-500"
                }`} />
                <span className={`font-medium ${
                  alert.type === "error" ? "text-red-800" :
                  alert.type === "warning" ? "text-yellow-800" :
                  "text-blue-800"
                }`}>{alert.message}</span>
              </div>
              <Button variant="ghost" size="sm">{alert.action}</Button>
            </div>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-bold">{stat.value}</span>
                <span className={`text-sm font-medium ${
                  stat.changeType === "positive" ? "text-green-600" : 
                  stat.changeType === "negative" ? "text-red-600" : 
                  "text-gray-600"
                }`}>{stat.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Members */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Members</CardTitle>
            <Link href="/admin/members">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {recentMembers.map((member) => (
                <div key={member.id} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.id} • {member.plan}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant={
                      member.status === "active" ? "default" :
                      member.status === "past_due" ? "secondary" :
                      "destructive"
                    } className={
                      member.status === "active" ? "bg-green-100 text-green-800" :
                      member.status === "past_due" ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    }>
                      {member.status === "active" ? "Active" :
                       member.status === "past_due" ? "Past Due" : "Delinquent"}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">Joined {member.joined}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Document Processing */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Document Processing</CardTitle>
            <Link href="/admin/documents">
              <Button variant="outline" size="sm">View All</Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {recentDocuments.map((doc) => (
                <div key={doc.id} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      doc.status === "processed" ? "bg-green-100" :
                      doc.status === "processing" ? "bg-blue-100" :
                      "bg-red-100"
                    }`}>
                      <svg className={`w-5 h-5 ${
                        doc.status === "processed" ? "text-green-600" :
                        doc.status === "processing" ? "text-blue-600" :
                        "text-red-600"
                      }`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">{doc.type}</p>
                      <p className="text-sm text-muted-foreground">{doc.member}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={
                      doc.status === "processed" ? "default" :
                      doc.status === "processing" ? "secondary" :
                      "destructive"
                    } className={
                      doc.status === "processed" ? "bg-green-100 text-green-800" :
                      doc.status === "processing" ? "bg-blue-100 text-blue-800" :
                      "bg-red-100 text-red-800"
                    }>
                      {doc.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{doc.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Button asChild className="bg-[#135c9f] hover:bg-[#0e4a7f]">
            <Link href="/admin/messages">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Send Message
            </Link>
          </Button>
          <Button variant="outline" asChild className="border-[#135c9f] text-[#135c9f] hover:bg-[#135c9f]/5">
            <Link href="/admin/members">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
              Add Member
            </Link>
          </Button>
          <Button variant="outline" asChild className="border-[#135c9f] text-[#135c9f] hover:bg-[#135c9f]/5">
            <Link href="/admin/applications">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              Review Applications
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
