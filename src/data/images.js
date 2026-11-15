/**
 * SLS JEWELLERS - Centralized Luxury Photography Configuration
 * High-resolution, tested, realistic jewellery imagery curated for fine gold necklaces,
 * traditional harams, chains, earrings, bridal sets, and artisan craftsmanship.
 */

export const IMAGES = {
  // Brand & Hero Imagery
  hero: {
    mainNecklace: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
    alt: "SLS JEWELLERS Masterpiece Royal Gold Necklace",
    bridalShowcase: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=85",
    altBridal: "Handcrafted Traditional Bridal Jewellery Set",
    artisanHands: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=1200&q=85",
    altCraft: "Master Goldsmith at SLS JEWELLERS Bench"
  },

  // About Section Editorial Imagery
  about: {
    workshop: "https://images.unsplash.com/photo-1588444650733-d0767b753fc8?auto=format&fit=crop&w=1200&q=85",
    alt: "Precision goldsmith crafting fine jewellery at SLS JEWELLERS workshop",
    showcase: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85",
    altShowcase: "Royal jewellery display with bespoke gold ornament"
  },

  // Collections (6 Core Categories)
  collections: {
    necklaces: {
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
      alt: "Exquisite Handcrafted Gold Necklace"
    },
    harams: {
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      alt: "Traditional Royal Gold Haram with Heritage Motifs"
    },
    chains: {
      image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85",
      alt: "Hand-Interlocked Pure Gold Chains"
    },
    earrings: {
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85",
      alt: "Intricate Gold Jhumkas and Chandelier Earrings"
    },
    bridal: {
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=85",
      alt: "Complete Indian Bridal Gold Jewellery Ensemble"
    },
    traditional: {
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
      alt: "Traditional Heritage Gold Jewellery"
    }
  },

  // Interactive 3D Runway Carousel Items
  runway: [
    {
      id: "runway-1",
      title: "Mayura Royal Haram",
      category: "Harams",
      purity: "22K Traditional Hallmark",
      description: "An opulent multi-tier temple haram inspired by sacred peacock motifs, featuring cascading drops and micro-filigree borders.",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      alt: "Mayura Royal Gold Haram"
    },
    {
      id: "runway-2",
      title: "Ratnakara Bridal Choker",
      category: "Bridal Jewellery",
      purity: "22K Solid Gold",
      description: "An architectural collar choker engineered with seamless flex joints for supreme comfort and imperial bridal majesty.",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
      alt: "Ratnakara Bridal Gold Choker"
    },
    {
      id: "runway-3",
      title: "Padma Heritage Jhumkas",
      category: "Earrings",
      purity: "22K Fine Gold",
      description: "Cascading bell jhumkas accented with delicate floral engravings, bead filigree, and lightweight balance.",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85",
      alt: "Padma Heritage Gold Jhumkas"
    },
    {
      id: "runway-4",
      title: "Vajra Interlock Gold Chain",
      category: "Chains",
      purity: "22K Master Linked",
      description: "Heavy-gauge woven gold links hand-beveled at each facet to reflect radiant luster under every angle of light.",
      image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85",
      alt: "Vajra Interlock Gold Chain"
    },
    {
      id: "runway-5",
      title: "Devi Shringar Bridal Set",
      category: "Bridal Jewellery",
      purity: "22K Wedding Heritage",
      description: "A comprehensive bridal ensemble uniting waist belt (Vaddanam), long haram, choker, and matching balance ornaments.",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=85",
      alt: "Devi Shringar Bridal Gold Set"
    },
    {
      id: "runway-6",
      title: "Ananya Kasumala Necklace",
      category: "Traditional",
      purity: "22K Heritage Minted",
      description: "A legendary Andhra heritage coin necklace with precisely embossed divine emblems strung seamlessly along a woven gold band.",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
      alt: "Ananya Traditional Kasumala Gold Necklace"
    }
  ],

  // Craftsmanship Scroll Steps
  craftsmanship: [
    {
      step: "01",
      title: "Design Inspiration",
      subtitle: "Heritage Meets Contemporary Vision",
      description: "Every piece begins with hand-drawn silhouettes inspired by South Indian temple architecture, nature's organic curves, and heirloom design traditions. Proportions are perfected before gold is ever touched.",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85",
      alt: "Artisan sketching bespoke jewellery design in sketchbook"
    },
    {
      step: "02",
      title: "Precision Crafting",
      subtitle: "The Master Goldsmith's Bench",
      description: "Pure gold is alloyed to 22 Karat perfection, then transformed into delicate wires, plates, and structural skeletons using age-old rolling mills and hand tools passed down through generations in Tenali.",
      image: "https://images.unsplash.com/photo-1588444650733-d0767b753fc8?auto=format&fit=crop&w=1200&q=85",
      alt: "Goldsmith hand forging precious metal at bench"
    },
    {
      step: "03",
      title: "Intricate Detailing",
      subtitle: "Micro-Filigree & Nakshi Relief",
      description: "Master artisans carve miniature floral motifs, set ornamental accents, and solder interlocking links under magnification. Hours of steady handwork breathe soul into the precious metal.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
      alt: "Detailed hand engraving on gold jewellery piece"
    },
    {
      step: "04",
      title: "Final Finishing",
      subtitle: "Mirror Polish & Rigorous Inspection",
      description: "The completed jewel undergoes diamond-lap burnishing, ultrasonic purification, and microscopic inspection for flawless durability, radiant glow, and silky comfort against skin.",
      image: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?auto=format&fit=crop&w=1200&q=85",
      alt: "Master jeweller inspecting polished finished ornament"
    }
  ],

  // Gallery Items (Categories: Necklaces, Harams, Chains, Earrings, Bridal)
  gallery: [
    {
      id: "gal-1",
      title: "Aura Royale Statement Necklace",
      category: "Necklaces",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=85",
      alt: "Aura Royale Statement Gold Necklace",
      tag: "Signature Masterpiece",
      specs: "22K Gold • Handcrafted Filigree"
    },
    {
      id: "gal-2",
      title: "Kalyani Grand Temple Haram",
      category: "Harams",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      alt: "Kalyani Grand Temple Haram",
      tag: "Heritage Craft",
      specs: "22K Traditional Gold • 3-Tier"
    },
    {
      id: "gal-3",
      title: "Suvarna Sovereign Link Chain",
      category: "Chains",
      image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=1000&q=85",
      alt: "Suvarna Sovereign Interlocked Gold Chain",
      tag: "Everyday Luxury",
      specs: "22K Solid Gold • Precision Link"
    },
    {
      id: "gal-4",
      title: "Chandramukhi Chandelier Jhumkas",
      category: "Earrings",
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=85",
      alt: "Chandramukhi Chandelier Gold Jhumkas",
      tag: "Festive Glamour",
      specs: "22K Gold • Micro-beaded Drop"
    },
    {
      id: "gal-5",
      title: "Vadhuvu Royal Bridal Ensemble",
      category: "Bridal",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=85",
      alt: "Vadhuvu Royal Bridal Gold Ensemble",
      tag: "Muhurtham Masterpiece",
      specs: "Comprehensive Bridal Trousseau"
    },
    {
      id: "gal-6",
      title: "Tejas Classic Heritage Choker",
      category: "Necklaces",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85",
      alt: "Tejas Classic Heritage Gold Choker",
      tag: "Timeless Cut",
      specs: "22K Hand-faceted Collar"
    },
    {
      id: "gal-7",
      title: "Gajalakshmi Nakshi Long Haram",
      category: "Harams",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=85",
      alt: "Gajalakshmi Nakshi Long Gold Haram",
      tag: "Temple Artistry",
      specs: "Deep Repoussé Nakshi Work"
    },
    {
      id: "gal-8",
      title: "Karnika Lotus Studs & Drops",
      category: "Earrings",
      image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1000&q=85",
      alt: "Karnika Lotus Gold Studs and Drops",
      tag: "Floral Motif",
      specs: "22K Gold • Ergonomic Post"
    },
    {
      id: "gal-9",
      title: "Maharani Wedding Choker Set",
      category: "Bridal",
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1000&q=85",
      alt: "Maharani Wedding Gold Choker Set",
      tag: "Bridal Heirloom",
      specs: "Full Neckpiece with Matching Drops"
    },
    {
      id: "gal-10",
      title: "Rudra Dual-Tone Curb Chain",
      category: "Chains",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=85",
      alt: "Rudra Dual-Tone Curb Gold Chain",
      tag: "Artisan Link",
      specs: "22K Gold • High Polish Bevel"
    },
    {
      id: "gal-11",
      title: "Siddhi Filigree Medallion Chain",
      category: "Necklaces",
      image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=1000&q=85",
      alt: "Siddhi Filigree Medallion Gold Chain",
      tag: "Bespoke Centerpiece",
      specs: "22K Gold • Hand Woven Chain"
    },
    {
      id: "gal-12",
      title: "Nitya Cascading Chandelier Earrings",
      category: "Earrings",
      image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1000&q=85",
      alt: "Nitya Cascading Chandelier Gold Earrings",
      tag: "Modern Heritage",
      specs: "Lightweight 22K Gold Flow"
    }
  ]
};
