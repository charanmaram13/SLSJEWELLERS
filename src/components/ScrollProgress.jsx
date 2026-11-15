import React, { useEffect, useState } from 'react';

/**
 * Minimalist Luxury Gold Scroll Progress Indicator
 */
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-chocolate-950/40">
      <div
        className="h-full bg-gradient-to-r from-gold-dark via-gold-champagne to-ivory transition-all duration-100 ease-out shadow-[0_0_8px_#DCC28F]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
