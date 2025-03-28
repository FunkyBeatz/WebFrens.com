import SimplifiedHeader from '../components/SimplifiedHeader';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <SimplifiedHeader />
      <div className="min-h-screen bg-gray-900 text-white pt-28 pb-8 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction and Acceptance</h2>
              <p className="mb-4">Welcome to Webfrens. By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree to these Terms, please do not use our services.</p>
              <p>These Terms constitute a legally binding agreement between you and Webfrens regarding your use of our website and services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Service Description</h2>
              <div className="space-y-4">
                <p>We provide professional Discord server setup, configuration, and management services, including but not limited to:</p>
                <div>
                  <h3 className="text-xl font-medium mb-2">2.1 Basic Setup Services</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Server structure and channel organization</li>
                    <li>Role hierarchy configuration</li>
                    <li>Basic security settings</li>
                    <li>Essential bot integration</li>
                    <li>Welcome message setup</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">2.2 Pro Setup Services</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Advanced channel organization</li>
                    <li>Complex role hierarchy</li>
                    <li>Custom bot configuration</li>
                    <li>Advanced security measures</li>
                    <li>Custom automation workflows</li>
                    <li>Moderation system setup</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">2.3 Audit Services</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Server settings assessment</li>
                    <li>Security vulnerability checks</li>
                    <li>Role and permission analysis</li>
                    <li>Performance optimization recommendations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. User Responsibilities</h2>
              <div className="space-y-4">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account</li>
                  <li>Comply with Discord's Terms of Service</li>
                  <li>Use our services legally and responsibly</li>
                  <li>Not engage in any fraudulent or deceptive practices</li>
                  <li>Not attempt to circumvent our security measures</li>
                  <li>Not use our services for any illegal or unauthorized purpose</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Payment Terms</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">4.1 Pricing and Payment</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All prices are listed in USD unless otherwise specified</li>
                    <li>Payment is required before service delivery</li>
                    <li>We accept major credit cards and specified payment methods</li>
                    <li>Prices are subject to change with notice</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">4.2 Refunds</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Refund requests are handled on a case-by-case basis</li>
                    <li>No refunds for completed services</li>
                    <li>Partial refunds may be issued for incomplete services</li>
                    <li>Processing fees are non-refundable</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Intellectual Property</h2>
              <div className="space-y-4">
                <p>All content and materials on our website are protected by intellectual property rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our logo, branding, and design elements</li>
                  <li>Custom bot configurations and scripts</li>
                  <li>Documentation and guides</li>
                  <li>Server templates and configurations</li>
                </ul>
                <p>You may not copy, modify, distribute, or create derivative works without our explicit permission.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Service Delivery and Support</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">6.1 Delivery Timeline</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Basic Setup: 1-2 business days</li>
                    <li>Pro Setup: 2-3 business days</li>
                    <li>Server Audit: 1-2 business days</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">6.2 Support</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>30 days of basic support included</li>
                    <li>Response within 12-24 hours</li>
                    <li>Extended support packages available</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Limitation of Liability</h2>
              <div className="space-y-4">
                <p>We are not liable for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Discord service interruptions or changes</li>
                  <li>Data loss or server issues beyond our control</li>
                  <li>Third-party bot functionality or changes</li>
                  <li>User misuse or misconfiguration</li>
                  <li>Indirect or consequential damages</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Termination</h2>
              <div className="space-y-4">
                <p>We reserve the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Terminate services for violation of these terms</li>
                  <li>Modify or discontinue services</li>
                  <li>Refuse service to anyone</li>
                  <li>Cancel orders due to pricing errors</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Dispute Resolution</h2>
              <div className="space-y-4">
                <p>Any disputes shall be resolved through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Direct communication and negotiation</li>
                  <li>Mediation if necessary</li>
                  <li>Arbitration as a last resort</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact Information</h2>
              <div className="space-y-4">
                <p>For questions about these Terms, contact us at:</p>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li>Name: FunkyBeatz</li>
                    <li>Email: info@webfrens.com</li>
                    <li>Discord: <a href="https://discord.gg/gVEEv8Yswu" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Join our Discord</a></li>
                    <li>Twitter: <a href="https://x.com/FunkyxBeatz" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">@FunkyxBeatz</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Changes to Terms</h2>
              <div className="space-y-4">
                <p>We may modify these terms at any time. Changes will be effective upon posting to the website. Continued use of our services constitutes acceptance of any changes.</p>
                <p className="mt-4">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 