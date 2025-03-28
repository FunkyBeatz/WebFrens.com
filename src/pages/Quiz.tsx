import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import Footer from '../components/Footer';
import Particles from '../components/Particles';

type Question = {
  id: number;
  text: string;
  options: Array<{
    text: string;
    description?: string;
  }>;
};

const questions: Question[] = [
  {
    id: 1,
    text: "What's the main purpose of your Discord server?",
    options: [
      { text: "Gaming community" },
      { text: "Business/Project" },
      { text: "NFT Project" },
      { text: "Education/learning" },
      { text: "Social Community" }
    ]
  },
  {
    id: 2,
    text: "How many members do you expect in your server?",
    options: [
      { text: "Small (<500)", description: "Close-knit community" },
      { text: "Medium (500-2000)", description: "Growing community" },
      { text: "Large (2000-5000)", description: "Large-scale Community" },
      { text: "Pro (5000+)" }
    ]
  },
  {
    id: 3,
    text: "What features are most important to you?",
    options: [
      { text: "Security & Moderation", description: "Strong protection against spam and trolls" },
      { text: "Complete NFT solution", description: "Security, Moderation, organization and advanced automation" },
      { text: "Engagement & fun", description: "Keeping members active and entertained" },
      { text: "Organization & Structure", description: "Clear channels and roles hierarchy" },
      { text: "Automation & Bots", description: "Automated tasks and interactive features" }
    ]
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [, setLocation] = useLocation();

  // Hidden admin access
  const handleAdminAccess = () => {
    setLocation('/admin/testimonials');
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    // Simple logic to determine recommendation based on answers
    const [purpose, size, features] = answers;
    
    if (size >= 2 || purpose === 2 || features === 1) { // Large size, NFT, or Complete NFT solution
      return {
        plan: "Pro Setup",
        price: "$350",
        description: "Based on your needs, we recommend our Pro Setup package for advanced features and scalability."
      };
    } else if (size === 0 && features !== 0) { // Small size and not focused on security
      return {
        plan: "Basic Setup",
        price: "$250",
        description: "Our Basic Setup package would be perfect for your community's needs."
      };
    } else {
      return {
        plan: "Server Audit",
        price: "$100",
        description: "We recommend starting with a Server Audit to optimize your current setup."
      };
    }
  };

  if (showResult) {
    const recommendation = getRecommendation();
    return (
      <div className="min-h-screen pt-24 relative">
        <Particles />
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gray-900/50 p-8 rounded-xl border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500/80">
            <h2 className="text-2xl font-bold mb-6">Your Personalized Recommendation</h2>
            <div className="mb-8">
              <div className="text-3xl font-bold text-purple-400 mb-2">{recommendation.plan}</div>
              <div className="text-2xl mb-4">{recommendation.price}</div>
              <p className="text-gray-400 mb-6">{recommendation.description}</p>
              <Link
                href="/contact"
                className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers([]);
                setShowResult(false);
              }}
              className="w-full text-center border border-white/10 hover:bg-white/5 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      {/* Hidden admin button */}
      <button
        onClick={handleAdminAccess}
        className="fixed left-4 bottom-4 w-4 h-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />
      <Particles />
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Find Your Perfect Setup</h2>
              <span className="text-gray-400">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div 
            className={`max-w-2xl mx-auto bg-gray-900/50 p-8 rounded-xl border border-purple-500/50 transition-all duration-500`}
            style={{
              boxShadow: `0 0 ${15 + (currentQuestion * 10)}px ${currentQuestion > 0 ? (currentQuestion * 0.1 + 0.15).toFixed(2) : 0.15}rem rgba(168,85,247,${0.15 + (currentQuestion * 0.1)})`,
              borderColor: `rgba(168,85,247,${0.5 + (currentQuestion * 0.1)})`
            }}
          >
            <h3 className="text-xl mb-6">{questions[currentQuestion].text}</h3>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className="w-full text-left p-4 rounded-lg bg-gray-800 hover:bg-gray-700 border border-white/10 transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_10px_rgba(168,85,247,0.1)]"
                >
                  <div className="font-medium">{option.text}</div>
                  {option.description && (
                    <div className="text-sm text-gray-400 mt-1">{option.description}</div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}