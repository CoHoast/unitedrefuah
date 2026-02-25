import { Progress } from "@/components/ui/progress";

// Static mobile app preview - shown in phone frame

export default function MobilePreview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mobile App Experience</h1>
          <p className="text-gray-600">Progressive Web App - works on any smartphone</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Phone 1 - Dashboard */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-[300px] h-[620px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-20" />
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-11 bg-primary flex items-end justify-center pb-2">
                    <span className="text-white/80 text-xs font-medium">United Refuah</span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 space-y-4">
                    {/* Welcome */}
                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-4 text-white">
                      <p className="text-white/80 text-sm">Welcome back</p>
                      <p className="text-xl font-bold">David Cohen 👋</p>
                      <p className="text-sm text-white/70 mt-1">UR-2024-78432</p>
                    </div>

                    {/* ID Card Mini */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-gray-900">Digital ID</span>
                        <span className="text-xs text-primary">View Card →</span>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-3">
                        <p className="text-xs text-gray-500">Member ID</p>
                        <p className="font-mono text-primary font-semibold">UR-2024-78432</p>
                      </div>
                    </div>

                    {/* PreShare */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Annual PreShare</span>
                        <span className="text-sm font-semibold">$2,847 / $4,500</span>
                      </div>
                      <Progress value={63} className="h-2" />
                      <p className="text-xs text-gray-500 mt-2">$1,653 remaining until 80% sharing</p>
                    </div>

                    {/* Quick Actions Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: "📄", label: "Submit Claim", color: "bg-green-100" },
                        { icon: "📞", label: "TeleRefuah", color: "bg-blue-100" },
                        { icon: "💳", label: "ID Card", color: "bg-indigo-100" },
                        { icon: "📁", label: "Documents", color: "bg-purple-100" },
                      ].map((action) => (
                        <div key={action.label} className={`${action.color} rounded-xl p-4 text-center`}>
                          <span className="text-2xl">{action.icon}</span>
                          <p className="text-xs font-medium mt-1">{action.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg flex justify-around py-3">
                      {[
                        { icon: "🏠", label: "Home", active: true },
                        { icon: "📄", label: "Claims" },
                        { icon: "➕", label: "", special: true },
                        { icon: "💬", label: "Help" },
                        { icon: "👤", label: "Profile" },
                      ].map((item, idx) => (
                        <div key={idx} className={`flex flex-col items-center ${
                          item.special ? '-mt-6' : ''
                        }`}>
                          {item.special ? (
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                              <span className="text-xl">{item.icon}</span>
                            </div>
                          ) : (
                            <>
                              <span className={`text-lg ${item.active ? '' : 'opacity-40'}`}>{item.icon}</span>
                              <span className={`text-[10px] ${item.active ? 'text-primary font-medium' : 'text-gray-400'}`}>
                                {item.label}
                              </span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 font-medium">Member Dashboard</p>
          </div>

          {/* Phone 2 - Claims */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-[300px] h-[620px] bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl z-20" />
                <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden">
                  <div className="h-11 bg-primary flex items-end justify-center pb-2">
                    <span className="text-white/80 text-xs font-medium">My Claims</span>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    {/* Filter Tabs */}
                    <div className="flex gap-2">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">All</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Pending</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Shared</span>
                    </div>

                    {/* Claims List */}
                    {[
                      { provider: "Dr. Goldberg", type: "Pediatric visit", amount: "$185", status: "Shared", date: "Feb 18", statusColor: "bg-green-100 text-green-700" },
                      { provider: "Quest Diagnostics", type: "Lab work", amount: "$342", status: "Processing", date: "Jan 28", statusColor: "bg-yellow-100 text-yellow-700" },
                      { provider: "Dr. Stern", type: "Annual checkup", amount: "$275", status: "Shared", date: "Jan 15", statusColor: "bg-green-100 text-green-700" },
                      { provider: "Urgent Care", type: "Office visit", amount: "$150", status: "Shared", date: "Dec 20", statusColor: "bg-green-100 text-green-700" },
                    ].map((claim, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium text-gray-900 text-sm">{claim.provider}</p>
                            <p className="text-xs text-gray-500">{claim.type}</p>
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${claim.statusColor}`}>
                            {claim.status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">{claim.date}</span>
                          <span className="font-semibold text-primary">{claim.amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 font-medium">Claims History</p>
          </div>

          {/* Phone 3 - Profile */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-[300px] h-[620px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-20" />
                <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden">
                  <div className="h-11 bg-primary flex items-end justify-center pb-2">
                    <span className="text-white/80 text-xs font-medium">My Profile</span>
                  </div>
                  
                  <div className="p-4">
                    {/* Profile Header */}
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-primary">DC</span>
                      </div>
                      <h3 className="font-bold text-gray-900">David Cohen</h3>
                      <p className="text-sm text-gray-500">david.cohen@email.com</p>
                    </div>

                    {/* Plan Details */}
                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-4 text-white mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-white/70 text-xs">Current Plan</p>
                          <p className="font-bold">Family Plan</p>
                        </div>
                        <p className="font-bold">$495/mo</p>
                      </div>
                      <div className="text-xs text-white/70">
                        Member since March 2023
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-2">
                      {[
                        { icon: "👨‍👩‍👧‍👦", label: "Family Members", count: "4" },
                        { icon: "💳", label: "Payment Method" },
                        { icon: "🔔", label: "Notifications", count: "2" },
                        { icon: "📄", label: "Documents" },
                        { icon: "🔒", label: "Security" },
                        { icon: "❓", label: "Help & Support" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-3">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm font-medium">{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {item.count && (
                              <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full">
                                {item.count}
                              </span>
                            )}
                            <span className="text-gray-400">›</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 font-medium">Member Profile</p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: "📱", title: "Install on Any Phone", desc: "Works on iPhone and Android without app store approval" },
            { icon: "🔔", title: "Push Notifications", desc: "Real-time alerts for claims, payments, and announcements" },
            { icon: "📶", title: "Works Offline", desc: "View ID card and account info even without internet" },
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
