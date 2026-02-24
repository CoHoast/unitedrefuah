"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const familyTypes = [
  { id: "individual", label: "Individual", insuranceCost: 650, healthShare: 175 },
  { id: "couple", label: "Couple", insuranceCost: 1400, healthShare: 395 },
  { id: "family", label: "Family", insuranceCost: 2200, healthShare: 495 },
];

export function SavingsCalculator() {
  const [selectedType, setSelectedType] = useState("family");
  
  const selected = familyTypes.find(t => t.id === selectedType) || familyTypes[2];
  const monthlySavings = selected.insuranceCost - selected.healthShare;
  const yearlySavings = monthlySavings * 12;
  const savingsPercent = Math.round((monthlySavings / selected.insuranceCost) * 100);

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/30 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See How Much You Could Save
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare your current insurance costs with United Refuah HealthShare
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Left side - Selection */}
                <div className="p-6 sm:p-8 bg-white">
                  <Label className="text-base font-semibold mb-4 block">Select your household type:</Label>
                  <div className="space-y-3">
                    {familyTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                          selectedType === type.id
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              selectedType === type.id ? "border-primary" : "border-gray-300"
                            }`}>
                              {selectedType === type.id && (
                                <div className="w-3 h-3 rounded-full bg-primary" />
                              )}
                            </div>
                            <span className="font-medium">{type.label}</span>
                          </div>
                          <span className="text-primary font-semibold">${type.healthShare}/mo</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Avg. Insurance Cost</span>
                      <span className="line-through text-gray-400">${selected.insuranceCost}/mo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">United Refuah Cost</span>
                      <span className="text-primary font-semibold">${selected.healthShare}/mo</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Results */}
                <div className="p-6 sm:p-8 bg-primary text-white">
                  <div className="text-center">
                    <p className="text-white/70 text-sm uppercase tracking-wide mb-2">Your Estimated Savings</p>
                    
                    <div className="mb-6">
                      <div className="text-5xl sm:text-6xl font-bold mb-1">
                        ${monthlySavings.toLocaleString()}
                      </div>
                      <div className="text-white/70">per month</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold">${yearlySavings.toLocaleString()}</div>
                        <div className="text-white/70 text-sm">per year</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold">{savingsPercent}%</div>
                        <div className="text-white/70 text-sm">savings</div>
                      </div>
                    </div>

                    <Button size="lg" variant="secondary" className="w-full font-semibold" asChild>
                      <Link href="/apply">
                        Start Saving Today
                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </Button>

                    <p className="text-white/50 text-xs mt-4">
                      *Based on average health insurance costs from KFF.org
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
