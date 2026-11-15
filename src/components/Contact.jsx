import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock, Sparkles, ExternalLink, AlertCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/jewellery';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Gold Necklaces',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = language === 'te' ? 'దయచేసి మీ పూర్తి పేరు నమోదు చేయండి.' : 'Please enter your full name.';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = language === 'te' ? 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.' : 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = language === 'te' ? 'దయచేసి మీరు కోరుకుంటున్న ఆభరణాల వివరాలు తెలియజేయండి.' : 'Please provide details of what jewellery you wish to craft.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const formattedMsg = `*New Website Enquiry for SLS JEWELLERY WORKS*%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Interest:* ${encodeURIComponent(
      formData.category
    )}%0A*Message:* ${encodeURIComponent(formData.message)}`;

    window.open(`https://wa.me/${BRAND_INFO.phoneRaw}?text=${formattedMsg}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      category: 'Gold Necklaces',
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#2B1D15] relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-champagne/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-warm/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-champagne/30 bg-chocolate-900/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne font-medium">
              {language === 'te' ? 'ప్రత్యక్ష సంప్రదింపులు' : 'BESPOKE CONSULTATION'}
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            {language === 'te' ? (
              <>మమ్మల్ని <span className="italic text-gold-gradient font-normal">సంప్రదించండి</span></>
            ) : (
              <>Let's Create <span className="italic text-gold-gradient font-normal">Something Beautiful.</span></>
            )}
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 font-light max-w-xl mx-auto mt-4 leading-relaxed">
            {t('contactSub')}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-champagne to-transparent mx-auto mt-6" />
        </div>

        {/* Two-Column Grid: Location & Details vs Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Details, Map & Direct Channels */}
          <div className="lg:col-span-5 text-left space-y-8">
            {/* Business Card */}
            <div className="p-8 rounded-3xl bg-chocolate-900/80 border border-gold-champagne/30 shadow-xl space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-full border-2 border-gold-champagne bg-white overflow-hidden p-1 shadow-md shrink-0">
                  <img src="/assets/logo.jpg" alt="SLS Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-champagne/80 font-semibold block mb-0.5">
                    {language === 'te' ? 'తయారీ కేంద్రం & కార్యాలయం' : 'MANUFACTURING WORKSHOP & OFFICE'}
                  </span>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-semibold text-gold-gradient uppercase tracking-wider">
                    SLS JEWELLERY WORKS
                  </h3>
                </div>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-gold-champagne/15">
                <MapPin className="w-5 h-5 text-gold-champagne shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-gold-champagne font-medium mb-1">
                    {t('addressLabel')}
                  </h4>
                  <p className="font-sans text-sm text-ivory/85 leading-relaxed font-light">
                    {t('addressValue')}
                  </p>
                  <a
                    href={BRAND_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gold-champagne hover:text-ivory mt-2 font-medium tracking-wider"
                  >
                    <span>{language === 'te' ? 'గూగుల్ మ్యాప్స్‌లో చూడండి' : 'View on Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-gold-champagne/15">
                <Phone className="w-5 h-5 text-gold-champagne shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-gold-champagne font-medium mb-1">
                    {t('phoneLabel')}
                  </h4>
                  <p className="font-serif-luxury text-xl text-ivory font-medium">
                    {BRAND_INFO.phoneDisplay}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-gold-champagne/15">
                <Clock className="w-5 h-5 text-gold-champagne shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-gold-champagne font-medium mb-1">
                    {t('hoursLabel')}
                  </h4>
                  <p className="font-sans text-xs text-ivory/70">
                    {t('hoursValue')}
                  </p>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark text-chocolate hover:shadow-[0_0_15px_rgba(220,194,143,0.35)] transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-chocolate" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs uppercase tracking-widest font-semibold border border-gold-champagne/50 text-gold-champagne hover:bg-chocolate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t('btnCallNow')}</span>
                </a>
              </div>
            </div>

            {/* Tenali Hub Guarantee Card */}
            <div className="p-6 rounded-2xl bg-chocolate-900/40 border border-gold-champagne/15 text-xs text-ivory/70 leading-relaxed font-light">
              <span className="font-serif-luxury text-base text-gold-champagne font-medium block mb-1">
                {language === 'te' ? 'తెనాలి షరాఫ్ బజార్ ప్రత్యక్ష సేవ' : 'Visiting Sharraf Bazar, Tenali?'}
              </span>
              {language === 'te'
                ? 'మా వర్క్‌షాప్‌ను ప్రత్యక్షంగా సందర్శించి నమూనాలను పరిశీలించవచ్చు. మరింత సమాచారం కోసం రాకముందే వాట్సాప్‌లో సంప్రదించండి.'
                : 'Our master goldsmiths welcome patrons and jewellers for dedicated consultation. Advance appointments ensure dedicated design previews.'}
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-chocolate-900/90 border border-gold-champagne/30 shadow-2xl relative text-left">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-light text-ivory mb-2">
                      {language === 'te' ? 'ఆభరణాల విచారణ పత్రం' : 'Enquire Directly With Our Artisans'}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-ivory/60 font-light">
                      {language === 'te' ? 'వివరాలను నింపండి, త్వరలోనే సంప్రదిస్తాము.' : 'Fill out your requirements below for custom gold weight estimation.'}
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-champagne font-medium">
                      {t('fieldName')}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('fieldNamePlaceholder')}
                      className={`w-full px-4 py-3.5 rounded-xl bg-chocolate-950 border ${
                        errors.name ? 'border-red-400' : 'border-gold-champagne/30'
                      } text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-champagne transition-colors text-sm`}
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-champagne font-medium">
                      {t('fieldPhone')}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t('fieldPhonePlaceholder')}
                      className={`w-full px-4 py-3.5 rounded-xl bg-chocolate-950 border ${
                        errors.phone ? 'border-red-400' : 'border-gold-champagne/30'
                      } text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-champagne transition-colors text-sm`}
                    />
                    {errors.phone && (
                      <span className="text-red-400 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Jewellery Category Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-champagne font-medium">
                      {t('category')}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-chocolate-950 border border-gold-champagne/30 text-ivory focus:outline-none focus:border-gold-champagne transition-colors text-sm"
                    >
                      <option value="Gold Necklaces">{t('catNecklaces')}</option>
                      <option value="Traditional Harams">{t('catHarams')}</option>
                      <option value="Gold Chains">{t('catChains')}</option>
                      <option value="Earrings & Jhumkas">{t('catEarrings')}</option>
                      <option value="Bridal Jewellery">{t('catBridal')}</option>
                      <option value="Traditional Jewellery">{t('catTraditional')}</option>
                      <option value="Bespoke Design">{language === 'te' ? 'ప్రత్యేక ఆర్డర్' : 'Bespoke / Custom'}</option>
                    </select>
                  </div>

                  {/* Message / Specifications */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-widest text-gold-champagne font-medium">
                      {t('fieldMessage')}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('fieldMessagePlaceholder')}
                      className={`w-full px-4 py-3.5 rounded-xl bg-chocolate-950 border ${
                        errors.message ? 'border-red-400' : 'border-gold-champagne/30'
                      } text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-champagne transition-colors text-sm resize-none`}
                    />
                    {errors.message && (
                      <span className="text-red-400 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-[0_0_20px_rgba(220,194,143,0.4)] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>{language === 'te' ? 'విచారణను పంపండి' : 'Send Enquiry Request'}</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-ivory/50 text-center">
                    {t('secureNote')}
                  </p>
                </form>
              ) : (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-gold-champagne/20 border border-gold-champagne flex items-center justify-center mx-auto text-gold-champagne">
                    <CheckCircle2 className="w-8 h-8 text-gold-warm" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif-luxury text-3xl font-light text-ivory">
                      {language === 'te' ? 'ధన్యవాదాలు!' : 'Thank You!'}
                    </h3>
                    <p className="font-sans text-sm text-ivory/70 max-w-md mx-auto">
                      {language === 'te'
                        ? 'మీ విచారణ వివరాలు స్వీకరించబడ్డాయి. త్వరిత సంభాషణ కొరకు వాట్సాప్‌ను క్లిక్ చేయండి.'
                        : 'Your enquiry has been prepared. For immediate response, dispatch directly to our master goldsmiths via WhatsApp.'}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-chocolate" />
                      <span>{language === 'te' ? 'వాట్సాప్ ద్వారా పంపండి' : 'Launch WhatsApp Now'}</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium text-ivory/60 hover:text-ivory border border-gold-champagne/30 hover:border-gold-champagne/60 transition-colors"
                    >
                      {language === 'te' ? 'మరొక సందేశం పంపండి' : 'Submit Another Request'}
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
