/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';
import { FragranceProduct } from './types/fragrance';
import {
  BOUTIQUE_COORDS,
  DEFAULT_FRAGRANCE_CATALOG,
  DEFAULT_WHATSAPP_INQUIRY,
  WHATSAPP_DISPLAY,
  WHATSAPP_FORMATTED,
} from './data/defaultCatalog';
import { BrandLogo } from './components/BrandLogo';
import { HeroVideoSection } from './components/HeroVideoSection';
import { ScentAnatomySection } from './components/ScentAnatomySection';
import { SignatureCollectionSection } from './components/SignatureCollectionSection';
import { RoyalBoutiqueSection } from './components/RoyalBoutiqueSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDossierModal } from './components/ProductDossierModal';

export default function App() {
  const [products] = useState<FragranceProduct[]>(DEFAULT_FRAGRANCE_CATALOG);
  const [inspectedProduct, setInspectedProduct] = useState<FragranceProduct | null>(null);

  return (
    <div
      className="min-h-screen bg-[#F8F5EF] text-[#25231F] overflow-x-hidden w-full selection:bg-[#B69138]/20 selection:text-[#725B2F]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Dynamic Google Fonts Injection Inside <style> Tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* Top Header */}
      <div className="sticky top-0 z-40 w-full">
        {/* Warm Ivory Glassmorphic Navbar */}
        <header className="bg-[#FFF8F2]/95 backdrop-blur-md border-b border-[#D9C5A3] transition-colors duration-300">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 h-16 sm:h-20 flex items-center justify-between gap-4">
            
            {/* Official Brand Logo */}
            <a href="#the-alchemy" className="shrink-0">
              <BrandLogo theme="ivory" size="md" allowModeToggle />
            </a>

            {/* Primary Action Concierge WhatsApp */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <a
                href={DEFAULT_WHATSAPP_INQUIRY}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-5 py-2 sm:py-2.5 rounded border border-[#B69138] bg-[#B69138] hover:bg-[#9C7A32] text-[#FFFFFF] text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase transition-all whitespace-nowrap shrink-0 shadow-sm inline-flex items-center gap-1.5"
              >
                <span>Concierge:</span>
                <span className="tabular-nums font-mono">{WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* MAIN SECTIONS */}
      <main className="w-full">
        {/* SECTION B: Hero Section with Featured Main Image & Ambient Video */}
        <HeroVideoSection theme="ivory" />

        {/* SECTION C: Interactive Scent Anatomy with Real Luxury Flacon Showcase */}
        <ScentAnatomySection theme="ivory" />

        {/* SECTION D: Signature Royal Collection */}
        <SignatureCollectionSection
          theme="ivory"
          products={products}
          onInspectProduct={(product) => setInspectedProduct(product)}
        />

        {/* SECTION E: Royal Boutique & Google Maps Location */}
        <RoyalBoutiqueSection theme="ivory" />
      </main>

      {/* SECTION F: Luxury Warm Ivory & Cream Footer */}
      <footer className="py-14 sm:py-20 border-t bg-[#EDE7E1] border-[#D9C5A3] text-[#25231F]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-10 sm:pb-12 border-b border-[#D9C5A3]">
            {/* Brand Column */}
            <div className="md:col-span-5">
              <BrandLogo theme="ivory" size="lg" />
              <p className="mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed max-w-sm text-[#4D463B]">
                Haute Parfumerie crafting small-batch Extrait de Parfum and pure
                parfum oils with aged Cambodian Oud, Velvet Damascus Rose, and
                Golden Amber resin.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#725B2F] mb-3 sm:mb-4">
                THE HOUSE OF LA ROYALE
              </h4>
              <ul className="space-y-2 text-xs tracking-[0.12em] uppercase">
                <li>
                  <a
                    href="#the-alchemy"
                    className="text-[#4D463B] hover:text-[#725B2F] transition-colors"
                  >
                    The Alchemy
                  </a>
                </li>
                <li>
                  <a
                    href="#scent-anatomy"
                    className="text-[#4D463B] hover:text-[#725B2F] transition-colors"
                  >
                    Scent Anatomy
                  </a>
                </li>
                <li>
                  <a
                    href="#signature-collection"
                    className="text-[#4D463B] hover:text-[#725B2F] transition-colors"
                  >
                    Signature Collection
                  </a>
                </li>
                <li>
                  <a
                    href="#royal-boutique"
                    className="text-[#4D463B] hover:text-[#725B2F] transition-colors"
                  >
                    Flagship Boutique
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Concierge & Coordinates */}
            <div className="md:col-span-4">
              <h4 className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#725B2F] mb-3 sm:mb-4">
                DIRECT ROYAL CONCIERGE
              </h4>
              <div className="space-y-2.5 text-xs text-[#4D463B]">
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#B69138] shrink-0" />
                  <a
                    href={DEFAULT_WHATSAPP_INQUIRY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#725B2F] font-medium transition-colors tabular-nums"
                  >
                    WhatsApp & Direct: {WHATSAPP_FORMATTED}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B69138] shrink-0" />
                  <a
                    href={BOUTIQUE_COORDS.googleMapsDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#725B2F] font-medium transition-colors tabular-nums"
                  >
                    Flagship GPS: {BOUTIQUE_COORDS.dms}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#635E55] text-center sm:text-left">
            <p>© {new Date().getFullYear()} LA ROYALE PARFUMS. ALL RIGHTS RESERVED.</p>
            <p>EXTRAIT DE PARFUM • CRAFTED FOR ROYALTY</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Concierge Widget */}
      <FloatingWhatsApp />

      {/* Bespoke Product Inspection & Ordering Modal */}
      <ProductDossierModal
        product={inspectedProduct}
        onClose={() => setInspectedProduct(null)}
      />
    </div>
  );
}