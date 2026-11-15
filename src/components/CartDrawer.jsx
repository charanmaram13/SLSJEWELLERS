import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, setIsCheckoutOpen } = useCart();
  const { language, t } = useLanguage();

  if (!isCartOpen) return null;

  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleClearCart = () => {
    if (window.confirm(t('clearCartConfirm'))) {
      clearCart();
    }
  };

  const handleProceedToCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
        />

        {/* Slide-Over Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="absolute top-0 right-0 h-full w-full max-w-md bg-chocolate-950 border-l border-gold-champagne/25 shadow-2xl flex flex-col justify-between"
        >
          {/* Drawer Header */}
          <div className="p-6 border-b border-gold-champagne/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-chocolate-900 border border-gold-champagne/40 flex items-center justify-center text-gold-champagne">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-luxury text-2xl font-normal text-ivory">
                  {t('myCart')}
                </h3>
                <span className="text-xs text-gold-champagne/80 font-sans tracking-wider">
                  {cart.length} {t('totalProducts')} • {totalQty} {t('totalQuantity')}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-gold-champagne hover:bg-gold-champagne/10 hover:text-ivory transition-colors"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Body: Products List or Empty State */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-20 h-20 rounded-full bg-chocolate-900/60 border border-gold-champagne/20 flex items-center justify-center text-gold-champagne/40">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h4 className="font-serif-luxury text-2xl text-ivory font-normal">
                  {t('cartEmptyTitle')}
                </h4>
                <p className="font-sans text-xs text-ivory/60 max-w-xs font-light leading-relaxed">
                  {t('cartEmptyDesc')}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-medium border border-gold-champagne text-gold-champagne hover:bg-gold-champagne hover:text-chocolate transition-colors"
                >
                  {t('continueShopping')}
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-gold-champagne/10">
                  <span className="text-xs uppercase tracking-wider text-ivory/60">
                    {t('allProducts')}
                  </span>
                  <button
                    onClick={handleClearCart}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{t('clearCart')}</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {cart.map((item) => {
                    const prodName = language === 'te' ? item.product.nameTe : item.product.name;
                    return (
                      <div
                        key={item.product.id}
                        className="p-3.5 rounded-2xl bg-chocolate-900/80 border border-gold-champagne/20 flex items-center gap-3.5 shadow-sm text-left"
                      >
                        {/* Thumbnail */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-chocolate-950 shrink-0 border border-gold-champagne/20">
                          <img
                            src={item.product.image}
                            alt={prodName}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <span className="px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-semibold bg-chocolate-950 text-gold-champagne border border-gold-champagne/30 inline-block mb-1">
                            {item.product.code}
                          </span>
                          <h4 className="font-serif-luxury text-base text-ivory font-normal truncate leading-tight">
                            {prodName}
                          </h4>
                          <span className="text-[11px] text-gold-champagne/75 font-sans">
                            {t('priceOnEnquiry')}
                          </span>
                        </div>

                        {/* Quantity Controls & Remove */}
                        <div className="flex flex-col items-end gap-2 shrink-0">
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-ivory/40 hover:text-red-400 transition-colors p-1"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>

                          <div className="flex items-center gap-1.5 bg-chocolate-950 px-2 py-1 rounded-lg border border-gold-champagne/20">
                            <button
                              onClick={() => updateQuantity(item.product.id, -1)}
                              className="text-gold-champagne hover:text-ivory p-0.5"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold text-ivory px-1.5 min-w-[16px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, 1)}
                              className="text-gold-champagne hover:text-ivory p-0.5"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer: Notice & Checkout Button */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gold-champagne/20 bg-chocolate-900/90 space-y-4">
              <div className="p-3 rounded-xl bg-chocolate-950/70 border border-gold-champagne/15 text-left">
                <p className="text-[11px] text-ivory/70 leading-relaxed font-light">
                  ✦ {t('priceNotice')}
                </p>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-[0_0_25px_rgba(220,194,143,0.5)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4 text-chocolate" />
                <span>{t('btnSendOrderWhatsApp')}</span>
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full text-center text-xs text-ivory/60 hover:text-gold-champagne transition-colors uppercase tracking-widest pt-1"
              >
                {t('continueShopping')}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
