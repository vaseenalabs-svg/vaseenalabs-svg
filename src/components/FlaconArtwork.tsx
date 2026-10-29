import React, { useState } from 'react';
import { FlaconPreset } from '../types/fragrance';

interface FlaconArtworkProps {
  preset: FlaconPreset;
  customImageUrl?: string;
  productName: string;
  code: string;
  concentrationLabel: string;
  className?: string;
}

const PRESET_PALETTES: Record<
  FlaconPreset,
  {
    topLayer: string;
    midLayer: string;
    baseLayer: string;
    capColor: string;
    capGrain: string;
    glowColor: string;
    studioBg: string;
    labelBg: string;
    labelBorder: string;
  }
> = {
  'oud-imperial': {
    topLayer: 'rgba(189, 206, 152, 0.72)',
    midLayer: 'rgba(245, 232, 204, 0.88)',
    baseLayer: 'rgba(198, 128, 38, 0.94)',
    capColor: '#523B26',
    capGrain: '#C8A24A',
    glowColor: 'rgba(218, 182, 92, 0.32)',
    studioBg:
      'radial-gradient(circle at 50% 42%, #FFFFFF 0%, #F7F2E7 55%, #EBE2D2 100%)',
    labelBg: '#FFFFFF',
    labelBorder: '#B69A68',
  },
  'rose-velours': {
    topLayer: 'rgba(235, 205, 198, 0.68)',
    midLayer: 'rgba(248, 228, 218, 0.85)',
    baseLayer: 'rgba(182, 78, 72, 0.88)',
    capColor: '#4A322C',
    capGrain: '#D4AF37',
    glowColor: 'rgba(222, 148, 138, 0.28)',
    studioBg:
      'radial-gradient(circle at 50% 42%, #FFFFFF 0%, #FAF3EE 55%, #EFE3DC 100%)',
    labelBg: '#FFFFFF',
    labelBorder: '#B88E82',
  },
  'ambre-dor': {
    topLayer: 'rgba(244, 222, 156, 0.75)',
    midLayer: 'rgba(232, 182, 82, 0.88)',
    baseLayer: 'rgba(176, 102, 24, 0.95)',
    capColor: '#5A4120',
    capGrain: '#E6C665',
    glowColor: 'rgba(235, 196, 88, 0.36)',
    studioBg:
      'radial-gradient(circle at 50% 42%, #FFFFFF 0%, #FBF5E6 55%, #EFE4C8 100%)',
    labelBg: '#FFFFFF',
    labelBorder: '#B69138',
  },
  'santal-royal': {
    topLayer: 'rgba(184, 208, 148, 0.74)',
    midLayer: 'rgba(242, 232, 208, 0.88)',
    baseLayer: 'rgba(186, 128, 54, 0.92)',
    capColor: '#4E3B28',
    capGrain: '#C5A049',
    glowColor: 'rgba(192, 210, 152, 0.32)',
    studioBg:
      'radial-gradient(circle at 50% 42%, #FFFFFF 0%, #F5F4EA 55%, #E6E3D2 100%)',
    labelBg: '#FFFFFF',
    labelBorder: '#8E9674',
  },
  'neroli-grasse': {
    topLayer: 'rgba(206, 224, 158, 0.72)',
    midLayer: 'rgba(250, 242, 214, 0.88)',
    baseLayer: 'rgba(216, 156, 52, 0.90)',
    capColor: '#54412A',
    capGrain: '#D4AF37',
    glowColor: 'rgba(226, 210, 118, 0.34)',
    studioBg:
      'radial-gradient(circle at 50% 42%, #FFFFFF 0%, #FAF7EA 55%, #EFE9D2 100%)',
    labelBg: '#FFFFFF',
    labelBorder: '#B69A68',
  },
  'discovery-vault': {
    topLayer: 'rgba(212, 192, 142, 0.72)',
    midLayer: 'rgba(238, 224, 192, 0.85)',
    baseLayer: 'rgba(182, 132, 54, 0.92)',
    capColor: '#4A3622',
    capGrain: '#D4AF37',
    glowColor: 'rgba(218, 182, 92, 0.30)',
    studioBg:
      'radial-gradient(circle at 50% 42%, #FFFFFF 0%, #F7F2E8 55%, #EAE0CF 100%)',
    labelBg: '#FFFFFF',
    labelBorder: '#B69A68',
  },
};

