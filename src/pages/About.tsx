import Footer from '../components/Footer';
import Particles from '../components/Particles';

export default function About() {
  return (
    <div className="min-h-screen pt-24 relative">
      <Particles />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

        {/* Team Section */}
        <div className="mb-16">
          <div className="bg-gray-900/50 p-8 rounded-xl border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:border-purple-500/80">
            <div className="flex items-center gap-6 mb-8">
              <img
                src="/assets/logo.png"
                alt="FunkyBeatz"
                className="w-24 h-24 rounded-full border-2 border-purple-500"
              />
              <div>
                <h2 className="text-2xl font-bold mb-2">FunkyBeatz</h2>
                <h2 className="text-2xl font-bold mb-4">Lead Discord Specialist</h2>
                <div className="flex gap-4 mb-8">
                  <a
                    href="https://x.com/FunkyxBeatz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900/50 hover:bg-gray-800/50 px-4 py-2 rounded-lg text-white transition-colors"
                  >
                    <span className="text-xl">𝕏</span>
                    <span>Follow me</span>
                  </a>
                  <a
                    href="https://discord.gg/gVEEv8Yswu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-900/50 hover:bg-gray-800/50 px-4 py-2 rounded-lg text-white transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    <span>Join Discord</span>
                  </a>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 space-y-6">
              <span className="block text-xl mb-8">
                Hey, I'm Joaquím, but most people online know me as FunkyBeatz.
              </span>

              <span className="block">
                Before all this, I spent over 8 years working as a car mechanic. I loved solving problems, but eventually I felt like it was time for something new. That's when I made the switch into tech. I'm now studying to become a Cyber Security Analyst, but honestly, my real deep dive into Discord started way before my studies.
              </span>

              <span className="block">
                I've been building and managing Discord servers for years, organizing communities, setting up custom bots, automating roles, adding security, and just making sure everything feels smooth and fun for users. Whether it's for NFT projects, gaming communities, or creative groups, I like making servers that actually work and feel alive.
              </span>

              <span className="block">
                I'm not some big company, just someone who enjoys helping people build better Discord communities. If you're looking for someone who's down to earth, gets the tech stuff, and cares about details, I've got you!
              </span>

              <span className="block text-lg font-medium text-purple-400 mt-8">
                Let's make something cool. Together.
              </span>
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900/50 p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">Expertise</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Discord community management</li>
              <li>• Server setup and configuration</li>
              <li>• Security implementation</li>
              <li>• Bot development and integration</li>
              <li>• Community engagement strategies</li>
            </ul>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">Server Types</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Gaming Communities</li>
              <li>• Business/Project Teams</li>
              <li>• NFT Projects</li>
              <li>• Educational Groups</li>
              <li>• Social Communities</li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-gray-900/50 p-8 rounded-xl border border-white/10 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-400">Servers Configured</div>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-xl border border-white/10 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">30k+</div>
            <div className="text-gray-400">Users Managed</div>
          </div>
          <div className="bg-gray-900/50 p-8 rounded-xl border border-white/10 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
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