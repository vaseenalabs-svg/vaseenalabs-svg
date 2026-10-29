export type FlaconPreset =
  | 'oud-imperial'
  | 'rose-velours'
  | 'ambre-dor'
  | 'santal-royal'
  | 'neroli-grasse'
  | 'discovery-vault';

export type FragranceCategory = 'all' | 'extrait' | 'elixir' | 'coffret';

export interface FragranceProduct {
  id: string;
  code: string;
  name: string;
  fullTitle: string;
  category: Exclude<FragranceCategory, 'all'>;
  concentrationLabel: string;
  volume: string;
  oilPercentage: number;
  longevity: string;
  sillage: string;
  price: string;
  notes: [string, string, string];
  pyramid: {
    top: string;
    heart: string;
    base: string;
  };
  description: string;
  preset: FlaconPreset;
  customImageUrl?: string;
  isCustom?: boolean;
  featuredTag?: string;
}

export interface ScentNoteNode {
  id: number;
  stepCode: string;
  tierLabel: string;
  title: string;
  subtitle: string;
  position: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
  oilConcentration: number;
  longevityHours: string;
  origin: string;
  extractionMethod: string;
  sensoryDescription: string;
  accords: string[];
  accentColor: string;
}

export interface HeroRevealStep {
  number: string;
  title: string;
  subtitle: string;
  timestampLabel: string;
  progressRange: [number, number];
}

export type AtelierTheme = 'obsidian' | 'ivory';
