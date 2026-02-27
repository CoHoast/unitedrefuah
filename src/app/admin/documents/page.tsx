"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const recentDocuments = [
  { id: "DOC-2024-001", filename: "EOB_Cohen_David_20240223.pdf", type: "EOB", member: "David Cohen", memberId: "UR-2024-78432", status: "processed", source: "FTP", extractedData: "Claim #CLM-8847", mcoStatus: "sent", processedAt: "2024-02-23 14:32:15", duration: "2.3s" },
  { id: "DOC-2024-002", filename: "CLAIM_Levy_Sarah_20240223.pdf", type: "Claim", member: "Sarah Levy", memberId: "UR-2024-78433", status: "processing", source: "FTP", extractedData: "-", mcoStatus: "pending", processedAt: "2024-02-23 14:32:10", duration: "-" },
  { id: "DOC-2024-003", filename: "EOB_Stern_Michael_20240223.pdf", type: "EOB", member: "Michael Stern", memberId: "UR-2024-78434", status: "processed", source: "FTP", extractedData: "Claim #CLM-8846", mcoStatus: "sent", processedAt: "2024-02-23 14:31:58", duration: "1.8s" },
  { id: "DOC-2024-004", filename: "INV_Green_Rachel_20240223.pdf", type: "Invoice", member: "Rachel Green", memberId: "UR-2024-78435", status: "error", source: "FTP", extractedData: "Parse error", mcoStatus: "failed", processedAt: "2024-02-23 14:31:45", duration: "0.5s" },
  { id: "DOC-2024-005", filename: "EOB_Rosen_Joshua_20240223.pdf", type: "EOB", member: "Joshua Rosen", memberId: "UR-2024-78436", status: "processed", source: "FTP", extractedData: "Claim #CLM-8845", mcoStatus: "sent", processedAt: "2024-02-23 14:31:32", duration: "2.1s" },
  { id: "DOC-2024-006", filename: "CLAIM_Katz_Hannah_20240223.pdf", type: "Claim", member: "Hannah Katz", memberId: "UR-2024-78437", status: "processed", source: "FTP", extractedData: "Claim #CLM-8844", mcoStatus: "sent", processedAt: "2024-02-23 14:31:18", duration: "1.9s" },
  { id: "DOC-2024-007", filename: "EOB_Weiss_Benjamin_20240223.pdf", type: "EOB", member: "Benjamin Weiss", memberId: "UR-2024-78438", status: "processed", source: "FTP", extractedData: "Claim #CLM-8843", mcoStatus: "sent", processedAt: "2024-02-23 14:31:05", duration: "2.0s" },
  { id: "DOC-2024-008", filename: "PREAUTH_Goldstein_Leah_20240223.pdf", type: "Pre-Auth", member: "Leah Goldstein", memberId: "UR-2024-78439", status: "processed", source: "FTP", extractedData: "Auth #PA-2241", mcoStatus: "sent", processedAt: "2024-02-23 14:30:52", duration: "2.4s" },
];

const pipelineStatus = {
  ftpConnection: "connected",
  lastSync: "2024-02-23 14:32:00",
  queueSize: 3,
  mcoConnection: "connected",
  avgProcessTime: "2.1s",
};

