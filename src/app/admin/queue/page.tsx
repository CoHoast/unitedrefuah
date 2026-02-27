"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock queue data
const queueData = {
  received: [
    { id: "DOC-2024-015", filename: "claim_martinez_20240223.pdf", member: "Ana Martinez", receivedAt: "14:45:32", source: "Email" },
    { id: "DOC-2024-016", filename: "eob_shapiro_20240223.pdf", member: "Joel Shapiro", receivedAt: "14:45:28", source: "FTP" },
  ],
  extracting: [
    { id: "DOC-2024-014", filename: "preauth_klein_20240223.pdf", member: "Rebecca Klein", startedAt: "14:44:55", progress: 65, source: "Email" },
  ],
  validating: [
    { id: "DOC-2024-013", filename: "invoice_berkowitz_20240223.pdf", member: "Sam Berkowitz", startedAt: "14:44:30", source: "Upload" },
  ],
  processed: [
    { id: "DOC-2024-012", filename: "eob_cohen_20240223.pdf", member: "David Cohen", completedAt: "14:44:15", confidence: 96 },
    { id: "DOC-2024-011", filename: "claim_levy_20240223.pdf", member: "Sarah Levy", completedAt: "14:43:58", confidence: 94 },
    { id: "DOC-2024-010", filename: "eob_stern_20240223.pdf", member: "Michael Stern", completedAt: "14:43:42", confidence: 98 },
  ],
  errors: [
    { id: "DOC-2024-009", filename: "scan_goldberg_20240223.pdf", member: "Hannah Goldberg", errorAt: "14:42:30", error: "Low image quality - OCR failed" },
  ],
};

const stats = {
  totalToday: 156,
  processed: 148,
  inQueue: 4,
  errors: 4,
  avgTime: "2.1s",
};

export default function QueuePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Processing Queue</h1>
          <p className="text-gray-600 mt-1">Real-time document processing status</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-amber-800 font-medium text-sm">View Only</span>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Last updated</p>
            <p className="font-mono text-lg">{currentTime.toLocaleTimeString()}</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Today</p>
            <p className="text-2xl font-bold">{stats.totalToday}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Processed</p>
            <p className="text-2xl font-bold text-green-600">{stats.processed}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">In Queue</p>
            <p className="text-2xl font-bold text-blue-600">{stats.inQueue}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Errors</p>
            <p className="text-2xl font-bold text-red-600">{stats.errors}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Avg Process Time</p>
            <p className="text-2xl font-bold">{stats.avgTime}</p>
          </CardContent>
        </Card>
      </div>

      {/* Queue Columns */}
      <div className="grid grid-cols-5 gap-4">
        {/* Received */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <h3 className="font-semibold">Received</h3>
            <Badge variant="secondary">{queueData.received.length}</Badge>
          </div>
          <div className="space-y-3">
            {queueData.received.map((doc) => (
              <Link key={doc.id} href={`/admin/documents/${doc.id}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <p className="font-mono text-sm font-medium">{doc.id}</p>
                    <p className="text-sm text-muted-foreground truncate mt-1">{doc.filename}</p>
                    <p className="text-sm mt-2">{doc.member}</p>
                    <div className="flex items-center justify-between mt-2">
                      <Badge variant="outline" className="text-xs">{doc.source}</Badge>
                      <span className="text-xs text-muted-foreground">{doc.receivedAt}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            {queueData.received.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No documents waiting
              </div>
            )}
          </div>
        </div>

        {/* Extracting */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
            <h3 className="font-semibold">Extracting</h3>
            <Badge variant="secondary">{queueData.extracting.length}</Badge>
          </div>
          <div className="space-y-3">
            {queueData.extracting.map((doc) => (
              <Link key={doc.id} href={`/admin/documents/${doc.id}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-blue-200">
                  <CardContent className="p-4">
                    <p className="font-mono text-sm font-medium">{doc.id}</p>
                    <p className="text-sm text-muted-foreground truncate mt-1">{doc.filename}</p>
                    <p className="text-sm mt-2">{doc.member}</p>
                    {/* Progress bar */}
                    <div className="mt-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-blue-600">Processing...</span>
                        <span>{doc.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${doc.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            {queueData.extracting.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No documents extracting
              </div>
            )}
          </div>
        </div>

        {/* Validating */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <h3 className="font-semibold">Validating</h3>
            <Badge variant="secondary">{queueData.validating.length}</Badge>
          </div>
          <div className="space-y-3">
            {queueData.validating.map((doc) => (
              <Link key={doc.id} href={`/admin/documents/${doc.id}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-yellow-200">
                  <CardContent className="p-4">
                    <p className="font-mono text-sm font-medium">{doc.id}</p>
                    <p className="text-sm text-muted-foreground truncate mt-1">{doc.filename}</p>
                    <p className="text-sm mt-2">{doc.member}</p>
                    <div className="flex items-center gap-2 mt-3">
                      <svg className="w-4 h-4 text-yellow-600 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-xs text-yellow-600">Validating data...</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
            {queueData.validating.length === 0 && (
              <div className="text-center py-8 text-muted-foreground text-sm">
                No documents validating
              </div>
            )}
          </div>
        </div>

        {/* Processed */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <h3 className="font-semibold">Processed</h3>
            <Badge variant="secondary">{queueData.processed.length}</Badge>
          </div>
          <div className="space-y-3">
            {queueData.processed.map((doc) => (
              <Link key={doc.id} href={`/admin/documents/${doc.id}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-green-200">
                  <CardContent className="p-4">
                    <p className="font-mono text-sm font-medium">{doc.id}</p>
                    <p className="text-sm text-muted-foreground truncate mt-1">{doc.filename}</p>
                    <p className="text-sm mt-2">{doc.member}</p>
                    <div className="flex items-center justify-between mt-3">
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        {doc.confidence}% confidence
                      </Badge>
                      <span className="text-xs text-muted-foreground">{doc.completedAt}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Errors */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <h3 className="font-semibold">Errors</h3>
            <Badge variant="secondary" className="bg-red-100 text-red-800">{queueData.errors.length}</Badge>
          </div>
          <div className="space-y-3">
            {queueData.errors.map((doc) => (
              <Link key={doc.id} href={`/admin/documents/${doc.id}`}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-red-200 bg-red-50">
                  <CardContent className="p-4">
                    <p className="font-mono text-sm font-medium">{doc.id}</p>
                    <p className="text-sm text-muted-foreground truncate mt-1">{doc.filename}</p>
                    <p className="text-sm mt-2">{doc.member}</p>
                    <div className="mt-3 p-2 bg-red-100 rounded text-xs text-red-700">
                      {doc.error}
                    </div>
                    <span className="text-xs text-muted-foreground block mt-2">{doc.errorAt}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
            {queueData.errors.length === 0 && (
              <div className="text-center py-8 text-green-600 text-sm">
                <svg className="w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                No errors
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
