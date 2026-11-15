import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock, Sparkles, ExternalLink, AlertCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/jewellery';

export default function Contact() {
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
      errs.name = 'Please enter your full name.';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = 'Please provide details of what jewellery you wish to craft.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Submission flow with WhatsApp dispatch
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const formattedMsg = `*New Website Enquiry for SLS JEWELLERS*%0A%0A*Name:* ${encodeURIComponent(
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
              BESPOKE CONSULTATION
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            Let's Create <span className="italic text-gold-gradient font-normal">Something Beautiful.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 font-light max-w-xl mx-auto mt-4 leading-relaxed">
            Visit our workshop in Sharraf Bazar, Tenali, or reach out directly to discuss customized weights, bridal harams, and orders.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-champagne to-transparent mx-auto mt-6" />
        </div>

        {/* Two-Column Grid: Location & Details vs Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brand Details, Map & Direct Channels */}
          <div className="lg:col-span-5 text-left space-y-8">
            {/* Business Card */}
            <div className="p-8 rounded-3xl bg-chocolate-900/80 border border-gold-champagne/30 shadow-xl space-y-6">
              <div>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-champagne/80 font-semibold block mb-1">
                  MANUFACTURING WORKSHOP & OFFICE
                </span>
                <h3 className="font-serif-luxury text-3xl font-semibold text-gold-gradient uppercase tracking-wider">
                  SLS JEWELLERS
                </h3>
              </div>

              {/* Exact Address */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-gold-champagne/15">
                <MapPin className="w-5 h-5 text-gold-champagne shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-gold-champagne font-medium mb-1">
                    Address
                  </h4>
                  <p className="font-sans text-sm text-ivory/85 leading-relaxed font-light">
                    Veera Raghavulu Street, Gajula Subbaraogari Veedhi, Sharraf Bazar, Tenali, Andhra Pradesh – 522201.
                  </p>
                  <a
                    href={BRAND_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gold-champagne hover:text-ivory mt-2 font-medium tracking-wider"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Direct Phone & WhatsApp */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-gold-champagne/15">
                <Phone className="w-5 h-5 text-gold-champagne shrink-0 mt-1" />
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest text-gold-champagne font-medium mb-1">
                    Direct Phone / WhatsApp
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
                    Operating Hours
                  </h4>
                  <p className="font-sans text-xs text-ivory/70">
                    Monday – Sunday: 10:00 AM – 9:00 PM IST
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
                  <span>WhatsApp Enquiry</span>
                </a>

                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs uppercase tracking-widest font-medium border border-gold-champagne/40 text-gold-champagne hover:bg-gold-champagne/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Click to Call</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Enquiry Form */}
          <div className="lg:col-span-7 text-left">
            <div className="p-8 sm:p-10 rounded-3xl bg-chocolate-900/80 border border-gold-champagne/30 shadow-2xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-ivory mb-2">
                      Send a Direct Manufacturer Enquiry
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-ivory/70 font-light">
                      Fill out the form below. Once confirmed, you can instantly submit the formatted inquiry directly to our WhatsApp.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-gold-champagne font-medium mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="e.g. Rajesh Kumar / Lakshmi Devi"
                      className={`w-full px-5 py-3.5 rounded-xl bg-chocolate-950 border ${
                        errors.name ? 'border-red-400' : 'border-gold-champagne/25'
                      } text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-champagne transition-colors font-sans text-sm`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Category Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-widest text-gold-champagne font-medium mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: null });
                        }}
                        placeholder="e.g. 99892 22524"
                        className={`w-full px-5 py-3.5 rounded-xl bg-chocolate-950 border ${
                          errors.phone ? 'border-red-400' : 'border-gold-champagne/25'
                        } text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-champagne transition-colors font-sans text-sm`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block font-sans text-xs uppercase tracking-widest text-gold-champagne font-medium mb-2">
                        Jewellery Interest
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-chocolate-950 border border-gold-champagne/25 text-ivory focus:outline-none focus:border-gold-champagne transition-colors font-sans text-sm"
                      >
                        <option value="Gold Necklaces">Gold Necklaces</option>
                        <option value="Traditional Harams">Traditional Harams</option>
                        <option value="Gold Chains">Gold Chains</option>
                        <option value="Elegant Earrings">Elegant Earrings</option>
                        <option value="Bridal Jewellery">Bridal Jewellery Set</option>
                        <option value="Traditional Jewellery">Traditional Jewellery (Kasumala)</option>
                        <option value="Custom Order / Weight">Custom Order / Weight Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-widest text-gold-champagne font-medium mb-2">
                      Inquiry Details / Gram Weight Requirements *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder="Please mention your preferred style, occasion, approximate gram weight, or any reference design..."
                      className={`w-full px-5 py-3.5 rounded-xl bg-chocolate-950 border ${
                        errors.message ? 'border-red-400' : 'border-gold-champagne/25'
                      } text-ivory placeholder-ivory/30 focus:outline-none focus:border-gold-champagne transition-colors font-sans text-sm`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-[0_0_25px_rgba(220,194,143,0.4)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4 text-chocolate" />
                    <span>Generate & Send Enquiry</span>
                  </button>

                  <p className="text-center text-[11px] text-ivory/50">
                    Direct communication with SLS JEWELLERS, Sharraf Bazar, Tenali. No spam guaranteed.
                  </p>
                </form>
              ) : (
                /* Successful Validation & Immediate Delivery Step */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-champagne/10 border-2 border-gold-champagne flex items-center justify-center mx-auto text-gold-champagne shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-serif-luxury text-3xl text-ivory font-normal">
                      Enquiry Formatted Successfully!
                    </h3>
                    <p className="font-sans text-sm text-ivory/80 font-light mt-2 max-w-md mx-auto">
                      Thank you, <span className="text-gold-champagne font-medium">{formData.name}</span>. Your inquiry for <span className="text-gold-champagne font-medium">{formData.category}</span> is prepared.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-5 rounded-2xl bg-chocolate-950 border border-gold-champagne/20 text-left max-w-lg mx-auto space-y-2 text-xs">
                    <p className="text-ivory/60">
                      <strong className="text-gold-champagne">Contact Number:</strong> {formData.phone}
                    </p>
                    <p className="text-ivory/60">
                      <strong className="text-gold-champagne">Category:</strong> {formData.category}
                    </p>
                    <p className="text-ivory/60">
                      <strong className="text-gold-champagne">Message:</strong> {formData.message}
                    </p>
                  </div>

                  {/* Direct WhatsApp Send Action */}
                  <div className="space-y-3 max-w-md mx-auto">
                    <button
                      onClick={handleWhatsAppDirect}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-[0_0_25px_rgba(220,194,143,0.5)] transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-chocolate" />
                      <span>Send Directly Via WhatsApp (+91 99892 22524)</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="text-xs uppercase tracking-widest text-ivory/60 hover:text-gold-champagne transition-colors underline pt-2"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </motion.div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
