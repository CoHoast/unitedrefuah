"use client";

import { useApplicationStore } from "@/lib/applicationStore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const COMMON_CONDITIONS = [
  "Diabetes",
  "High Blood Pressure",
  "Heart Disease",
  "Asthma",
  "Arthritis",
  "Cancer (past or present)",
  "Depression/Anxiety",
  "Back Problems",
  "Thyroid Issues",
  "None of the above",
];

export function StepHealthInfo() {
  const { formData, updateFormData } = useApplicationStore();

  const toggleCondition = (condition: string) => {
    const current = formData.medicalConditions;
    if (condition === "None of the above") {
      updateFormData({ medicalConditions: current.includes(condition) ? [] : [condition] });
    } else {
      const filtered = current.filter((c) => c !== "None of the above");
      if (current.includes(condition)) {
        updateFormData({ medicalConditions: filtered.filter((c) => c !== condition) });
      } else {
        updateFormData({ medicalConditions: [...filtered, condition] });
      }
    }
  };

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        This information helps us understand your healthcare needs. Pre-existing conditions 
        are eligible for sharing after a waiting period.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            value={formData.height}
            onChange={(e) => updateFormData({ height: e.target.value })}
            placeholder="5'10&quot; or 70 inches"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="weight">Weight (lbs)</Label>
          <Input
            id="weight"
            value={formData.weight}
            onChange={(e) => updateFormData({ weight: e.target.value })}
            placeholder="170"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="tobaccoUse"
            checked={formData.tobaccoUse}
            onCheckedChange={(checked) => updateFormData({ tobaccoUse: checked === true })}
          />
          <Label htmlFor="tobaccoUse" className="cursor-pointer">
            I have used tobacco products in the past 12 months
          </Label>
        </div>
        <p className="text-xs text-muted-foreground ml-6">
          Includes cigarettes, cigars, vaping, or chewing tobacco
        </p>
      </div>

      <div className="space-y-3">
        <Label>Do you have any of the following conditions?</Label>
        <div className="grid gap-2 sm:grid-cols-2">
          {COMMON_CONDITIONS.map((condition) => (
            <div key={condition} className="flex items-center space-x-2">
              <Checkbox
                id={condition}
                checked={formData.medicalConditions.includes(condition)}
                onCheckedChange={() => toggleCondition(condition)}
              />
              <Label htmlFor={condition} className="cursor-pointer text-sm font-normal">
                {condition}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentMedications">Current Medications</Label>
        <Textarea
          id="currentMedications"
          value={formData.currentMedications}
          onChange={(e) => updateFormData({ currentMedications: e.target.value })}
          placeholder="List any medications you are currently taking..."
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="recentTreatments">Recent Medical Treatments</Label>
        <Textarea
          id="recentTreatments"
          value={formData.recentTreatments}
          onChange={(e) => updateFormData({ recentTreatments: e.target.value })}
          placeholder="Any surgeries, hospitalizations, or treatments in the past 2 years..."
          rows={3}
        />
      </div>
    </div>
  );
}
