"use client";

import { useApplicationStore } from "@/lib/applicationStore";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface StepReviewProps {
  onSubmit: () => void;
  isSubmitting: boolean;
}

export function StepReview({ onSubmit, isSubmitting }: StepReviewProps) {
  const { formData, prevStep } = useApplicationStore();

  const formatPlanType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Please review your application before submitting.
      </p>

      {/* Plan */}
      <div>
        <h3 className="font-semibold text-lg mb-3">Plan Selection</h3>
        <div className="bg-primary/5 p-4 rounded-lg">
          <span className="text-2xl font-bold text-primary">
            {formatPlanType(formData.planType)} Plan
          </span>
        </div>
      </div>

      <Separator />

      {/* Personal Info */}
      <div>
        <h3 className="font-semibold text-lg mb-3">Primary Applicant</h3>
        <div className="grid gap-2 sm:grid-cols-2 text-sm">
          <div>
            <span className="text-muted-foreground">Name:</span>{" "}
            <span className="font-medium">{formData.firstName} {formData.lastName}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Email:</span>{" "}
            <span className="font-medium">{formData.email}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Phone:</span>{" "}
            <span className="font-medium">{formData.phone}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Date of Birth:</span>{" "}
            <span className="font-medium">{formData.dateOfBirth}</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Address */}
      <div>
        <h3 className="font-semibold text-lg mb-3">Address</h3>
        <p className="text-sm">
          {formData.address}<br />
          {formData.city}, {formData.state} {formData.zipCode}
        </p>
      </div>

      <Separator />

      {/* Health Info */}
      <div>
        <h3 className="font-semibold text-lg mb-3">Health Information</h3>
        <div className="grid gap-2 sm:grid-cols-2 text-sm">
          {formData.height && (
            <div>
              <span className="text-muted-foreground">Height:</span>{" "}
              <span className="font-medium">{formData.height}</span>
            </div>
          )}
          {formData.weight && (
            <div>
              <span className="text-muted-foreground">Weight:</span>{" "}
              <span className="font-medium">{formData.weight} lbs</span>
            </div>
          )}
          <div>
            <span className="text-muted-foreground">Tobacco Use:</span>{" "}
            <span className="font-medium">{formData.tobaccoUse ? "Yes" : "No"}</span>
          </div>
        </div>
        {formData.medicalConditions.length > 0 && (
          <div className="mt-2 text-sm">
            <span className="text-muted-foreground">Conditions:</span>{" "}
            <span className="font-medium">{formData.medicalConditions.join(", ")}</span>
          </div>
        )}
      </div>

      {/* Spouse */}
      {(formData.planType === "couple" || formData.planType === "family") && formData.spouseFirstName && (
        <>
          <Separator />
          <div>
            <h3 className="font-semibold text-lg mb-3">Spouse</h3>
            <div className="grid gap-2 sm:grid-cols-2 text-sm">
              <div>
                <span className="text-muted-foreground">Name:</span>{" "}
                <span className="font-medium">{formData.spouseFirstName} {formData.spouseLastName}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Date of Birth:</span>{" "}
                <span className="font-medium">{formData.spouseDob}</span>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Dependents */}
      {formData.planType === "family" && formData.dependents.length > 0 && (
        <>
          <Separator />
          <div>
            <h3 className="font-semibold text-lg mb-3">Dependents ({formData.dependents.length})</h3>
            <div className="space-y-2">
              {formData.dependents.map((dep, i) => (
                <div key={i} className="text-sm">
                  <span className="font-medium">{dep.firstName} {dep.lastName}</span>
                  <span className="text-muted-foreground"> - {dep.dateOfBirth}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <Separator />

      {/* Agreement */}
      <div>
        <h3 className="font-semibold text-lg mb-3">Agreement</h3>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            {formData.agreedToTerms ? (
              <span className="text-success">✓</span>
            ) : (
              <span className="text-destructive">✗</span>
            )}
            <span>Agreed to Member Agreement</span>
          </div>
          <div className="flex items-center gap-2">
            {formData.agreedToGuidelines ? (
              <span className="text-success">✓</span>
            ) : (
              <span className="text-destructive">✗</span>
            )}
            <span>Agreed to Sharing Guidelines</span>
          </div>
          <div>
            <span className="text-muted-foreground">Signature:</span>{" "}
            <span className="font-medium font-serif italic">{formData.signature}</span>
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-between pt-6 border-t">
        <Button variant="outline" onClick={prevStep} disabled={isSubmitting}>
          ← Previous
        </Button>
        <Button
          onClick={onSubmit}
          disabled={isSubmitting || !formData.agreedToTerms || !formData.agreedToGuidelines || !formData.signature}
          className="min-w-[150px]"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </div>
    </div>
  );
}
