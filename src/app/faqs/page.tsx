import Link from "next/link";
import { HeaderNew } from "@/components/HeaderNew";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Why is United Refuah HealthShare different from other health sharing organizations?",
    answer: "United Refuah HealthShare is the first and ONLY Jewish-based Health Care Sharing Organization. This is important because now Jewish Americans may join a Health Sharing organization without making representations which are contrary to their faith beliefs. The founders and board of directors designed it with the unique characteristics of the American Jewish population in mind.",
  },
  {
    question: "What makes United Refuah the best value?",
    answer: "The best health care sharing organization does more than allow for low monthly share amounts: It brings like-minded members together to share their eligible medical expenses, and it provides the members with the tools necessary to maintain and improve their health, as well as navigate the medical provider systems for cost effective and quality medical services.",
  },
  {
    question: "How does United Refuah keep members healthy?",
    answer: "We are Health focused – Our members are best served when the eligible medical needs of our members are lower. We therefore exert significant effort to improve and maintain the health of our members. Each member participates in health coaching to discuss and set realistic goals. Through the proactive management of our members' health, the membership becomes healthier, which drives down medical costs and saves everyone money.",
  },
  {
    question: "What is TeleRefuah and how does it save money?",
    answer: "Each member has 24/7 access to a doctor through our TeleRefuah telehealth platform, which saves members' time and money. Each time Telehealth is used, the average savings is $250, in addition to the time saved. United Refuah also includes access to Mental Health services with 12 visits per year, subject to pre-existing condition limitations.",
  },
  {
    question: "Does United Refuah help navigate the healthcare system?",
    answer: "Yes! We provide a medical concierge service for our members. Whether you are looking for a GI specialist, need advice on where to get the lowest cost for an MRI, or when calling in for sharing of medical needs services, our Advice team will assist you with any and all those questions. Navigating the health care system with nontransparent prices and confusing choices can be difficult; United Refuah provides advice to its members.",
  },
  {
    question: "Can I see any doctor I want?",
    answer: "Yes! United Refuah has an open network. All members can see any Provider they choose. There are no network restrictions limiting which doctors, hospitals, or healthcare providers you can visit.",
  },
  {
    question: "What is the PreShare amount?",
    answer: "The Annual PreShare is similar to a deductible. It's the amount you're responsible for before sharing begins. After members have met their Annual PreShare Amount, United Refuah will share 80% of eligible medical expenses.",
  },
  {
    question: "What is the CoShare?",
    answer: "After meeting your PreShare, you're responsible for a 20% CoShare of eligible expenses. This CoShare is limited to an annual CoShare Maximum. Once this maximum is reached, eligible expenses are shared at 100% up to $1,000,000 per incident.",
  },
  {
    question: "How much can I save compared to traditional insurance?",
    answer: "Members typically save 60% or more compared to traditional health insurance premiums. The exact savings depend on your family size and current insurance costs.",
  },
  {
    question: "Is maternity covered?",
    answer: "Yes, maternity sharing is available for Couple and Family plans. Coverage details and waiting periods apply - contact us for specific information about maternity benefits.",
  },
  {
    question: "What about pre-existing conditions?",
    answer: "Pre-existing conditions have specific guidelines and waiting periods. We encourage you to review our Sharing Guidelines or speak with our team to understand how your specific situation would be handled.",
  },
  {
    question: "How do I submit a sharing request?",
    answer: "Members can submit sharing requests through our online Member Portal, or by contacting our Member Services team. We have a 37-second average hold time when you call!",
  },
];

export default function FAQsPage() {
  return (
    <>
      <HeaderNew />
      <main className="pt-32">
        {/* Hero */}
        <section className="bg-gradient-to-b from-primary/5 to-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get the clarity you need to make an informed and educated decision for your circumstances.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-muted/50 transition-colors">
                      <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                      <svg 
                        className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform group-open:rotate-180" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still have questions */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help. Schedule a call or send us a message and we&apos;ll get back to you promptly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:4407720700">
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (440) 772-0700
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
