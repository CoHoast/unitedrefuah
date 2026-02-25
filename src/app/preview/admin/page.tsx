"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Static admin dashboard preview with full sidebar navigation

const sidebarItems = [
  { 
    section: "Overview",
    items: [
      { icon: "home", label: "Dashboard", active: true },
      { icon: "chart", label: "Analytics" },
    ]
  },
  {
    section: "Applications",
    items: [
      { icon: "inbox", label: "Pending Review", badge: 12 },
      { icon: "check", label: "Approved" },
      { icon: "x", label: "Denied" },
    ]
  },
  {
    section: "Members",
    items: [
      { icon: "users", label: "All Members" },
      { icon: "star", label: "Active Plans" },
      { icon: "alert", label: "Past Due", badge: 8 },
      { icon: "search", label: "Member Lookup" },
    ]
  },
  {
    section: "Claims & Billing",
    items: [
      { icon: "document", label: "Claims Queue", badge: 47 },
      { icon: "dollar", label: "Payments" },
      { icon: "receipt", label: "Invoices" },
    ]
  },
  {
    section: "Administration",
    items: [
      { icon: "team", label: "Team Members" },
      { icon: "shield", label: "Roles & Permissions" },
      { icon: "settings", label: "Settings" },
      { icon: "log", label: "Audit Log" },
    ]
  },
];

const icons: Record<string, React.ReactNode> = {
  home: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  inbox: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  x: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  alert: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  ),
  search: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
  document: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  dollar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  receipt: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
  team: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  settings: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  log: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const roles = [
  { name: "Super Admin", color: "bg-red-100 text-red-700", permissions: "Full access to all features" },
  { name: "Admin", color: "bg-purple-100 text-purple-700", permissions: "Manage members, applications, claims" },
  { name: "Reviewer", color: "bg-blue-100 text-blue-700", permissions: "Review applications and claims" },
  { name: "Support", color: "bg-green-100 text-green-700", permissions: "View members, handle inquiries" },
  { name: "Billing", color: "bg-yellow-100 text-yellow-700", permissions: "Manage payments and invoices" },
];

const teamMembers = [
  { name: "Anne Glorioso", email: "anne@unitedrefuahhs.org", role: "Super Admin", avatar: "AG" },
  { name: "Alexandra S.", email: "alexandra@unitedrefuahhs.org", role: "Admin", avatar: "AS" },
  { name: "David Katz", email: "david@unitedrefuahhs.org", role: "Reviewer", avatar: "DK" },
  { name: "Sarah Miller", email: "sarah@unitedrefuahhs.org", role: "Support", avatar: "SM" },
  { name: "Michael Ross", email: "michael@unitedrefuahhs.org", role: "Billing", avatar: "MR" },
];

export default function AdminPreview() {
  const [currentRole] = useState("Super Admin");

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col min-h-screen">
        {/* Logo */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/UnitedRefuahLogoHands-2.svg" 
              alt="United Refuah" 
              width={36} 
              height={36}
            />
            <div>
              <span className="font-bold text-primary text-sm">United Refuah</span>
              <span className="text-xs text-gray-500 block">Admin Portal</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          {sidebarItems.map((section) => (
            <div key={section.section} className="mb-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                {section.section}
              </p>
              <div className="space-y-1">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                      item.active
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {icons[item.icon]}
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        item.active ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                      }`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* User section */}
        <div className="p-3 border-t border-gray-100">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-semibold text-sm">AG</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 text-sm truncate">Anne Glorioso</p>
              <p className="text-xs text-gray-500">{currentRole}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Admin Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
              <Badge className="bg-red-100 text-red-700 border-0">{currentRole}</Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </div>
              <span className="text-sm text-gray-500">anne@unitedrefuahhs.org</span>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {[
              { label: "Pending Applications", value: "12", change: "+3 today", icon: "inbox", color: "text-yellow-600", bg: "bg-yellow-50" },
              { label: "Active Members", value: "5,234", change: "+28 this month", icon: "users", color: "text-green-600", bg: "bg-green-50" },
              { label: "Open Claims", value: "47", change: "8 need review", icon: "document", color: "text-blue-600", bg: "bg-blue-50" },
              { label: "Monthly Revenue", value: "$2.4M", change: "+12% vs last month", icon: "dollar", color: "text-purple-600", bg: "bg-purple-50" },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm mt-2 ${stat.color}`}>{stat.change}</p>
                    </div>
                    <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center ${stat.color}`}>
                      {icons[stat.icon]}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Pending Applications */}
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Pending Applications</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="outline">All</Badge>
                  <Badge>Needs Review</Badge>
                  <Badge variant="outline">High Risk</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Sarah Goldstein", type: "Family Plan", date: "Feb 24, 2024", score: 92, risk: "low", flags: 0 },
                    { name: "David Katz", type: "Couple Plan", date: "Feb 24, 2024", score: 67, risk: "medium", flags: 2 },
                    { name: "Rachel Schwartz", type: "Individual", date: "Feb 23, 2024", score: 45, risk: "high", flags: 4 },
                    { name: "Michael Friedman", type: "Family Plan", date: "Feb 23, 2024", score: 88, risk: "low", flags: 1 },
                  ].map((app, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {app.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{app.name}</p>
                          <p className="text-sm text-gray-500">{app.type} • Applied {app.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${
                            app.score >= 80 ? 'text-green-600' : 
                            app.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                          }`}>
                            {app.score}
                          </div>
                          <p className="text-xs text-gray-500">AI Score</p>
                        </div>
                        <Badge className={
                          app.risk === 'low' ? 'bg-green-100 text-green-700' :
                          app.risk === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }>
                          {app.flags} flags
                        </Badge>
                        <div className="flex gap-2">
                          <div className="px-3 py-1.5 bg-green-600 text-white rounded text-sm font-medium cursor-pointer hover:bg-green-700">
                            Approve
                          </div>
                          <div className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded text-sm font-medium cursor-pointer hover:bg-gray-300">
                            Review
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Team & Roles Panel */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {icons.team}
                  Team & Roles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Role Legend */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase">Access Roles</p>
                  {roles.map((role) => (
                    <div key={role.name} className="flex items-center gap-2">
                      <Badge className={`${role.color} border-0 text-xs`}>{role.name}</Badge>
                      <span className="text-xs text-gray-500 truncate">{role.permissions}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-3">Team Members</p>
                  <div className="space-y-3">
                    {teamMembers.map((member) => (
                      <div key={member.email} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold">
                          {member.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{member.name}</p>
                          <p className="text-xs text-gray-500 truncate">{member.email}</p>
                        </div>
                        <Badge className={`${roles.find(r => r.name === member.role)?.color} border-0 text-xs`}>
                          {member.role}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium text-center cursor-pointer hover:bg-primary/90">
                    Manage Team
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Recent Admin Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { action: "Application approved", user: "Anne G.", role: "Super Admin", target: "Michael Friedman", time: "2 minutes ago" },
                  { action: "Claim reviewed", user: "David K.", role: "Reviewer", target: "Claim #4521", time: "15 minutes ago" },
                  { action: "Member note added", user: "Sarah M.", role: "Support", target: "Sarah Goldstein", time: "1 hour ago" },
                  { action: "Payment processed", user: "Michael R.", role: "Billing", target: "Invoice #8821", time: "2 hours ago" },
                  { action: "Application denied", user: "Alexandra S.", role: "Admin", target: "John Doe", time: "3 hours ago" },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>
                        <Badge variant="outline" className="mx-2 text-xs">{activity.role}</Badge>
                        {activity.action}{' '}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
