import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { CheckCircle } from 'lucide-react';

export default function SubmitSuccess() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to home after 3 seconds
    const timeout = setTimeout(() => {
      setLocation('/');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-purple-600/20">
          <CheckCircle className="w-8 h-8 text-purple-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl text-gray-400 mb-8">
          Your testimonial has been submitted successfully and is awaiting review.
        </p>
        <button
          onClick={() => setLocation('/')}
          className="inline-flex items-center px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
} 