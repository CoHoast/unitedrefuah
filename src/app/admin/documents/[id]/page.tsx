"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Mock document data - in production this would come from API
const getDocument = (id: string) => ({
  id,
  filename: "EOB_Cohen_David_20240223.pdf",
  type: "EOB",
  member: {
    name: "David Cohen",
    id: "UR-2024-78432",
    plan: "Family",
    email: "david.cohen@email.com",
  },
  status: "processed",
  source: "Email Intake",
  receivedAt: "2024-02-23 14:30:00",
  processedAt: "2024-02-23 14:32:15",
  duration: "2.3s",
  fileSize: "245 KB",
  pages: 3,
  extractedData: {
    claimNumber: "CLM-2024-8847",
    serviceDate: "2024-02-15",
    provider: "Cleveland Clinic",
    providerNPI: "1234567890",
    totalBilled: "$1,250.00",
    amountAllowed: "$980.00",
    patientResponsibility: "$196.00",
    diagnosis: ["J06.9 - Acute upper respiratory infection"],
    procedures: [
      { code: "99213", description: "Office visit, established patient", amount: "$150.00" },
      { code: "87880", description: "Strep test", amount: "$45.00" },
      { code: "71046", description: "Chest X-ray", amount: "$285.00" },
    ],
    confidence: 94,
  },
  mcoStatus: "sent",
  mcoTransmittedAt: "2024-02-23 14:32:18",
  mcoReference: "MCO-REF-449821",
  workflow: [
    { stage: "Received", status: "complete", timestamp: "2024-02-23 14:30:00", details: "Document received via email intake" },
    { stage: "Queued", status: "complete", timestamp: "2024-02-23 14:30:02", details: "Added to processing queue" },
    { stage: "Extracting", status: "complete", timestamp: "2024-02-23 14:30:05", details: "OCR and AI extraction started" },
    { stage: "Validating", status: "complete", timestamp: "2024-02-23 14:32:10", details: "Data validation passed" },
    { stage: "Processed", status: "complete", timestamp: "2024-02-23 14:32:15", details: "Extraction complete, 94% confidence" },
    { stage: "Transmitted", status: "complete", timestamp: "2024-02-23 14:32:18", details: "Sent to MCO system" },
  ],
});

export default function DocumentDetailPage() {
  const params = useParams();
  const doc = getDocument(params.id as string);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/admin/documents" className="text-primary hover:underline text-sm flex items-center gap-1 mb-4">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Documents
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              {doc.id}
              <Badge className={
                doc.status === "processed" ? "bg-green-100 text-green-800" :
                doc.status === "processing" ? "bg-blue-100 text-blue-800" :
                "bg-red-100 text-red-800"
              }>
                {doc.status}
              </Badge>
            </h1>
            <p className="text-gray-600 mt-1">{doc.filename}</p>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-amber-800 font-medium text-sm">View Only</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Document Info & Extracted Data */}
        <div className="col-span-2 space-y-6">
          {/* Document Info */}
          <Card>
            <CardHeader>
              <CardTitle>Document Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground">Type</p>
                  <p className="font-semibold">{doc.type}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Source</p>
                  <p className="font-semibold">{doc.source}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">File Size</p>
                  <p className="font-semibold">{doc.fileSize}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pages</p>
                  <p className="font-semibold">{doc.pages}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Received</p>
                  <p className="font-semibold">{doc.receivedAt}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Processed</p>
                  <p className="font-semibold">{doc.processedAt}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">{doc.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Confidence</p>
                  <p className="font-semibold text-green-600">{doc.extractedData.confidence}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Extracted Data */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Extracted Data
                <Badge className="bg-green-100 text-green-800">
                  {doc.extractedData.confidence}% Confidence
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Claim Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Claim Number</p>
                  <p className="font-semibold text-lg">{doc.extractedData.claimNumber}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Service Date</p>
                  <p className="font-semibold text-lg">{doc.extractedData.serviceDate}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-muted-foreground">Provider</p>
                  <p className="font-semibold">{doc.extractedData.provider}</p>
                  <p className="text-xs text-muted-foreground">NPI: {doc.extractedData.providerNPI}</p>
                </div>
              </div>

              {/* Amounts */}
              <div>
                <h4 className="font-medium mb-3">Financial Summary</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-600">Total Billed</p>
                    <p className="font-bold text-xl text-blue-900">{doc.extractedData.totalBilled}</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600">Amount Allowed</p>
                    <p className="font-bold text-xl text-green-900">{doc.extractedData.amountAllowed}</p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg">
                    <p className="text-sm text-amber-600">Patient Responsibility</p>
                    <p className="font-bold text-xl text-amber-900">{doc.extractedData.patientResponsibility}</p>
                  </div>
                </div>
              </div>

              {/* Diagnosis */}
              <div>
                <h4 className="font-medium mb-3">Diagnosis Codes</h4>
                <div className="space-y-2">
                  {doc.extractedData.diagnosis.map((dx, i) => (
                    <div key={i} className="p-3 bg-gray-50 rounded-lg">
                      <code className="text-sm">{dx}</code>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedures */}
              <div>
                <h4 className="font-medium mb-3">Procedure Codes</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 font-medium">Code</th>
                      <th className="text-left py-2 font-medium">Description</th>
                      <th className="text-right py-2 font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doc.extractedData.procedures.map((proc, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-2 font-mono">{proc.code}</td>
                        <td className="py-2">{proc.description}</td>
                        <td className="py-2 text-right">{proc.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* MCO Transmission */}
          <Card>
            <CardHeader>
              <CardTitle>MCO Transmission</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  doc.mcoStatus === "sent" ? "bg-green-100" : "bg-yellow-100"
                }`}>
                  {doc.mcoStatus === "sent" ? (
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="font-semibold">
                    {doc.mcoStatus === "sent" ? "Successfully Transmitted" : "Pending Transmission"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {doc.mcoTransmittedAt} • Reference: {doc.mcoReference}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Member & Timeline */}
        <div className="space-y-6">
          {/* Member Info */}
          <Card>
            <CardHeader>
              <CardTitle>Member Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {doc.member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-lg">{doc.member.name}</p>
                  <p className="text-sm text-muted-foreground font-mono">{doc.member.id}</p>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-medium">{doc.member.plan}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium text-sm">{doc.member.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Processing Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Processing Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                {doc.workflow.map((step, i) => (
                  <div key={i} className="flex gap-4 pb-6 last:pb-0">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.status === "complete" ? "bg-green-100" :
                        step.status === "current" ? "bg-blue-100" :
                        "bg-gray-100"
                      }`}>
                        {step.status === "complete" ? (
                          <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        ) : step.status === "current" ? (
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                        ) : (
                          <div className="w-3 h-3 bg-gray-300 rounded-full" />
                        )}
                      </div>
                      {i < doc.workflow.length - 1 && (
                        <div className={`w-0.5 flex-1 mt-2 ${
                          step.status === "complete" ? "bg-green-200" : "bg-gray-200"
                        }`} />
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <p className="font-medium">{step.stage}</p>
                      <p className="text-sm text-muted-foreground">{step.details}</p>
                      <p className="text-xs text-muted-foreground mt-1">{step.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Document Preview Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Document Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  <p className="text-sm">PDF Preview</p>
                  <p className="text-xs">{doc.pages} pages</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
