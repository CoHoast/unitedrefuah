import { Progress } from "@/components/ui/progress";
import Image from "next/image";

// SVG Icons
const icons = {
  document: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  phone: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  ),
  card: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  ),
  folder: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
  ),
  home: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  claims: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
    </svg>
  ),
  plus: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  ),
  chat: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  ),
  profile: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  family: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  billing: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  bell: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  ),
  lock: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  help: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  ),
  smartphone: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  wifi: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
    </svg>
  ),
};

// Static mobile app preview - shown in phone frame

export default function MobilePreview() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mobile App Experience</h1>
          <p className="text-gray-600">Progressive Web App - works on any smartphone</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Phone 1 - Dashboard */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-20" />
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-11 bg-primary flex items-end justify-center pb-2">
                    <span className="text-white/80 text-xs font-medium">United Refuah</span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 space-y-3">
                    {/* Welcome */}
                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-4 text-white">
                      <p className="text-white/80 text-sm">Welcome back</p>
                      <p className="text-lg font-bold">David Cohen</p>
                      <p className="text-xs text-white/70 mt-1">UR-2024-78432</p>
                    </div>

                    {/* PreShare */}
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="flex justify-between mb-2">
                        <span className="text-xs text-gray-600">Annual PreShare</span>
                        <span className="text-xs font-semibold">$2,847 / $4,500</span>
                      </div>
                      <Progress value={63} className="h-2" />
                      <p className="text-[10px] text-gray-500 mt-1">$1,653 until 80% sharing</p>
                    </div>

                    {/* Quick Actions Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: <span className="text-green-600">{icons.document}</span>, label: "Submit Claim", color: "bg-green-100" },
                        { icon: <span className="text-blue-600">{icons.phone}</span>, label: "TeleRefuah", color: "bg-blue-100" },
                        { icon: <span className="text-indigo-600">{icons.card}</span>, label: "ID Card", color: "bg-indigo-100" },
                        { icon: <span className="text-purple-600">{icons.folder}</span>, label: "Documents", color: "bg-purple-100" },
                      ].map((action) => (
                        <div key={action.label} className={`${action.color} rounded-xl p-3 text-center`}>
                          <div className="flex justify-center mb-1">{action.icon}</div>
                          <p className="text-[10px] font-medium">{action.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold mb-2">Recent Activity</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                              <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-[10px] font-medium">Dr. Goldberg</p>
                              <p className="text-[8px] text-gray-500">Feb 18</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-semibold text-green-600">Shared</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                              <svg className="w-3 h-3 text-yellow-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-[10px] font-medium">Lab Work</p>
                              <p className="text-[8px] text-gray-500">Jan 28</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-semibold text-yellow-600">Processing</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg flex justify-around py-2">
                      {[
                        { icon: icons.home, label: "Home", active: true },
                        { icon: icons.claims, label: "Claims" },
                        { icon: icons.plus, label: "", special: true },
                        { icon: icons.chat, label: "Help" },
                        { icon: icons.profile, label: "Profile" },
                      ].map((item, idx) => (
                        <div key={idx} className={`flex flex-col items-center ${
                          item.special ? '-mt-5' : ''
                        }`}>
                          {item.special ? (
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                              {item.icon}
                            </div>
                          ) : (
                            <>
                              <span className={item.active ? 'text-primary' : 'text-gray-400'}>{item.icon}</span>
                              <span className={`text-[8px] ${item.active ? 'text-primary font-medium' : 'text-gray-400'}`}>
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

          {/* Phone 2 - ID Card */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-[280px] h-[580px] bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-2xl z-20" />
                <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden">
                  <div className="h-11 bg-primary flex items-end justify-center pb-2">
                    <span className="text-white/80 text-xs font-medium">Member ID Card</span>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    {/* ID Card */}
                    <div className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-2xl p-4 text-white shadow-lg">
                      <div className="flex justify-between items-start mb-4">
                        <Image 
                          src="/images/UnitedRefuahLogoHands-2.svg" 
                          alt="United Refuah" 
                          width={32} 
                          height={32}
                          className="brightness-0 invert"
                        />
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Family</span>
                      </div>
                      <div className="mb-3">
                        <p className="text-[10px] text-white/60">Member Name</p>
                        <p className="font-bold">David Cohen</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div>
                          <p className="text-white/60">Member ID</p>
                          <p className="font-mono font-semibold">UR-2024-78432</p>
                        </div>
                        <div>
                          <p className="text-white/60">Group</p>
                          <p className="font-mono font-semibold">URHS-001</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/20 grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div>
                          <p className="text-white/60">PreShare</p>
                          <p className="font-bold">$4,500</p>
                        </div>
                        <div>
                          <p className="text-white/60">Sharing</p>
                          <p className="font-bold">80%</p>
                        </div>
                        <div>
                          <p className="text-white/60">CoShare</p>
                          <p className="font-bold">$9,000</p>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-primary text-white rounded-xl p-3 text-center">
                        <svg className="w-5 h-5 mx-auto mb-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <p className="text-[10px] font-medium">Download PDF</p>
                      </div>
                      <div className="bg-gray-100 rounded-xl p-3 text-center">
                        <svg className="w-5 h-5 mx-auto mb-1 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                        </svg>
                        <p className="text-[10px] font-medium">Share Card</p>
                      </div>
                    </div>

                    {/* Family Members */}
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-xs font-semibold mb-2">Family Member Cards</p>
                      <div className="space-y-2">
                        {["David Cohen", "Sarah Cohen", "Miriam Cohen", "Jacob Cohen"].map((name, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-white rounded-lg p-2">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[8px] font-semibold">
                                {name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <span className="text-[10px] font-medium">{name}</span>
                            </div>
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 font-medium">Digital ID Card</p>
          </div>

          {/* Phone 3 - Claims */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-[280px] h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-20" />
                <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden">
                  <div className="h-11 bg-primary flex items-end justify-center pb-2">
                    <span className="text-white/80 text-xs font-medium">My Claims</span>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    {/* Filter Tabs */}
                    <div className="flex gap-2">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-[10px]">All</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-[10px]">Pending</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-[10px]">Shared</span>
                    </div>

                    {/* Claims List */}
                    {[
                      { provider: "Dr. Goldberg", type: "Pediatric visit", amount: "$185", status: "Shared", date: "Feb 18", statusColor: "bg-green-100 text-green-700" },
                      { provider: "Quest Diagnostics", type: "Lab work", amount: "$342", status: "Processing", date: "Jan 28", statusColor: "bg-yellow-100 text-yellow-700" },
                      { provider: "Dr. Stern", type: "Annual checkup", amount: "$275", status: "Shared", date: "Jan 15", statusColor: "bg-green-100 text-green-700" },
                      { provider: "Urgent Care", type: "Office visit", amount: "$150", status: "Shared", date: "Dec 20", statusColor: "bg-green-100 text-green-700" },
                    ].map((claim, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-xl p-3">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium text-gray-900 text-xs">{claim.provider}</p>
                            <p className="text-[10px] text-gray-500">{claim.type}</p>
                          </div>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${claim.statusColor}`}>
                            {claim.status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-gray-400">{claim.date}</span>
                          <span className="font-semibold text-primary text-xs">{claim.amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 font-medium">Claims History</p>
          </div>

          {/* Phone 4 - Profile */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-[280px] h-[580px] bg-gray-800 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-800 rounded-b-2xl z-20" />
                <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden">
                  <div className="h-11 bg-primary flex items-end justify-center pb-2">
                    <span className="text-white/80 text-xs font-medium">My Profile</span>
                  </div>
                  
                  <div className="p-4">
                    {/* Profile Header */}
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-xl font-bold text-primary">DC</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm">David Cohen</h3>
                      <p className="text-[10px] text-gray-500">david.cohen@email.com</p>
                    </div>

                    {/* Plan Details */}
                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-3 text-white mb-3">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <p className="text-white/70 text-[10px]">Current Plan</p>
                          <p className="font-bold text-sm">Family Plan</p>
                        </div>
                        <p className="font-bold text-sm">$495/mo</p>
                      </div>
                      <div className="text-[10px] text-white/70">
                        Member since March 2023
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="space-y-2">
                      {[
                        { icon: icons.family, label: "Family Members", count: "4" },
                        { icon: icons.billing, label: "Payment Method" },
                        { icon: icons.bell, label: "Notifications", count: "2" },
                        { icon: icons.folder, label: "Documents" },
                        { icon: icons.lock, label: "Security" },
                        { icon: icons.help, label: "Help & Support" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center justify-between p-2 bg-gray-50 rounded-xl">
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">{item.icon}</span>
                            <span className="text-xs font-medium">{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {item.count && (
                              <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">
                                {item.count}
                              </span>
                            )}
                            <span className="text-gray-400 text-xs">›</span>
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
            { icon: icons.smartphone, title: "Install on Any Phone", desc: "Works on iPhone and Android without app store approval" },
            { icon: icons.bell, title: "Push Notifications", desc: "Real-time alerts for claims, payments, and announcements" },
            { icon: icons.wifi, title: "Works Offline", desc: "View ID card and account info even without internet" },
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