export const FlaconArtwork: React.FC<FlaconArtworkProps> = ({
  preset,
  customImageUrl,
  productName,
  code,
  concentrationLabel,
  className = '',
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const palette = PRESET_PALETTES[preset] || PRESET_PALETTES['oud-imperial'];

  if (customImageUrl && !imgFailed) {
    return (
      <div
        className={`relative w-full h-full overflow-hidden flex items-center justify-center bg-[#F8F5EF] ${className}`}
      >
        <img
          src={customImageUrl}
          alt={productName}
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full overflow-hidden flex items-center justify-center select-none ${className}`}
      style={{
        background: palette.studioBg,
      }}
    >
      {/* Sunlit Limestone Pedestal Surface */}
      <div
        className="absolute inset-x-0 bottom-0 h-[26%] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(235, 225, 208, 0.55) 0%, rgba(223, 211, 190, 0.85) 100%)',
          borderTop: '1px solid rgba(182, 154, 104, 0.28)',
        }}
      />

      {/* Warm Botanical Halo Behind Crystal Flacon */}
      <div
        className="absolute w-56 h-56 rounded-full blur-2xl pointer-events-none transition-transform duration-700 group-hover:scale-110"
        style={{ background: palette.glowColor }}
      />

      {preset === 'discovery-vault' ? (
        <svg
          viewBox="0 0 320 360"
          className="w-full h-full max-h-[300px] p-4 transition-transform duration-700 group-hover:scale-[1.03]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vaultGoldLight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#B69138" />
              <stop offset="100%" stopColor="#8A6920" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="306" rx="110" ry="10" fill="rgba(114, 91, 47, 0.16)" />
          <rect
            x="42"
            y="68"
            width="236"
            height="228"
            rx="4"
            fill="#FAF6EE"
            stroke="url(#vaultGoldLight)"
            strokeWidth="2.2"
          />
          <rect
            x="52"
            y="78"
            width="216"
            height="208"
            rx="2"
            fill="#F1E9DC"
            stroke="#B69A68"
            strokeOpacity="0.55"
            strokeWidth="1"
          />
          {[0, 1, 2, 3, 4].map((idx) => {
            const x = 68 + idx * 39;
            return (
              <g key={idx}>
                <rect
                  x={x + 4}
                  y="102"
                  width="18"
                  height="26"
                  rx="1.5"
                  fill="url(#vaultGoldLight)"
                />
                <rect
                  x={x + 2}
                  y="128"
                  width="22"
                  height="118"
                  rx="2"
                  fill="#FFFFFF"
                  stroke="#B69A68"
                  strokeWidth="1.2"
                />
                <rect
                  x={x + 4}
                  y={152 + (idx % 2) * 8}
                  width="18"
                  height={90 - (idx % 2) * 8}
                  fill={
                    idx === 0
                      ? 'rgba(189, 206, 152, 0.78)'
                      : idx === 2
                      ? 'rgba(198, 128, 38, 0.88)'
                      : 'rgba(218, 172, 76, 0.78)'
                  }
                />
                <rect
                  x={x + 4}
                  y="162"
                  width="18"
                  height="38"
                  fill="#FFFFFF"
                  stroke="#B69A68"
                  strokeWidth="0.7"
                />
              </g>
            );
          })}
          <rect
            x="92"
            y="255"
            width="136"
            height="22"
            fill="#FFFFFF"
            stroke="url(#vaultGoldLight)"
            strokeWidth="1.2"
          />
          <text
            x="160"
            y="269"
            textAnchor="middle"
            fill="#25231F"
            fontSize="8.5"
            fontFamily="Cormorant Garamond, serif"
            fontWeight="700"
            letterSpacing="2.5"
          >
            LA ROYALE • 5 × 15ML
          </text>
        </svg>
      ) : (
        <svg
          viewBox="0 0 300 360"
          className="w-full h-full max-h-[310px] p-3 transition-transform duration-700 group-hover:scale-[1.03]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`capGrad-${preset}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3D2B1C" />
              <stop offset="30%" stopColor={palette.capColor} />
              <stop offset="55%" stopColor={palette.capGrain} />
              <stop offset="80%" stopColor={palette.capColor} />
              <stop offset="100%" stopColor="#332315" />
            </linearGradient>
            <linearGradient id={`glassEdge-${preset}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8A6920" stopOpacity="0.65" />
              <stop offset="35%" stopColor="#B69A68" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8A6920" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          <ellipse cx="150" cy="320" rx="74" ry="9" fill="rgba(114, 91, 47, 0.18)" />
          <ellipse cx="150" cy="320" rx="48" ry="4" fill="rgba(182, 145, 56, 0.25)" />

          <rect
            x="114"
            y="42"
            width="72"
            height="40"
            rx="3"
            fill={`url(#capGrad-${preset})`}
            stroke="#9C7A32"
            strokeWidth="1.3"
          />
          <path
            d="M116 42H184"
            stroke="#E6C665"
            strokeWidth="1.5"
            strokeOpacity="0.9"
          />
          <rect
            x="127"
            y="82"
            width="46"
            height="24"
            fill="rgba(212, 175, 55, 0.32)"
            stroke="#9C7A32"
            strokeWidth="1.4"
          />
          <line x1="125" y1="90" x2="175" y2="90" stroke="#B69138" strokeWidth="1.6" />
          <line x1="125" y1="100" x2="175" y2="100" stroke="#9C7A32" strokeWidth="1.2" />

          <rect
            x="76"
            y="106"
            width="148"
            height="208"
            rx="4"
            fill="rgba(255, 255, 255, 0.72)"
            stroke={`url(#glassEdge-${preset})`}
            strokeWidth="2.4"
          />

          <rect
            x="85"
            y="114"
            width="130"
            height="182"
            rx="2"
            fill="#FFFFFF"
            stroke="rgba(182, 154, 104, 0.4)"
            strokeWidth="1"
          />

          <rect
            x="86"
            y="118"
            width="128"
            height="58"
            fill={palette.topLayer}
          />
          <rect
            x="86"
            y="176"
            width="128"
            height="54"
            fill={palette.midLayer}
          />
          <rect
            x="86"
            y="230"
            width="128"
            height="65"
            fill={palette.baseLayer}
          />

          <line
            x1="86"
            y1="176"
            x2="214"
            y2="176"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1.2"
          />
          <line
            x1="86"
            y1="230"
            x2="214"
            y2="230"
            stroke="rgba(255,245,210,0.8)"
            strokeWidth="1.4"
          />

          <line
            x1="150"
            y1="106"
            x2="150"
            y2="292"
            stroke="rgba(114, 91, 47, 0.28)"
            strokeWidth="1.5"
          />

          <path
            d="M76 296H224L218 314H82L76 296Z"
            fill="rgba(255, 255, 255, 0.85)"
            stroke="rgba(182, 154, 104, 0.6)"
            strokeWidth="1.2"
          />
          <rect
            x="88"
            y="300"
            width="124"
            height="8"
            rx="1"
            fill="rgba(212, 175, 55, 0.28)"
          />

          <rect
            x="80"
            y="110"
            width="5"
            height="196"
            fill="rgba(255, 255, 255, 0.75)"
          />
          <rect
            x="215"
            y="110"
            width="3"
            height="196"
            fill="rgba(182, 145, 56, 0.3)"
          />

          <rect
            x="101"
            y="144"
            width="98"
            height="54"
            rx="1.5"
            fill={palette.labelBg}
            stroke={palette.labelBorder}
            strokeWidth="1.4"
          />
          <rect
            x="104"
            y="147"
            width="92"
            height="48"
            rx="1"
            fill="none"
            stroke={palette.labelBorder}
            strokeOpacity="0.5"
            strokeWidth="0.7"
          />

          <text
            x="150"
            y="167"
            textAnchor="middle"
            fill="#25231F"
            fontSize="11.5"
            fontFamily="Cormorant Garamond, Playfair Display, serif"
            fontWeight="700"
            letterSpacing="1.6"
          >
            LA ROYALE
          </text>
          <text
            x="150"
            y="179"
            textAnchor="middle"
            fill="#635E55"
            fontSize="6.5"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="600"
            letterSpacing="2.4"
          >
            PARFUMS
          </text>
          <text
            x="150"
            y="190"
            textAnchor="middle"
            fill="#725B2F"
            fontSize="5.8"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="600"
            letterSpacing="1.4"
          >
            {code} • {productName.toUpperCase().slice(0, 14)}
          </text>
        </svg>
      )}

      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#725B2F] font-medium pointer-events-none">
        <span>{code}</span>
        <span>{concentrationLabel}</span>
      </div>
    </div>
  );
};
