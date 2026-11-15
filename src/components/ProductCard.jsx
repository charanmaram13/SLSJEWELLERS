import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_INFO } from '../data/jewellery';
import { sendWhatsAppWithImage } from '../utils/whatsapp';

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
    const text = `Hello SLS JEWELLERS, I am inquiring about product *${product.code}* - ${prodName} from your digital catalogue. Please share weight and pricing details.`;
    sendWhatsAppWithImage({
      text,
      imagePath: product.image,
      title: `${product.code} - ${prodName}`
    });
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

        {/* Quick WhatsApp Action on top right with Photo indicator */}
        <button
          onClick={handleWhatsAppQuick}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-chocolate-950/90 border border-gold-champagne/40 text-gold-champagne flex items-center justify-center hover:bg-gold-champagne hover:text-chocolate transition-colors shadow-md"
          title="Send with Photo on WhatsApp"
          aria-label="Send with Photo on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </button>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left space-y-3">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-gold-champagne/70 font-semibold block">
            {product.category}
          </span>
          <h3 className="font-serif-luxury text-lg sm:text-xl font-normal text-ivory group-hover:text-gold-champagne transition-colors line-clamp-1 mt-1">
            {prodName}
          </h3>
          <p className="text-xs text-gold-champagne/90 font-medium mt-1">
            {t('priceOnEnquiry')}
          </p>
        </div>

        {/* Actions Bottom Bar */}
        <div className="pt-2 border-t border-gold-champagne/10 flex items-center gap-2">
          <button
            onClick={handleAdd}
            className={`flex-1 py-2 px-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-1.5 ${
              justAdded || isInCart
                ? 'bg-chocolate-800 border border-gold-champagne/50 text-gold-champagne'
                : 'bg-gold-gradient text-chocolate hover:opacity-90'
            }`}
          >
            {justAdded || isInCart ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>{t('inCart')}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{t('addToCart')}</span>
              </>
            )}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="p-2 rounded-xl border border-gold-champagne/30 text-gold-champagne hover:bg-gold-champagne hover:text-chocolate transition-colors"
            title={t('viewDetails')}
            aria-label={t('viewDetails')}
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
