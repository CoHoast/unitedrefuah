"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SubmitClaimPage() {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="p-4 space-y-4">
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
                    <button 
                      onClick={() => setFiles(files.filter((_, idx) => idx !== i))}
                      className="text-red-500"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4">
              <Button 
                className="w-full" 
                onClick={() => setStep(2)}
                disabled={files.length === 0}
              >
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
              <Input placeholder="e.g., Dr. Smith or Cleveland Clinic" />
            </div>

            <div className="space-y-2">
              <Label>Date of Service</Label>
              <Input type="date" />
            </div>

            <div className="space-y-2">
              <Label>Billed Amount</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <Input className="pl-7" placeholder="0.00" type="number" step="0.01" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Type of Service</Label>
              <select className="w-full border border-gray-200 rounded-md p-2 text-sm">
                <option value="">Select type...</option>
                <option value="office">Office Visit</option>
                <option value="urgent">Urgent Care</option>
                <option value="emergency">Emergency Room</option>
                <option value="hospital">Hospital Stay</option>
                <option value="surgery">Surgery</option>
                <option value="lab">Lab Work</option>
                <option value="imaging">Imaging (X-ray, MRI)</option>
                <option value="prescription">Prescription</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label>Additional Notes (optional)</Label>
              <Textarea placeholder="Any additional information about this expense..." rows={3} />
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button onClick={() => setStep(3)} className="flex-1">
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
                <span className="font-medium">Dr. Smith</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Amount</span>
                <span className="font-medium">$250.00</span>
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
  );
}
