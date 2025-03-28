import SimplifiedHeader from '../components/SimplifiedHeader';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <SimplifiedHeader />
      <div className="min-h-screen bg-gray-900 text-white pt-28 pb-8 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="mb-4">Welcome to Webfrens ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
              <p>This policy applies to all users worldwide, with specific provisions for users from different regions, including the European Union (GDPR compliance), California (CCPA compliance), and other jurisdictions with specific privacy requirements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">2.1 Information You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Contact information (name, email address)</li>
                    <li>Discord server information and configurations</li>
                    <li>Professional information (skills, certifications)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Communications with us</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">2.2 Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage data (pages visited, time spent, interactions)</li>
                    <li>Location information (country, region)</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">3.1 Primary Purposes</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing and improving our services</li>
                    <li>Processing your transactions</li>
                    <li>Communicating with you about our services</li>
                    <li>Customizing your experience</li>
                    <li>Technical support and customer service</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">3.2 Additional Uses</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Analytics and service improvement</li>
                    <li>Security and fraud prevention</li>
                    <li>Legal compliance</li>
                    <li>Marketing (with your consent)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. International Data Transfers</h2>
              <p className="mb-4">We operate globally and may transfer your information to different jurisdictions. We ensure appropriate safeguards are in place through:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard contractual clauses</li>
                <li>Data processing agreements</li>
                <li>Compliance with local privacy laws</li>
                <li>Implementation of adequate security measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
              <p className="mb-4">We implement industry-standard security measures to protect your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>End-to-end encryption for sensitive data</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data storage and transmission</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Your Privacy Rights</h2>
              <div className="space-y-4">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent</li>
                </ul>
                <p>To exercise these rights, please contact us using the information below.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Children's Privacy</h2>
              <p>Our services are not intended for children under 13. We do not knowingly collect information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Contact Information</h2>
              <div className="space-y-4">
                <p>For privacy-related inquiries or to exercise your rights, contact us at:</p>
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
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Updates to This Policy</h2>
              <p className="mb-4">We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any material changes by:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a notice in our application</li>
              </ul>
              <p className="mt-4">Last updated: {new Date().toLocaleDateString()}</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 