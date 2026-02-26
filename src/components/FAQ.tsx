"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is health sharing and how is it different from insurance?",
    answer: "Health sharing is a community-based approach where members voluntarily share each other's medical expenses. Unlike insurance, it's not a contract of coverage but a commitment among like-minded individuals to help one another. Members maintain freedom to choose any healthcare provider without network restrictions.",
  },
  {
    question: "What is the Annual PreShare Amount?",
    answer: "The Annual PreShare Amount is similar to a deductible—it's the amount you're responsible for before the community begins sharing your eligible medical expenses. Once you've met your Annual PreShare Amount, United Refuah shares 80% of eligible expenses.",
  },
  {
    question: "What is the 20% CoShare and when does 100% sharing begin?",
    answer: "After meeting your Annual PreShare Amount, you're responsible for 20% of eligible expenses (the CoShare) up to your annual CoShare Maximum. Once you reach this maximum, eligible expenses are shared at 100% up to $1,000,000 per incident.",
  },
  {
    question: "Can I see any doctor or specialist?",
    answer: "Yes! One of the biggest advantages of United Refuah HealthShare is freedom of choice. There are no network restrictions—you can visit any licensed healthcare provider, specialist, or hospital you choose.",
  },
  {
    question: "Is maternity covered?",
    answer: "Yes, maternity sharing is available for Couple and Family memberships. After a waiting period, eligible maternity expenses are shared according to our guidelines. Contact us for specific details about maternity sharing.",
  },
  {
    question: "How do I submit medical bills for sharing?",
    answer: "Simply submit your medical bills through our member portal or send them to our sharing request team. Our staff will review the expenses, apply any applicable provider discounts, and process the sharing according to our guidelines.",
  },
  {
    question: "What is TeleRefuah telemedicine?",
    answer: "TeleRefuah is our 24/7 telemedicine service included with all memberships. You can speak with a licensed physician anytime, from anywhere, for common medical issues—often avoiding the need for an office visit.",
  },
  {
    question: "Are pre-existing conditions shareable?",
    answer: "Pre-existing conditions are subject to our sharing guidelines and waiting periods. Many conditions become shareable over time. We encourage you to apply so we can review your specific situation and provide guidance.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get answers to common questions about health sharing with United Refuah.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-lg border border-border overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-primary/5 rounded-2xl">
            <h3 className="text-lg font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our team is here to help you understand if United Refuah is right for your family.
            </p>
            <a
              href="tel:4407720700"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call (440) 772-0700
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
