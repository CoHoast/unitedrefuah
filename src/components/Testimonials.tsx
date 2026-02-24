import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "United Refuah has been a blessing for our family. We're saving over $1,500 a month compared to our old insurance, and the community support is incredible.",
    author: "The Goldstein Family",
    location: "Cleveland, OH",
  },
  {
    quote: "When my husband needed surgery, the sharing process was seamless. The team walked us through everything, and our community came through for us.",
    author: "Sarah M.",
    location: "Lakewood, NJ",
  },
  {
    quote: "As a small business owner, providing health benefits was crushing us. United Refuah made it possible to take care of our employees affordably.",
    author: "Rabbi David K.",
    location: "Brooklyn, NY",
  },
  {
    quote: "The 24/7 telemedicine has been a lifesaver with young kids. Quick, easy access to doctors without leaving home.",
    author: "The Schwartz Family",
    location: "Chicago, IL",
  },
  {
    quote: "Finally, a health sharing program that understands and respects our values. It's more than just cost savings—it's community.",
    author: "Moshe & Rivka L.",
    location: "Baltimore, MD",
  },
  {
    quote: "Transparent, trustworthy, and truly caring. The staff treats every member like family. This is what healthcare should be.",
    author: "Dr. Aaron B.",
    location: "Los Angeles, CA",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by Families Nationwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from members who have experienced the United Refuah difference.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
