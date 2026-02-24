"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Application } from "@/lib/db";

interface Stats {
  total: number;
  pending: number;
  needsReview: number;
  approved: number;
  denied: number;
}

const statusColors = {
  PENDING: "bg-yellow-100 text-yellow-800",
  AI_REVIEW: "bg-blue-100 text-blue-800",
  NEEDS_REVIEW: "bg-orange-100 text-orange-800",
  APPROVED: "bg-green-100 text-green-800",
  DENIED: "bg-red-100 text-red-800",
};

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, pending: 0, needsReview: 0, approved: 0, denied: 0 });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const res = await fetch("/api/applications");
      const data = await res.json();
      setApplications(data.applications || []);
      setStats(data.stats || { total: 0, pending: 0, needsReview: 0, approved: 0, denied: 0 });
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status, reviewedBy: "Admin" }),
      });
      fetchApplications();
    } catch (error) {
      console.error("Error updating application:", error);
    }
  };

  const filteredApplications = filter === "all" 
    ? applications 
    : applications.filter(a => a.status === filter);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">United Refuah Application Management</p>
            </div>
            <Link href="/">
              <Button variant="outline">← Back to Site</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="cursor-pointer hover:shadow-md" onClick={() => setFilter("all")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md" onClick={() => setFilter("PENDING")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-yellow-600">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{stats.pending}</div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md" onClick={() => setFilter("NEEDS_REVIEW")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-orange-600">Needs Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">{stats.needsReview}</div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md" onClick={() => setFilter("APPROVED")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-600">Approved</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{stats.approved}</div>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-md" onClick={() => setFilter("DENIED")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-red-600">Denied</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-600">{stats.denied}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filter indicator */}
        {filter !== "all" && (
          <div className="mb-4 flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Filtering by:</span>
            <Badge className={statusColors[filter as keyof typeof statusColors]}>{filter}</Badge>
            <Button variant="ghost" size="sm" onClick={() => setFilter("all")}>Clear</Button>
          </div>
        )}

        {/* Applications List */}
        <Card>
          <CardHeader>
            <CardTitle>Applications ({filteredApplications.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredApplications.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No applications found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-3 font-medium">Applicant</th>
                      <th className="pb-3 font-medium">Plan</th>
                      <th className="pb-3 font-medium">Status</th>
                      <th className="pb-3 font-medium">AI Score</th>
                      <th className="pb-3 font-medium">Submitted</th>
                      <th className="pb-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredApplications.map((app) => {
                      const aiAnalysis = app.ai_analysis ? JSON.parse(app.ai_analysis) : null;
                      const flags = app.ai_flags ? JSON.parse(app.ai_flags) : [];
                      
                      return (
                        <tr key={app.id} className="border-b last:border-0">
                          <td className="py-4">
                            <div className="font-medium">{app.first_name} {app.last_name}</div>
                            <div className="text-sm text-muted-foreground">{app.email}</div>
                          </td>
                          <td className="py-4 capitalize">{app.plan_type}</td>
                          <td className="py-4">
                            <Badge className={statusColors[app.status as keyof typeof statusColors]}>
                              {app.status.replace("_", " ")}
                            </Badge>
                          </td>
                          <td className="py-4">
                            {app.ai_score !== null && (
                              <div className="flex items-center gap-2">
                                <div className={`text-lg font-bold ${
                                  app.ai_score >= 80 ? "text-green-600" :
                                  app.ai_score >= 50 ? "text-orange-600" :
                                  "text-red-600"
                                }`}>
                                  {app.ai_score}
                                </div>
                                {flags.length > 0 && (
                                  <span className="text-xs text-muted-foreground">
                                    ({flags.length} flags)
                                  </span>
                                )}
                              </div>
                            )}
                          </td>
                          <td className="py-4 text-sm text-muted-foreground">
                            {formatDate(app.created_at)}
                          </td>
                          <td className="py-4">
                            <div className="flex gap-2">
                              <Link href={`/admin/applications/${app.id}`}>
                                <Button size="sm" variant="outline">View</Button>
                              </Link>
                              {app.status !== "APPROVED" && (
                                <Button 
                                  size="sm" 
                                  variant="default"
                                  className="bg-green-600 hover:bg-green-700"
                                  onClick={() => updateStatus(app.id, "APPROVED")}
                                >
                                  Approve
                                </Button>
                              )}
                              {app.status !== "DENIED" && (
                                <Button 
                                  size="sm" 
                                  variant="destructive"
                                  onClick={() => updateStatus(app.id, "DENIED")}
                                >
                                  Deny
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
