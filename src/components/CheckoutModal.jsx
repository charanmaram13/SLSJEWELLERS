import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Send, ShieldCheck, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_INFO } from '../data/jewellery';
import { getPublicImageUrl } from '../utils/whatsapp';

export default function CheckoutModal() {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, clearCart, setIsCartOpen } = useCart();
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = t('errName');
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) errs.phone = t('errPhone');
    if (!formData.location.trim()) errs.location = t('errLocation');
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendWhatsAppOrder = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the formatted WhatsApp order message with photos included
    const itemsList = cart.map((item, index) => {
      const prodName = language === 'te' ? item.product.nameTe : item.product.name;
      const photoUrl = getPublicImageUrl(item.product.image);
      return `${index + 1}. *Code:* ${item.product.code}%0A   *Item:* ${encodeURIComponent(prodName)}%0A   *Qty:* ${item.quantity}%0A   *Category:* ${encodeURIComponent(item.product.category)}%0A   *Photo:* ${encodeURIComponent(photoUrl)}`;
    }).join('%0A%0A');

    const totalQty = cart.reduce((sum, it) => sum + it.quantity, 0);

    const fullMessage = `*NEW JEWELLERY ENQUIRY*%0A*SLS JEWELLERY WORKS – TENALI*%0A========================%0A*Customer Details:*%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Mobile:* ${encodeURIComponent(formData.phone)}%0A*Location / Village:* ${encodeURIComponent(formData.location)}${formData.message.trim() ? `%0A*Note:* ${encodeURIComponent(formData.message)}` : ''}%0A========================%0A*SELECTED JEWELLERY ITEMS (${cart.length} Products, ${totalQty} Total Qty):*%0A%0A${itemsList}%0A%0A========================%0A_Please confirm gold availability, approximate gram weight and pricing._`;

    // Open WhatsApp
    window.open(`https://wa.me/${BRAND_INFO.phoneRaw}?text=${fullMessage}`, '_blank');

    // Close modals
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCheckoutOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-chocolate-950 border-2 border-gold-champagne/40 shadow-2xl text-left"
        >
          {/* Close button */}
          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-chocolate-900 border border-gold-champagne/30 text-gold-champagne hover:bg-gold-champagne hover:text-chocolate transition-colors flex items-center justify-center"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pr-10 mb-6">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-champagne/80 font-semibold block mb-1">
              SLS JEWELLERY WORKS · TENALI
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-ivory font-normal">
              {t('checkoutTitle')}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-ivory/70 font-light mt-1">
              {t('checkoutSub')}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSendWhatsAppOrder} className="space-y-4" noValidate>
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-gold-champagne font-medium mb-1.5">
                {t('fieldName')}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: null });
                }}
                placeholder={t('fieldNamePlaceholder')}
                className={`w-full px-4 py-3 rounded-xl bg-chocolate-900 border ${
                  errors.name ? 'border-red-400' : 'border-gold-champagne/30'
                } text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-champagne text-sm`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-gold-champagne font-medium mb-1.5">
                {t('fieldPhone')}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (errors.phone) setErrors({ ...errors, phone: null });
                }}
                placeholder={t('fieldPhonePlaceholder')}
                className={`w-full px-4 py-3 rounded-xl bg-chocolate-900 border ${
                  errors.phone ? 'border-red-400' : 'border-gold-champagne/30'
                } text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-champagne text-sm`}
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Town / Village */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-gold-champagne font-medium mb-1.5">
                {t('fieldLocation')}
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => {
                  setFormData({ ...formData, location: e.target.value });
                  if (errors.location) setErrors({ ...errors, location: null });
                }}
                placeholder={t('fieldLocationPlaceholder')}
                className={`w-full px-4 py-3 rounded-xl bg-chocolate-900 border ${
                  errors.location ? 'border-red-400' : 'border-gold-champagne/30'
                } text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-champagne text-sm`}
              />
              {errors.location && (
                <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.location}</span>
                </p>
              )}
            </div>

            {/* Optional Note */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-gold-champagne font-medium mb-1.5">
                {t('fieldMessage')}
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={t('fieldMessagePlaceholder')}
                className="w-full px-4 py-2.5 rounded-xl bg-chocolate-900 border border-gold-champagne/30 text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-champagne text-sm"
              />
            </div>

            {/* Order Summary Pill */}
            <div className="p-3 rounded-xl bg-chocolate-900/60 border border-gold-champagne/20 flex items-center justify-between text-xs text-ivory/80">
              <span>{t('totalProducts')}: <strong className="text-gold-champagne">{cart.length}</strong></span>
              <span>{t('totalQuantity')}: <strong className="text-gold-champagne">{cart.reduce((s, i) => s + i.quantity, 0)}</strong></span>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full mt-2 flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-[0_0_20px_rgba(220,194,143,0.5)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 text-chocolate" />
              <span>{t('btnSubmitOrder')}</span>
            </button>

            <p className="text-[11px] text-ivory/60 text-center flex items-center justify-center gap-1 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-warm" />
              <span>{t('secureNote')}</span>
            </p>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
