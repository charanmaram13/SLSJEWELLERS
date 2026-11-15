import { IMAGES } from './images';

export const BRAND_INFO = {
  name: "SLS JEWELLERY WORKS",
  shortName: "SLS",
  tagline: "Where Elegance Becomes Eternal",
  eyebrow: "THE ART OF FINE JEWELLERY",
  description: "Discover timeless jewellery crafted with passion, precision and an uncompromising eye for detail.",
  aboutStory: "SLS JEWELLERY WORKS represents the beauty of craftsmanship, attention to detail and a passion for fine jewellery. Based in Tenali, Andhra Pradesh, we bring together traditional inspiration and refined jewellery-making.",
  phone: "+91 99892 22524",
  phoneRaw: "919989222524",
  phoneDisplay: "+91 99892 22524",
  address: "Veera Raghavulu Street, Gajula Subbaraogari Veedhi, Sharraf Bazar, Tenali, Andhra Pradesh – 522201",
  landmark: "Sharraf Bazar, Tenali",
  state: "Andhra Pradesh, India",
  pincode: "522201",
  whatsappUrl: "https://wa.me/919989222524",
  googleMapsUrl: "https://maps.google.com/?q=Veera+Raghavulu+Street+Sharraf+Bazar+Tenali+Andhra+Pradesh+522201",
  manufacturingFocus: "Direct Jewellery Manufacturer",
  purityStandard: "22K Fine Gold Standard"
};

export const COLLECTIONS = [
  {
    id: "gold-necklaces",
    title: "Gold Necklaces",
    subtitle: "Timeless Grace Around Your Neck",
    category: "Necklaces",
    description: "Sculpted with artistic finesse, our gold necklaces range from regal chokers to delicate contemporary collar pieces designed to illuminate every neckline.",
    highlights: ["Bespoke Floral & Geometric Motifs", "Comfort Flex Articulation", "22K Solid Gold Finish"],
    image: IMAGES.collections.necklaces.image,
    alt: IMAGES.collections.necklaces.alt,
    accent: "Masterpiece Artistry"
  },
  {
    id: "traditional-harams",
    title: "Traditional Harams",
    subtitle: "Regal Grandeur for Auspicious Occasions",
    category: "Harams",
    description: "Opulent multi-layered long harams showcasing sacred temple emblems, ornate peacock and floral repoussé work that embody South Indian heritage.",
    highlights: ["Elaborate Nakshi & Temple Relief", "Multi-Tiered Layering", "Heirloom Grade Weight"],
    image: IMAGES.collections.harams.image,
    alt: IMAGES.collections.harams.alt,
    accent: "Heritage Statement"
  },
  {
    id: "gold-chains",
    title: "Gold Chains",
    subtitle: "Fluid Strength & Radiant Luster",
    category: "Chains",
    description: "Meticulously linked chains ranging from durable daily wear classics to intricately faceted ropes and curb styles, balanced for comfort and everlasting glow.",
    highlights: ["Hand-Interlocking Links", "High-Polish Diamond Cut Facets", "Reinforced Custom Clasps"],
    image: IMAGES.collections.chains.image,
    alt: IMAGES.collections.chains.alt,
    accent: "Precision Linking"
  },
  {
    id: "elegant-earrings",
    title: "Elegant Earrings",
    subtitle: "Intricate Drops of Radiance",
    category: "Earrings",
    description: "From traditional Bell Jhumkas and Chandbalis to sophisticated evening drops and studs, engineered with balanced weight distribution for effortless wear.",
    highlights: ["Micro-Bead Filigree Drops", "Ergonomic Back Clasps", "Balanced Lightweight Feel"],
    image: IMAGES.collections.earrings.image,
    alt: IMAGES.collections.earrings.alt,
    accent: "Artisan Delicate"
  },
  {
    id: "bridal-jewellery",
    title: "Bridal Jewellery",
    subtitle: "The Crowning Splendor of Your Muhurtham",
    category: "Bridal",
    description: "Comprehensive bridal trousseaus uniting royal chokers, grand harams, mathapatti, vanki, and matching ornaments crafted to make wedding moments unforgettable.",
    highlights: ["Custom Trousseau Harmonization", "Imperial Bridal Presence", "Generational Keepsake Value"],
    image: IMAGES.collections.bridal.image,
    alt: IMAGES.collections.bridal.alt,
    accent: "Wedding Splendor"
  },
  {
    id: "traditional-jewellery",
    title: "Traditional Jewellery",
    subtitle: "Echoes of Sacred Andhra Traditions",
    category: "Traditional",
    description: "Rooted in authentic regional crafts including antique kasumala coin garlands, guttapusalu-inspired clusters, and auspicious celebratory jewels.",
    highlights: ["Authentic Kasumala Coin Garlands", "Auspicious Heritage Motifs", "Timeless Festive Wear"],
    image: IMAGES.collections.traditional.image,
    alt: IMAGES.collections.traditional.alt,
    accent: "Authentic Legacy"
  }
];

