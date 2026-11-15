import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/jewellery';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlight tracking
      const sections = ['home', 'about', 'collections', 'runway', 'craftsmanship', 'why-us', 'gallery', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Collections', href: '#collections', id: 'collections' },
    { name: 'Craftsmanship', href: '#craftsmanship', id: 'craftsmanship' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#2B1D15]/95 backdrop-blur-md py-3.5 border-b border-gold-champagne/15 shadow-[0_10px_30px_rgba(28,18,12,0.85)]'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Monogram */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gold-champagne/60 flex items-center justify-center bg-chocolate-900 shadow-md group-hover:border-gold-champagne transition-colors">
                <span className="font-serif-luxury font-bold text-base md:text-lg text-gold-champagne tracking-wider">
                  S
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-xl md:text-2xl tracking-[0.2em] font-semibold text-gold-gradient uppercase group-hover:opacity-90 transition-opacity">
                  SLS JEWELLERS
                </span>
                <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] text-ivory/60 uppercase">
                  MANUFACTURER • TENALI
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-1 ${
                      isActive
                        ? 'text-gold-champagne font-medium'
                        : 'text-ivory/80 hover:text-gold-champagne'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-champagne to-transparent" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop WhatsApp Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-[0_0_20px_rgba(220,194,143,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-chocolate transition-transform group-hover:rotate-12" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gold-champagne/30 text-gold-champagne hover:bg-gold-champagne/10"
                aria-label="WhatsApp Enquiry"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gold-champagne hover:text-ivory focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Slide-Over Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-chocolate-950 border-l border-gold-champagne/20 p-6 flex flex-col justify-between transition-transform duration-400 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-gold-champagne/15">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border border-gold-champagne/60 flex items-center justify-center bg-chocolate-900">
                  <span className="font-serif-luxury text-sm font-bold text-gold-champagne">S</span>
                </div>
                <span className="font-serif-luxury text-lg tracking-widest text-gold-gradient uppercase font-semibold">
                  SLS JEWELLERS
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-gold-champagne hover:text-ivory"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif-luxury text-xl tracking-wider text-ivory/90 hover:text-gold-champagne transition-colors py-1 flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-gold-champagne/40 group-hover:text-gold-champagne transition-colors text-xs tracking-widest">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-gold-champagne/15 space-y-3">
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark text-chocolate shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>

            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs uppercase tracking-widest font-medium border border-gold-champagne/40 text-gold-champagne hover:bg-gold-champagne/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {BRAND_INFO.phoneDisplay}</span>
            </a>

            <p className="text-center text-[10px] tracking-wider text-ivory/50 uppercase pt-2">
              Sharraf Bazar, Tenali, Andhra Pradesh
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
