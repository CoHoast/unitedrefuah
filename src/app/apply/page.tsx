"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  sections, 
  questions, 
  getVisibleQuestionsForSection,
  getSectionProgress,
  type Question 
} from "@/lib/questionFlow";

export default function DynamicApplyPage() {
  const router = useRouter();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentSection = sections[currentSectionIndex];
  const visibleQuestions = getVisibleQuestionsForSection(currentSection.id, answers);
  const sectionProgress = getSectionProgress(currentSection.id, answers);
  
  // Overall progress
  const overallProgress = Math.round(
    ((currentSectionIndex + (sectionProgress.percent / 100)) / sections.length) * 100
  );

  const updateAnswer = (questionId: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const toggleCheckbox = (questionId: string, optionValue: string) => {
    const current = (answers[questionId] as string[]) || [];
    const updated = current.includes(optionValue)
      ? current.filter((v) => v !== optionValue)
      : [...current, optionValue];
    updateAnswer(questionId, updated);
  };

  const canProceed = () => {
    const requiredQuestions = visibleQuestions.filter((q) => q.required);
    return requiredQuestions.every((q) => {
      const answer = answers[q.id];
      if (Array.isArray(answer)) return answer.length > 0;
      return answer !== undefined && answer !== "";
    });
  };

  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // In production, submit to API
    console.log("Submitting answers:", answers);
    
    setTimeout(() => {
      router.push("/apply/success?id=demo-dynamic");
    }, 1500);
  };

  const renderQuestion = (question: Question) => {
    const value = answers[question.id];

    return (
      <div key={question.id} className="space-y-3 p-4 rounded-lg bg-muted/30 border animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="space-y-1">
          <Label className="text-base font-medium">
            {question.question}
            {question.required && <span className="text-red-500 ml-1">*</span>}
          </Label>
          {question.helpText && (
            <p className="text-sm text-muted-foreground">{question.helpText}</p>
          )}
        </div>

        {/* Radio buttons */}
        {question.type === "radio" && question.options && (
          <div className="space-y-2">
            {question.options.map((option) => (
              <label
                key={option.value}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                  value === option.value
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "hover:border-primary/50 hover:bg-muted/50"
                }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => updateAnswer(question.id, e.target.value)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  value === option.value ? "border-primary" : "border-muted-foreground/30"
                }`}>
                  {value === option.value && (
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  )}
                </div>
                <span className="text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        )}

        {/* Checkboxes */}
        {question.type === "checkbox" && question.options && (
          <div className="space-y-2">
            {question.options.map((option) => {
              const isChecked = Array.isArray(value) && value.includes(option.value);
              return (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                    isChecked
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={() => toggleCheckbox(question.id, option.value)}
                  />
                  <span className="text-sm">{option.label}</span>
                </label>
              );
            })}
          </div>
        )}

        {/* Text input */}
        {question.type === "text" && (
          <Input
            value={(value as string) || ""}
            onChange={(e) => updateAnswer(question.id, e.target.value)}
            placeholder={question.placeholder}
            className="text-base"
          />
        )}

        {/* Number input */}
        {question.type === "number" && (
          <Input
            type="number"
            value={(value as string) || ""}
            onChange={(e) => updateAnswer(question.id, e.target.value)}
            min={question.validation?.min}
            max={question.validation?.max}
            className="text-base max-w-[150px]"
          />
        )}

        {/* Date input */}
        {question.type === "date" && (
          <Input
            type="date"
            value={(value as string) || ""}
            onChange={(e) => updateAnswer(question.id, e.target.value)}
            className="text-base max-w-[200px]"
          />
        )}

        {/* Textarea */}
        {question.type === "textarea" && (
          <Textarea
            value={(value as string) || ""}
            onChange={(e) => updateAnswer(question.id, e.target.value)}
            placeholder={question.placeholder}
            rows={4}
            className="text-base"
          />
        )}
      </div>
    );
  };

  const isLastSection = currentSectionIndex === sections.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/UnitedRefuahLogoHands-2.svg" 
              alt="United Refuah" 
              width={32} 
              height={32}
            />
            <span className="font-semibold text-sm hidden sm:block">United Refuah</span>
          </Link>
          <Badge variant="outline" className="text-xs">
            {overallProgress}% Complete
          </Badge>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-20 pb-32 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-6">
            <Progress value={overallProgress} className="h-2" />
            <div className="flex justify-between mt-2">
              {sections.map((section, idx) => (
                <div
                  key={section.id}
                  className={`text-xs ${
                    idx === currentSectionIndex
                      ? "text-primary font-medium"
                      : idx < currentSectionIndex
                      ? "text-green-600"
                      : "text-muted-foreground"
                  }`}
                >
                  {idx < currentSectionIndex ? "✓" : idx + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Section header */}
          <div className="mb-6 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              {currentSection.title}
            </h1>
            <p className="text-muted-foreground mt-1">
              {currentSection.description}
            </p>
          </div>

          {/* Dynamic questions info */}
          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800 flex items-start gap-2">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
            </svg>
            <span><strong>Dynamic Form Demo:</strong> Questions below will change based on your answers. 
            Try selecting different options to see the branching logic in action!</span>
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {visibleQuestions.length > 0 ? (
              visibleQuestions.map(renderQuestion)
            ) : (
              <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                  No questions in this section based on your previous answers.
                </CardContent>
              </Card>
            )}
          </div>

          {/* Question count indicator */}
          {visibleQuestions.length > 0 && (
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Showing {visibleQuestions.length} question{visibleQuestions.length !== 1 ? "s" : ""} in this section
              {sectionProgress.total > 0 && (
                <span> • {sectionProgress.answered}/{sectionProgress.total} required answered</span>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Fixed bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 safe-bottom">
        <div className="max-w-2xl mx-auto flex gap-3">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentSectionIndex === 0}
            className="flex-1 h-12"
          >
            ← Back
          </Button>
          
          {isLastSection ? (
            <Button
              onClick={handleSubmit}
              disabled={!canProceed() || isSubmitting}
              className="flex-1 h-12 bg-green-600 hover:bg-green-700"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Application ✓"
              )}
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex-1 h-12"
            >
              Continue →
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
