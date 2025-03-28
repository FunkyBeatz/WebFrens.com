import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(270,95%,75%,0.4)_0%,transparent_70%)]" />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-8">
            Professional Discord Server Solutions
          </h1>
          <p className="text-lg leading-8 text-muted-foreground mb-12">
            Transform your Discord server into a thriving community. Take our quick quiz to find your perfect setup, or explore our professional services.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Button 
              asChild 
              size="lg"
              className="px-8 py-6 hover:bg-primary/90"
            >
              <a href="#quiz">Take the Quiz</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="px-8 py-6 hover:bg-primary/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}