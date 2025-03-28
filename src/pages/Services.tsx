import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Footer from '../components/Footer';
import Particles from '../components/Particles';
import TestimonialsSection from '../components/TestimonialsSection';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import SecurityCertifications from '../components/SecurityCertifications';
import type { Testimonial } from '../types/testimonial';

export default function Services() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials/approved');
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="min-h-screen pt-24 relative">
      <Particles />
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-xl text-gray-400 text-center mb-16">Professional Discord server setup and audit services to help your community thrive</p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* Basic Setup */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/50 flex flex-col shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500/80">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">Basic Setup</h3>
              <p className="text-gray-400 mb-4">Perfect for small communities and startups</p>
              <div className="text-4xl font-bold mb-8">$250</div>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Channel structure setup
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic role hierarchy
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Essential bot integration
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Basic security settings
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Welcome messages setup
                </li>
              </ul>
            </div>
            <Link href="/quiz">
              <a className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg mt-8 transition-colors">
                Get Started
              </a>
            </Link>
          </div>

          {/* Pro Setup */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/50 flex flex-col shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500/80">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">Pro Setup</h3>
              <p className="text-gray-400 mb-4">Ideal for growing communities with advanced needs</p>
              <div className="text-4xl font-bold mb-8">$350</div>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced channel organization
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Complex role hierarchy
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom bot configuration
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced security measures
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom automation workflows
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Moderation system setup
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Community engagement features
                </li>
              </ul>
            </div>
            <Link href="/quiz">
              <a className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg mt-8 transition-colors">
                Get Started
              </a>
            </Link>
          </div>

          {/* Server Audit */}
          <div className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/50 flex flex-col shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500/80">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">Server Audit</h3>
              <p className="text-gray-400 mb-4">Comprehensive review of your existing Discord server</p>
              <div className="text-4xl font-bold mb-8">$100</div>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Server settings assessment
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Role & permission analysis
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Channel structure evaluation
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Security vulnerability check
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Bot configuration review
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Content moderation audit
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Incident response review
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Detailed recommendations
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Executive summary report
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Implementation roadmap
                </li>
              </ul>
            </div>
            <Link href="/quiz">
              <a className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg mt-8 transition-colors">
                Get Started
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* Security Certifications Section */}
      <div className="mb-24">
        <SecurityCertifications />
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-gray-900/50 rounded-xl border border-white/10">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-xl font-bold">What is included in the Discord server setup service?</h3>
                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Our service includes complete server structure setup, role hierarchy configuration, security settings, bot integration, and customized welcome messages based on your chosen plan.
              </div>
            </details>

            <details className="group bg-gray-900/50 rounded-xl border border-white/10">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-xl font-bold">How long does the setup process take?</h3>
                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                The setup process typically takes 1-3 days depending on the complexity of your requirements and chosen plan.
              </div>
            </details>

            <details className="group bg-gray-900/50 rounded-xl border border-white/10">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-xl font-bold">Do you provide ongoing support after setup?</h3>
                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Yes, we provide basic support for 30 days after setup to ensure everything is working as intended.
              </div>
            </details>

            <details className="group bg-gray-900/50 rounded-xl border border-white/10">
              <summary className="flex items-center justify-between p-6 cursor-pointer">
                <h3 className="text-xl font-bold">Can you help with existing Discord servers?</h3>
                <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-400">
                Absolutely! We offer audit services for existing servers and can help optimize your current setup.
              </div>
            </details>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 