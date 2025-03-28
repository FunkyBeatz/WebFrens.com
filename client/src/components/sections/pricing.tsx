import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const plans = [
  {
    name: "Basic Setup",
    price: 250,
    description: "Perfect for small communities and startups",
    features: [
      "Channel structure setup",
      "Basic role hierarchy",
      "Essential bot integration",
      "Basic security settings",
      "Welcome messages setup"
    ]
  },
  {
    name: "Pro Setup",
    price: 350,
    description: "Ideal for growing communities with advanced needs",
    features: [
      "Advanced channel organization",
      "Complex role hierarchy",
      "Custom bot configuration",
      "Advanced security measures",
      "Custom automation workflows",
      "Moderation system setup",
      "Community engagement features"
    ]
  },
  {
    name: "Server Audit",
    price: 100,
    description: "Comprehensive review of your existing Discord server",
    features: [
      "Server settings assessment",
      "Role & permission analysis",
      "Channel structure evaluation",
      "Security vulnerability check",
      "Bot configuration review",
      "Content moderation audit",
      "Incident response review",
      "Detailed recommendations",
      "Executive summary report",
      "Implementation roadmap"
    ]
  }
];

export default function Pricing() {
  const [, setLocation] = useLocation();

  const handleViewPlan = () => {
    setLocation("/contact");
  }

  return (
    <div className="container max-w-screen-xl mx-auto px-4" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col h-full border-primary/40 shadow-[0_0_15px_rgba(167,139,250,0.1)] transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]">
              <CardHeader className="flex-none pb-6">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-3xl font-bold mb-6">${plan.price}</div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-none" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex-none pt-6">
                <Button 
                  className="w-full relative overflow-hidden transition-all duration-300 hover:scale-105 group" 
                  onClick={handleViewPlan}
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 via-primary/20 to-blue-500/20 blur-lg" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}