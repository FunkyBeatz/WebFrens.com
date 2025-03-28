import { useState } from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

interface Partner {
  name: string;
  logo: string;
  url: string;
}

export default function Partners() {
  const [partners] = useState<Partner[]>([
    {
      name: 'Whop',
      logo: '/assets/partners/whop.png',
      url: 'https://whop.com/web-frens/'
    },
    {
      name: 'Blue Moon',
      logo: '/assets/partners/blue.png',
      url: 'https://bluemoonw3.com/'
    },
    {
      name: 'Discord',
      logo: '/assets/partners/discord.png',
      url: 'https://discord.gg/gVEEv8Yswu'
    }
  ]);

  return (
    <motion.section 
      className="w-full bg-black/40 backdrop-blur-sm py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-evenly items-center max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-1/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1 
              }}
              whileHover={{ scale: 1.1 }}
            >
              <LazyImage
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-20 w-auto object-contain transition-all duration-300 
                         opacity-90 hover:opacity-100
                         group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 