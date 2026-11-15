import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, MessageCircle, Plus, Minus, Check, ShieldCheck, Gem, Camera, Download, Copy } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_INFO } from '../data/jewellery';
import { sendWhatsAppWithImage, getPublicImageUrl, downloadImage, copyImageToClipboard } from '../utils/whatsapp';

export default function ProductDetailModal({ product, onClose }) {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const prodName = language === 'te' ? product.nameTe : product.name;
  const prodDesc = language === 'te' ? product.descriptionTe : product.description;

  const handleAddToCart = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsAppEnquiry = async () => {
    setIsSharing(true);
    const text = `Hello SLS JEWELLERY WORKS, I am inquiring about product *${product.code}* - ${prodName} from your digital catalogue.\nCategory: ${product.category}\nQuantity: ${qty}\nPlease share approximate gram weight and current pricing details.`;
    
    await sendWhatsAppWithImage({
      text,
      imagePath: product.image,
      title: `${product.code} - ${prodName}`
    });
    setIsSharing(false);
  };

  const handleDownloadPhoto = () => {
    downloadImage(product.image, `${product.code}.jpg`);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  const handleCopyPhoto = async () => {
    const success = await copyImageToClipboard(product.image);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-3xl rounded-3xl overflow-hidden bg-chocolate-950 border border-gold-champagne/40 shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-chocolate-900 border border-gold-champagne/40 text-gold-champagne hover:bg-gold-champagne hover:text-chocolate transition-colors flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Product Image */}
          <div className="w-full md:w-1/2 bg-chocolate-900 flex flex-col items-center justify-center p-6 relative">
            <img
              src={product.image}
              alt={prodName}
              className="max-h-[300px] md:max-h-[380px] w-full object-contain rounded-xl shadow-lg"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs uppercase tracking-widest font-semibold bg-chocolate-950 text-gold-champagne border border-gold-champagne/40">
                {product.code}
              </span>
            </div>

            {/* Quick Photo Actions under the image */}
            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={handleDownloadPhoto}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chocolate-950/80 border border-gold-champagne/30 text-[11px] text-gold-champagne hover:bg-gold-champagne hover:text-chocolate transition-colors"
                title="Download high-resolution workshop photo"
              >
                {downloaded ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Download className="w-3.5 h-3.5 text-gold-warm" />}
                <span>{downloaded ? (language === 'te' ? 'డౌన్‌లోడ్ అయ్యింది!' : 'Downloaded!') : (language === 'te' ? 'ఫోటో డౌన్‌లోడ్' : 'Save Photo')}</span>
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-950/60 border border-green-500/30 text-[11px] text-green-300">
                <Camera className="w-3.5 h-3.5 text-green-400" />
                <span>{language === 'te' ? 'ఫోటో వాట్సాప్‌కు వెళ్తుంది' : 'Sends with Photo'}</span>
              </div>
            </div>
          </div>

          {/* Right: Details & Actions */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between text-left space-y-5 overflow-y-auto">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gold-champagne/80 font-medium block mb-1">
                {product.category}
              </span>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-ivory leading-tight">
                {prodName}
              </h3>

              <div className="mt-2.5 flex items-center gap-2">
                <span className="text-sm font-semibold text-gold-champagne">
                  {t('priceOnEnquiry')}
                </span>
                <span className="text-ivory/40">•</span>
                <span className="text-xs text-ivory/60">
                  {t('availability')}
                </span>
              </div>

              <div className="mt-3.5 pt-3.5 border-t border-gold-champagne/15 space-y-3">
                <p className="font-sans text-xs sm:text-sm text-ivory/80 font-light leading-relaxed">
                  {prodDesc}
                </p>

                <div className="p-3 rounded-xl bg-chocolate-900/60 border border-gold-champagne/15 space-y-1.5 text-xs text-ivory/70">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-champagne" />
                    <span>24 Karat Gold Sheeted Craftsmanship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gem className="w-3.5 h-3.5 text-gold-champagne" />
                    <span>Sharraf Bazar, Tenali Workshop Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions: Quantity + Add to Cart + WhatsApp with Photo */}
            <div className="space-y-3 pt-3 border-t border-gold-champagne/15">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-ivory/70">
                  Qty:
                </span>
                <div className="flex items-center gap-2 bg-chocolate-900 px-3 py-1.5 rounded-xl border border-gold-champagne/30">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="text-gold-champagne hover:text-ivory p-1"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-bold text-ivory px-2 min-w-[20px] text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="text-gold-champagne hover:text-ivory p-1"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  onClick={handleAddToCart}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full text-xs uppercase tracking-widest font-semibold transition-all ${
                    added
                      ? 'bg-green-700 text-white'
                      : 'bg-gold-metallic text-chocolate hover:shadow-[0_0_15px_rgba(220,194,143,0.4)]'
                  }`}
                >
                  {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
                  <span>{added ? t('inCart') : t('addToCart')}</span>
                </button>

                <button
                  onClick={handleWhatsAppEnquiry}
                  disabled={isSharing}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full text-xs uppercase tracking-widest font-semibold border-2 border-green-500 bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-500 hover:to-green-600 transition-all shadow-[0_4px_15px_rgba(34,197,94,0.35)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('btnWhatsAppWithPhoto')}</span>
                </button>
              </div>

              {/* Helpful user note about photo preview */}
              <p className="text-[11px] text-center text-gold-champagne/80 font-light">
                {language === 'te' 
                  ? '💡 ఆభరణం ఫోటో లింక్ మరియు ప్రివ్యూ వాట్సాప్ సందేశంతో స్వయంచాలకంగా పంపబడుతుంది.' 
                  : '💡 Product photo preview is automatically attached and displayed in your WhatsApp message.'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
