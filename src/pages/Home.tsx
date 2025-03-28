import { Link } from 'wouter';
import Footer from '../components/Footer';
import Partners from '../components/Partners';
import Particles from '../components/Particles';
import SecurityBadges from '../components/SecurityBadges';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Main background gradient */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black/50 to-transparent" />
      </div>

      <Particles />

      {/* Content wrapper */}
      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen relative flex items-center justify-center">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Professional Discord
              <br />
              Server Solutions
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your Discord server into a thriving community. Take our quick quiz to find
              your perfect setup, or explore our professional services.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/quiz" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-white font-medium transition-colors">
                Take the Quiz
              </Link>
              <Link href="/contact" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg text-white font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Quiz Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Your Perfect Setup</h2>
              <p className="text-gray-400">Answer a few questions to get a personalized recommendation for your future Discord Server</p>
            </div>
            <Link href="/quiz" className="block w-full max-w-md mx-auto bg-purple-600 hover:bg-purple-700 text-white text-center px-6 py-3 rounded-lg transition-colors">
              Take the Quiz
            </Link>
          </div>
        </section>

        {/* Server Showcase Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Custom-Crafted Discord Experiences</h2>
              <p className="text-xl text-gray-400">See how we transform Discord servers into engaging community spaces</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Example Server 1 */}
              <div className="group relative">
                <div className="aspect-video bg-gray-900/50 rounded-xl overflow-hidden border border-purple-500/20 transition-all duration-300 group-hover:border-purple-500/40 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
                  <img
                    src="/assets/showcase/channels.png"
                    alt="Community Channels Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">Organized Community Channels</h3>
                  <p className="text-gray-400">Perfectly structured channels for maximum engagement and easy navigation</p>
                </div>
              </div>

              {/* Example Server 2 */}
              <div className="group relative">
                <div className="aspect-video bg-gray-900/50 rounded-xl overflow-hidden border border-purple-500/20 transition-all duration-300 group-hover:border-purple-500/40 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
                  <img
                    src="/assets/showcase/bot.png"
                    alt="Bot Integration Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">Custom Bot Integration</h3>
                  <p className="text-gray-400">Automated systems and interactive bot features</p>
                </div>
              </div>

              {/* Example Server 3 */}
              <div className="group relative">
                <div className="aspect-video bg-gray-900/50 rounded-xl overflow-hidden border border-purple-500/20 transition-all duration-300 group-hover:border-purple-500/40 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]">
                  <img
                    src="/assets/showcase/roles.png"
                    alt="Role Management Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2">Advanced Role Management</h3>
                  <p className="text-gray-400">Sophisticated permission systems and role hierarchies</p>
                </div>
              </div>
            </div>

            {/* Feature highlight dots */}
            <div className="flex justify-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 text-center mb-12">Professional Discord server setup and audit services to help your community thrive</p>
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              {/* Basic Setup */}
              <div className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/50 flex flex-col shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500/80">
                <h3 className="text-2xl font-bold mb-2">Basic Setup</h3>
                <p className="text-gray-400 mb-4">Perfect for small communities and startups</p>
                <div className="text-3xl font-bold mb-6">$250</div>
                <ul className="space-y-3 flex-grow">
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
                <Link href="/contact" className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg mt-8 transition-colors">
                  Get Started
                </Link>
              </div>

              {/* Pro Setup */}
              <div className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/50 flex flex-col shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500/80">
                <h3 className="text-2xl font-bold mb-2">Pro Setup</h3>
                <p className="text-gray-400 mb-4">Ideal for growing communities with advanced needs</p>
                <div className="text-3xl font-bold mb-6">$350</div>
                <ul className="space-y-3 flex-grow">
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
                <Link href="/contact" className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg mt-8 transition-colors">
                  Get Started
                </Link>
              </div>

              {/* Server Audit */}
              <div className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/50 flex flex-col shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500/80">
                <h3 className="text-2xl font-bold mb-2">Server Audit</h3>
                <p className="text-gray-400 mb-4">Comprehensive review of your existing Discord server</p>
                <div className="text-3xl font-bold mb-6">$100</div>
                <ul className="space-y-3 flex-grow">
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
                <Link href="/contact" className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg mt-8 transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <div className="mb-24">
          <SecurityBadges />
        </div>

        {/* FAQ Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
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
        </section>

        <Partners />
        <Footer />
      </div>
    </div>
  );
} 