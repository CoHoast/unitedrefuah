"use client";

import { useApplicationStore } from "@/lib/applicationStore";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function StepAgreement() {
  const { formData, updateFormData } = useApplicationStore();

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Please review and agree to our terms and guidelines.
      </p>

      <div className="space-y-4 p-4 bg-muted/50 rounded-lg max-h-48 overflow-y-auto text-sm">
        <h4 className="font-semibold">Member Agreement Summary</h4>
        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
          <li>I understand that United Refuah HealthShare is not insurance.</li>
          <li>I agree to share in the medical expenses of other members.</li>
          <li>I understand that sharing is voluntary and not guaranteed.</li>
          <li>I agree to pay my monthly share amount on time.</li>
          <li>I agree to the sharing guidelines and pre-existing condition waiting periods.</li>
          <li>I affirm that all information provided is accurate and complete.</li>
          <li>I understand that providing false information may result in termination of membership.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <Checkbox
            id="agreedToTerms"
            checked={formData.agreedToTerms}
            onCheckedChange={(checked) => updateFormData({ agreedToTerms: checked === true })}
            className="mt-1"
          />
          <div>
            <Label htmlFor="agreedToTerms" className="cursor-pointer">
              I agree to the United Refuah HealthShare Member Agreement *
            </Label>
            <p className="text-xs text-muted-foreground">
              By checking this box, you acknowledge that you have read and agree to the terms.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="agreedToGuidelines"
            checked={formData.agreedToGuidelines}
            onCheckedChange={(checked) => updateFormData({ agreedToGuidelines: checked === true })}
            className="mt-1"
          />
          <div>
            <Label htmlFor="agreedToGuidelines" className="cursor-pointer">
              I have read and understand the Sharing Guidelines *
            </Label>
            <p className="text-xs text-muted-foreground">
              Including pre-existing condition waiting periods and eligible expenses.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="signature">Digital Signature *</Label>
        <Input
          id="signature"
          value={formData.signature}
          onChange={(e) => updateFormData({ signature: e.target.value })}
          placeholder="Type your full legal name"
          className="font-serif italic text-lg"
        />
        <p className="text-xs text-muted-foreground">
          By typing your name, you are providing your electronic signature.
        </p>
      </div>
    </div>
  );
}
