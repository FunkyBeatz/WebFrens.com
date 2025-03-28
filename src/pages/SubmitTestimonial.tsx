import { useState } from 'react';
import { useLocation } from 'wouter';
import { Star } from 'lucide-react';
import type { ServiceType } from '../types/testimonial';

const MAX_NAME_LENGTH = 50;
const MAX_ROLE_LENGTH = 50;
const MAX_MESSAGE_LENGTH = 400;

export default function SubmitTestimonial() {
  const [, setLocation] = useLocation();
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      role: formData.get('role'),
      project: formData.get('project') || undefined,
      message: message,
      serviceType: formData.get('serviceType') as ServiceType,
      rating
    };

    try {
      const response = await fetch('/api/testimonials/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit testimonial');
      }

      // Redirect to success page
      setLocation('/submit-success');
    } catch (err) {
      setError('Failed to submit testimonial. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Share Your Experience</h1>
          <p className="text-xl text-gray-400 text-center mb-8">
            Let others know about your experience with our services
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name <span className="text-gray-400">({MAX_NAME_LENGTH} characters max)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={MAX_NAME_LENGTH}
                className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500/50"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-2">
                Your Role <span className="text-gray-400">({MAX_ROLE_LENGTH} characters max)</span>
              </label>
              <input
                type="text"
                id="role"
                name="role"
                required
                maxLength={MAX_ROLE_LENGTH}
                className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500/50"
                placeholder="Community Manager"
              />
            </div>

            <div>
              <label htmlFor="project" className="block text-sm font-medium mb-2">
                Project Name <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                id="project"
                name="project"
                maxLength={50}
                className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500/50"
                placeholder="e.g. CryptoKitties, MetaDAO, etc."
              />
            </div>

            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
                Service Used
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500/50"
              >
                <option value="Basic Setup">Basic Setup</option>
                <option value="Pro Setup">Pro Setup</option>
                <option value="Server Audit">Server Audit</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    onMouseEnter={() => setHoverRating(value)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 focus:outline-none"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        value <= (hoverRating || rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message{' '}
                <span className="text-gray-400">
                  ({message.length}/{MAX_MESSAGE_LENGTH} characters)
                </span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                maxLength={MAX_MESSAGE_LENGTH}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500/50"
                placeholder="Share your experience with our services..."
              />
            </div>

            <div className="flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={() => setLocation('/')}
                className="px-6 py-2 border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 