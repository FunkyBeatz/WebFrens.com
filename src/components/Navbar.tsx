import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: '/services', label: 'Services' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-black/50 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="rounded-full overflow-hidden transition-all duration-300 group-hover:scale-[1.05]">
              <img 
                src="/assets/logo.png" 
                alt="WebFrens" 
                className="w-12 h-12 transition-all duration-300 group-hover:brightness-110" 
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-400 group-hover:to-blue-400">
              WebFrens
            </span>
          </a>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-12">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="relative text-lg font-medium text-white transition-all duration-300 hover:text-purple-400 group">
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-purple-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link href="/quiz">
            <a className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg text-white transition-all duration-300 font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              Get Started
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="lg:hidden text-white p-2 hover:text-purple-400 transition-colors"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <a 
                      className="block text-lg font-medium text-white hover:text-purple-400 transition-all duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
              >
                <Link href="/quiz">
                  <a 
                    className="block bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white transition-all duration-300 font-medium hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-center mt-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </a>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 