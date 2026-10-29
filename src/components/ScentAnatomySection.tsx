import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets, Clock, MapPin, Sparkles } from 'lucide-react';
import { AtelierTheme } from '../types/fragrance';
import { SCENT_ANATOMY_NODES, buildWhatsAppUrl } from '../data/defaultCatalog';

interface ScentAnatomySectionProps {
  theme?: AtelierTheme;
}

export const ScentAnatomySection: React.FC<ScentAnatomySectionProps> = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const activeNode =
    SCENT_ANATOMY_NODES.find((node) => node.id === activeId) || SCENT_ANATOMY_NODES[0];

  const leftNodes = SCENT_ANATOMY_NODES.slice(0, 2);
  const rightNodes = SCENT_ANATOMY_NODES.slice(2, 4);

  return (
    <section
      id="scent-anatomy"
      className="relative py-24 sm:py-32 border-t bg-[#F1E9DC] border-[#D9C5A3] text-[#25231F] overflow-hidden"
    >
      {/* Subtle Sunlit Golden Botanical Aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full blur-3xl pointer-events-none opacity-45"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(212, 175, 55, 0.18) 55%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20">
          <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#725B2F] mb-3">
            THE OLFACTORY PYRAMID • HAUTE EXTRAIT ARCHITECTURE
          </p>
          <h2
            className="text-3xl sm:text-5xl font-normal tracking-[-0.01em] text-[#25231F] mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
              textWrap: 'balance',
            }}
          >
            Interactive Scent Anatomy
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#4D463B]">
            Select each botanical node to inspect the four-tier maceration architecture
            that gives <span className="text-[#8A6820] font-semibold">LA ROYALE PARFUMS</span> its
            signature 24-hour royal sillage.
          </p>
        </div>

        {/* 3-Column Interactive Anatomy Diagram (2 Left Nodes • Central Flacon • 2 Right Nodes) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Node 01 (Top Note) & Node 02 (Heart Note) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-10 order-2 lg:order-1">
            {leftNodes.map((node) => {
              const isSelected = node.id === activeId;
              return (
                <div key={node.id} className="relative flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveId(node.id)}
                    className={`w-full text-left p-5 sm:p-6 rounded border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                      isSelected
                        ? 'bg-[#FFFFFF] border-[#B69138] shadow-[0_16px_40px_-8px_rgba(37,35,31,0.08)]'
                        : 'bg-[#F8F5EF] border-[#D9C5A3] hover:bg-[#FFFFFF] hover:border-[#B69A68]'
                    }`}
                  >
                    {/* Circular Ingredient Node with layoutId="activeNoteRing" */}
                    <div className="relative w-14 h-14 rounded-full shrink-0 flex items-center justify-center bg-[#F1E9DC] border border-[#D9C5A3]">
                      {isSelected && (
                        <motion.span
                          layoutId="activeNoteRing"
                          className="absolute -inset-1.5 rounded-full border-2 border-[#B69138]"
                          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                        />
                      )}
                      <span
                        className="text-lg font-semibold text-[#725B2F] tabular-nums"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {node.stepCode}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="block text-[10px] font-semibold tracking-[0.22em] uppercase text-[#725B2F] mb-1">
                        {node.tierLabel}
                      </span>
                      <h3
                        className="text-lg sm:text-xl font-semibold leading-snug text-[#25231F] mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {node.title}
                      </h3>
                      <p className="text-xs text-[#635E55]">{node.subtitle}</p>
                    </div>
                  </button>

                  {/* Thin #B69A68 Hairline Connector to Center Bottle (Desktop) */}
                  <div className="hidden lg:flex items-center w-8 shrink-0">
                    <div
                      className={`h-[1.5px] w-full transition-colors duration-300 ${
                        isSelected ? 'bg-[#B69138]' : 'bg-[#D9C5A3]'
                      }`}
                    />
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        isSelected ? 'bg-[#B69138]' : 'bg-[#D9C5A3]'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Sunlit Warm Ivory Crystal Bottle Visual & Concentration Meter */}
          <div className="lg:col-span-4 flex flex-col items-center order-1 lg:order-2">
            <div
              className="relative w-full max-w-[340px] rounded-xl border border-[#D9C5A3] flex flex-col items-center justify-between p-5 sm:p-6 shadow-[0_16px_40px_-8px_rgba(37,35,31,0.07)] bg-gradient-to-b from-[#FFFFFF] via-[#FAF4EA] to-[#EFE5D3]"
            >
              {/* Hairline Corner Accents */}
              <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#B69A68]" />
              <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#B69A68]" />
              <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#B69A68]" />
              <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#B69A68]" />

              {/* Top Label */}
              <div className="w-full flex items-center justify-between text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-3">
                <span>STAGE {activeNode.stepCode}</span>
                <span className="bg-[#B69138] text-white px-2 py-0.5 rounded text-[9px]">
                  {activeNode.tierLabel.split('•')[0].trim()}
                </span>
              </div>

              {/* Real Luxury Perfume Flacon Image */}
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-[#D9C5A3] shadow-inner bg-[#F8F5EF] flex items-center justify-center group">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-10-29_at_12.35.41_PM__2__d75bd1df.jpeg"
                  alt="La Royale Parfums Scent Architecture"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Active Scent Accord Tag Overlay */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded bg-[#FFF8F2]/90 backdrop-blur-md border border-[#D9C5A3] text-center pointer-events-none">
                  <p className="text-[11px] font-semibold text-[#1C1917] tracking-wider uppercase font-serif">
                    {activeNode.title}
                  </p>
                  <p className="text-[9px] text-[#725B2F] tracking-widest uppercase">
                    {activeNode.subtitle}
                  </p>
                </div>
              </div>

              {/* Oil Concentration Meter */}
              <div className="w-full mt-4 pt-3 border-t border-[#D9C5A3]">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#635E55]">
                    PURE OIL CONCENTRATION
                  </span>
                  <span className="font-mono font-semibold text-[#725B2F] tabular-nums">
                    {activeNode.oilConcentration}% EXTRAIT
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#E6DDCE] rounded-full overflow-hidden">
                  <motion.div
                    initial={false}
                    animate={{ width: `${(activeNode.oilConcentration / 50) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    className="h-full bg-gradient-to-r from-[#B69138] to-[#8A6820]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Node 03 (Base Note) & Node 04 (Elixir Note) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-10 order-3">
            {rightNodes.map((node) => {
              const isSelected = node.id === activeId;
              return (
                <div key={node.id} className="relative flex items-center justify-between gap-4">
                  {/* Thin #B69A68 Hairline Connector from Center Bottle (Desktop) */}
                  <div className="hidden lg:flex items-center w-8 shrink-0">
                    <div
                      className={`w-2 h-2 rounded-full shrink-0 ${
                        isSelected ? 'bg-[#B69138]' : 'bg-[#D9C5A3]'
                      }`}
                    />
                    <div
                      className={`h-[1.5px] w-full transition-colors duration-300 ${
                        isSelected ? 'bg-[#B69138]' : 'bg-[#D9C5A3]'
                      }`}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveId(node.id)}
                    className={`w-full text-left p-5 sm:p-6 rounded border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                      isSelected
                        ? 'bg-[#FFFFFF] border-[#B69138] shadow-[0_16px_40px_-8px_rgba(37,35,31,0.08)]'
                        : 'bg-[#F8F5EF] border-[#D9C5A3] hover:bg-[#FFFFFF] hover:border-[#B69A68]'
                    }`}
                  >
                    {/* Circular Ingredient Node with layoutId="activeNoteRing" */}
                    <div className="relative w-14 h-14 rounded-full shrink-0 flex items-center justify-center bg-[#F1E9DC] border border-[#D9C5A3]">
                      {isSelected && (
                        <motion.span
                          layoutId="activeNoteRing"
                          className="absolute -inset-1.5 rounded-full border-2 border-[#B69138]"
                          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                        />
                      )}
                      <span
                        className="text-lg font-semibold text-[#725B2F] tabular-nums"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {node.stepCode}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="block text-[10px] font-semibold tracking-[0.22em] uppercase text-[#725B2F] mb-1">
                        {node.tierLabel}
                      </span>
                      <h3
                        className="text-lg sm:text-xl font-semibold leading-snug text-[#25231F] mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {node.title}
                      </h3>
                      <p className="text-xs text-[#635E55]">{node.subtitle}</p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Animated Sensory Description Card (AnimatePresence) */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 lg:p-10 rounded border bg-[#FFFFFF] border-[#D9C5A3] shadow-[0_16px_40px_-8px_rgba(37,35,31,0.06)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-2">
                    <span>NODE {activeNode.stepCode}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeNode.tierLabel}</span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-semibold text-[#25231F] mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {activeNode.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-[#4D463B] mb-5">
                    {activeNode.sensoryDescription}
                  </p>

                  {/* Unboxed Typography Metadata with Separators */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-[#725B2F]">
                    {activeNode.accords.map((accord, i) => (
                      <React.Fragment key={accord}>
                        <span>{accord}</span>
                        {i < activeNode.accords.length - 1 && (
                          <span aria-hidden="true" className="text-[#B69A68]">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Provenance & Longevity Specs */}
                <div className="md:col-span-4 md:border-l md:pl-6 border-[#E6DDCE] flex flex-col gap-3.5">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#B69138] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#817B72]">
                        BOTANICAL PROVENANCE
                      </span>
                      <span className="text-xs font-medium text-[#25231F]">
                        {activeNode.origin}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Droplets className="w-4 h-4 text-[#B69138] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#817B72]">
                        EXTRACTION CRAFT
                      </span>
                      <span className="text-xs font-medium text-[#25231F]">
                        {activeNode.extractionMethod}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#B69138] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-[#817B72]">
                        SKIN TENACITY
                      </span>
                      <span className="text-xs font-medium text-[#25231F] tabular-nums">
                        {activeNode.longevityHours}
                      </span>
                    </div>
                  </div>

                  <a
                    href={buildWhatsAppUrl(
                      `Hello La Royale Parfums, I am captivated by Node ${activeNode.stepCode} (${activeNode.title}). Please recommend your best fragrance featuring this note.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F1E9DC] hover:bg-[#B69138] text-[#725B2F] hover:text-[#FFFFFF] border border-[#D9C5A3] rounded text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors whitespace-nowrap"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Inquire About This Note →</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
