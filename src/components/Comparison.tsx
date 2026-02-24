import { Badge } from "@/components/ui/badge";

export function Comparison() {
  const comparisons = [
    {
      feature: "Average Monthly Cost (Family)",
      traditional: "$2,500+",
      healthShare: "$495",
      savings: true,
    },
    {
      feature: "Network Restrictions",
      traditional: "Yes, limited providers",
      healthShare: "None - see any provider",
      savings: true,
    },
    {
      feature: "Annual Deductible",
      traditional: "$5,000 - $10,000",
      healthShare: "$4,500 PreShare",
      savings: true,
    },
    {
      feature: "Maximum Coverage",
      traditional: "Varies by plan",
      healthShare: "$1,000,000 per incident",
      savings: false,
    },
    {
      feature: "Telemedicine",
      traditional: "Often extra cost",
      healthShare: "Included 24/7",
      savings: true,
    },
    {
      feature: "Community & Values",
      traditional: "Corporate",
      healthShare: "Torah-aligned community",
      savings: true,
    },
    {
      feature: "Transparency",
      traditional: "Complex terms",
      healthShare: "Simple, clear guidelines",
      savings: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">Why Health Sharing?</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Compare & Save
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how United Refuah HealthShare compares to traditional health insurance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4 px-4">
            <div className="font-semibold text-muted-foreground text-sm"></div>
            <div className="text-center">
              <span className="font-semibold text-muted-foreground text-sm">Traditional Insurance</span>
            </div>
            <div className="text-center">
              <span className="font-semibold text-primary text-sm">United Refuah</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2">
            {comparisons.map((item, index) => (
              <div 
                key={item.feature}
                className={`grid grid-cols-3 gap-4 p-4 rounded-lg ${
                  index % 2 === 0 ? 'bg-card' : 'bg-muted/50'
                }`}
              >
                <div className="font-medium text-foreground text-sm sm:text-base">
                  {item.feature}
                </div>
                <div className="text-center text-muted-foreground text-sm sm:text-base">
                  {item.traditional}
                </div>
                <div className="text-center text-sm sm:text-base">
                  <span className={item.savings ? "text-success font-semibold" : "text-foreground"}>
                    {item.healthShare}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Data from KFF.org annual health insurance review. Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
}
