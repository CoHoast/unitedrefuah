import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Static member dashboard preview - no functionality

export default function DashboardPreview() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-24 h-[calc(100vh-6rem)] w-64 bg-white border-r border-gray-200 hidden lg:block">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/UnitedRefuahLogoHands-2.svg" 
              alt="United Refuah" 
              width={40} 
              height={40}
            />
            <div>
              <span className="font-bold text-primary">United Refuah</span>
              <span className="text-xs text-gray-500 block">Member Portal</span>
            </div>
          </div>
        </div>
        <nav className="p-4 space-y-1">
          {[
            { icon: "🏠", label: "Dashboard", active: true },
            { icon: "💳", label: "ID Card" },
            { icon: "👨‍👩‍👧‍👦", label: "Family Members" },
            { icon: "📄", label: "My Claims" },
            { icon: "➕", label: "Submit Request" },
            { icon: "📁", label: "Documents" },
            { icon: "💵", label: "Billing" },
            { icon: "🔔", label: "Notifications", badge: 2 },
            { icon: "📞", label: "TeleRefuah 24/7" },
            { icon: "💬", label: "Get Help" },
            { icon: "👤", label: "My Profile" },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg ${
                item.active ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <span>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center ${
                  item.active ? "bg-white text-primary" : "bg-primary text-white"
                }`}>
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold">DC</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">David Cohen</p>
              <p className="text-xs text-gray-500">UR-2024-78432</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-8">
        {/* Top bar */}
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
            </div>
            <span className="text-sm text-gray-500">(440) 772-0700</span>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Shalom, David! 👋</h2>
                  <p className="text-gray-500">Member since March 2023</p>
                </div>
                <Image 
                  src="/images/UnitedRefuahLogoHands-2.svg" 
                  alt="United Refuah" 
                  width={60} 
                  height={60}
                  className="opacity-20"
                />
              </div>
              
              {/* ID Card Preview */}
              <div className="mt-6 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-white/70 text-sm">Member</p>
                    <p className="text-xl font-bold">David Cohen</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/70 text-sm">Member ID</p>
                    <p className="font-mono">UR-2024-78432</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-white/70">Plan</p>
                    <p className="font-semibold">Family Plan</p>
                  </div>
                  <div>
                    <p className="text-white/70">Monthly Share</p>
                    <p className="font-semibold">$495/mo</p>
                  </div>
                  <div>
                    <p className="text-white/70">Effective</p>
                    <p className="font-semibold">March 1, 2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">TeleRefuah 24/7</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900 mb-1">Talk to a Doctor Now</p>
                <p className="text-sm text-gray-500 mb-4">Available 24/7, no appointment needed</p>
                <div className="bg-primary text-white py-3 rounded-lg font-medium">
                  Start TeleRefuah Visit
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PreShare Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Annual PreShare</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Used</span>
                    <span className="font-semibold">$2,847 / $4,500</span>
                  </div>
                  <Progress value={63} className="h-3" />
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>$1,653</strong> remaining until 80% sharing begins
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CoShare Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">CoShare Maximum</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Used</span>
                    <span className="font-semibold">$1,200 / $9,000</span>
                  </div>
                  <Progress value={13} className="h-3" />
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    <strong>$7,800</strong> until 100% sharing
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { icon: "📄", label: "Submit Claim", color: "bg-green-100 text-green-600" },
                { icon: "📞", label: "TeleRefuah", color: "bg-blue-100 text-blue-600" },
                { icon: "💳", label: "ID Card", color: "bg-indigo-100 text-indigo-600" },
                { icon: "📁", label: "Documents", color: "bg-purple-100 text-purple-600" },
              ].map((action) => (
                <div key={action.label} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${action.color}`}>
                    {action.icon}
                  </div>
                  <span className="font-medium">{action.label}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { type: "claim", desc: "Pediatric visit - Dr. Goldberg", amount: "$185", status: "Shared", date: "Feb 18, 2024", statusColor: "bg-green-100 text-green-700" },
                  { type: "payment", desc: "Monthly contribution", amount: "$495", status: "Paid", date: "Feb 1, 2024", statusColor: "bg-blue-100 text-blue-700" },
                  { type: "claim", desc: "Lab work - Quest Diagnostics", amount: "$342", status: "Processing", date: "Jan 28, 2024", statusColor: "bg-yellow-100 text-yellow-700" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.type === "claim" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                      }`}>
                        {item.type === "claim" ? "📄" : "✓"}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.desc}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{item.amount}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
