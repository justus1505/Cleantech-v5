import { useEffect } from 'react';
import { PerformanceHead } from './PerformanceHead';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: object | object[];
}

export function SEOHead({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage = 'https://amplius-cleantech.de/og-image.jpg',
  noindex = false,
  schema
}: SEOHeadProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Helper function to set or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Robots meta tag
    if (noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      setMetaTag('robots', 'index, follow');
    }

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:locale', 'de_DE', true);
    
    if (canonical) {
      setMetaTag('og:url', canonical, true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let linkTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'canonical');
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute('href', canonical);
    }

    // JSON-LD Schema
    if (schema) {
      // Remove existing schema tags first
      const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
      existingSchemas.forEach(tag => tag.remove());

      // Handle both single schema and array of schemas
      const schemas = Array.isArray(schema) ? schema : [schema];
      
      schemas.forEach((schemaItem) => {
        const scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.textContent = JSON.stringify(schemaItem);
        document.head.appendChild(scriptTag);
      });
    }

    // Cleanup function
    return () => {
      // Remove schema when component unmounts
      if (schema) {
        const scriptTag = document.querySelector('script[type="application/ld+json"]');
        if (scriptTag) {
          scriptTag.remove();
        }
      }
    };
  }, [title, description, keywords, canonical, ogImage, noindex, schema]);

  return <PerformanceHead />;
}