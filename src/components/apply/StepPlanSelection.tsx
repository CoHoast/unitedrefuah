"use client";

import { useApplicationStore } from "@/lib/applicationStore";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    id: "individual",
    name: "Individual",
    price: 175,
    description: "For single adults",
    features: ["Single person coverage", "$1,500 Annual PreShare", "24/7 Telemedicine"],
  },
  {
    id: "couple",
    name: "Couple",
    price: 395,
    description: "For married couples",
    features: ["Coverage for two", "$3,000 Annual PreShare", "Maternity available", "24/7 Telemedicine"],
  },
  {
    id: "family",
    name: "Family",
    price: 495,
    description: "For families (3-6 members)",
    features: ["Family coverage", "$4,500 Annual PreShare", "Maternity included", "Pediatric care", "24/7 Telemedicine"],
  },
];

export function StepPlanSelection() {
  const { formData, updateFormData } = useApplicationStore();

  return (
    <div className="space-y-4">
      <p className="text-muted-foreground mb-6">
        Choose the membership plan that best fits your family&apos;s needs.
      </p>
      
      <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`cursor-pointer transition-all hover:shadow-md active:scale-[0.98] ${
              formData.planType === plan.id
                ? "ring-2 ring-primary border-primary bg-primary/5"
                : "hover:border-primary/50"
            }`}
            onClick={() => updateFormData({ planType: plan.id as "individual" | "couple" | "family" })}
          >
            <CardContent className="p-4">
              {/* Mobile: horizontal layout, Desktop: vertical */}
              <div className="flex items-center gap-4 md:flex-col md:text-center">
                <div className="flex-1 md:mb-4">
                  <h3 className="font-semibold text-lg">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <div className="mt-1 md:mt-2">
                    <span className="text-2xl md:text-3xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground text-sm">/mo</span>
                  </div>
                </div>
                
                {/* Selection indicator for mobile */}
                <div className="md:hidden">
                  {formData.planType === plan.id ? (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30" />
                  )}
                </div>
              </div>
              
              {/* Features - hidden on mobile for cleaner look */}
              <ul className="hidden md:block space-y-2 mt-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Selected badge - desktop only */}
              {formData.planType === plan.id && (
                <div className="hidden md:block mt-4 text-center">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Selected
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
