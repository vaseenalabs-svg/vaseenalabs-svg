import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Sparkles, ChevronDown } from 'lucide-react';
import { AtelierTheme } from '../types/fragrance';
import {
  DEFAULT_WHATSAPP_INQUIRY,
  HERO_MAIN_IMAGE,
} from '../data/defaultCatalog';

interface HeroVideoSectionProps {
  theme?: AtelierTheme;
}

const PRIMARY_VIDEO_SRC =
  '/assets/aistudio/Write_LA_ROYALE_PERFUMES_on_ec63e032_1080p_5ccd0f45.mp4';
const FALLBACK_VIDEO_SRC =
  '/assets/aistudio/Write_LA_ROYALE_PERFUMES_on_ec63e032_bc6b4a0f.mp4';

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoReady, setVideoReady] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  // Autoplay video reliably on all devices (completely clean background video)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const tryPlay = () => {
      video.play().then(() => {
        setVideoReady(true);
      }).catch(() => {
        // Retry on first user interaction
      });
    };

    tryPlay();

    const handleTouchOrClick = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    window.addEventListener('touchstart', handleTouchOrClick, { once: true });
    window.addEventListener('click', handleTouchOrClick, { once: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchOrClick);
      window.removeEventListener('click', handleTouchOrClick);
    };
  }, []);

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const scrollToContent = () => {
    const target = document.getElementById('signature-essence');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCollection = () => {
    const target = document.getElementById('signature-collection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. CINEMATIC BACKGROUND VIDEO - 100% UNOBSTRUCTED & CLEAR ON MOBILE */}
      <section
        id="the-alchemy"
        className="relative w-full h-[52vh] sm:h-[72vh] lg:h-[88vh] min-h-[340px] sm:min-h-[480px] bg-[#F6EFE2] overflow-hidden flex items-end justify-center"
      >
        <video
          ref={videoRef}
          src={PRIMARY_VIDEO_SRC}
          poster={HERO_MAIN_IMAGE}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoReady(true)}
          className="absolute inset-0 w-full h-full object-cover object-[64%_center] z-0 transition-opacity duration-700"
          style={{
            opacity: videoReady ? 1 : 0.95,
            filter: 'contrast(1.04) saturate(1.06)',
          }}
        >
          <source src={PRIMARY_VIDEO_SRC} type="video/mp4" />
          <source src={FALLBACK_VIDEO_SRC} type="video/mp4" />
        </video>

        {/* Minimal Subtle Audio Control in Bottom-Right Corner */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
          <button
            type="button"
            onClick={handleToggleMute}
            className="p-2 sm:p-2.5 rounded-full border border-[#D9C5A3]/90 bg-[#FFF8F2]/90 backdrop-blur-md text-[#725B2F] hover:bg-[#FFFFFF] shadow-md transition-all cursor-pointer"
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-[#725B2F]" />
            ) : (
              <Volume2 className="w-4 h-4 text-[#B69138]" />
            )}
          </button>
        </div>

        {/* Discreet Scroll Down Cue */}
        <button
          type="button"
          onClick={scrollToContent}
          className="relative z-10 mb-3 inline-flex flex-col items-center gap-1 text-[#725B2F] hover:text-[#1C1917] transition-colors cursor-pointer group px-3 py-1 rounded-full bg-[#FFF8F2]/75 backdrop-blur-sm border border-[#D9C5A3]/60 shadow-sm"
          title="Scroll to Fragrance Story"
        >
          <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[#725B2F]">
            EXPLORE THE ESSENCE
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-[#B69138] animate-bounce" />
        </button>
      </section>

      {/* 2. DEDICATED EDITORIAL PLAY CARD SECTION - PLACED DIRECTLY AFTER THE BACKGROUND VIDEO */}
      <section
        id="signature-essence"
        className="relative py-16 sm:py-24 bg-[#F8F5EF] border-t border-[#D9C5A3] text-[#25231F]"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: User Requested Play Card Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="bg-[#FFF8F2] p-6 sm:p-10 rounded-2xl border border-[#D9C5A3] shadow-[0_16px_40px_-8px_rgba(37,35,31,0.06)]">
                
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2.5 mb-3 sm:mb-4">
                  <span className="w-6 sm:w-8 h-[2px] bg-[#9C7A32]" />
                  <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] uppercase text-[#725B2F]">
                    EXTRAIT DE PARFUM • SIGNATURE EDITION
                  </p>
                </div>

                {/* Main Heading */}
                <h2
                  className="text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-[-0.01em] mb-4 sm:mb-5 text-[#1C1917]"
                  style={{
                    fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                  }}
                >
                  Royalty In Every Drop.
                </h2>

                {/* Body Text */}
                <p className="text-sm sm:text-base leading-relaxed text-[#3C362F] mb-6 sm:mb-8 font-normal">
                  An opulent alchemy of Velvet Damascus Rose, Aged Imperial Oud, and
                  glowing Golden Amber—crafted to leave an unforgettable royal signature.
                  Handcrafted small batches in pure extrait concentration.
                </p>

                {/* Responsive Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
                  <button
                    type="button"
                    onClick={scrollToCollection}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-[#B69138] hover:bg-[#9C7A32] text-[#FFFFFF] text-xs font-semibold tracking-[0.18em] uppercase rounded transition-all duration-200 shadow-[0_10px_24px_rgba(182,145,56,0.28)] cursor-pointer text-center"
                  >
                    DISCOVER THE SCENT →
                  </button>

                  <a
                    href="https://wa.me/918141603449?text=Hello%20La%20Royale%20Parfums%2C%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20perfume%20collection."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 sm:px-7 py-3.5 border border-[#B69A68] bg-[#FFFFFF] hover:bg-[#F8F5EF] text-[#1C1917] text-xs font-semibold tracking-[0.18em] uppercase rounded transition-all duration-200 shadow-sm text-center"
                  >
                    ORDER VIA WHATSAPP
                  </a>
                </div>

                {/* Footer Badge */}
                <div className="mt-6 pt-4 border-t border-[#E6DDCE] flex items-center justify-between text-xs text-[#725B2F]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#B69138]" />
                    <span className="text-[11px] font-semibold tracking-[0.16em] uppercase">
                      34% Pure Extrait Oil
                    </span>
                  </div>
                  <span className="text-[11px] tracking-wider text-[#635E55] uppercase font-mono">
                    Surat Flagship Atelier
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Luxury Flacon Presentation Card */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl p-4 bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EA] to-[#EFE5D3] border border-[#D9C5A3] shadow-[0_20px_50px_-12px_rgba(37,35,31,0.12)] flex flex-col justify-between overflow-hidden group">
                
                {/* Corner Accent Brackets */}
                <span className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#B69138]" />
                <span className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#B69138]" />
                <span className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#B69138]" />
                <span className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#B69138]" />

                {/* Top Badge */}
                <div className="flex items-center justify-between text-[10px] font-semibold tracking-[0.22em] uppercase text-[#725B2F] px-2 pt-1">
                  <span>HAUTE PARFUMERIE</span>
                  <span className="bg-[#B69138] text-white px-2 py-0.5 rounded text-[9px] font-bold">
                    30ML & 60ML
                  </span>
                </div>

                {/* Main Flacon Poster */}
                <div className="relative w-full flex-1 my-2.5 rounded-lg overflow-hidden bg-[#F8F5EF] flex items-center justify-center">
                  <img
                    src={HERO_MAIN_IMAGE}
                    alt="La Royale Parfums — Haute Extrait Creation"
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      imageLoaded ? 'opacity-100' : 'opacity-90'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white pointer-events-none">
                    <p className="text-xs font-semibold tracking-wider uppercase font-serif drop-shadow-md">
                      LA ROYALE PARFUMS
                    </p>
                    <p className="text-[10px] text-amber-200/90 font-mono tracking-widest uppercase">
                      Bespoke Handcrafted Flacons
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between text-[11px] text-[#4D463B] px-2 pb-1 font-medium">
                  <span className="tracking-[0.16em] uppercase text-[#725B2F] font-semibold">
                    Gold Crown Flacon
                  </span>
                  <span className="text-[#8A6820] font-semibold tabular-nums">
                    24+ Hours Sillage
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
