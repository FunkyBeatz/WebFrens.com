import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, AlertCircle, Lock } from 'lucide-react';
import type { Testimonial } from '../types/testimonial';
import { useLocation } from 'wouter';

interface PendingTestimonial extends Testimonial {
  submittedAt?: string;
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pendingTestimonials, setPendingTestimonials] = useState<PendingTestimonial[]>([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState<PendingTestimonial | null>(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchPendingTestimonials = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/testimonials/pending');
      if (!response.ok) throw new Error('Failed to fetch testimonials');
      const data = await response.json();
      setPendingTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      setError('Failed to load testimonials');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check if admin is already authenticated
    const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
    setIsAuthenticated(adminStatus);

    if (adminStatus) {
      fetchPendingTestimonials();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'webfrens' && password === 'admin123') {
      sessionStorage.setItem('isAdmin', 'true');
      setIsAuthenticated(true);
      setError('');
      fetchPendingTestimonials();
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    setIsAuthenticated(false);
    setLocation('/');
  };

  const handleApprove = async (testimonial: PendingTestimonial) => {
    try {
      const response = await fetch(`/api/testimonials/approve/${testimonial.id}`, {
        method: 'POST',
      });
      
      if (!response.ok) throw new Error('Failed to approve testimonial');
      
      // Remove from pending list
      setPendingTestimonials(current => 
        current.filter(t => t.id !== testimonial.id)
      );
      setSelectedTestimonial(null);
    } catch (error) {
      console.error('Error approving testimonial:', error);
      setError('Failed to approve testimonial');
    }
  };

  const handleReject = async (testimonial: PendingTestimonial) => {
    try {
      const response = await fetch(`/api/testimonials/reject/${testimonial.id}`, {
        method: 'POST',
      });
      
      if (!response.ok) throw new Error('Failed to reject testimonial');
      
      // Remove from pending list
      setPendingTestimonials(current => 
        current.filter(t => t.id !== testimonial.id)
      );
      setSelectedTestimonial(null);
    } catch (error) {
      console.error('Error rejecting testimonial:', error);
      setError('Failed to reject testimonial');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-800/50 p-8 rounded-xl border border-purple-500/30">
          <div className="flex items-center justify-center mb-6">
            <Lock className="w-12 h-12 text-purple-400" />
          </div>
          <h1 className="text-2xl font-bold text-center mb-6">Admin Authentication</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-4 py-2 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Testimonial Management</h1>
            <p className="text-gray-400">Review and manage testimonial submissions</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors"
          >
            Logout
          </button>
        </div>

        {isLoading ? (
          <div className="bg-gray-800/50 rounded-xl p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading testimonials...</p>
          </div>
        ) : pendingTestimonials.length === 0 ? (
          <div className="bg-gray-800/50 rounded-xl p-8 text-center">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-300">No pending testimonials to review</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {pendingTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-5 h-5 rounded-full ${
                        i < testimonial.rating
                          ? 'bg-yellow-400'
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-lg mb-4">{testimonial.message}</blockquote>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <cite className="font-medium not-italic">{testimonial.name}</cite>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                  <div className="text-sm text-purple-400">{testimonial.serviceType}</div>
                </div>

                <div className="text-sm text-gray-400 mb-4">
                  Submitted: {new Date(testimonial.date).toLocaleDateString()}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleApprove(testimonial)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors"
                  >
                    <Check className="w-4 h-4" />
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(testimonial)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Reject
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 