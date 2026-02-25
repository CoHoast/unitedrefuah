import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Static admin dashboard preview

export default function AdminPreview() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
            <Badge variant="outline">Super Admin</Badge>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">admin@unitedrefuahhs.org</span>
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
              A
            </div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {[
            { label: "Pending Applications", value: "12", change: "+3 today", color: "text-yellow-600", bg: "bg-yellow-50" },
            { label: "Active Members", value: "5,234", change: "+28 this month", color: "text-green-600", bg: "bg-green-50" },
            { label: "Open Claims", value: "47", change: "8 need review", color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Monthly Revenue", value: "$2.4M", change: "+12% vs last month", color: "text-purple-600", bg: "bg-purple-50" },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm mt-2 ${stat.color}`}>{stat.change}</p>
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
                      {/* AI Score */}
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${
                          app.score >= 80 ? 'text-green-600' : 
                          app.score >= 60 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {app.score}
                        </div>
                        <p className="text-xs text-gray-500">AI Score</p>
                      </div>
                      {/* Risk Badge */}
                      <Badge className={
                        app.risk === 'low' ? 'bg-green-100 text-green-700' :
                        app.risk === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }>
                        {app.flags} flags
                      </Badge>
                      {/* Actions */}
                      <div className="flex gap-2">
                        <div className="px-3 py-1.5 bg-green-600 text-white rounded text-sm font-medium">
                          Approve
                        </div>
                        <div className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded text-sm font-medium">
                          Review
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Analysis Panel */}
          <Card>
            <CardHeader>
              <CardTitle>AI Risk Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div>
                      <p className="font-medium text-yellow-800">Pre-existing Condition</p>
                      <p className="text-sm text-yellow-700">Diabetes Type 2 disclosed - requires standard waiting period</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <div>
                      <p className="font-medium text-blue-800">BMI Note</p>
                      <p className="text-sm text-blue-700">BMI 31.2 - slightly elevated, within guidelines</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-green-800">Recommendation</p>
                      <p className="text-sm text-green-700">Approve with standard terms</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium text-gray-900 mb-3">Scoring Breakdown</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Age Factor", score: "95/100" },
                      { label: "Health History", score: "72/100" },
                      { label: "Lifestyle", score: "88/100" },
                      { label: "Coverage Match", score: "90/100" },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between text-sm">
                        <span className="text-gray-600">{item.label}</span>
                        <span className="font-medium">{item.score}</span>
                      </div>
                    ))}
                  </div>
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
                { action: "Application approved", user: "Admin", target: "Michael Friedman", time: "2 minutes ago" },
                { action: "Claim reviewed", user: "Admin", target: "Claim #4521", time: "15 minutes ago" },
                { action: "Member note added", user: "Support", target: "Sarah Goldstein", time: "1 hour ago" },
                { action: "Application denied", user: "Admin", target: "John Doe", time: "2 hours ago" },
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                    {activity.user[0]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>
                      {' '}{activity.action}{' '}
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
  );
}
