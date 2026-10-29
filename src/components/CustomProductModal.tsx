import React, { useState, useEffect } from 'react';
import { X, Upload, Sparkles } from 'lucide-react';
import { FlaconPreset, FragranceProduct } from '../types/fragrance';

interface CustomProductModalProps {
  isOpen: boolean;
  editingProduct: FragranceProduct | null;
  onClose: () => void;
  onSave: (product: FragranceProduct) => void;
}

const PRESET_OPTIONS: { id: FlaconPreset; label: string }[] = [
  { id: 'oud-imperial', label: 'Oud Impérial Crystal (Sunlit Gold & Amber)' },
  { id: 'rose-velours', label: 'Rose Velours Crystal (Blush Velvet & Gold)' },
  { id: 'ambre-dor', label: "Ambre d'Or Elixir (Liquid Gold Reserve)" },
  { id: 'santal-royal', label: 'Santal Royal Crystal (Botanical Sage & Wood)' },
  { id: 'neroli-grasse', label: 'Néroli Solaris Crystal (Citrus & Champagne)' },
  { id: 'discovery-vault', label: '5 × 15ml Royal Discovery Coffret Chest' },
];

export const CustomProductModal: React.FC<CustomProductModalProps> = ({
  isOpen,
  editingProduct,
  onClose,
  onSave,
}) => {
  const [code, setCode] = useState('NO. 24');
  const [name, setName] = useState('Velours de Nuit');
  const [fullTitle, setFullTitle] = useState('La Royale No. 24 — Velours de Nuit');
  const [category, setCategory] = useState<'extrait' | 'elixir' | 'coffret'>('extrait');
  const [concentrationLabel, setConcentrationLabel] = useState('Extrait De Parfum');
  const [volume, setVolume] = useState('100ml');
  const [oilPercentage, setOilPercentage] = useState(40);
  const [longevity, setLongevity] = useState('24+ Hours');
  const [price, setPrice] = useState('₹19,500');
  const [note1, setNote1] = useState('White Truffle Orchid');
  const [note2, setNote2] = useState('Imperial Agarwood');
  const [note3, setNote3] = useState('Madagascar Vanilla');
  const [description, setDescription] = useState(
    'A bespoke royal creation blending rare white orchid, aged agarwood resin, and cured Madagascar vanilla for an unforgettable client signature.'
  );
  const [preset, setPreset] = useState<FlaconPreset>('oud-imperial');
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [featuredTag, setFeaturedTag] = useState('Bespoke Edition');

  useEffect(() => {
    if (editingProduct) {
      setCode(editingProduct.code);
      setName(editingProduct.name);
      setFullTitle(editingProduct.fullTitle);
      setCategory(editingProduct.category);
      setConcentrationLabel(editingProduct.concentrationLabel);
      setVolume(editingProduct.volume);
      setOilPercentage(editingProduct.oilPercentage);
      setLongevity(editingProduct.longevity);
      setPrice(editingProduct.price);
      setNote1(editingProduct.notes[0] || '');
      setNote2(editingProduct.notes[1] || '');
      setNote3(editingProduct.notes[2] || '');
      setDescription(editingProduct.description);
      setPreset(editingProduct.preset);
      setCustomImageUrl(editingProduct.customImageUrl || '');
      setFeaturedTag(editingProduct.featuredTag || 'Custom Edition');
    } else {
      setCode('NO. 24');
      setName('Velours de Nuit');
      setFullTitle('La Royale No. 24 — Velours de Nuit');
      setCategory('extrait');
      setConcentrationLabel('Extrait De Parfum');
      setVolume('100ml');
      setOilPercentage(40);
      setLongevity('24+ Hours');
      setPrice('₹19,500');
      setNote1('White Truffle Orchid');
      setNote2('Imperial Agarwood');
      setNote3('Madagascar Vanilla');
      setDescription(
        'A bespoke royal creation blending rare white orchid, aged agarwood resin, and cured Madagascar vanilla for an unforgettable client signature.'
      );
      setPreset('oud-imperial');
      setCustomImageUrl('');
      setFeaturedTag('Bespoke Edition');
    }
  }, [editingProduct, isOpen]);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setCustomImageUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim() || 'Royal Creation';
    const cleanCode = code.trim() || 'BESPOKE';
    const cleanFullTitle =
      fullTitle.trim() || `La Royale ${cleanCode} — ${cleanName}`;

    const newProduct: FragranceProduct = {
      id: editingProduct ? editingProduct.id : `custom-${Date.now()}`,
      code: cleanCode,
      name: cleanName,
      fullTitle: cleanFullTitle,
      category,
      concentrationLabel: concentrationLabel.trim() || 'Extrait De Parfum',
      volume: volume.trim() || '100ml',
      oilPercentage: Number(oilPercentage) || 38,
      longevity: longevity.trim() || '24+ Hours',
      sillage: 'Bespoke Royal Trail',
      price: price.trim() || '₹18,500',
      notes: [
        note1.trim() || 'Royal Saffron',
        note2.trim() || 'Damascus Rose',
        note3.trim() || 'Imperial Oud',
      ],
      pyramid: {
        top: note1.trim() || 'Calabrian Bergamot · Royal Saffron',
        heart: note2.trim() || 'Velvet Damascus Rose · Night Jasmine',
        base: note3.trim() || 'Aged Cambodian Oud · Golden Amber Resin',
      },
      description:
        description.trim() ||
        'Handcrafted in small batches with pure botanical extracts and aged resins.',
      preset,
      customImageUrl: customImageUrl.trim() || undefined,
      isCustom: true,
      featuredTag: featuredTag.trim() || undefined,
    };

    onSave(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#25231F]/40 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#FFFFFF] border border-[#D9C5A3] rounded shadow-[0_24px_60px_rgba(37,35,31,0.16)] text-[#25231F] my-8 overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E6DDCE] bg-[#F8F5EF]">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#9C7A32]" />
            <h3
              className="text-2xl font-semibold text-[#25231F]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {editingProduct
                ? `Edit Creation: ${editingProduct.name}`
                : 'Add Custom Perfume for Client Showcase'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#635E55] hover:text-[#25231F] rounded border border-transparent hover:border-[#D9C5A3] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1.5">
                Edition Code
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="NO. 24"
                className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-sm text-[#25231F] focus:outline-none focus:border-[#B69138]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1.5">
                Short Fragrance Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setFullTitle(`La Royale ${code} — ${e.target.value}`);
                }}
                placeholder="Velours de Nuit"
                className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-sm text-[#25231F] focus:outline-none focus:border-[#B69138]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1.5">
                Price Display
              </label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="₹19,500"
                className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-sm text-[#25231F] focus:outline-none focus:border-[#B69138]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1.5">
                Full Display Title
              </label>
              <input
                type="text"
                value={fullTitle}
                onChange={(e) => setFullTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-sm text-[#25231F] focus:outline-none focus:border-[#B69138]"
              />
            </div>

            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1.5">
                Collection Category
              </label>
              <select
                value={category}
                onChange={(e) =>
                  setCategory(e.target.value as 'extrait' | 'elixir' | 'coffret')
                }
                className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-sm text-[#25231F] focus:outline-none focus:border-[#B69138]"
              >
                <option value="extrait">Extrait De Parfum</option>
                <option value="elixir">Pure Parfum Oils</option>
                <option value="coffret">Discovery & Gift Sets</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#635E55] mb-1.5">
                Concentration
              </label>
              <input
                type="text"
                value={concentrationLabel}
                onChange={(e) => setConcentrationLabel(e.target.value)}
                className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-xs text-[#25231F]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#635E55] mb-1.5">
                Bottle Volume
              </label>
              <input
                type="text"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-xs text-[#25231F]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#635E55] mb-1.5">
                Longevity
              </label>
              <input
                type="text"
                value={longevity}
                onChange={(e) => setLongevity(e.target.value)}
                className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-xs text-[#25231F]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#635E55] mb-1.5">
                Tag Kicker
              </label>
              <input
                type="text"
                value={featuredTag}
                onChange={(e) => setFeaturedTag(e.target.value)}
                placeholder="Client Exclusive"
                className="w-full px-3 py-2 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-xs text-[#25231F]"
              />
            </div>
          </div>

          {/* 3 Olfactory Notes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1.5">
                Top Note Accord
              </label>
              <input
                type="text"
                value={note1}
                onChange={(e) => setNote1(e.target.value)}
                className="w-full px-3.5 py-2 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-xs text-[#25231F]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1.5">
                Heart Note Accord
              </label>
              <input
                type="text"
                value={note2}
                onChange={(e) => setNote2(e.target.value)}
                className="w-full px-3.5 py-2 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-xs text-[#25231F]"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1.5">
                Base Note Accord
              </label>
              <input
                type="text"
                value={note3}
                onChange={(e) => setNote3(e.target.value)}
                className="w-full px-3.5 py-2 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-xs text-[#25231F]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1.5">
              Editorial Sensory Description
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-xs text-[#25231F] focus:outline-none focus:border-[#B69138]"
            />
          </div>

          {/* Flacon Visual Style or Custom Photo Upload */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E6DDCE]">
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1.5">
                Crystal Flacon Studio Preset
              </label>
              <select
                value={preset}
                onChange={(e) => setPreset(e.target.value as FlaconPreset)}
                className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#D9C5A3] rounded text-xs text-[#25231F]"
              >
                {PRESET_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-semibold tracking-[0.2em] uppercase text-[#725B2F] mb-1.5">
                Or Upload Custom Bottle Photo (Optional)
              </label>
              <div className="flex items-center gap-2">
                <label className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[#F8F5EF] border border-dashed border-[#B69A68] rounded text-xs text-[#725B2F] hover:bg-[#F1E9DC] cursor-pointer">
                  <Upload className="w-3.5 h-3.5" />
                  <span>{customImageUrl ? 'Change Photo' : 'Upload Image'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {customImageUrl && (
                  <button
                    type="button"
                    onClick={() => setCustomImageUrl('')}
                    className="px-2.5 py-2 text-xs text-red-600 border border-red-200 rounded hover:bg-red-50"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E6DDCE]">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-[#D9C5A3] text-xs font-medium tracking-[0.16em] uppercase text-[#635E55] hover:text-[#25231F] rounded cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#B69138] hover:bg-[#9C7A32] text-[#FFFFFF] text-xs font-semibold tracking-[0.18em] uppercase rounded transition-colors cursor-pointer"
            >
              {editingProduct ? 'Save Changes' : 'Add To Collection'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
