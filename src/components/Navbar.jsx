import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, ShoppingBag, Globe } from 'lucide-react';
import { BRAND_INFO } from '../data/jewellery';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { totalQuantity, setIsCartOpen } = useCart();
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
      const sections = ['home', 'catalogue', 'about', 'collections', 'runway', 'craftsmanship', 'why-us', 'gallery', 'contact'];
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
    { name: t('navHome'), href: '#home', id: 'home' },
    { name: t('navCatalogue'), href: '#catalogue', id: 'catalogue' },
    { name: t('navAbout'), href: '#about', id: 'about' },
    { name: t('navCollections'), href: '#collections', id: 'collections' },
    { name: t('navCraftsmanship'), href: '#craftsmanship', id: 'craftsmanship' },
    { name: t('navGallery'), href: '#gallery', id: 'gallery' },
    { name: t('navContact'), href: '#contact', id: 'contact' },
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

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#2B1D15]/95 backdrop-blur-md py-3.5 border-b border-gold-champagne/15 shadow-[0_10px_30px_rgba(28,18,12,0.85)]'
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Monogram */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 sm:gap-3 group text-left cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-gold-champagne flex items-center justify-center bg-white shadow-[0_0_12px_rgba(220,194,143,0.35)] group-hover:border-gold-warm transition-all group-hover:scale-105 overflow-hidden p-0.5 shrink-0">
                <img
                  src="/assets/logo.jpg"
                  alt="SLS JEWELLERS Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-lg sm:text-2xl tracking-[0.2em] font-semibold text-gold-gradient uppercase group-hover:opacity-90 transition-opacity leading-none">
                  SLS JEWELLERS
                </span>
                <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.3em] text-ivory/60 uppercase mt-1">
                  TENALI · MANUFACTURER
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xs uppercase tracking-[0.18em] transition-all duration-300 relative py-1 ${
                      isActive
                        ? 'text-gold-champagne font-semibold'
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

            {/* Right Action Controls: Language Switcher, Cart Badge, WhatsApp Enquiry */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Language Switcher Pill */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-champagne/40 bg-chocolate-900 text-gold-champagne text-xs font-medium hover:bg-gold-champagne hover:text-chocolate transition-all shadow-sm"
                title="Switch Language"
                aria-label="Switch Language"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider">
                  {language === 'en' ? 'తెలుగు' : 'English'}
                </span>
              </button>

              {/* Shopping Cart Button with Item Badge */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full border border-gold-champagne/40 bg-chocolate-900 text-gold-champagne hover:bg-gold-champagne hover:text-chocolate transition-all shadow-sm"
                aria-label="View Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white font-bold text-[10px] flex items-center justify-center shadow-md animate-pulse">
                    {totalQuantity}
                  </span>
                )}
              </button>

              {/* Desktop WhatsApp Action Button */}
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-semibold text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-[0_0_15px_rgba(220,194,143,0.4)] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-chocolate" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-gold-champagne hover:text-ivory focus:outline-none transition-colors xl:hidden"
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
        className={`fixed inset-0 z-50 transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 w-[85%] max-w-sm h-full bg-chocolate-950 border-l border-gold-champagne/25 p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-gold-champagne/15">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full border-2 border-gold-champagne flex items-center justify-center bg-white shadow-md overflow-hidden p-0.5 shrink-0">
                  <img
                    src="/assets/logo.jpg"
                    alt="SLS JEWELLERS Logo"
                    className="w-full h-full object-contain"
                  />
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
            <div className="py-6 flex flex-col space-y-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif-luxury text-xl tracking-wider text-ivory/90 hover:text-gold-champagne transition-colors py-1 flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-gold-champagne/40 group-hover:text-gold-champagne transition-colors text-xs">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-gold-champagne/15 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs uppercase tracking-widest font-semibold border border-gold-champagne text-gold-champagne hover:bg-gold-champagne hover:text-chocolate transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{t('cartLabel')} ({totalQuantity})</span>
            </button>

            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark text-chocolate shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91 99892 22524</span>
            </a>

            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium text-ivory/70 hover:text-gold-champagne transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{t('btnCallNow')}</span>
            </a>

            <p className="text-center text-[10px] tracking-wider text-ivory/50 uppercase pt-1">
              Sharraf Bazar, Tenali, Andhra Pradesh
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
