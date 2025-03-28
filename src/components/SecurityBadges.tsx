import { Shield, Lock } from 'lucide-react';

export default function SecurityBadges() {
  return (
    <div className="flex flex-col items-center gap-6 py-12">
      <h2 className="text-2xl font-bold text-center">Secure & Trusted Service</h2>
      
      <div className="flex flex-wrap justify-center gap-8">
        {/* SSL Badge */}
        <div className="flex flex-col items-center gap-2 p-4 bg-gray-900/50 rounded-lg border border-purple-500/30 w-[280px]">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20">
            <Lock className="w-6 h-6 text-purple-500" />
          </div>
          <h3 className="font-medium">SSL Secured</h3>
          <p className="text-sm text-gray-400 text-center">
            256-bit SSL encryption protecting all communications and data transfers
          </p>
        </div>

        {/* Security Badge */}
        <div className="flex flex-col items-center gap-2 p-4 bg-gray-900/50 rounded-lg border border-purple-500/30 w-[280px]">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20">
            <Shield className="w-6 h-6 text-purple-500" />
          </div>
          <h3 className="font-medium">Data Protection</h3>
          <p className="text-sm text-gray-400 text-center">
            Your data is protected with industry-standard security practices
          </p>
        </div>

        {/* Trust Badge */}
        <div className="flex flex-col items-center gap-2 p-4 bg-gray-900/50 rounded-lg border border-purple-500/30 w-[280px]">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600/20">
            <svg 
              className="w-6 h-6 text-purple-500"
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h3 className="font-medium">Trusted Service</h3>
          <p className="text-sm text-gray-400 text-center">
            Verified and trusted by hundreds of Discord communities
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center max-w-2xl mx-auto px-4">
        <p className="text-sm text-gray-400">
          We prioritize the security and privacy of our clients. All services are provided through secure, 
          encrypted connections and follow industry best practices for data protection.
        </p>
      </div>
    </div>
  );
} 