import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Trash2, X } from 'lucide-react';
import type { Testimonial } from '../types/testimonial';
import TestimonialModal from './TestimonialModal';
import testimonialData from '../data/testimonials.json';

export default function TestimonialsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // In production, we just use the JSON data directly
  const [testimonials] = useState<Testimonial[]>(testimonialData.testimonials as Testimonial[]);
  const [isAdmin] = useState(false); // In production, this would be controlled by your auth system
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle new testimonial submissions
  const handleSubmit = async (testimonial: Omit<Testimonial, 'id' | 'date' | 'verified'>) => {
    try {
      // Create pending testimonial
      const pendingTestimonial = {
        ...testimonial,
        submittedAt: new Date().toISOString(),
        date: new Date().toISOString().split('T')[0]
      };

      // Get existing pending testimonials
      const existingPending = localStorage.getItem('pendingTestimonials');
      const pendingTestimonials = existingPending ? JSON.parse(existingPending) : [];

      // Add new testimonial to pending
      const updatedPending = [pendingTestimonial, ...pendingTestimonials];
      localStorage.setItem('pendingTestimonials', JSON.stringify(updatedPending));

      // Show success message
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsModalOpen(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to submit testimonial:', error);
    }
  };

  // In production, this would be removed unless you implement a CMS
  const handleDelete = async (id: string) => {
    // This would be handled through your CMS or by manually editing the JSON file
    console.log('Delete testimonial:', id);
    setDeleteConfirm(null);
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Success Toast */}
        <AnimatePresence>
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50"
            >
              Thank you for your testimonial! We'll review it shortly.
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-400">
            Real experiences from Discord server owners and community managers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/30 relative group"
            >
              {isAdmin && (
                <>
                  <button
                    onClick={() => setDeleteConfirm(testimonial.id)}
                    className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-300"
                    title="Delete testimonial"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  {/* Delete Confirmation Dialog */}
                  <AnimatePresence>
                    {deleteConfirm === testimonial.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                      >
                        <div className="bg-gray-900 p-6 rounded-xl border border-red-500/30 max-w-md w-full relative">
                          <button
                            onClick={() => setDeleteConfirm(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                          >
                            <X className="w-5 h-5" />
                          </button>
                          
                          <h3 className="text-xl font-bold mb-4">Delete Testimonial</h3>
                          <p className="text-gray-400 mb-6">
                            Please edit the testimonials.json file to remove this testimonial.
                          </p>
                          
                          <div className="flex gap-4 justify-end">
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
              
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>

              <blockquote className="text-lg mb-4">{testimonial.message}</blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <cite className="font-medium not-italic">{testimonial.name}</cite>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
                <div className="text-sm text-purple-400">{testimonial.serviceType}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white transition-colors inline-flex items-center gap-2"
          >
            Share Your Experience
          </button>
        </div>

        <TestimonialModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  );
} 