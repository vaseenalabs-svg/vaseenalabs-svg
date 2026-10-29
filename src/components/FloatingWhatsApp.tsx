import React from 'react';
import { DEFAULT_WHATSAPP_INQUIRY } from '../data/defaultCatalog';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center group">
      {/* Expandable Luxury Warm Ivory-and-Gold Pill Label on Desktop Hover */}
      <a
        href={DEFAULT_WHATSAPP_INQUIRY}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with La Royale Parfums Concierge 8141603449"
        className="flex items-center"
      >
        <span className="hidden sm:inline-block mr-3 px-4 py-2 rounded-full bg-[#FFFFFF]/95 border border-[#B69A68] text-[#25231F] text-xs font-semibold tracking-[0.14em] uppercase shadow-[0_10px_28px_rgba(37,35,31,0.14)] whitespace-nowrap opacity-0 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Chat on WhatsApp • <span className="text-[#725B2F] tabular-nums">8141603449</span>
        </span>

        {/* Official WhatsApp Green (#25D366) Button with Royal Gold Border */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_12px_32px_rgba(37,211,102,0.35)] transition-transform duration-200 group-hover:scale-105">
          {/* Subtle Outer Royal Gold Ring */}
          <span className="absolute -inset-1 rounded-full border border-[#B69138]/45 pointer-events-none" />

          {/* Crisp Inline WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="currentColor"
            className="text-white"
            aria-hidden="true"
          >
            <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.758.459 3.474 1.332 4.988L2 22l5.168-1.356c1.467.801 3.12 1.225 4.863 1.225 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.822 14.129c-.244.687-1.418 1.314-1.976 1.397-.511.076-1.158.108-1.87-.118-.432-.137-.986-.321-1.693-.626-2.979-1.286-4.925-4.288-5.074-4.487-.149-.199-1.213-1.614-1.213-3.079 0-1.465.768-2.185 1.041-2.483.273-.298.595-.373.794-.373.198 0 .397.002.57.01.183.009.428-.069.67.512.248.596.843 2.06.917 2.209.075.149.124.323.025.521-.099.199-.149.323-.298.497-.149.174-.313.389-.447.522-.149.148-.304.31-.131.608.174.298.771 1.272 1.656 2.061 1.139 1.015 2.099 1.329 2.397 1.478.298.149.471.124.645-.075.174-.199.744-.869.942-1.167.199-.298.397-.248.67-.149.273.099 1.737.819 2.034.968.298.149.496.223.571.347.074.125.074.72-.17 1.407z" />
          </svg>
        </div>
      </a>
    </div>
  );
};
