"use client";

import { useApplicationStore, Dependent } from "@/lib/applicationStore";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export function StepDependents() {
  const { formData, updateFormData } = useApplicationStore();

  const addDependent = () => {
    const newDependent: Dependent = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      relationship: "child",
    };
    updateFormData({ dependents: [...formData.dependents, newDependent] });
  };

  const removeDependent = (index: number) => {
    const updated = formData.dependents.filter((_, i) => i !== index);
    updateFormData({ dependents: updated });
  };

  const updateDependent = (index: number, field: keyof Dependent, value: string) => {
    const updated = formData.dependents.map((dep, i) =>
      i === index ? { ...dep, [field]: value } : dep
    );
    updateFormData({ dependents: updated });
  };

  return (
    <div className="space-y-6">
      <p className="text-muted-foreground">
        Add your dependent children (under 26 years old).
      </p>

      {formData.dependents.length === 0 ? (
        <div className="text-center py-8 border-2 border-dashed rounded-lg">
          <p className="text-muted-foreground mb-4">No dependents added yet</p>
          <Button onClick={addDependent} variant="outline">
            + Add Dependent
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {formData.dependents.map((dependent, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium">Dependent {index + 1}</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => removeDependent(index)}
                  >
                    Remove
                  </Button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>First Name *</Label>
                    <Input
                      value={dependent.firstName}
                      onChange={(e) => updateDependent(index, "firstName", e.target.value)}
                      placeholder="First name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name *</Label>
                    <Input
                      value={dependent.lastName}
                      onChange={(e) => updateDependent(index, "lastName", e.target.value)}
                      placeholder="Last name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Date of Birth *</Label>
                    <Input
                      type="date"
                      value={dependent.dateOfBirth}
                      onChange={(e) => updateDependent(index, "dateOfBirth", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Gender *</Label>
                    <Select
                      value={dependent.gender}
                      onValueChange={(value) => updateDependent(index, "gender", value)}
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
              </CardContent>
            </Card>
          ))}

          <Button onClick={addDependent} variant="outline" className="w-full">
            + Add Another Dependent
          </Button>
        </div>
      )}

      <div className="p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>Note:</strong> Family plans include 3-6 members. Additional members beyond 6 
          are $50/month each.
        </p>
      </div>
    </div>
  );
}
