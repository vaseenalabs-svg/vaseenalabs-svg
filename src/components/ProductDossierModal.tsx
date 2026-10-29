import React, { useState } from 'react';
import { X, Sparkles, Check, ShieldCheck } from 'lucide-react';
import { FragranceProduct } from '../types/fragrance';
import { buildWhatsAppUrl } from '../data/defaultCatalog';
import { FlaconArtwork } from './FlaconArtwork';

interface ProductDossierModalProps {
  product: FragranceProduct | null;
  onClose: () => void;
}

export const ProductDossierModal: React.FC<ProductDossierModalProps> = ({
  product,
  onClose,
}) => {
  const [selectedVolume, setSelectedVolume] = useState<'30ml' | '60ml' | '30ml + 60ml Duo'>('60ml');
  const [engravingText, setEngravingText] = useState<string>('');
  const [includeGiftBox, setIncludeGiftBox] = useState<boolean>(true);

  if (!product) return null;

  const customWhatsAppMessage = `Hello La Royale Parfums, I would like to place an order for:
• Fragrance: ${product.fullTitle} (${product.concentrationLabel})
• Selected Bottle Size: ${selectedVolume}${
    engravingText.trim()
      ? `\n• Complimentary Gold Label Personalization: "${engravingText.trim().toUpperCase()}"`
      : ''
  }${includeGiftBox ? '\n• Packaging: Royal Gift Presentation' : ''}

Please share pricing and priority concierge delivery details.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#25231F]/40 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FFFFFF] border border-[#D9C5A3] rounded shadow-[0_24px_70px_rgba(37,35,31,0.18)] text-[#25231F] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FFFFFF]/90 border border-[#D9C5A3] text-[#635E55] hover:text-[#25231F] cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left: Product Poster Showcase */}
          <div className="md:col-span-5 min-h-[340px] border-b md:border-b-0 md:border-r border-[#E6DDCE]">
            <FlaconArtwork
              preset={product.preset}
              customImageUrl={product.customImageUrl}
              productName={product.name}
              code={product.code}
              concentrationLabel={product.concentrationLabel}
              className="h-full min-h-[360px]"
            />
          </div>

          {/* Right: Contiguous Purchase & Customization Dossier */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-[#FFFFFF]">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.24em] uppercase text-[#725B2F] mb-2">
                <span>{product.code}</span>
                <span>·</span>
                <span>{product.featuredTag || product.concentrationLabel}</span>
                <span>·</span>
                <span>{product.oilPercentage}% PURE OIL</span>
              </div>

              <div className="flex items-baseline justify-between gap-4 mb-3">
                <h3
                  className="text-2xl sm:text-3xl font-semibold text-[#25231F]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {product.fullTitle}
                </h3>
                <span className="text-sm font-semibold text-[#725B2F] bg-[#F8F5EF] px-3 py-1 rounded border border-[#D9C5A3] tabular-nums shrink-0">
                  {product.volume}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#4D463B] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Olfactory Pyramid Breakdown */}
              <div className="space-y-2.5 p-4 rounded bg-[#F8F5EF] border border-[#E6DDCE] mb-6">
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] block">
                    TOP NOTES (L’OUVERTURE)
                  </span>
                  <p className="text-xs text-[#25231F]">{product.pyramid.top}</p>
                </div>
                <div className="pt-2 border-t border-[#E6DDCE]">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] block">
                    HEART NOTES (LE CŒUR)
                  </span>
                  <p className="text-xs text-[#25231F]">{product.pyramid.heart}</p>
                </div>
                <div className="pt-2 border-t border-[#E6DDCE]">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] block">
                    BASE & SILLAGE ({product.longevity})
                  </span>
                  <p className="text-xs text-[#25231F]">{product.pyramid.base}</p>
                </div>
              </div>

              {/* Bespoke 30ml / 60ml Bottle Volume Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#635E55] mb-1.5">
                    Select Flacon Volume
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['30ml', '60ml', '30ml + 60ml Duo'] as const).map((vol) => (
                      <button
                        key={vol}
                        type="button"
                        onClick={() => setSelectedVolume(vol)}
                        className={`py-2 px-1.5 text-[11px] font-medium rounded border transition-colors cursor-pointer truncate ${
                          selectedVolume === vol
                            ? 'border-[#B69138] bg-[#B69138] text-[#FFFFFF] font-semibold'
                            : 'border-[#D9C5A3] bg-[#F8F5EF] text-[#4D463B] hover:border-[#B69A68]'
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#635E55] mb-1.5">
                    Gift Monogram / Note (Optional)
                  </label>
                  <input
                    type="text"
                    maxLength={12}
                    value={engravingText}
                    onChange={(e) => setEngravingText(e.target.value)}
                    placeholder="e.g. V.D. or ROYAL"
                    className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-xs text-[#25231F] uppercase tracking-widest focus:outline-none focus:border-[#B69138]"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2.5 text-xs text-[#4D463B] mb-6 cursor-pointer select-none">
                <button
                  type="button"
                  onClick={() => setIncludeGiftBox((prev) => !prev)}
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    includeGiftBox
                      ? 'bg-[#B69138] border-[#9C7A32] text-[#FFFFFF]'
                      : 'border-[#D9C5A3] bg-[#F8F5EF]'
                  }`}
                >
                  {includeGiftBox && <Check className="w-3 h-3 stroke-[3]" />}
                </button>
                <span>Include complimentary La-Royale Parfums Gift Presentation</span>
              </label>
            </div>

            {/* Primary WhatsApp Acquisition Button */}
            <div className="pt-4 border-t border-[#E6DDCE] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[11px] text-[#635E55]">
                <ShieldCheck className="w-4 h-4 text-[#B69138]" />
                <span>Direct Concierge Dispatch • 8141603449</span>
              </div>

              <a
                href={buildWhatsAppUrl(customWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-3.5 bg-[#B69138] hover:bg-[#9C7A32] text-[#FFFFFF] text-center text-xs font-semibold tracking-[0.16em] uppercase rounded transition-colors inline-flex items-center justify-center gap-2 shadow-sm text-balance"
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>Order {selectedVolume} on WhatsApp →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
