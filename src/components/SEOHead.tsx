interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords = [], 
  ogImage = '/assets/og-image.png',
  ogUrl = 'https://webfrens.com'
}: SEOHeadProps) {
  const defaultKeywords = [
    'Discord server setup',
    'Discord community management',
    'Professional Discord services',
    'Discord server configuration',
    'Discord server audit',
    'Discord bot setup',
    'Community building',
    'Server security'
  ];

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title} | WebFrens - Professional Discord Server Solutions</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={[...defaultKeywords, ...keywords].join(', ')} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="WebFrens" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.ico" />
    </>
  );
} 