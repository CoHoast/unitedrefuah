"use client";

import { useApplicationStore } from "@/lib/applicationStore";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const REFERRAL_SOURCES = [
  "Friend or Family",
  "Rabbi or Community Leader",
  "Social Media",
  "Online Search",
  "Advertisement",
  "Healthcare Provider",
  "Employer",
  "Other",
];

export function StepAdditional() {
  const { formData, updateFormData } = useApplicationStore();

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        A few more questions to complete your application.
      </p>

      <div className="space-y-2">
        <Label htmlFor="howDidYouHear">How did you hear about United Refuah?</Label>
        <Select
          value={formData.howDidYouHear}
          onValueChange={(value) => updateFormData({ howDidYouHear: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {REFERRAL_SOURCES.map((source) => (
              <SelectItem key={source} value={source}>
                {source}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additionalNotes">Additional Notes (optional)</Label>
        <Textarea
          id="additionalNotes"
          value={formData.additionalNotes}
          onChange={(e) => updateFormData({ additionalNotes: e.target.value })}
          placeholder="Is there anything else you'd like us to know about your application?"
          rows={4}
        />
      </div>
    </div>
  );
}
