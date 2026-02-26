"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const claims = [
  { 
    id: "SHR-2024-1847", 
    provider: "Dr. Sarah Goldberg, MD",
    service: "Pediatric wellness visit",
    date: "Feb 18, 2024",
    submitted: "Feb 20, 2024",
    amount: 185,
    shared: 148,
    yourCost: 37,
    status: "shared",
  },
  { 
    id: "SHR-2024-1832", 
    provider: "Quest Diagnostics",
    service: "Laboratory services - blood work",
    date: "Jan 28, 2024",
    submitted: "Jan 30, 2024",
    amount: 342,
    shared: 0,
    yourCost: 0,
    status: "processing",
  },
  { 
    id: "SHR-2024-1798", 
    provider: "Cleveland Clinic",
    service: "Urgent care visit",
    date: "Jan 15, 2024",
    submitted: "Jan 17, 2024",
    amount: 275,
    shared: 220,
    yourCost: 55,
    status: "shared",
  },
  { 
    id: "SHR-2024-1756", 
    provider: "CVS Pharmacy",
    service: "Prescription - Amoxicillin",
    date: "Jan 12, 2024",
    submitted: "Jan 12, 2024",
    amount: 45,
    shared: 0,
    yourCost: 45,
    status: "preshare",
  },
  { 
    id: "SHR-2023-1702", 
    provider: "Dr. Michael Stern, DDS",
    service: "Dental cleaning",
    date: "Dec 5, 2023",
    submitted: "Dec 7, 2023",
    amount: 150,
    shared: 0,
    yourCost: 150,
    status: "not_eligible",
  },
  { 
    id: "SHR-2023-1688", 
    provider: "Cleveland Clinic",
    service: "Annual physical exam",
    date: "Nov 20, 2023",
    submitted: "Nov 22, 2023",
    amount: 350,
    shared: 280,
    yourCost: 70,
    status: "shared",
  },
];

const statusConfig = {
  shared: { label: "Shared", color: "bg-green-100 text-green-700", dotColor: "bg-green-500" },
  processing: { label: "Processing", color: "bg-yellow-100 text-yellow-700", dotColor: "bg-yellow-500" },
  preshare: { label: "PreShare", color: "bg-blue-100 text-blue-700", dotColor: "bg-blue-500" },
  not_eligible: { label: "Not Eligible", color: "bg-gray-100 text-gray-700", dotColor: "bg-gray-500" },
  denied: { label: "Denied", color: "bg-red-100 text-red-700", dotColor: "bg-red-500" },
};

const filterOptions = [
  { key: "all", label: "All Claims" },
  { key: "processing", label: "Processing" },
  { key: "shared", label: "Shared" },
  { key: "preshare", label: "PreShare" },
  { key: "not_eligible", label: "Not Eligible" },
];

// Summary stats
const stats = {
  totalClaims: claims.length,
  totalBilled: claims.reduce((sum, c) => sum + c.amount, 0),
  totalShared: claims.reduce((sum, c) => sum + c.shared, 0),
  processing: claims.filter(c => c.status === "processing").length,
};

export default function ClaimsPage() {
  const [filter, setFilter] = useState("all");

  const filteredClaims = filter === "all" 
    ? claims 
    : claims.filter(c => c.status === filter);

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Sharing Requests</h2>
            <p className="text-muted-foreground">Track your medical expense sharing requests</p>
          </div>
          <Button asChild>
            <Link href="/member/submit">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Submit New Request
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Total Claims</p>
              <p className="text-2xl font-bold">{stats.totalClaims}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Total Billed</p>
              <p className="text-2xl font-bold">${stats.totalBilled.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Amount Shared</p>
              <p className="text-2xl font-bold text-green-600">${stats.totalShared.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">Processing</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.processing}</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {filterOptions.map((f) => (
            <Button
              key={f.key}
              variant={filter === f.key ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(f.key)}
            >
              {f.label}
              {f.key !== "all" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({claims.filter(c => f.key === "all" || c.status === f.key).length})
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Claims Table */}
        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium text-muted-foreground">Claim ID</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Provider / Service</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Service Date</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Billed</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Shared</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Your Cost</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-right p-4 font-medium text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredClaims.map((claim) => {
                  const status = statusConfig[claim.status as keyof typeof statusConfig];
                  return (
                    <tr key={claim.id} className="hover:bg-muted/30">
                      <td className="p-4">
                        <span className="font-mono text-sm">{claim.id}</span>
                      </td>
                      <td className="p-4">
                        <p className="font-medium text-gray-900">{claim.provider}</p>
                        <p className="text-sm text-muted-foreground">{claim.service}</p>
                      </td>
                      <td className="p-4 text-muted-foreground">{claim.date}</td>
                      <td className="p-4 font-medium">${claim.amount}</td>
                      <td className="p-4">
                        {claim.shared > 0 ? (
                          <span className="text-green-600 font-medium">${claim.shared}</span>
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="p-4">
                        {claim.yourCost > 0 ? (
                          <span className="font-medium">${claim.yourCost}</span>
                        ) : (
                          <span className="text-green-600 font-medium">$0</span>
                        )}
                      </td>
                      <td className="p-4">
                        <Badge className={status.color}>{status.label}</Badge>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {filteredClaims.length === 0 && (
              <div className="p-12 text-center">
                <p className="text-muted-foreground">No claims found with this filter</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Help Text */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <div className="text-sm">
                <p className="font-medium text-blue-900">Understanding Your Claims</p>
                <p className="text-blue-800 mt-1">
                  <strong>PreShare:</strong> Applied to your annual PreShare amount. 
                  <strong className="ml-2">Shared:</strong> Shared by the community (80% after PreShare is met).
                  <strong className="ml-2">Processing:</strong> Under review, typically 5-7 business days.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Sharing Requests</h1>
            <p className="text-gray-500 text-sm">Track your medical expense sharing</p>
          </div>
          <Button size="sm" asChild>
            <Link href="/member/submit">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-green-600">${stats.totalShared}</p>
              <p className="text-xs text-muted-foreground">Amount Shared</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <p className="text-2xl font-bold text-yellow-600">{stats.processing}</p>
              <p className="text-xs text-muted-foreground">Processing</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {filterOptions.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filter === f.key
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Claims List */}
        <div className="space-y-3">
          {filteredClaims.map((claim) => {
            const status = statusConfig[claim.status as keyof typeof statusConfig];
            return (
              <Card key={claim.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{claim.provider}</p>
                      <p className="text-sm text-gray-500">{claim.service}</p>
                    </div>
                    <Badge className={status.color}>{status.label}</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      <span className="font-mono text-xs">{claim.id}</span>
                      <span className="mx-2">•</span>
                      {claim.date}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Billed: ${claim.amount}</p>
                      <p className="font-semibold text-gray-900">
                        Your cost: <span className={claim.yourCost === 0 ? "text-green-600" : ""}>${claim.yourCost}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredClaims.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No claims found</p>
          </div>
        )}
      </div>
    </>
  );
}