export default function DocumentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredDocs = recentDocuments.filter(doc => {
    const matchesSearch = doc.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.member.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.memberId.toLowerCase().includes(searchQuery.toLowerCase());
    if (statusFilter === "all") return matchesSearch;
    return matchesSearch && doc.status === statusFilter;
  });

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Document Processing</h1>
          <p className="text-gray-600 mt-1">Monitor FTP → Extract → MCO document pipeline</p>
        </div>
        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
          <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-amber-800 font-medium text-sm">View Only</span>
        </div>
      </div>

      {/* Pipeline Status */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
            Pipeline Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-8">
            {/* FTP Source */}
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                pipelineStatus.ftpConnection === "connected" ? "bg-green-100" : "bg-red-100"
              }`}>
                <svg className={`w-8 h-8 ${
                  pipelineStatus.ftpConnection === "connected" ? "text-green-600" : "text-red-600"
                }`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <p className="font-semibold mt-2">FTP Server</p>
              <Badge className={pipelineStatus.ftpConnection === "connected" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                {pipelineStatus.ftpConnection}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">Last sync: {pipelineStatus.lastSync}</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>

            {/* Processing */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <p className="font-semibold mt-2">Extract & Process</p>
              <Badge className="bg-blue-100 text-blue-800">{pipelineStatus.queueSize} in queue</Badge>
              <p className="text-xs text-muted-foreground mt-1">Avg time: {pipelineStatus.avgProcessTime}</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>

            {/* MCO */}
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                pipelineStatus.mcoConnection === "connected" ? "bg-green-100" : "bg-red-100"
              }`}>
                <svg className={`w-8 h-8 ${
                  pipelineStatus.mcoConnection === "connected" ? "text-green-600" : "text-red-600"
                }`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <p className="font-semibold mt-2">MCO System</p>
              <Badge className={pipelineStatus.mcoConnection === "connected" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                {pipelineStatus.mcoConnection}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">Data transmitted</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Today</p>
            <p className="text-2xl font-bold">342</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Processed</p>
            <p className="text-2xl font-bold text-green-600">338</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Processing</p>
            <p className="text-2xl font-bold text-blue-600">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Errors</p>
            <p className="text-2xl font-bold text-red-600">1</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Success Rate</p>
            <p className="text-2xl font-bold text-green-600">99.7%</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <Input
            type="search"
            placeholder="Search by filename, member, or ID..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant={statusFilter === "all" ? "default" : "outline"} size="sm" onClick={() => setStatusFilter("all")}>All</Button>
          <Button variant={statusFilter === "processed" ? "default" : "outline"} size="sm" onClick={() => setStatusFilter("processed")}>Processed</Button>
          <Button variant={statusFilter === "processing" ? "default" : "outline"} size="sm" onClick={() => setStatusFilter("processing")}>Processing</Button>
          <Button variant={statusFilter === "error" ? "default" : "outline"} size="sm" onClick={() => setStatusFilter("error")}>Errors</Button>
        </div>
      </div>

      {/* Documents Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-600">Document</th>
                <th className="text-left p-4 font-medium text-gray-600">Type</th>
                <th className="text-left p-4 font-medium text-gray-600">Member</th>
                <th className="text-left p-4 font-medium text-gray-600">Status</th>
                <th className="text-left p-4 font-medium text-gray-600">Extracted</th>
                <th className="text-left p-4 font-medium text-gray-600">MCO</th>
                <th className="text-left p-4 font-medium text-gray-600">Time</th>
                <th className="text-left p-4 font-medium text-gray-600">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => window.location.href = `/admin/documents/${doc.id}`}>
                  <td className="p-4">
                    <Link href={`/admin/documents/${doc.id}`} className="font-medium text-primary hover:underline">{doc.id}</Link>
                    <p className="text-xs text-muted-foreground truncate max-w-[200px]">{doc.filename}</p>
                  </td>
                  <td className="p-4">
                    <Badge variant="outline">{doc.type}</Badge>
                  </td>
                  <td className="p-4">
                    <p>{doc.member}</p>
                    <p className="text-xs text-muted-foreground">{doc.memberId}</p>
                  </td>
                  <td className="p-4">
                    <Badge className={
                      doc.status === "processed" ? "bg-green-100 text-green-800" :
                      doc.status === "processing" ? "bg-blue-100 text-blue-800" :
                      "bg-red-100 text-red-800"
                    }>
                      {doc.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-muted-foreground">{doc.extractedData}</td>
                  <td className="p-4">
                    <Badge className={
                      doc.mcoStatus === "sent" ? "bg-green-100 text-green-800" :
                      doc.mcoStatus === "pending" ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    }>
                      {doc.mcoStatus}
                    </Badge>
                  </td>
                  <td className="p-4 text-muted-foreground text-xs">{doc.processedAt}</td>
                  <td className="p-4 text-muted-foreground">{doc.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
