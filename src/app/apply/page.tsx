"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useApplicationStore } from "@/lib/applicationStore";

// Step components
import { StepPlanSelection } from "@/components/apply/StepPlanSelection";
import { StepPersonalInfo } from "@/components/apply/StepPersonalInfo";
import { StepAddress } from "@/components/apply/StepAddress";
import { StepHealthInfo } from "@/components/apply/StepHealthInfo";
import { StepSpouse } from "@/components/apply/StepSpouse";
import { StepDependents } from "@/components/apply/StepDependents";
import { StepAdditional } from "@/components/apply/StepAdditional";
import { StepAgreement } from "@/components/apply/StepAgreement";
import { StepReview } from "@/components/apply/StepReview";

const STEPS = [
  { id: 1, name: "Plan", description: "Select your plan" },
  { id: 2, name: "Personal", description: "Your information" },
  { id: 3, name: "Address", description: "Where you live" },
  { id: 4, name: "Health", description: "Medical history" },
  { id: 5, name: "Spouse", description: "Spouse details" },
  { id: 6, name: "Dependents", description: "Family members" },
  { id: 7, name: "Additional", description: "Extra info" },
  { id: 8, name: "Agreement", description: "Terms & signature" },
  { id: 9, name: "Review", description: "Submit application" },
];

export default function ApplyPage() {
  const router = useRouter();
  const { currentStep, formData, nextStep, prevStep, resetForm } = useApplicationStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Determine which steps to show based on plan type
  const getVisibleSteps = () => {
    const steps = [...STEPS];
    if (formData.planType === "individual") {
      // Remove spouse and dependents steps for individual
      return steps.filter((s) => s.id !== 5 && s.id !== 6);
    }
    if (formData.planType === "couple") {
      // Remove dependents step for couple
      return steps.filter((s) => s.id !== 6);
    }
    return steps;
  };

  const visibleSteps = getVisibleSteps();
  const progress = (currentStep / visibleSteps.length) * 100;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        resetForm();
        router.push(`/apply/success?id=${data.application.id}`);
      } else {
        setSubmitError(data.error || "Failed to submit application");
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    // Map current step to actual step based on visible steps
    const stepConfig = visibleSteps[currentStep - 1];
    if (!stepConfig) return null;

    switch (stepConfig.id) {
      case 1:
        return <StepPlanSelection />;
      case 2:
        return <StepPersonalInfo />;
      case 3:
        return <StepAddress />;
      case 4:
        return <StepHealthInfo />;
      case 5:
        return <StepSpouse />;
      case 6:
        return <StepDependents />;
      case 7:
        return <StepAdditional />;
      case 8:
        return <StepAgreement />;
      case 9:
        return <StepReview onSubmit={handleSubmit} isSubmitting={isSubmitting} />;
      default:
        return null;
    }
  };

  const currentStepConfig = visibleSteps[currentStep - 1];
  const isLastStep = currentStep === visibleSteps.length;
  const isFirstStep = currentStep === 1;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30 pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Step {currentStep} of {visibleSteps.length}
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step indicators */}
          <div className="hidden sm:flex items-center justify-between mb-8 overflow-x-auto">
            {visibleSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center ${
                  index + 1 === currentStep
                    ? "text-primary"
                    : index + 1 < currentStep
                    ? "text-success"
                    : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-1 ${
                    index + 1 === currentStep
                      ? "bg-primary text-white"
                      : index + 1 < currentStep
                      ? "bg-success text-white"
                      : "bg-muted"
                  }`}
                >
                  {index + 1 < currentStep ? "✓" : index + 1}
                </div>
                <span className="text-xs hidden lg:block">{step.name}</span>
              </div>
            ))}
          </div>

          {/* Main content */}
          <Card>
            <CardHeader>
              <CardTitle>{currentStepConfig?.name}</CardTitle>
              <CardDescription>{currentStepConfig?.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {submitError && (
                <div className="mb-4 p-4 bg-destructive/10 text-destructive rounded-lg">
                  {submitError}
                </div>
              )}
              {renderStep()}

              {/* Navigation */}
              {!isLastStep && (
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={isFirstStep}
                  >
                    ← Previous
                  </Button>
                  <Button onClick={nextStep}>
                    Next →
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
