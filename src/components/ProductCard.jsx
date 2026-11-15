import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_INFO } from '../data/jewellery';

export default function ProductCard({ product, onViewDetails }) {
  const { addToCart, cart } = useCart();
  const { language, t } = useLanguage();
  const [justAdded, setJustAdded] = useState(false);

  const isInCart = cart.some((item) => item.product.id === product.id);
  const prodName = language === 'te' ? product.nameTe : product.name;

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleWhatsAppQuick = (e) => {
    e.stopPropagation();
    const text = `Hello SLS JEWELLERS, I am inquiring about *${product.code}* - ${encodeURIComponent(prodName)} from your website catalogue.`;
    window.open(`https://wa.me/${BRAND_INFO.phoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div
      onClick={() => onViewDetails(product)}
      className="group relative rounded-2xl overflow-hidden bg-chocolate-900/90 border border-gold-champagne/25 hover:border-gold-champagne/60 transition-all duration-300 flex flex-col justify-between shadow-[0_10px_25px_rgba(28,18,12,0.6)] hover:shadow-[0_15px_35px_rgba(201,160,98,0.2)] cursor-pointer"
    >
      {/* Product Image Frame */}
      <div className="relative aspect-[4/5] bg-chocolate-950 overflow-hidden flex items-center justify-center p-3">
        <img
          src={product.image}
          alt={prodName}
          className="w-full h-full object-cover object-center rounded-xl transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Product Code Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs uppercase tracking-widest font-bold bg-chocolate-950/90 text-gold-champagne border border-gold-champagne/40 backdrop-blur-md shadow-md">
            {product.code}
          </span>
        </div>

        {/* Quick WhatsApp Action on top right */}
        <button
          onClick={handleWhatsAppQuick}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-chocolate-950/90 border border-gold-champagne/40 text-gold-champagne flex items-center justify-center hover:bg-gold-champagne hover:text-chocolate transition-colors shadow-md"
          title="WhatsApp Enquiry"
          aria-label="WhatsApp Enquiry"
        >
          <MessageCircle className="w-4 h-4" />
        </button>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
        <div>
          <span className="text-[10px] tracking-[0.2em] uppercase text-gold-champagne/80 font-semibold block mb-1">
            {product.category}
          </span>
          <h4 className="font-serif-luxury text-xl sm:text-2xl font-normal text-ivory group-hover:text-gold-champagne transition-colors line-clamp-2 leading-snug">
            {prodName}
          </h4>
          <p className="font-sans text-xs text-gold-champagne font-medium mt-1.5">
            {t('priceOnEnquiry')}
          </p>
        </div>

        {/* Action Buttons: Add to Cart & View Details */}
        <div className="pt-2 grid grid-cols-2 gap-2 border-t border-gold-champagne/15">
          <button
            onClick={handleAdd}
            className={`flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all ${
              justAdded
                ? 'bg-green-700 text-white shadow-md'
                : isInCart
                ? 'bg-gold-champagne/20 text-gold-champagne border border-gold-champagne/40'
                : 'bg-gold-metallic text-chocolate hover:shadow-[0_0_15px_rgba(220,194,143,0.4)]'
            }`}
          >
            {justAdded || isInCart ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
            <span className="truncate">{justAdded ? t('inCart') : isInCart ? t('inCart') : t('addToCart')}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs uppercase tracking-wider font-medium border border-gold-champagne/30 text-ivory/80 hover:text-gold-champagne hover:border-gold-champagne/60 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="truncate">{t('viewDetails')}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
