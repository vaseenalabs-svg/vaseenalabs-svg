import React, { useState } from 'react';
import { MapPin, Phone, Clock, Compass, Calendar, ExternalLink } from 'lucide-react';
import { AtelierTheme } from '../types/fragrance';
import {
  BOUTIQUE_COORDS,
  WHATSAPP_FORMATTED,
  buildWhatsAppUrl,
} from '../data/defaultCatalog';

interface RoyalBoutiqueSectionProps {
  theme?: AtelierTheme;
}

const CONSULTATION_TYPES = [
  'Bespoke Scent Profiling (1-on-1)',
  'Private Royal Oud & Elixir Tasting',
  'Bridal & Royal Trousseau Commission',
];

export const RoyalBoutiqueSection: React.FC<RoyalBoutiqueSectionProps> = () => {
  const [selectedConsultation, setSelectedConsultation] = useState<string>(
    CONSULTATION_TYPES[0]
  );

  const consultationWhatsAppUrl = buildWhatsAppUrl(
    `Hello La Royale Parfums, I would like to book a private appointment at your Flagship Boutique for: "${selectedConsultation}". Please share available time slots.`
  );

  return (
    <section
      id="royal-boutique"
      className="py-24 sm:py-32 border-t bg-[#F1E9DC] border-[#D9C5A3] text-[#25231F]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Boutique Details, Private Consultation & Direct Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#725B2F] mb-3">
                THE ATELIER SANCTUARY • PRIVATE APPOINTMENTS
              </p>

              <h2
                className="text-3xl sm:text-5xl font-normal tracking-[-0.01em] text-[#25231F] mb-5"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                  textWrap: 'balance',
                }}
              >
                Visit Our Flagship Boutique
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#4D463B] mb-8">
                Step into our quiet olfactory sanctuary to experience rare aged
                ouds, cold-pressed botanicals, and personalized crystal flacon
                engraving guided by our Master Perfumer.
              </p>

              {/* Boutique Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded border bg-[#FFFFFF] border-[#D9C5A3] shadow-[0_16px_40px_-8px_rgba(37,35,31,0.05)] mb-8">
                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-[#B69138] shrink-0 mt-1" />
                  <div>
                    <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1">
                      BOUTIQUE HOURS
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#25231F]">
                      Mon – Sun: 10:30 AM – 9:30 PM
                    </p>
                    <p className="text-xs text-[#635E55] mt-0.5">
                      Private Evening Tastings by Request
                    </p>
                  </div>
                </div>

                {/* Direct Clickable Phone */}
                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-[#B69138] shrink-0 mt-1" />
                  <div>
                    <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1">
                      DIRECT CONCIERGE LINE
                    </span>
                    <a
                      href="tel:+918141603449"
                      className="text-sm sm:text-base font-semibold text-[#25231F] hover:text-[#725B2F] transition-colors tabular-nums"
                    >
                      {WHATSAPP_FORMATTED}
                    </a>
                    <p className="text-xs text-[#635E55] mt-0.5">
                      Instant WhatsApp & Voice Assistance
                    </p>
                  </div>
                </div>

                {/* GPS Coordinates Badge */}
                <div className="flex items-start gap-3.5 sm:col-span-2 pt-4 border-t border-[#E6DDCE]">
                  <Compass className="w-4 h-4 text-[#B69138] shrink-0 mt-1" />
                  <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                    <div>
                      <span className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-0.5">
                        EXACT FLAGSHIP COORDINATES
                      </span>
                      <p className="text-xs font-mono text-[#635E55] tabular-nums">
                        21.1997665, 72.8275564
                      </p>
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#725B2F] bg-[#F8F5EF] px-3 py-1.5 rounded border border-[#D9C5A3] tabular-nums">
                      {BOUTIQUE_COORDS.dms}
                    </span>
                  </div>
                </div>
              </div>

              {/* Private Scent Consultation Selector */}
              <div className="p-6 rounded border bg-[#F8F5EF] border-[#D9C5A3] mb-8">
                <div className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] uppercase text-[#725B2F] mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>RESERVE A PRIVATE SCENT CONSULTATION</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-4">
                  {CONSULTATION_TYPES.map((type) => {
                    const active = selectedConsultation === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedConsultation(type)}
                        className={`p-2.5 text-left text-xs rounded border transition-all cursor-pointer ${
                          active
                            ? 'border-[#B69138] bg-[#B69138] text-[#FFFFFF] font-semibold shadow-sm'
                            : 'border-[#D9C5A3] bg-[#FFFFFF] text-[#4D463B] hover:border-[#B69A68]'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>

                <a
                  href={consultationWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-[#725B2F] hover:underline"
                >
                  <span>Book Selected Consultation via WhatsApp →</span>
                </a>
              </div>
            </div>

            {/* Primary Solid Gold "OPEN IN GOOGLE MAPS →" CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href={BOUTIQUE_COORDS.googleMapsDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 bg-[#B69138] hover:bg-[#9C7A32] text-[#FFFFFF] text-xs font-semibold tracking-[0.16em] uppercase rounded transition-all inline-flex items-center justify-center gap-2 shadow-[0_12px_28px_rgba(182,145,56,0.28)]"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span>OPEN IN GOOGLE MAPS →</span>
              </a>

              <a
                href={consultationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 border border-[#D9C5A3] bg-[#FFFFFF] hover:bg-[#F8F5EF] text-[#25231F] text-xs font-semibold tracking-[0.14em] uppercase rounded transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>REQUEST DIRECTIONS ON WHATSAPP</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9C7A32] shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Warm Champagne-Tinted Light Google Map Iframe */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[420px] lg:min-h-full rounded border border-[#D9C5A3] bg-[#FFFFFF] p-2 shadow-[0_16px_40px_-8px_rgba(37,35,31,0.08)] overflow-hidden flex flex-col">
              {/* Map Header Overlay Badge */}
              <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between gap-2 px-4 py-2.5 rounded bg-[#FFF8F2]/95 backdrop-blur-md border border-[#D9C5A3] shadow-sm pointer-events-none">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B69138] shrink-0" />
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#25231F]">
                    LA ROYALE PARFUMS • FLAGSHIP BOUTIQUE
                  </span>
                </div>
                <span className="hidden sm:inline text-[10px] font-mono font-semibold text-[#725B2F] tabular-nums">
                  {BOUTIQUE_COORDS.dms}
                </span>
              </div>

              <iframe
                title="La Royale Parfums Flagship Boutique Map"
                src={BOUTIQUE_COORDS.googleMapsEmbedUrl}
                className="w-full flex-1 min-h-[400px] rounded-sm border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  filter: 'sepia(14%) saturate(88%) contrast(98%) brightness(102%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
