import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Sparkles, Filter, ChevronDown } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import { useLanguage } from '../context/LanguageContext';

export default function Catalogue() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [displayCount, setDisplayCount] = useState(18);

  const categories = [
    { id: 'All', labelEn: 'All Jewellery', labelTe: 'అన్ని ఆభరణాలు' },
    { id: 'Gold Necklaces', labelEn: 'Gold Necklaces', labelTe: 'బంగారు నెక్లెస్‌లు' },
    { id: 'Traditional Harams', labelEn: 'Traditional Harams', labelTe: 'సాంప్రదాయ హారాలు' },
    { id: 'Gold Chains', labelEn: 'Gold Chains', labelTe: 'బంగారు గొలుసులు' },
    { id: 'Earrings', labelEn: 'Earrings & Jhumkas', labelTe: 'చెవి కమ్మలు & బుట్టలు' },
    { id: 'Bridal Jewellery', labelEn: 'Bridal Jewellery', labelTe: 'పెళ్లి ఆభరణాలు' },
    { id: 'Traditional Jewellery', labelEn: 'Traditional & Deity', labelTe: 'సాంప్రదాయ ఆభరణాలు' },
  ];

  const filteredProducts = useMemo(() => {
    let list = PRODUCTS;

    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((p) => {
        const codeMatch = p.code.toLowerCase().includes(q);
        const nameEnMatch = p.name.toLowerCase().includes(q);
        const nameTeMatch = p.nameTe.toLowerCase().includes(q);
        const catMatch = p.category.toLowerCase().includes(q);
        return codeMatch || nameEnMatch || nameTeMatch || catMatch;
      });
    }

    return list;
  }, [selectedCategory, searchQuery]);

  const visibleProducts = filteredProducts.slice(0, displayCount);

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 18, filteredProducts.length));
  };

  return (
    <section id="catalogue" className="py-24 md:py-32 bg-chocolate-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-champagne/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-warm/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-champagne/30 bg-chocolate-900/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-warm" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-gold-champagne font-medium">
              {t('catalogueEyebrow')}
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-light text-ivory tracking-tight">
            {language === 'te' ? (
              <>నిజమైన ఆభరణాల <span className="italic text-gold-gradient font-normal">క్యాటలాగ్</span></>
            ) : (
              <>Jewellery <span className="italic text-gold-gradient font-normal">Catalogue</span></>
            )}
          </h2>
          <p className="font-sans text-sm sm:text-base text-ivory/70 font-light max-w-xl mx-auto mt-4 leading-relaxed">
            {t('catalogueSub')}
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold-champagne to-transparent mx-auto mt-6" />
        </div>

        {/* Search Bar & Code Lookup */}
        <div className="max-w-xl mx-auto mb-10">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-gold-champagne absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDisplayCount(18);
              }}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-12 pr-12 py-4 rounded-full bg-chocolate-900 border-2 border-gold-champagne/30 text-ivory placeholder-ivory/40 focus:outline-none focus:border-gold-champagne text-sm sm:text-base shadow-lg transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 p-1 rounded-full text-ivory/50 hover:text-ivory"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const label = language === 'te' ? cat.labelTe : cat.labelEn;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setDisplayCount(18);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 shadow-md ${
                  isSelected
                    ? 'bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark text-chocolate font-semibold scale-105 shadow-[0_0_15px_rgba(220,194,143,0.4)]'
                    : 'bg-chocolate-900/80 text-ivory/80 border border-gold-champagne/25 hover:border-gold-champagne hover:text-gold-champagne'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold-champagne/15 text-xs sm:text-sm text-ivory/70">
          <div>
            Showing <strong className="text-gold-champagne">{visibleProducts.length}</strong> of{' '}
            <strong className="text-gold-champagne">{filteredProducts.length}</strong> authentic pieces
          </div>
          {searchQuery && (
            <div className="text-gold-champagne">
              Matching: "{searchQuery}"
            </div>
          )}
        </div>

        {/* Product Grid */}
        {visibleProducts.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <p className="font-serif-luxury text-2xl text-ivory font-light">
              {t('noProductsFound')}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gold-metallic text-chocolate"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        )}

        {/* Load More Button if more products exist */}
        {visibleProducts.length < filteredProducts.length && (
          <div className="mt-14 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-chocolate bg-gradient-to-r from-gold-champagne via-gold-warm to-gold-dark hover:shadow-[0_0_25px_rgba(220,194,143,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Load More Designs ({filteredProducts.length - visibleProducts.length} remaining)</span>
              <ChevronDown className="w-4 h-4 text-chocolate" />
            </button>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
