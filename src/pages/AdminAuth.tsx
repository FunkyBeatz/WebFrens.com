import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

export default function AdminAuth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Check admin status on mount
    const adminStatus = sessionStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === 'Admin' && password === 'Kali123') {
      // Set admin session
      sessionStorage.setItem('isAdmin', 'true');
      setIsAdmin(true);
      // Redirect to services page
      setLocation('/services');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleLogout = () => {
    // Clear admin session
    sessionStorage.removeItem('isAdmin');
    setIsAdmin(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-900/50 p-8 rounded-xl border border-purple-500/30">
        {isAdmin ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
            <p className="text-gray-400 mb-6">You are currently logged in as an administrator.</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setLocation('/services')}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white transition-colors"
              >
                Go to Services
              </button>
              <button
                onClick={handleLogout}
                className="px-6 py-3 border border-red-500/30 hover:bg-red-500/10 rounded-lg text-red-400 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6">Admin Authentication</h1>
            
            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-white/10 focus:border-purple-500/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 rounded-lg border border-white/10 focus:border-purple-500/50 focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white transition-colors"
              >
                Login
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
} 