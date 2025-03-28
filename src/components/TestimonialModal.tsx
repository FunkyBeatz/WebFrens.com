import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { Star } from 'lucide-react';
import type { Testimonial } from '../types/testimonial';

interface TestimonialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (testimonial: Omit<Testimonial, 'id' | 'date' | 'verified'>) => Promise<void>;
}

export default function TestimonialModal({ isOpen, onClose, onSubmit }: TestimonialModalProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(5);
  const [serviceType, setServiceType] = useState<Testimonial['serviceType']>('Basic Setup');
  const [verificationCode, setVerificationCode] = useState('');
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!captchaValue) {
      setError('Please complete the captcha verification');
      return;
    }

    if (verificationCode !== '$FrensForLife$') {
      setError('Invalid verification code');
      return;
    }

    try {
      setIsSubmitting(true);
      await onSubmit({
        name,
        role,
        message,
        rating,
        serviceType
      });
      
      // Reset form
      setName('');
      setRole('');
      setMessage('');
      setRating(5);
      setServiceType('Basic Setup');
      setVerificationCode('');
      setCaptchaValue(null);
      onClose();
    } catch (err) {
      setError('Failed to submit testimonial. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-lg bg-gray-900 rounded-xl shadow-lg border border-purple-500/30"
          >
            <form onSubmit={handleSubmit} className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Share Your Experience</h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-white/10 focus:border-purple-500/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-white/10 focus:border-purple-500/50 focus:outline-none transition-colors"
                    placeholder="Server Owner, Community Manager, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Service Type</label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value as Testimonial['serviceType'])}
                    required
                    className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-white/10 focus:border-purple-500/50 focus:outline-none transition-colors"
                  >
                    <option value="Basic Setup">Basic Setup</option>
                    <option value="Pro Setup">Pro Setup</option>
                    <option value="Server Audit">Server Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="text-2xl focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-white/10 focus:border-purple-500/50 focus:outline-none transition-colors"
                    placeholder="Share your experience..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Verification Code</label>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-white/10 focus:border-purple-500/50 focus:outline-none transition-colors"
                    placeholder="Enter the verification code"
                  />
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || ''}
                    theme="dark"
                    onChange={(value) => setCaptchaValue(value)}
                  />
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 