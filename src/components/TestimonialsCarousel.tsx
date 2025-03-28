import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'wouter';
import type { Testimonial } from '../types/testimonial';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [duplicatedTestimonials, setDuplicatedTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    // Duplicate testimonials array for infinite scroll effect
    setDuplicatedTestimonials([...testimonials, ...testimonials]);
  }, [testimonials]);

  if (testimonials.length === 0) {
    return (
      <div className="w-full py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-400 text-center mb-12">
            Be the first to share your experience with our services
          </p>
          <div className="text-center">
            <Link href="/submit-testimonial" className="inline-flex items-center px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-300 group">
              Share Your Experience
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">What Our Clients Say</h2>
        <p className="text-xl text-gray-400 text-center mb-12">
          Real experiences from Discord server owners and community managers
        </p>
      </div>

      <div className="relative w-full overflow-hidden mb-12">
        <motion.div
          className="flex gap-6 py-4"
          animate={{ 
            x: [0, -1920]
          }}
          transition={{
            x: {
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[500px] bg-gray-900/50 p-6 rounded-xl border border-purple-500/30 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
            >
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

              <blockquote className="text-lg mb-6 line-clamp-4">
                "{testimonial.message}"
              </blockquote>

              <div className="flex items-center justify-between">
                <div>
                  <cite className="font-medium not-italic">{testimonial.name}</cite>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                    {testimonial.project && (
                      <span className="text-purple-400"> • {testimonial.project}</span>
                    )}
                  </div>
                </div>
                <div className="text-sm text-purple-400">{testimonial.serviceType}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10" />
      </div>

      {/* Share Your Experience Button */}
      <div className="text-center">
        <Link href="/submit-testimonial" className="inline-flex items-center px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors duration-300 group">
          Share Your Experience
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
} 