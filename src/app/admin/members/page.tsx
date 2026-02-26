"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const members = [
  { id: "UR-2024-78432", name: "David Cohen", email: "david.cohen@email.com", phone: "(216) 555-0101", plan: "Family", status: "active", paymentStatus: "current", monthlyAmount: 495, lastPayment: "Feb 1, 2024", joined: "Mar 2023", dependents: 4 },
  { id: "UR-2024-78433", name: "Sarah Levy", email: "sarah.levy@email.com", phone: "(216) 555-0102", plan: "Couple", status: "active", paymentStatus: "current", monthlyAmount: 325, lastPayment: "Feb 1, 2024", joined: "Feb 2024", dependents: 1 },
  { id: "UR-2024-78434", name: "Michael Stern", email: "m.stern@email.com", phone: "(216) 555-0103", plan: "Individual", status: "active", paymentStatus: "past_due", monthlyAmount: 195, lastPayment: "Dec 1, 2023", joined: "Jan 2024", dependents: 0 },
  { id: "UR-2024-78435", name: "Rachel Green", email: "rachel.g@email.com", phone: "(216) 555-0104", plan: "Family", status: "active", paymentStatus: "current", monthlyAmount: 495, lastPayment: "Feb 1, 2024", joined: "Feb 2024", dependents: 3 },
  { id: "UR-2024-78436", name: "Joshua Rosen", email: "j.rosen@email.com", phone: "(216) 555-0105", plan: "Couple", status: "suspended", paymentStatus: "delinquent", monthlyAmount: 325, lastPayment: "Oct 1, 2023", joined: "Dec 2023", dependents: 1 },
  { id: "UR-2024-78437", name: "Hannah Katz", email: "hannah.k@email.com", phone: "(216) 555-0106", plan: "Individual", status: "active", paymentStatus: "current", monthlyAmount: 195, lastPayment: "Feb 1, 2024", joined: "Jan 2024", dependents: 0 },
  { id: "UR-2024-78438", name: "Benjamin Weiss", email: "ben.weiss@email.com", phone: "(216) 555-0107", plan: "Family", status: "active", paymentStatus: "current", monthlyAmount: 495, lastPayment: "Feb 1, 2024", joined: "Nov 2023", dependents: 5 },
  { id: "UR-2024-78439", name: "Leah Goldstein", email: "leah.g@email.com", phone: "(216) 555-0108", plan: "Couple", status: "active", paymentStatus: "past_due", monthlyAmount: 325, lastPayment: "Jan 1, 2024", joined: "Oct 2023", dependents: 1 },
  { id: "UR-2024-78440", name: "Aaron Shapiro", email: "a.shapiro@email.com", phone: "(216) 555-0109", plan: "Individual", status: "cancelled", paymentStatus: "n/a", monthlyAmount: 0, lastPayment: "Dec 1, 2023", joined: "Jun 2023", dependents: 0 },
  { id: "UR-2024-78441", name: "Miriam Feldman", email: "m.feldman@email.com", phone: "(216) 555-0110", plan: "Family", status: "active", paymentStatus: "current", monthlyAmount: 495, lastPayment: "Feb 1, 2024", joined: "Aug 2023", dependents: 2 },
];

const filters = [
  { id: "all", label: "All Members" },
  { id: "active", label: "Active" },
  { id: "past_due", label: "Past Due" },
  { id: "delinquent", label: "Delinquent" },
  { id: "suspended", label: "Suspended" },
];

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "active") return matchesSearch && member.status === "active" && member.paymentStatus === "current";
    if (activeFilter === "past_due") return matchesSearch && member.paymentStatus === "past_due";
    if (activeFilter === "delinquent") return matchesSearch && member.paymentStatus === "delinquent";
    if (activeFilter === "suspended") return matchesSearch && member.status === "suspended";
    return matchesSearch;
  });

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Members</h1>
          <p className="text-gray-600 mt-1">Manage all United Refuah members</p>
        </div>
        <Button>
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add Member
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Total Members</p>
            <p className="text-2xl font-bold">5,247</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Active</p>
            <p className="text-2xl font-bold text-green-600">4,892</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Past Due</p>
            <p className="text-2xl font-bold text-yellow-600">127</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Delinquent</p>
            <p className="text-2xl font-bold text-red-600">43</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Monthly Revenue</p>
            <p className="text-2xl font-bold">$1.8M</p>
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
            placeholder="Search by name, ID, or email..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Members Table */}
      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-600">Member</th>
                <th className="text-left p-4 font-medium text-gray-600">Plan</th>
                <th className="text-left p-4 font-medium text-gray-600">Status</th>
                <th className="text-left p-4 font-medium text-gray-600">Payment</th>
                <th className="text-left p-4 font-medium text-gray-600">Monthly</th>
                <th className="text-left p-4 font-medium text-gray-600">Last Payment</th>
                <th className="text-right p-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50">
                  <td className="p-4">
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.id}</p>
                      <p className="text-sm text-muted-foreground">{member.email}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant="outline">{member.plan}</Badge>
                    {member.dependents > 0 && (
                      <p className="text-xs text-muted-foreground mt-1">+{member.dependents} dependents</p>
                    )}
                  </td>
                  <td className="p-4">
                    <Badge className={
                      member.status === "active" ? "bg-green-100 text-green-800" :
                      member.status === "suspended" ? "bg-yellow-100 text-yellow-800" :
                      "bg-gray-100 text-gray-800"
                    }>
                      {member.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Badge className={
                      member.paymentStatus === "current" ? "bg-green-100 text-green-800" :
                      member.paymentStatus === "past_due" ? "bg-yellow-100 text-yellow-800" :
                      member.paymentStatus === "delinquent" ? "bg-red-100 text-red-800" :
                      "bg-gray-100 text-gray-800"
                    }>
                      {member.paymentStatus === "current" ? "Current" :
                       member.paymentStatus === "past_due" ? "Past Due" :
                       member.paymentStatus === "delinquent" ? "Delinquent" : "N/A"}
                    </Badge>
                  </td>
                  <td className="p-4 font-medium">
                    {member.monthlyAmount > 0 ? `$${member.monthlyAmount}` : "-"}
                  </td>
                  <td className="p-4 text-muted-foreground">
                    {member.lastPayment}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/admin/members/${member.id}`}>View</Link>
                      </Button>
                      <Button variant="ghost" size="sm">Email</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-muted-foreground">
          Showing {filteredMembers.length} of 5,247 members
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm">Next</Button>
        </div>
      </div>
    </div>
  );
}
