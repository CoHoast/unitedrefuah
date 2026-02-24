"use client";

import { useApplicationStore } from "@/lib/applicationStore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function StepSpouse() {
  const { formData, updateFormData } = useApplicationStore();

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Please provide information about your spouse.
      </p>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="spouseFirstName">Spouse First Name *</Label>
          <Input
            id="spouseFirstName"
            value={formData.spouseFirstName}
            onChange={(e) => updateFormData({ spouseFirstName: e.target.value })}
            placeholder="Jane"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="spouseLastName">Spouse Last Name *</Label>
          <Input
            id="spouseLastName"
            value={formData.spouseLastName}
            onChange={(e) => updateFormData({ spouseLastName: e.target.value })}
            placeholder="Doe"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="spouseDob">Spouse Date of Birth *</Label>
          <Input
            id="spouseDob"
            type="date"
            value={formData.spouseDob}
            onChange={(e) => updateFormData({ spouseDob: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="spouseGender">Spouse Gender *</Label>
          <Select
            value={formData.spouseGender}
            onValueChange={(value) => updateFormData({ spouseGender: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> Your spouse&apos;s health information will be collected separately 
          after your application is submitted. They will receive an email to complete their 
          health questionnaire.
        </p>
      </div>
    </div>
  );
}
