import React, { useState } from 'react';
import { AtelierTheme } from '../types/fragrance';

interface BrandLogoProps {
  theme?: AtelierTheme;
  size?: 'sm' | 'md' | 'lg';
  allowModeToggle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  allowModeToggle = false,
}) => {
  const [logoMode, setLogoMode] = useState<'vector' | 'medallion'>('vector');
  const [imageError, setImageError] = useState(false);

  const dimensions = {
    sm: { flask: 34, titleSize: 'text-lg', subSize: 'text-[8px]' },
    md: { flask: 42, titleSize: 'text-xl sm:text-2xl', subSize: 'text-[9px]' },
    lg: { flask: 52, titleSize: 'text-2xl sm:text-3xl', subSize: 'text-[10px]' },
  }[size];

  return (
    <div className="inline-flex items-center gap-3 select-none group">
      {logoMode === 'medallion' && !imageError ? (
        <div className="relative flex items-center gap-3 px-3 py-1.5 rounded border bg-[#FFFFFF] border-[#D9C5A3] shadow-sm">
          <img
            src="/logo.jpg"
            alt="La Royale Parfums"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-9 w-auto object-contain"
            style={{
              mixBlendMode: 'multiply',
            }}
          />
        </div>
      ) : (
        <div className="flex items-center gap-2.5 sm:gap-3.5 whitespace-nowrap shrink-0">
          {/* Round Botanical Perfume Flask SVG with Leaves Inside */}
          <svg
            width={dimensions.flask}
            height={dimensions.flask}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="laRoyaleGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9C7A32" />
                <stop offset="50%" stopColor="#B69138" />
                <stop offset="80%" stopColor="#8A6820" />
                <stop offset="100%" stopColor="#6E5216" />
              </linearGradient>
              <radialGradient id="flaskGlow" cx="50%" cy="55%" r="42%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#B69138" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ambient gold aura */}
            <circle cx="32" cy="37" r="22" fill="url(#flaskGlow)" />

            {/* Stopper / Atomizer Cap */}
            <rect
              x="26"
              y="5"
              width="12"
              height="6"
              rx="1.5"
              stroke="url(#laRoyaleGoldGrad)"
              strokeWidth="1.9"
            />
            <path
              d="M24 11H40"
              stroke="url(#laRoyaleGoldGrad)"
              strokeWidth="1.9"
              strokeLinecap="round"
            />
            {/* Flask Neck */}
            <path
              d="M28 11V17.5M36 11V17.5"
              stroke="url(#laRoyaleGoldGrad)"
              strokeWidth="1.9"
              strokeLinecap="round"
            />
            {/* Decorative Collar Ring */}
            <path
              d="M26.5 16.5H37.5"
              stroke="url(#laRoyaleGoldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />

            {/* Outer Round Crystal Flask Body */}
            <circle
              cx="32"
              cy="38"
              r="20.5"
              stroke="url(#laRoyaleGoldGrad)"
              strokeWidth="2.2"
            />
            {/* Inner Double Rim */}
            <circle
              cx="32"
              cy="38"
              r="17"
              stroke="url(#laRoyaleGoldGrad)"
              strokeWidth="1"
              strokeDasharray="2 1.5"
              opacity="0.8"
            />

            {/* Botanical Stem & Leaves Inside Flask */}
            <path
              d="M32 53V26"
              stroke="url(#laRoyaleGoldGrad)"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            {/* Left Lower Leaf */}
            <path
              d="M32 45C25.5 44.5 21.5 39.5 22.5 34.5C27.5 34.5 31.5 38.5 32 45Z"
              stroke="url(#laRoyaleGoldGrad)"
              strokeWidth="1.6"
              fill="url(#laRoyaleGoldGrad)"
              fillOpacity="0.22"
            />
            {/* Right Lower Leaf */}
            <path
              d="M32 42C38.5 41.5 42.5 36.5 41.5 31.5C36.5 31.5 32.5 35.5 32 42Z"
              stroke="url(#laRoyaleGoldGrad)"
              strokeWidth="1.6"
              fill="url(#laRoyaleGoldGrad)"
              fillOpacity="0.22"
            />
            {/* Top Center Botanical Leaf Bud */}
            <path
              d="M32 32C28.5 28 29 23.5 32 21C35 23.5 35.5 28 32 32Z"
              stroke="url(#laRoyaleGoldGrad)"
              strokeWidth="1.6"
              fill="url(#laRoyaleGoldGrad)"
              fillOpacity="0.28"
            />
          </svg>

          {/* Wordmark Stack with Royal Crown over "LE" and bottom rule + "PARFUMS" */}
          <div className="flex flex-col leading-none">
            <div className="relative inline-flex items-baseline">
              <span
                className={`${dimensions.titleSize} font-semibold tracking-[0.16em] text-[#25231F]`}
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                LA ROY
              </span>

              {/* "ALE" with Royal Crown Positioned Directly Above "LE" */}
              <span
                className={`relative inline-flex items-baseline ${dimensions.titleSize} font-semibold tracking-[0.16em] text-[#25231F]`}
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                A
                <span className="relative inline-block">
                  {/* Royal Crown SVG Positioned Over "LE" */}
                  <svg
                    viewBox="0 0 36 18"
                    className="w-5 sm:w-6 h-3 sm:h-3.5 absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 overflow-visible"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 14L2 5L10.5 10L18 2.5L25.5 10L34 5L32 14H4Z"
                      stroke="#9C7A32"
                      strokeWidth="1.9"
                      fill="#B69138"
                      fillOpacity="0.35"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="4"
                      y1="16.5"
                      x2="32"
                      y2="16.5"
                      stroke="#9C7A32"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                    <circle cx="2" cy="3.5" r="1.5" fill="#B69138" />
                    <circle cx="18" cy="1.5" r="1.7" fill="#B69138" />
                    <circle cx="34" cy="3.5" r="1.5" fill="#B69138" />
                  </svg>
                  LE
                </span>
              </span>
            </div>

            {/* Bottom Line with Hairline Rule on Left and "PARFUMS" on Right */}
            <div className="flex items-center gap-2 mt-0.5">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-[#B69A68]/30 via-[#B69138] to-[#8A6820]" />
              <span
                className={`${dimensions.subSize} font-semibold tracking-[0.34em] uppercase text-[#725B2F]`}
              >
                PARFUMS
              </span>
            </div>
          </div>
        </div>
      )}

      {allowModeToggle && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLogoMode((prev) => (prev === 'vector' ? 'medallion' : 'vector'));
          }}
          title="Switch Emblem Render Mode"
          className="hidden xl:inline-flex items-center px-1.5 py-0.5 text-[9px] tracking-widest uppercase border border-[#D9C5A3] text-[#725B2F] hover:bg-[#F1E9DC] rounded transition-colors cursor-pointer"
        >
          {logoMode === 'vector' ? 'SVG' : 'IMG'}
        </button>
      )}
    </div>
  );
};
