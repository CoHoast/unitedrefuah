import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const plans = [
  {
    name: "Individual",
    price: 175,
    description: "Perfect for single adults seeking affordable health cost sharing.",
    preShare: 1500,
    coShareMax: 3000,
    features: [
      "80% sharing after PreShare",
      "Up to $1M per incident",
      "24/7 TeleRefuah telemedicine",
      "No network restrictions",
      "Prescription sharing assistance",
    ],
  },
  {
    name: "Couple",
    price: 395,
    description: "Ideal for married couples managing healthcare together.",
    preShare: 3000,
    coShareMax: 6000,
    features: [
      "80% sharing after PreShare",
      "Up to $1M per incident",
      "24/7 TeleRefuah telemedicine",
      "No network restrictions",
      "Prescription sharing assistance",
      "Maternity sharing available",
    ],
    popular: true,
  },
  {
    name: "Family",
    price: 495,
    description: "Comprehensive sharing for families with 3-6 members.",
    preShare: 4500,
    coShareMax: 9000,
    note: "+$50/month for each additional member",
    features: [
      "80% sharing after PreShare",
      "Up to $1M per incident",
      "24/7 TeleRefuah telemedicine",
      "No network restrictions",
      "Prescription sharing assistance",
      "Maternity sharing available",
      "Pediatric care included",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your family. Save up to 60% compared to traditional health insurance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  {plan.note && (
                    <p className="text-xs text-muted-foreground mt-1">{plan.note}</p>
                  )}
                </div>

                <div className="space-y-3 mb-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Annual PreShare</span>
                    <span className="font-semibold">${plan.preShare.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">CoShare Maximum</span>
                    <span className="font-semibold">${plan.coShareMax.toLocaleString()}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg className="h-5 w-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <Link href="/apply">Apply Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * $10 monthly credit card surcharge for single and couple, $20 surcharge for family memberships.
            <br />
            Questions? <Link href="#contact" className="text-primary hover:underline">Schedule a call</Link> with our team.
          </p>
        </div>
      </div>
    </section>
  );
}
