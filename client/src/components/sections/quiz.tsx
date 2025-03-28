import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

const questions = [
  {
    id: 1,
    question: "What's the main purpose of your Discord server?",
    options: [
      { text: "Gaming Community", description: "A place for gamers to hang out and play together" },
      { text: "Business/Project", description: "Professional space for team communication" },
      { text: "NFT Project", description: "Community for NFT project holders and enthusiasts" },
      { text: "Education/Learning", description: "Teaching, tutoring, or study groups" },
      { text: "Social Community", description: "General community for people with shared interests" }
    ]
  },
  {
    id: 2,
    question: "How many members do you expect in your server?",
    options: [
      { text: "Small (< 100)", description: "Close-knit community" },
      { text: "Medium (100-500)", description: "Growing community" },
      { text: "Large (500+)", description: "Large-scale community" }
    ]
  },
  {
    id: 3,
    question: "What features are most important to you?",
    options: [
      { text: "Security & Moderation", description: "Strong protection against spam and trolls" },
      { text: "Complete NFT Solution", description: "Security, moderation, organization and advanced automation" },
      { text: "Engagement & Fun", description: "Keeping members active and entertained" },
      { text: "Organization & Structure", description: "Clear channels and roles hierarchy" },
      { text: "Automation & Bots", description: "Automated tasks and interactive features" }
    ]
  }
];

type Result = {
  tier: "Basic" | "Pro";
  description: string;
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [, setLocation] = useLocation();
  const [shouldScrollToPricing, setShouldScrollToPricing] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = (): Result => {
    const needsPro = 
      answers[1] === "Large (500+)" || 
      answers[2] === "Complete NFT Solution" ||
      answers[2] === "Security & Moderation" ||
      answers[0] === "NFT Project" ||
      (answers[0] === "Business/Project" && answers[1] !== "Small (< 100)");

    if (answers[0] === "NFT Project") {
      return {
        tier: "Pro",
        description: "For NFT projects, we recommend our Pro Setup to ensure maximum security, proper verification systems, and advanced automation for holder management."
      };
    }

    return needsPro ? {
      tier: "Pro",
      description: "Based on your needs, we recommend our Pro Setup for advanced features and scalability."
    } : {
      tier: "Basic",
      description: "Our Basic Setup should cover your needs while maintaining quality and security."
    };
  };

  const result = getResult();

  useEffect(() => {
    if (shouldScrollToPricing) {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
        setShouldScrollToPricing(false);
      }
    }
  }, [shouldScrollToPricing]);

  const handleViewPlan = (e: React.MouseEvent) => {
    e.preventDefault();
    setLocation("/#pricing");
    setShouldScrollToPricing(true);
  };

  const handleStartOver = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center" id="quiz">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(270,95%,75%,0.4)_0%,transparent_70%)]" />
      </div>

      <div className="container max-w-screen-xl mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-lg border border-primary/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-8 shadow-[0_0_15px_rgba(167,139,250,0.1)]">
            <div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(270,95%,75%,0.2)_0%,transparent_70%)] pointer-events-none" 
              aria-hidden="true"
            />

            <div className="relative">
              <h2 className="text-4xl font-bold text-foreground text-center mb-4">
                Find Your Perfect Setup
              </h2>
              <p className="text-muted-foreground text-lg text-center mb-12">
                Answer a few questions to get a personalized recommendation for your Discord server
              </p>

              <div className="max-w-xl mx-auto">
                <AnimatePresence mode="wait">
                  {!showResult ? (
                    <motion.div
                      key="question"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-background/95 backdrop-blur">
                        <CardHeader className="pb-6">
                          <CardTitle className="text-xl sm:text-2xl">
                            {questions[currentQuestion].question}
                          </CardTitle>
                          <CardDescription>
                            Question {currentQuestion + 1} of {questions.length}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4">
                            {questions[currentQuestion].options.map((option) => (
                              <Button
                                key={option.text}
                                variant="outline"
                                className="relative h-auto p-4 text-left flex flex-col items-start
                                         bg-background/95 backdrop-blur
                                         hover:bg-primary/10 hover:border-primary/50
                                         transition-all duration-200"
                                onClick={() => handleAnswer(option.text)}
                              >
                                <span className="font-semibold">{option.text}</span>
                                <span className="text-sm text-muted-foreground mt-1">
                                  {option.description}
                                </span>
                              </Button>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="bg-background/95 backdrop-blur">
                        <CardHeader>
                          <CardTitle className="text-2xl text-center">
                            Your Recommended Plan
                          </CardTitle>
                          <CardDescription className="text-center mt-2">
                            {result.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-col items-center gap-4">
                            <div className="text-4xl font-bold">
                              {result.tier} Setup
                            </div>
                            <Button 
                              size="lg" 
                              className="relative mt-4 w-full sm:w-auto hover:bg-primary/90"
                              onClick={handleViewPlan}
                            >
                              View Plan Details
                            </Button>
                            <Button 
                              variant="outline"
                              className="relative w-full sm:w-auto hover:bg-primary/10"
                              onClick={handleStartOver}
                            >
                              Start Over
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}