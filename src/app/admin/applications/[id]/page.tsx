"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import type { Application } from "@/lib/db";

const statusColors = {
  PENDING: "bg-yellow-100 text-yellow-800",
  AI_REVIEW: "bg-blue-100 text-blue-800",
  NEEDS_REVIEW: "bg-orange-100 text-orange-800",
  APPROVED: "bg-green-100 text-green-800",
  DENIED: "bg-red-100 text-red-800",
};

const flagTypeColors = {
  info: "bg-blue-100 text-blue-800",
  warning: "bg-orange-100 text-orange-800",
  critical: "bg-red-100 text-red-800",
};

export default function ApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [application, setApplication] = useState<Application | null>(null);
  const [loading, setLoading] = useState(true);
  const [reviewNotes, setReviewNotes] = useState("");
  const [updating, setUpdating] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showDenyModal, setShowDenyModal] = useState(false);
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubject, setContactSubject] = useState("Regarding Your United Refuah Application");
  const [denyReason, setDenyReason] = useState("");
  const [sendingEmail, setSendingEmail] = useState(false);

  useEffect(() => {
    fetchApplication();
  }, [id]);

  const fetchApplication = async () => {
    try {
      const res = await fetch(`/api/applications/${id}`);
      const data = await res.json();
      setApplication(data.application);
      setReviewNotes(data.application?.review_notes || "");
    } catch (error) {
      console.error("Error fetching application:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (status: string, reason?: string) => {
    setUpdating(true);
    try {
      await fetch(`/api/applications/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          status, 
          reviewNotes, 
          reviewedBy: "Admin",
          denyReason: reason,
          sendEmail: true  // Trigger automated email
        }),
      });
      fetchApplication();
      if (status === "DENIED") {
        setShowDenyModal(false);
      }
    } catch (error) {
      console.error("Error updating application:", error);
    } finally {
      setUpdating(false);
    }
  };

  const sendContactEmail = async () => {
    if (!contactMessage.trim() || !application) return;
    
    setSendingEmail(true);
    try {
      await fetch(`/api/applications/${id}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: contactSubject,
          message: contactMessage,
          applicantEmail: application.email,
          applicantName: `${application.first_name} ${application.last_name}`,
        }),
      });
      setShowContactModal(false);
      setContactMessage("");
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setSendingEmail(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Application Not Found</h1>
          <Link href="/admin">
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  const aiAnalysis = application.ai_analysis ? JSON.parse(application.ai_analysis) : null;
  const flags = application.ai_flags ? JSON.parse(application.ai_flags) : [];
  const medicalConditions = application.medical_conditions ? JSON.parse(application.medical_conditions) : [];
  const dependents = application.dependents ? JSON.parse(application.dependents) : [];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin">
                <Button variant="ghost" size="sm">← Back</Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold">
                  {application.first_name} {application.last_name}
                </h1>
                <p className="text-sm text-muted-foreground">{application.email}</p>
              </div>
            </div>
            <Badge className={statusColors[application.status as keyof typeof statusColors]}>
              {application.status.replace("_", " ")}
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Analysis */}
            {aiAnalysis && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      🤖 AI Analysis
                    </CardTitle>
                    <div className={`text-3xl font-bold ${
                      (application.ai_score ?? 0) >= 80 ? "text-green-600" :
                      (application.ai_score ?? 0) >= 50 ? "text-orange-600" :
                      "text-red-600"
                    }`}>
                      {application.ai_score}/100
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{aiAnalysis.summary}</p>
                  
                  {flags.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Flags ({flags.length})</h4>
                      <div className="space-y-2">
                        {flags.map((flag: { type: string; category: string; message: string; details?: string }, i: number) => (
                          <div key={i} className="p-3 rounded-lg bg-muted/50">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className={flagTypeColors[flag.type as keyof typeof flagTypeColors]}>
                                {flag.type}
                              </Badge>
                              <span className="font-medium">{flag.category}</span>
                            </div>
                            <p className="text-sm">{flag.message}</p>
                            {flag.details && (
                              <p className="text-xs text-muted-foreground mt-1">{flag.details}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {aiAnalysis.recommendations?.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Recommendations</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {aiAnalysis.recommendations.map((rec: string, i: number) => (
                          <li key={i}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Application Details */}
            <Card>
              <CardHeader>
                <CardTitle>Application Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Plan */}
                <div>
                  <h4 className="font-medium mb-2">Plan</h4>
                  <Badge variant="secondary" className="text-lg capitalize">
                    {application.plan_type}
                  </Badge>
                </div>

                <Separator />

                {/* Personal Info */}
                <div>
                  <h4 className="font-medium mb-3">Personal Information</h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Name:</span>{" "}
                      {application.first_name} {application.last_name}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Email:</span>{" "}
                      {application.email}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Phone:</span>{" "}
                      {application.phone}
                    </div>
                    <div>
                      <span className="text-muted-foreground">DOB:</span>{" "}
                      {application.date_of_birth}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Gender:</span>{" "}
                      {application.gender}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Address */}
                <div>
                  <h4 className="font-medium mb-3">Address</h4>
                  <p className="text-sm">
                    {application.address}<br />
                    {application.city}, {application.state} {application.zip_code}
                  </p>
                </div>

                <Separator />

                {/* Health */}
                <div>
                  <h4 className="font-medium mb-3">Health Information</h4>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Height:</span>{" "}
                      {application.height || "Not provided"}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Weight:</span>{" "}
                      {application.weight || "Not provided"}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Tobacco:</span>{" "}
                      {application.tobacco_use ? "Yes" : "No"}
                    </div>
                  </div>
                  {medicalConditions.length > 0 && (
                    <div className="mt-3">
                      <span className="text-muted-foreground text-sm">Conditions:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {medicalConditions.map((c: string, i: number) => (
                          <Badge key={i} variant="outline">{c}</Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {application.current_medications && (
                    <div className="mt-3">
                      <span className="text-muted-foreground text-sm">Medications:</span>
                      <p className="text-sm mt-1">{application.current_medications}</p>
                    </div>
                  )}
                </div>

                {/* Spouse */}
                {application.spouse_first_name && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-3">Spouse</h4>
                      <div className="grid sm:grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Name:</span>{" "}
                          {application.spouse_first_name} {application.spouse_last_name}
                        </div>
                        <div>
                          <span className="text-muted-foreground">DOB:</span>{" "}
                          {application.spouse_dob}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Dependents */}
                {dependents.length > 0 && (
                  <>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-3">Dependents ({dependents.length})</h4>
                      <div className="space-y-2">
                        {dependents.map((d: { firstName: string; lastName: string; dateOfBirth: string }, i: number) => (
                          <div key={i} className="text-sm p-2 bg-muted/50 rounded">
                            {d.firstName} {d.lastName} - {d.dateOfBirth}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Review Notes</label>
                  <Textarea
                    value={reviewNotes}
                    onChange={(e) => setReviewNotes(e.target.value)}
                    placeholder="Add notes about this application..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => updateStatus("APPROVED")}
                    disabled={updating || application.status === "APPROVED"}
                  >
                    ✓ Approve Application
                  </Button>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setShowContactModal(true)}
                    disabled={updating}
                  >
                    ✉ Contact Applicant
                  </Button>
                  <Button 
                    className="w-full"
                    variant="outline"
                    onClick={() => updateStatus("NEEDS_REVIEW")}
                    disabled={updating || application.status === "NEEDS_REVIEW"}
                  >
                    Flag for Review
                  </Button>
                  <Button 
                    className="w-full"
                    variant="destructive"
                    onClick={() => setShowDenyModal(true)}
                    disabled={updating || application.status === "DENIED"}
                  >
                    ✗ Deny Application
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
                    <div>
                      <p className="font-medium">Submitted</p>
                      <p className="text-muted-foreground">{new Date(application.created_at).toLocaleString()}</p>
                    </div>
                  </div>
                  {application.reviewed_at && (
                    <div className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-success mt-1.5"></div>
                      <div>
                        <p className="font-medium">Reviewed by {application.reviewed_by}</p>
                        <p className="text-muted-foreground">{new Date(application.reviewed_at).toLocaleString()}</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Contact Applicant Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg mx-4 shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Contact Applicant</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Send a direct email to {application.first_name} {application.last_name} ({application.email})
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <input
                  type="text"
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  placeholder="Enter your message to the applicant..."
                  rows={6}
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setShowContactModal(false);
                  setContactMessage("");
                }}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={sendContactEmail}
                disabled={sendingEmail || !contactMessage.trim()}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                {sendingEmail ? "Sending..." : "Send Email"}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Deny Application Modal */}
      {showDenyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg mx-4 shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-red-600">Deny Application</h3>
            <p className="text-sm text-muted-foreground mb-4">
              This will send an automated denial email to {application.first_name} {application.last_name}.
            </p>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Denial Reason</label>
              <select
                value={denyReason}
                onChange={(e) => setDenyReason(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 mb-4"
              >
                <option value="">Select a reason...</option>
                <option value="statement_of_beliefs">Did not accept Statement of Beliefs</option>
                <option value="active_cancer">Active cancer treatment</option>
                <option value="coverage_gap">Coverage gap exceeds 63 days</option>
                <option value="pre_existing_severe">Severe pre-existing condition</option>
                <option value="age_requirement">Does not meet age requirement</option>
                <option value="incomplete_application">Incomplete application</option>
                <option value="other">Other (specify in notes)</option>
              </select>
              
              <label className="text-sm font-medium mb-2 block">Additional Notes (optional)</label>
              <Textarea
                value={reviewNotes}
                onChange={(e) => setReviewNotes(e.target.value)}
                placeholder="Add any additional details about the denial..."
                rows={3}
              />
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setShowDenyModal(false);
                  setDenyReason("");
                }}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => updateStatus("DENIED", denyReason)}
                disabled={updating || !denyReason}
                className="flex-1"
              >
                {updating ? "Processing..." : "Confirm Denial"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
