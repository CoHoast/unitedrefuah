"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock report data
const dailyStats = [
  { date: "Feb 23", total: 342, processed: 338, errors: 4, avgTime: 2.1 },
  { date: "Feb 22", total: 318, processed: 315, errors: 3, avgTime: 2.3 },
  { date: "Feb 21", total: 287, processed: 285, errors: 2, avgTime: 1.9 },
  { date: "Feb 20", total: 356, processed: 351, errors: 5, avgTime: 2.4 },
  { date: "Feb 19", total: 298, processed: 296, errors: 2, avgTime: 2.0 },
  { date: "Feb 18", total: 0, processed: 0, errors: 0, avgTime: 0 }, // Weekend
  { date: "Feb 17", total: 0, processed: 0, errors: 0, avgTime: 0 }, // Weekend
];

const documentTypeBreakdown = [
  { type: "EOB", count: 145, percentage: 42 },
  { type: "Claims", count: 98, percentage: 29 },
  { type: "Pre-Auth", count: 52, percentage: 15 },
  { type: "Invoices", count: 35, percentage: 10 },
  { type: "Other", count: 12, percentage: 4 },
];

const sourceBreakdown = [
  { source: "Email Intake", count: 178, percentage: 52 },
  { source: "FTP Upload", count: 124, percentage: 36 },
  { source: "Member Portal", count: 28, percentage: 8 },
  { source: "Manual Upload", count: 12, percentage: 4 },
];

const errorTypes = [
  { type: "Low Image Quality", count: 8, percentage: 50 },
  { type: "Missing Member Info", count: 4, percentage: 25 },
  { type: "Invalid Document Format", count: 2, percentage: 12.5 },
  { type: "OCR Timeout", count: 2, percentage: 12.5 },
];

const monthlyTrend = {
  thisMonth: { total: 4256, processed: 4198, successRate: 98.6, avgTime: 2.1 },
  lastMonth: { total: 3892, processed: 3841, successRate: 98.7, avgTime: 2.2 },
  change: { total: 9.4, processed: 9.3, successRate: -0.1, avgTime: -4.5 },
};

export default function ReportsPage() {
  const maxDailyTotal = Math.max(...dailyStats.map(d => d.total));

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Processing Reports</h1>
          <p className="text-gray-600 mt-1">Document processing metrics and analytics</p>
        </div>
        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
          <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-amber-800 font-medium text-sm">View Only</span>
        </div>
      </div>

      {/* Monthly Summary */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Documents This Month</p>
                <p className="text-3xl font-bold mt-1">{monthlyTrend.thisMonth.total.toLocaleString()}</p>
              </div>
              <Badge className={monthlyTrend.change.total >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                {monthlyTrend.change.total >= 0 ? "+" : ""}{monthlyTrend.change.total}%
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              vs {monthlyTrend.lastMonth.total.toLocaleString()} last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Successfully Processed</p>
                <p className="text-3xl font-bold mt-1 text-green-600">{monthlyTrend.thisMonth.processed.toLocaleString()}</p>
              </div>
              <Badge className={monthlyTrend.change.processed >= 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                {monthlyTrend.change.processed >= 0 ? "+" : ""}{monthlyTrend.change.processed}%
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              vs {monthlyTrend.lastMonth.processed.toLocaleString()} last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Success Rate</p>
                <p className="text-3xl font-bold mt-1">{monthlyTrend.thisMonth.successRate}%</p>
              </div>
              <Badge className={monthlyTrend.change.successRate >= 0 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                {monthlyTrend.change.successRate >= 0 ? "+" : ""}{monthlyTrend.change.successRate}%
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              vs {monthlyTrend.lastMonth.successRate}% last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Processing Time</p>
                <p className="text-3xl font-bold mt-1">{monthlyTrend.thisMonth.avgTime}s</p>
              </div>
              <Badge className={monthlyTrend.change.avgTime <= 0 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                {monthlyTrend.change.avgTime}%
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              vs {monthlyTrend.lastMonth.avgTime}s last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Daily Chart */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Daily Processing Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2 h-48">
              {dailyStats.map((day, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div className="w-full flex flex-col items-center gap-1">
                    {day.errors > 0 && (
                      <div 
                        className="w-full bg-red-400 rounded-t"
                        style={{ height: `${(day.errors / maxDailyTotal) * 160}px` }}
                      />
                    )}
                    <div 
                      className="w-full bg-green-500 rounded-t"
                      style={{ height: day.total ? `${(day.processed / maxDailyTotal) * 160}px` : '4px', minHeight: '4px' }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{day.date}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-green-500" />
                <span className="text-sm text-muted-foreground">Processed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-400" />
                <span className="text-sm text-muted-foreground">Errors</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Document Types */}
        <Card>
          <CardHeader>
            <CardTitle>By Document Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documentTypeBreakdown.map((item) => (
                <div key={item.type}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.type}</span>
                    <span className="text-muted-foreground">{item.count} ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Source Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>By Intake Source</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sourceBreakdown.map((item) => (
                <div key={item.source} className="flex items-center gap-4">
                  <div className="w-32 text-sm">{item.source}</div>
                  <div className="flex-1">
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div 
                        className="bg-blue-500 h-3 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-20 text-right text-sm text-muted-foreground">
                    {item.count} ({item.percentage}%)
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Error Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Error Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {errorTypes.map((item) => (
                <div key={item.type} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    <span className="text-sm">{item.type}</span>
                  </div>
                  <Badge className="bg-red-100 text-red-800">
                    {item.count} ({item.percentage}%)
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Daily Details Table */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Daily Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-600">Date</th>
                <th className="text-right p-4 font-medium text-gray-600">Total</th>
                <th className="text-right p-4 font-medium text-gray-600">Processed</th>
                <th className="text-right p-4 font-medium text-gray-600">Errors</th>
                <th className="text-right p-4 font-medium text-gray-600">Success Rate</th>
                <th className="text-right p-4 font-medium text-gray-600">Avg Time</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {dailyStats.map((day, i) => (
                <tr key={i} className={day.total === 0 ? "text-muted-foreground bg-gray-50" : ""}>
                  <td className="p-4 font-medium">{day.date}</td>
                  <td className="p-4 text-right">{day.total || "—"}</td>
                  <td className="p-4 text-right text-green-600">{day.processed || "—"}</td>
                  <td className="p-4 text-right">{day.errors > 0 ? <span className="text-red-600">{day.errors}</span> : "—"}</td>
                  <td className="p-4 text-right">
                    {day.total > 0 ? `${((day.processed / day.total) * 100).toFixed(1)}%` : "—"}
                  </td>
                  <td className="p-4 text-right">{day.avgTime > 0 ? `${day.avgTime}s` : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
