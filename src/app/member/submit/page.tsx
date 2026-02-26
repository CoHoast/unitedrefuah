"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const serviceTypes = [
  { value: "office", label: "Office Visit" },
  { value: "urgent", label: "Urgent Care" },
  { value: "emergency", label: "Emergency Room" },
  { value: "hospital", label: "Hospital Stay" },
  { value: "surgery", label: "Surgery" },
  { value: "lab", label: "Lab Work" },
  { value: "imaging", label: "Imaging (X-ray, MRI)" },
  { value: "prescription", label: "Prescription" },
  { value: "therapy", label: "Physical Therapy" },
  { value: "mental", label: "Mental Health" },
  { value: "other", label: "Other" },
];

export default function SubmitClaimPage() {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    provider: "",
    serviceDate: "",
    amount: "",
    serviceType: "",
    notes: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(prev => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const canProceedToStep2 = files.length > 0;
  const canProceedToStep3 = formData.provider && formData.serviceDate && formData.amount && formData.serviceType;

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:block space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Submit Sharing Request</h2>
          <p className="text-muted-foreground">Upload your medical bills for sharing with the community</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 py-4">
          {[
            { num: 1, label: "Upload Documents" },
            { num: 2, label: "Enter Details" },
            { num: 3, label: "Review & Submit" },
          ].map((s, i) => (
            <div key={s.num} className="flex items-center">
              <div className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                step === s.num ? "bg-primary text-white" : 
                step > s.num ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  step === s.num ? "bg-white/20" : 
                  step > s.num ? "bg-green-200" : "bg-gray-200"
                }`}>
                  {step > s.num ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : s.num}
                </div>
                <span className="font-medium">{s.label}</span>
              </div>
              {i < 2 && (
                <div className={`w-12 h-1 mx-2 rounded ${step > s.num ? "bg-green-300" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Upload */}
        {step === 1 && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Upload Medical Bills</CardTitle>
                <CardDescription>
                  Upload itemized bills, receipts, or Explanation of Benefits (EOB) documents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                      </svg>
                    </div>
                    <p className="font-medium text-gray-900 text-lg">Click to upload files</p>
                    <p className="text-muted-foreground mt-1">or drag and drop</p>
                    <p className="text-sm text-muted-foreground mt-3">PDF, PNG, JPG up to 10MB each</p>
                  </label>
                </div>

                {/* Uploaded Files */}
                {files.length > 0 && (
                  <div className="space-y-3">
                    <p className="font-medium text-gray-700">Uploaded files ({files.length})</p>
                    {files.map((file, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-gray-900 truncate">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(file.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                        <button 
                          onClick={() => removeFile(i)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-end pt-4">
                  <Button onClick={() => setStep(2)} disabled={!canProceedToStep2} size="lg">
                    Continue
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Service Details</CardTitle>
                <CardDescription>
                  Provide information about the medical service
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="provider">Provider / Facility Name *</Label>
                    <Input 
                      id="provider" 
                      name="provider"
                      placeholder="e.g., Dr. Smith or Cleveland Clinic" 
                      value={formData.provider}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceDate">Date of Service *</Label>
                    <Input 
                      id="serviceDate" 
                      name="serviceDate"
                      type="date" 
                      value={formData.serviceDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Billed Amount *</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <Input 
                        id="amount"
                        name="amount"
                        className="pl-7" 
                        placeholder="0.00" 
                        type="number" 
                        step="0.01"
                        value={formData.amount}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Type of Service *</Label>
                    <select 
                      id="serviceType"
                      name="serviceType"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select type...</option>
                      {serviceTypes.map(st => (
                        <option key={st.value} value={st.value}>{st.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes (optional)</Label>
                  <Textarea 
                    id="notes"
                    name="notes"
                    placeholder="Any additional information about this expense..." 
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} disabled={!canProceedToStep3} size="lg">
                    Continue
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <CardTitle>Ready to Submit</CardTitle>
                <CardDescription>
                  Please review your sharing request before submitting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Summary */}
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Documents</span>
                    <span className="font-medium">{files.length} file(s) uploaded</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Provider</span>
                    <span className="font-medium">{formData.provider || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date of Service</span>
                    <span className="font-medium">{formData.serviceDate || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service Type</span>
                    <span className="font-medium">
                      {serviceTypes.find(st => st.value === formData.serviceType)?.label || "—"}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg border-t pt-4">
                    <span className="font-medium">Billed Amount</span>
                    <span className="font-bold text-primary">
                      ${formData.amount ? parseFloat(formData.amount).toFixed(2) : "0.00"}
                    </span>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="text-sm text-muted-foreground text-center">
                  By submitting, you confirm that this expense is accurate and eligible for sharing 
                  according to the United Refuah sharing guidelines.
                </p>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back
                  </Button>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    Submit Request
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* What happens next */}
            <Card className="mt-6 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-900 mb-3">What happens next?</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Your request will be reviewed within 5-7 business days
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    You&apos;ll receive a notification when processing is complete
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    An Explanation of Sharing (EOS) will be added to your Documents
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden p-4 space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-xl font-bold text-gray-900">Submit Sharing Request</h1>
          <p className="text-gray-500 text-sm">Upload your medical bills for sharing</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= s ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
              }`}>
                {step > s ? "✓" : s}
              </div>
              {s < 3 && (
                <div className={`flex-1 h-1 mx-2 ${
                  step > s ? "bg-primary" : "bg-gray-200"
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-500 px-2">
          <span>Upload</span>
          <span>Details</span>
          <span>Review</span>
        </div>

        {/* Step 1: Upload */}
        {step === 1 && (
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
                <input
                  type="file"
                  id="file-upload-mobile"
                  className="hidden"
                  multiple
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                />
                <label htmlFor="file-upload-mobile" className="cursor-pointer">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                  </div>
                  <p className="font-medium text-gray-900">Upload Medical Bill</p>
                  <p className="text-sm text-gray-500 mt-1">Tap to select files or take a photo</p>
                </label>
              </div>

              {files.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Selected files:</p>
                  {files.map((file, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      <span className="text-sm text-gray-600 flex-1 truncate">{file.name}</span>
                      <button onClick={() => removeFile(i)} className="text-red-500">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-4">
                <Button className="w-full" onClick={() => setStep(2)} disabled={!canProceedToStep2}>
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Details */}
        {step === 2 && (
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label>Provider Name</Label>
                <Input 
                  name="provider"
                  placeholder="e.g., Dr. Smith or Cleveland Clinic" 
                  value={formData.provider}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label>Date of Service</Label>
                <Input 
                  name="serviceDate"
                  type="date" 
                  value={formData.serviceDate}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label>Billed Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input 
                    name="amount"
                    className="pl-7" 
                    placeholder="0.00" 
                    type="number" 
                    step="0.01"
                    value={formData.amount}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Type of Service</Label>
                <select 
                  name="serviceType"
                  className="w-full border border-gray-200 rounded-md p-2 text-sm"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                >
                  <option value="">Select type...</option>
                  {serviceTypes.map(st => (
                    <option key={st.value} value={st.value}>{st.label}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label>Additional Notes (optional)</Label>
                <Textarea 
                  name="notes"
                  placeholder="Any additional information..." 
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button onClick={() => setStep(3)} disabled={!canProceedToStep3} className="flex-1">
                  Continue
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">Ready to Submit</h2>
                <p className="text-sm text-gray-500 mt-2">
                  Please review your sharing request before submitting.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Files</span>
                  <span className="font-medium">{files.length} document(s)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Provider</span>
                  <span className="font-medium">{formData.provider || "—"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Date</span>
                  <span className="font-medium">{formData.serviceDate || "—"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Amount</span>
                  <span className="font-medium">
                    ${formData.amount ? parseFloat(formData.amount).toFixed(2) : "0.00"}
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-500">
                By submitting, you confirm that this expense is accurate and eligible for sharing 
                according to the United Refuah sharing guidelines.
              </p>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                  Back
                </Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  Submit Request
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}
