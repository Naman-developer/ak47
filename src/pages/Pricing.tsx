import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out ATPFOLIO",
      features: [
        "1 AI-optimized portfolio",
        "Basic templates",
        "ATS optimization",
        "PDF export",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "$19",
      description: "For professionals seeking the best",
      features: [
        "Unlimited portfolios",
        "Premium templates",
        "Advanced ATS optimization",
        "AI career assistant (50 queries/month)",
        "Expression analyzer (10 analyses/month)",
        "Multiple export formats",
        "Priority support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited AI queries",
        "Unlimited expression analyses",
        "Team collaboration",
        "Custom branding",
        "API access",
        "Dedicated support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Choose Your Plan
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started for free or upgrade for unlimited access to all AI-powered features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? "border-2 border-primary bg-gradient-to-b from-primary/10 to-accent/10 shadow-glow-primary"
                    : "border border-border/40 bg-card/50 backdrop-blur-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-primary text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  {plan.price}
                  {plan.price !== "Custom" && (
                    <span className="text-lg text-muted-foreground">/month</span>
                  )}
                </div>
                <p className="text-muted-foreground mb-8">{plan.description}</p>
                
                <Button
                  className={`w-full mb-8 ${
                    plan.highlighted
                      ? "bg-gradient-primary hover:shadow-glow-primary"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              All plans include a 14-day money-back guarantee
            </p>
            <p className="text-sm text-muted-foreground">
              Need help choosing? <a href="/contact" className="text-primary hover:underline">Contact us</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
