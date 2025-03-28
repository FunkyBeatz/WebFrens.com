import { Shield, Lock, CheckCircle } from 'lucide-react';

export default function SecurityCertifications() {
  return (
    <div className="flex flex-col items-center gap-8 py-12">
      <h2 className="text-2xl font-bold text-center">Security Certifications & Compliance</h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {/* SSL Certificate */}
        <div className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-green-500/30 hover:border-green-500/50 transition-colors">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h3 className="font-medium text-green-400">SSL Certified</h3>
            <p className="text-sm text-gray-400">Valid HTTPS Certificate</p>
          </div>
        </div>

        {/* GDPR Compliance */}
        <div className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-colors">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10">
            <Shield className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h3 className="font-medium text-blue-400">GDPR Compliant</h3>
            <p className="text-sm text-gray-400">Data Protection Standards</p>
          </div>
        </div>

        {/* Security Scanning */}
        <div className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/10">
            <Lock className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h3 className="font-medium text-purple-400">Daily Security Scans</h3>
            <p className="text-sm text-gray-400">Vulnerability Monitoring</p>
          </div>
        </div>
      </div>

      {/* Certification Details */}
      <div className="mt-8 max-w-3xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-900/30 rounded-lg border border-purple-500/30">
            <h3 className="text-lg font-medium mb-4">Data Protection Measures</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                End-to-end encryption for all communications
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Regular security audits and updates
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Secure data storage with encryption at rest
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Multi-factor authentication support
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gray-900/30 rounded-lg border border-purple-500/30">
            <h3 className="text-lg font-medium mb-4">Compliance Standards</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                GDPR compliance for EU data protection
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Discord Terms of Service compliance
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Regular compliance monitoring
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Transparent data handling policies
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-gray-400 text-center mt-8">
          Our security certifications demonstrate our commitment to protecting your data and maintaining 
          the highest standards of security in our Discord server management services.
        </p>
      </div>
    </div>
  );
} 