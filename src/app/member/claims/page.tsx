"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const claims = [
  { 
    id: "SHR-2024-1847", 
    provider: "Dr. Sarah Goldberg, MD",
    service: "Pediatric wellness visit",
    date: "Feb 18, 2024",
    amount: 185,
    yourCost: 37,
    status: "shared",
  },
  { 
    id: "SHR-2024-1832", 
    provider: "Quest Diagnostics",
    service: "Laboratory services - blood work",
    date: "Jan 28, 2024",
    amount: 342,
    yourCost: 0,
    status: "processing",
  },
  { 
    id: "SHR-2024-1798", 
    provider: "Cleveland Clinic",
    service: "Urgent care visit",
    date: "Jan 15, 2024",
    amount: 275,
    yourCost: 55,
    status: "shared",
  },
  { 
    id: "SHR-2024-1756", 
    provider: "CVS Pharmacy",
    service: "Prescription - Amoxicillin",
    date: "Jan 12, 2024",
    amount: 45,
    yourCost: 45,
    status: "preshare",
  },
  { 
    id: "SHR-2023-1702", 
    provider: "Dr. Michael Stern, DDS",
    service: "Dental cleaning",
    date: "Dec 5, 2023",
    amount: 150,
    yourCost: 150,
    status: "not_eligible",
  },
];

const statusConfig = {
  shared: { label: "Shared", color: "bg-green-100 text-green-700" },
  processing: { label: "Processing", color: "bg-yellow-100 text-yellow-700" },
  preshare: { label: "PreShare", color: "bg-blue-100 text-blue-700" },
  not_eligible: { label: "Not Eligible", color: "bg-gray-100 text-gray-700" },
  denied: { label: "Denied", color: "bg-red-100 text-red-700" },
};

export default function ClaimsPage() {
  const [filter, setFilter] = useState("all");

  const filteredClaims = filter === "all" 
    ? claims 
    : claims.filter(c => c.status === filter);

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-gray-900">Sharing Requests</h1>
        <p className="text-gray-500 text-sm">Track your medical expense sharing</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {[
          { key: "all", label: "All" },
          { key: "processing", label: "Processing" },
          { key: "shared", label: "Shared" },
          { key: "preshare", label: "PreShare" },
        ].map((f) => (
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
        {filteredClaims.map((claim) => (
          <Card key={claim.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{claim.provider}</p>
                  <p className="text-sm text-gray-500">{claim.service}</p>
                </div>
                <Badge className={statusConfig[claim.status as keyof typeof statusConfig].color}>
                  {statusConfig[claim.status as keyof typeof statusConfig].label}
                </Badge>
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
        ))}
      </div>

      {filteredClaims.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No claims found</p>
        </div>
      )}
    </div>
  );
}
