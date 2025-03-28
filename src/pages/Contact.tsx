import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Particles from '../components/Particles';

declare global {
  interface Window {
    grecaptcha: any;
  }
  interface ImportMeta {
    env: {
      PROD: boolean;
      DEV: boolean;
    };
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    otherSubject: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const isProduction = import.meta.env.PROD;

  useEffect(() => {
    if (isProduction) {
      // Load reCAPTCHA script only in production
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.grecaptcha.ready(() => {
          window.grecaptcha.render('recaptcha-container', {
            sitekey: '6LfFuf0qAAAAAJlF8g00n3KzldMqfYsDeIifWVIR',
            callback: () => setRecaptchaLoaded(true),
            'expired-callback': () => setRecaptchaLoaded(false)
          });
        });
      };
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    } else {
      // In development, always consider reCAPTCHA as loaded
      setRecaptchaLoaded(true);
    }
  }, [isProduction]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (isProduction) {
      const recaptchaResponse = window.grecaptcha.getResponse();
      if (!recaptchaResponse) {
        setStatus({
          type: 'error',
          message: 'Please complete the reCAPTCHA verification'
        });
        return;
      }
    }

    setIsSubmitting(true);
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          ...(isProduction && { 'g-recaptcha-response': window.grecaptcha.getResponse() })
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.'
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        otherSubject: '',
        message: ''
      });
      
      if (isProduction) {
        window.grecaptcha.reset();
        setRecaptchaLoaded(false);
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 relative">
      <Particles />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

        <div className="max-w-3xl mx-auto bg-gray-900/50 p-8 rounded-xl border border-purple-500/50 mb-24 shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500/80">
          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://discord.gg/gVEEv8Yswu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900/50 hover:bg-gray-800/50 px-4 py-2 rounded-lg text-white transition-colors flex-1 justify-center"
            >
              <svg className="w-5 h-5" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
              <span>Join Discord</span>
            </a>
            <a
              href="https://x.com/WebFrens_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900/50 hover:bg-gray-800/50 px-4 py-2 rounded-lg text-white transition-colors flex-1 justify-center"
            >
              <span className="text-xl">𝕏</span>
              <span>Follow us</span>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {status.type !== 'idle' && (
              <div className={`p-4 rounded-lg ${
                status.type === 'loading' ? 'bg-blue-500/20 text-blue-200' :
                status.type === 'success' ? 'bg-green-500/20 text-green-200' :
                'bg-red-500/20 text-red-200'
              }`}>
                {status.message}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 text-white"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 text-white"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 text-white"
                required
                disabled={isSubmitting}
              >
                <option value="">Select a subject</option>
                <option value="basic">Basic Setup Inquiry</option>
                <option value="pro">Pro Setup Inquiry</option>
                <option value="audit">Server Audit Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            {formData.subject === 'other' && (
              <div>
                <label htmlFor="otherSubject" className="block mb-2">
                  Please specify <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="otherSubject"
                  name="otherSubject"
                  value={formData.otherSubject}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 text-white"
                  required={formData.subject === 'other'}
                  disabled={isSubmitting}
                />
              </div>
            )}

            <div>
              <label htmlFor="message" className="block mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-2 text-white"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            {/* reCAPTCHA */}
            {isProduction && <div id="recaptcha-container" className="flex justify-center"></div>}

            <button
              type="submit"
              disabled={isSubmitting || (isProduction && !recaptchaLoaded)}
              className={`w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors ${
                (isSubmitting || (isProduction && !recaptchaLoaded)) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Info Section */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-400 mb-2">Get in touch for custom solutions and pricing</p>
                <a href="mailto:info@webfrens.com" className="text-purple-400 hover:text-purple-300">info@webfrens.com</a>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Response Time</h3>
                <p className="text-gray-400">We typically respond within 12-24 hours, maximum 48 hours</p>
              </div>
            </div>

            {/* Policy Links */}
            <div className="flex gap-4 justify-center mb-8">
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 hover:bg-gray-700/50 px-6 py-3 rounded-lg text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/50 hover:bg-gray-700/50 px-6 py-3 rounded-lg text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>

            {/* Data Protection Message */}
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Your data is protected and never shared with third parties</span>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
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