"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const familyMembers = [
  {
    id: 1,
    name: "David Cohen",
    relationship: "Primary",
    dob: "1985-06-15",
    age: 38,
    memberId: "UR-2024-78432-01",
    status: "active",
  },
  {
    id: 2,
    name: "Sarah Cohen",
    relationship: "Spouse",
    dob: "1987-03-22",
    age: 36,
    memberId: "UR-2024-78432-02",
    status: "active",
  },
  {
    id: 3,
    name: "Miriam Cohen",
    relationship: "Dependent",
    dob: "2012-09-10",
    age: 11,
    memberId: "UR-2024-78432-03",
    status: "active",
  },
  {
    id: 4,
    name: "Jacob Cohen",
    relationship: "Dependent",
    dob: "2015-04-28",
    age: 8,
    memberId: "UR-2024-78432-04",
    status: "active",
  },
  {
    id: 5,
    name: "Rebecca Cohen",
    relationship: "Dependent",
    dob: "2018-11-05",
    age: 5,
    memberId: "UR-2024-78432-05",
    status: "active",
  },
];

export default function FamilyPage() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Family Members</h2>
            <p className="text-muted-foreground">Manage covered members on your plan</p>
          </div>
          <Button>
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add Family Member
          </Button>
        </div>

        {/* Summary Card */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Family Plan</p>
                <p className="text-2xl font-bold">{familyMembers.length} Members Covered</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Monthly Share Amount</p>
                <p className="text-2xl font-bold text-primary">$495</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Family Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {familyMembers.map((member) => (
            <Card key={member.id}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <Badge 
                    variant={member.status === "active" ? "default" : "secondary"}
                    className={member.status === "active" ? "bg-green-100 text-green-800" : ""}
                  >
                    {member.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.relationship}</p>
                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Date of Birth:</span>
                    <span>{member.dob}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Age:</span>
                    <span>{member.age} years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Member ID:</span>
                    <span className="font-mono text-xs">{member.memberId}</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <Link href="/member/id-card">View ID Card</Link>
                  </Button>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Member CTA */}
        <Card className="border-dashed">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2">Add a Family Member</h3>
            <p className="text-muted-foreground mb-4">
              Need to add a spouse or dependent? Contact us to update your plan.
            </p>
            <Button>
              Request to Add Member
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Mobile */}
      <div className="lg:hidden p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Family Members</h1>
          <Button size="sm">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add
          </Button>
        </div>

        {/* Summary */}
        <Card className="bg-primary text-white">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white/70 text-sm">Family Plan</p>
                <p className="text-xl font-bold">{familyMembers.length} Members</p>
              </div>
              <div className="text-right">
                <p className="text-white/70 text-sm">Monthly</p>
                <p className="text-xl font-bold">$495</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Members List */}
        <div className="space-y-3">
          {familyMembers.map((member) => (
            <Card key={member.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold truncate">{member.name}</h3>
                      <Badge 
                        variant="secondary" 
                        className="bg-green-100 text-green-800 text-xs flex-shrink-0"
                      >
                        {member.relationship}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Age {member.age} • {member.dob}</p>
                    <p className="text-xs text-muted-foreground font-mono mt-1">{member.memberId}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
