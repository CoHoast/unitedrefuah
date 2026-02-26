"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const applicationId = searchParams.get("id");

  return (
    <Card className="max-w-lg mx-auto">
      <CardContent className="pt-6 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Application Submitted!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for applying to United Refuah HealthShare. We&apos;ve received your application 
          and our team will review it shortly.
        </p>

        {applicationId && (
          <div className="bg-muted/50 rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground">Application Reference</p>
            <p className="font-mono text-sm font-medium">{applicationId}</p>
          </div>
        )}

        <div className="space-y-4">
          <h3 className="font-semibold">What happens next?</h3>
          <ol className="text-left text-sm space-y-3">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">1</span>
              <span>Our AI system analyzes your application for immediate processing</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">2</span>
              <span>Our team reviews and verifies your information</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-medium">3</span>
              <span>You&apos;ll receive an email with your membership status within 2-3 business days</span>
            </li>
          </ol>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="tel:4407720700">Call Us: (440) 772-0700</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SuccessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30 pt-24 pb-16 flex items-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <SuccessContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
