import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import WelcomeScreen from './components/WelcomeScreen';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalogue from './sections/Catalogue';
import About from './sections/About';
import Collections from './sections/Collections';
import JewelleryCarousel from './components/JewelleryCarousel';
import Craftsmanship from './sections/Craftsmanship';
import WhyChooseUs from './sections/WhyChooseUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-[#2B1D15] text-[#F6EFE1] font-sans selection:bg-[#C9A062] selection:text-[#2B1D15] relative overflow-x-hidden">
      {/* First-Visit Language Selection Screen (English & Telugu) */}
      <WelcomeScreen />

      {/* Luxury Loading Screen */}
      <LoadingScreen onComplete={() => setLoadingComplete(true)} />

      {/* Luxury Desktop Custom Cursor Follower */}
      <CustomCursor />

      {/* Viewport Top Gold Scroll Progress */}
      <ScrollProgress />

      {/* Fixed Luxury Navbar with Live Cart Badge & Language Switcher */}
      <Navbar />

      {/* Interactive Cart Slide-Over Drawer */}
      <CartDrawer />

      {/* WhatsApp Order & Customer Details Modal */}
      <CheckoutModal />

      {/* Main Content Sections */}
      <main>
        {/* A/C. Hero Section – Cinematic Jewellery Experience */}
        <Hero />

        {/* Real Workshop Digital Showroom & Catalogue (SLS001 – SLS099) */}
        <Catalogue />

        {/* D. About SLS JEWELLERS */}
        <About />

        {/* E. Jewellery Collections Showcase */}
        <Collections />

        {/* F. Interactive Jewellery Runway (Signature 3D Experience) */}
        <JewelleryCarousel />

        {/* G. Craftsmanship Experience */}
        <Craftsmanship />

        {/* H. Why Choose SLS JEWELLERS */}
        <WhyChooseUs />

        {/* I. Editorial Gallery & Lightbox */}
        <Gallery />

        {/* J. Contact & Bespoke Orders Section */}
        <Contact />
      </main>

      {/* K. Footer */}
      <Footer />
    </div>
  );
}