export const WHY_CHOOSE_US = [
  {
    id: "detail",
    title: "Attention to Detail",
    subtitle: "Microscopic Precision",
    description: "Every curve, facet, and solder joint is examined with exacting scrutiny, ensuring seamless symmetry and a silky, skin-gentle finish in every ornament.",
    icon: "gem"
  },
  {
    id: "collections",
    title: "Elegant Collections",
    subtitle: "Curated Grandeur",
    description: "A rich spectrum of designs ranging from antique temple marvels to lightweight modern heirlooms, tailored for celebrations, weddings, and retailers.",
    icon: "sparkles"
  },
  {
    id: "tradition",
    title: "Traditional Inspiration",
    subtitle: "Honouring Our Roots",
    description: "Immersed in Andhra Pradesh's rich artisanal heritage, our pieces carry forward time-tested motifs, sacred geometries, and celebrated goldsmithing techniques.",
    icon: "shield"
  },
  {
    id: "service",
    title: "Customer-Focused Service",
    subtitle: "Direct Manufacturer Trust",
    description: "Direct manufacturer transparency, attentive consultations, and lasting relationships built on honesty, bespoke dedication, and warm hospitality.",
    icon: "heart-handshake"
  }
];

export const CRAFTSMANSHIP_STAGES = [
  {
    step: "01",
    title: "Design Inspiration",
    shortDesc: "Translating sacred temple architecture and floral beauty into hand-rendered gold blueprints.",
    details: "Every bespoke masterpiece begins with detailed conceptual sketching in our Tenali design studio. Drawing inspiration from Dravidian temple friezes and classical bridal silhouettes, proportions and mechanical balance are calibrated before metal is touched."
  },
  {
    step: "02",
    title: "Precision Crafting",
    shortDesc: "Alloying 22K gold, ingot drawing, and shaping core armatures by master goldsmith hands.",
    details: "Using calibrated rolling mills and drawing plates, our artisans shape raw gold into sheets and ultra-fine wires. The structural skeleton is formed with extreme thermal care, creating a foundation that withstands generations of wear."
  },
  {
    step: "03",
    title: "Intricate Detailing",
    shortDesc: "Delicate micro-filigree soldering, chasing, and traditional hand relief carvings.",
    details: "In this exacting phase, master goldsmiths execute repoussé, granulation, and miniature wire filigree under magnification. Countless minute links are soldered by hand, creating fluid movement and mesmerizing dimensional depth."
  },
  {
    step: "04",
    title: "Final Finishing",
    shortDesc: "Diamond-lap burnishing, ultrasonic cleansing, and rigorous quality inspection.",
    details: "The ornament undergoes sequential stages of hand burnishing, ultrasonic degreasing, and specialized polishing to achieve a radiant warm luster. Each millimeter is inspected for structural integrity and tactile softness against the skin."
  }
];
