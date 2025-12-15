import { Helmet } from 'react-helmet';

export function PerformanceHead() {
  return (
    <Helmet>
      {/* DNS Prefetch & Preconnect für externe Ressourcen */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Font Optimization - Preload kritische Schriften */}
      <link 
        rel="preload" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
        as="style"
      />
      
      {/* Prefetch wichtige Seiten für schnellere Navigation */}
      <link rel="prefetch" href="/reinigung" />
      <link rel="prefetch" href="/anlagenpflege" />
      <link rel="prefetch" href="/rauchmelder" />
      <link rel="prefetch" href="/wartung" />
    </Helmet>
  );
}
