import React, { useState } from 'react';
import { Eye, MessageCircle } from 'lucide-react';
import {
  AtelierTheme,
  FragranceCategory,
  FragranceProduct,
} from '../types/fragrance';
import { buildWhatsAppUrl } from '../data/defaultCatalog';
import { FlaconArtwork } from './FlaconArtwork';

interface SignatureCollectionSectionProps {
  theme?: AtelierTheme;
  products: FragranceProduct[];
  onInspectProduct: (product: FragranceProduct) => void;
}

const CATEGORY_TABS: { id: FragranceCategory; label: string }[] = [
  { id: 'all', label: 'All Royal Creations' },
  { id: 'extrait', label: 'High Impact Versions' },
  { id: 'elixir', label: 'Strong Projection' },
];

export const SignatureCollectionSection: React.FC<SignatureCollectionSectionProps> = ({
  products,
  onInspectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<FragranceCategory>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="signature-collection"
      className="py-16 sm:py-24 lg:py-32 border-t bg-[#F8F5EF] border-[#D9C5A3] text-[#25231F]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Section Header - Ultra Clean Luxury Presentation */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] uppercase text-[#725B2F] mb-2 sm:mb-3">
              HAUTE PARFUMERIE • 30ML & 60ML FLACONS
            </p>
            <h2
              className="text-3xl sm:text-5xl font-normal tracking-[-0.01em] text-[#1C1917]"
              style={{
                fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                textWrap: 'balance',
              }}
            >
              Signature Royal Collection
            </h2>
          </div>

          <p className="text-xs text-[#725B2F] font-medium tracking-[0.16em] uppercase">
            Curated Artisanal Extraits
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 mb-8 sm:mb-10 border-b border-[#D9C5A3]">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORY_TABS.map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 sm:px-4 py-2 text-xs font-medium tracking-[0.14em] uppercase rounded transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#1C1917] text-[#F8F5EF] font-semibold shadow-sm'
                      : 'bg-[#F1E9DC] text-[#4D463B] hover:bg-[#E6DDCE] hover:text-[#1C1917]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <p className="text-xs text-[#635E55] tabular-nums">
            Showing {filteredProducts.length} Royal {filteredProducts.length === 1 ? 'Creation' : 'Creations'}
          </p>
        </div>

        {/* Responsive Luxury Product Grid (Auto-fits 1 column on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const whatsappOrderUrl = buildWhatsAppUrl(
              `Hello La Royale Parfums, I would like to acquire "${product.fullTitle}" (${product.concentrationLabel} • Available in ${product.volume}). Please share pricing for 30ml and 60ml bottles and delivery details.`
            );

            return (
              <article
                key={product.id}
                className="group relative rounded-xl border bg-[#FFFFFF] border-[#D9C5A3] hover:border-[#B69138] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_12px_32px_-8px_rgba(37,35,31,0.06)] overflow-hidden"
              >
                {/* Visual Area with Product Poster */}
                <div>
                  <div
                    onClick={() => onInspectProduct(product)}
                    className="relative aspect-square w-full overflow-hidden cursor-pointer border-b border-[#E6DDCE] bg-[#F8F5EF]"
                  >
                    <FlaconArtwork
                      preset={product.preset}
                      customImageUrl={product.customImageUrl}
                      productName={product.name}
                      code={product.code}
                      concentrationLabel={product.concentrationLabel}
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6">
                    {/* Metadata Line */}
                    <div className="flex items-center justify-between gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#725B2F] mb-2">
                      <span className="truncate">{product.featuredTag || product.concentrationLabel}</span>
                      <span className="tabular-nums shrink-0 font-bold">
                        {product.longevity}
                      </span>
                    </div>

                    {/* Title & Volume Tag */}
                    <div className="flex items-baseline justify-between gap-2 mb-2.5">
                      <h3
                        onClick={() => onInspectProduct(product)}
                        className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1C1917] cursor-pointer hover:text-[#725B2F] transition-colors break-words"
                        style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
                      >
                        {product.fullTitle}
                      </h3>
                      <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#725B2F] bg-[#F1E9DC] px-2 py-0.5 rounded border border-[#D9C5A3] tabular-nums shrink-0">
                        {product.volume}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm leading-relaxed text-[#4D463B] mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Scent Accord Notes */}
                    <div className="pt-3 border-t border-[#E6DDCE] text-xs flex flex-wrap items-center gap-x-2 gap-y-1 text-[#725B2F]">
                      {product.notes.map((note, idx) => (
                        <React.Fragment key={note}>
                          <span className="font-medium text-[11px]">{note}</span>
                          {idx < product.notes.length - 1 && (
                            <span aria-hidden="true" className="text-[#B69A68]">
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions - Fully Responsive & 100% Contained Within Card Borders */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full">
                    
                    {/* View Flacon & Size Selector Button */}
                    <button
                      type="button"
                      onClick={() => onInspectProduct(product)}
                      className="w-full sm:w-auto px-3.5 py-2.5 rounded border border-[#D9C5A3] bg-[#F8F5EF] text-[#25231F] hover:border-[#725B2F] hover:bg-[#FFFFFF] text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors cursor-pointer inline-flex items-center justify-center gap-1.5 shrink-0"
                      title="Inspect Olfactory Pyramid & Select 30ml / 60ml Bottle"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#9C7A32]" />
                      <span>30ml / 60ml</span>
                    </button>

                    {/* Primary Order on WhatsApp Action - Always Fits Borders */}
                    <a
                      href={whatsappOrderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 py-2.5 px-3 bg-[#1C1917] hover:bg-[#B69138] text-[#F8F5EF] hover:text-[#FFFFFF] text-center text-[11px] font-semibold tracking-[0.16em] uppercase rounded transition-colors inline-flex items-center justify-center gap-1.5 truncate shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                      <span className="truncate">Order on WhatsApp →</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};