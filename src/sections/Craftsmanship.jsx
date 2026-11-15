import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../data/images';
import { CRAFTSMANSHIP_STAGES } from '../data/jewellery';
import { Sparkles, Compass, Hammer, Eye, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Craftsmanship() {
  const { language, t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const stagesData = language === 'te' ? [
    {
      step: "01",
      title: "డిజైన్ స్కెచింగ్ & ప్లానింగ్",
      description: "సాంప్రదాయ టెంపుల్ శిల్పకళ మరియు ఆధునిక పోకడలను పరిగణనలోకి తీసుకొని ప్రతి ఆభరణానికి అత్యంత నిశితమైన స్కెచ్ తయారుచేయబడుతుంది.",
      focus: "కళాత్మక రూపకల్పన",
      metrics: "100% చేతితో గీసిన డిజైన్లు",
      image: IMAGES.craftsmanship[0].image,
      alt: IMAGES.craftsmanship[0].alt,
      icon: Compass
    },
    {
      step: "02",
      title: "24 క్యారెట్ బంగారం తాపడం కళ",
      description: "స్వచ్ఛమైన 24 క్యారెట్ బంగారు తాపడంతో సున్నితమైన రేకులు, తీగలను మలిచి నాణ్యమైన చేతిపనితో రూపొందిస్తాము.",
      focus: "చేతివృత్తి నైపుణ్యం",
      metrics: "24 Karat Gold Sheeted",
      image: IMAGES.craftsmanship[1].image,
      alt: IMAGES.craftsmanship[1].alt,
      icon: Hammer
    },
    {
      step: "03",
      title: "రత్నాలు & కెంపుల అమరిక",
      description: "సహజమైన రూబీలు, పచ్చలు మరియు మేలైన రాళ్లను గ్రిప్ పద్ధతిలో బలంగా, సురక్షితంగా పొదుగుతాము.",
      focus: "నిష్కల్మషమైన అమరిక",
      metrics: "మైక్రోస్కోపిక్ నాణ్యత",
      image: IMAGES.craftsmanship[2].image,
      alt: IMAGES.craftsmanship[2].alt,
      icon: Eye
    },
    {
      step: "04",
      title: "హ్యాండ్ పాలిషింగ్ & నాణ్యత తనిఖీ",
      description: "ఆభరణం పూర్తయిన తర్వాత ప్రత్యేక బఫింగ్ మరియు పాలిషింగ్ చేసి, దశాబ్దాల పాటు మెరిసేలా పూర్తి తనిఖీ చేస్తాము.",
      focus: "చివరి మెరుపు",
      metrics: "జీవితకాలం ఉండే మెరుపు",
      image: IMAGES.craftsmanship[3].image,
      alt: IMAGES.craftsmanship[3].alt,
      icon: CheckCircle2
    }
  ] : [
    {
      ...CRAFTSMANSHIP_STAGES[0],
      image: IMAGES.craftsmanship[0].image,
      alt: IMAGES.craftsmanship[0].alt,
      icon: Compass
    },
    {
      ...CRAFTSMANSHIP_STAGES[1],
      image: IMAGES.craftsmanship[1].image,
      alt: IMAGES.craftsmanship[1].alt,
      icon: Hammer
    },
    {
      ...CRAFTSMANSHIP_STAGES[2],
      image: IMAGES.craftsmanship[2].image,
      alt: IMAGES.craftsmanship[2].alt,
      icon: Eye
    },
    {
      ...CRAFTSMANSHIP_STAGES[3],
      image: IMAGES.craftsmanship[3].image,
      alt: IMAGES.craftsmanship[3].alt,
      icon: CheckCircle2
    }
  ];

  const currentStage = stagesData[activeStep];
  const CurrentIcon = currentStage.icon;

  return (
    <section id="craftsmanship" className="py-24 md:py-32 bg-chocolate relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-champagne/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-champagne/30 bg-chocolate-900/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne font-medium">
              {language === 'te' ? 'స్వర్ణకారుల కళానైపుణ్యం' : 'ARTISANAL METIER'}
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            {language === 'te' ? (
              <>ప్రతి సూక్ష్మ భాగంలోనూ <span className="italic text-gold-gradient font-normal">నిండిన అందం.</span></>
            ) : (
              <>The Beauty Behind <span className="italic text-gold-gradient font-normal">Every Detail.</span></>
            )}
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 font-light max-w-xl mx-auto mt-4 leading-relaxed">
            {t('craftSub')}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-champagne to-transparent mx-auto mt-6" />
        </div>

        {/* Step Selector Tab Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
          {stagesData.map((stage, idx) => {
            const isSelected = activeStep === idx;
            const Icon = stage.icon;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 md:p-5 rounded-2xl text-left transition-all duration-300 relative border ${
                  isSelected
                    ? 'bg-chocolate-900 border-gold-champagne shadow-[0_10px_25px_rgba(201,160,98,0.2)]'
                    : 'bg-chocolate-900/40 border-gold-champagne/15 hover:border-gold-champagne/40 hover:bg-chocolate-900/70'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-serif-luxury text-sm font-semibold tracking-wider ${
                    isSelected ? 'text-gold-champagne' : 'text-ivory/40'
                  }`}>
                    {stage.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-gold-champagne' : 'text-ivory/40'}`} />
                </div>
                <h3 className={`font-serif-luxury text-base md:text-lg font-medium leading-snug ${
                  isSelected ? 'text-ivory' : 'text-ivory/70'
                }`}>
                  {stage.title}
                </h3>
                {isSelected && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute -bottom-px left-4 right-4 h-0.5 bg-gradient-to-r from-gold-dark via-gold-champagne to-gold-dark"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-3xl bg-chocolate-900/90 border border-gold-champagne/30 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Visual Photography Half */}
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto min-h-[320px] lg:min-h-[460px] overflow-hidden bg-chocolate-950">
              <img
                src={currentStage.image}
                alt={currentStage.alt}
                className="w-full h-full object-cover object-center scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-chocolate-900/95 via-transparent to-transparent pointer-events-none" />

              {/* Large Stylized Step Overlay */}
              <div className="absolute bottom-6 left-6 z-10 flex items-baseline gap-2">
                <span className="font-serif-luxury text-6xl md:text-8xl font-bold text-gold-gradient/30 leading-none">
                  {currentStage.step}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-semibold">
                  {language === 'te' ? 'దశ' : 'Phase'} {currentStage.step} of 04
                </span>
              </div>
            </div>

            {/* Editorial Metier Narrative Half */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chocolate-800 border border-gold-champagne/30 text-gold-champagne text-xs uppercase tracking-wider font-medium">
                  <CurrentIcon className="w-3.5 h-3.5 text-gold-warm" />
                  <span>{currentStage.focus}</span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-normal text-ivory leading-tight">
                  {currentStage.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-ivory/75 font-light leading-relaxed">
                  {currentStage.description}
                </p>
              </div>

              {/* Quality Standard Metric Callout */}
              <div className="pt-6 border-t border-gold-champagne/15 flex items-center justify-between">
                <div>
                  <span className="block text-[11px] uppercase tracking-widest text-ivory/50">
                    {language === 'te' ? 'నాణ్యత ప్రమాణం' : 'Standard Metric'}
                  </span>
                  <span className="font-serif-luxury text-lg text-gold-champagne font-medium">
                    {currentStage.metrics}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full border border-gold-champagne/30 flex items-center justify-center bg-chocolate-800 text-gold-champagne">
                  <CurrentIcon className="w-5 h-5 text-gold-warm" />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
