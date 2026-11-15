import React from 'react';
import { BRAND_INFO } from '../data/jewellery';
import { MessageCircle, Phone, MapPin, ArrowUp, Sparkles, Gem } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Jewellery Runway', href: '#runway' },
    { name: 'Craftsmanship', href: '#craftsmanship' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
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
    <footer className="bg-[#1C120C] text-ivory pt-20 pb-12 relative overflow-hidden border-t border-gold-champagne/20">
      {/* Ambient background gold aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold-champagne/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-warm/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gold-champagne/15 text-left">
          
          {/* Brand Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-gold-champagne/60 flex items-center justify-center bg-chocolate-900 shadow-md">
                <span className="font-serif-luxury font-bold text-2xl text-gold-champagne tracking-wider">
                  S
                </span>
              </div>
              <div>
                <span className="font-serif-luxury text-2xl tracking-[0.2em] font-semibold text-gold-gradient uppercase block">
                  SLS JEWELLERS
                </span>
                <span className="font-sans text-[10px] tracking-[0.35em] text-gold-champagne/75 uppercase">
                  PREMIUM JEWELLERY MANUFACTURER
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-ivory/70 font-light leading-relaxed max-w-sm">
              Discover timeless jewellery crafted with passion, precision and an uncompromising eye for detail. Handcrafted with reverence in Sharraf Bazar, Tenali.
            </p>

            <div className="flex items-center gap-4 text-xs text-gold-champagne pt-1">
              <div className="flex items-center gap-1.5">
                <Gem className="w-4 h-4 text-gold-warm" />
                <span>22K Gold Hallmark</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold-warm" />
                <span>Direct Manufacturer</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif-luxury text-lg text-gold-champagne font-medium uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans text-xs uppercase tracking-widest text-ivory/70 hover:text-gold-champagne transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop & Contact Details (Col 9-12) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif-luxury text-lg text-gold-champagne font-medium uppercase tracking-wider">
              Workshop & Enquiries
            </h4>
            
            <div className="space-y-3 font-sans text-xs text-ivory/75 font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
                <span>
                  Veera Raghavulu Street, Gajula Subbaraogari Veedhi, Sharraf Bazar, Tenali, Andhra Pradesh – 522201
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-champagne shrink-0" />
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="hover:text-gold-champagne transition-colors"
                >
                  {BRAND_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-gold-champagne shrink-0" />
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-champagne hover:underline"
                >
                  WhatsApp: +91 99892 22524
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gold-metallic text-chocolate hover:shadow-[0_0_15px_rgba(220,194,143,0.35)] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-ivory/50">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-gold-champagne">SLS JEWELLERS</span>. All Rights Reserved. Sharraf Bazar, Tenali, Andhra Pradesh.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-gold-champagne/80 hover:text-gold-champagne transition-colors uppercase tracking-widest text-[11px]"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full border border-gold-champagne/30 flex items-center justify-center hover:bg-gold-champagne/10">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
