import React from 'react';
import { Sparkles, Radio, Flame, Heart } from 'lucide-react';

export const INDIAN_GENRES = [
  {
    id: 'maithili',
    name: 'Maithili Lokgeet & Hits',
    devanagari: 'मैथिली लोकगीत',
    desc: 'Mithila soul, Sharda Sinha classics & modern pop',
    emoji: '🪕',
    gradient: 'from-amber-500 via-orange-600 to-red-600',
    border: 'hover:border-amber-400/50',
    badge: 'Mithila Special'
  },
  {
    id: 'bollywood',
    name: 'Bollywood Romance',
    devanagari: 'बॉलीवुड रोमांस',
    desc: 'Timeless love anthems, Arijit & Shreya',
    emoji: '🎬',
    gradient: 'from-rose-500 via-pink-600 to-purple-600',
    border: 'hover:border-rose-400/50',
    badge: 'Top Trending'
  },
  {
    id: 'punjabi',
    name: 'Punjabi Dhol Beats',
    devanagari: 'पंजाबी बीट्स',
    desc: 'Sidhu Moosewala, Diljit & high-energy bass',
    emoji: '🥁',
    gradient: 'from-yellow-400 via-amber-500 to-orange-600',
    border: 'hover:border-yellow-400/50',
    badge: 'Party Energy'
  },
  {
    id: 'bhojpuri',
    name: 'Bhojpuri Tadka',
    devanagari: 'भोजपुरी तड़का',
    desc: 'High-voltage beats & desi celebrations',
    emoji: '🌶️',
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    border: 'hover:border-red-400/50',
    badge: 'Desi Dhoom'
  },
  {
    id: 'desi-hiphop',
    name: 'Desi Hip-Hop & Rap',
    devanagari: 'देसी हिप-हॉप',
    desc: 'Divine, Seedhe Maut, lyrical bars & street beats',
    emoji: '🎤',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-700',
    border: 'hover:border-cyan-400/50',
    badge: 'Gully Flows'
  },
  {
    id: '90s',
    name: '90s Golden Era',
    devanagari: '90s एवरग्रीन',
    desc: 'Kumar Sanu, Udit Narayan, Alka Yagnik memories',
    emoji: '📻',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    border: 'hover:border-emerald-400/50',
    badge: 'Evergreen'
  },
  {
    id: 'south',
    name: 'South Melodies',
    devanagari: 'साउथ मेलोडीज',
    desc: 'Anirudh, AR Rahman, Tamil & Telugu sensations',
    emoji: '🎻',
    gradient: 'from-purple-600 via-violet-700 to-pink-600',
    border: 'hover:border-purple-400/50',
    badge: 'Pan-India'
  },
  {
    id: 'lofi',
    name: 'Hindi Lofi & Chill',
    devanagari: 'लो-फाई चिल',
    desc: 'Slowed, reverb & late night soothing vibes',
    emoji: '☕',
    gradient: 'from-indigo-500 via-slate-700 to-cyan-700',
    border: 'hover:border-indigo-400/50',
    badge: 'Night Drive'
  },
  {
    id: 'bhakti',
    name: 'Bhakti & Sufi',
    devanagari: 'भक्ति और सूफी',
    desc: 'Peaceful mantras, aartis, qawwalis & meditation',
    emoji: '🪔',
    gradient: 'from-orange-500 via-amber-600 to-yellow-600',
    border: 'hover:border-orange-400/50',
    badge: 'Spiritual'
  }
];

export default function IndianGenresSection({ activeGenre, onSelectGenre }) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-400 p-[1px] flex items-center justify-center shadow-lg shadow-orange-500/20">
            <div className="w-full h-full rounded-xl bg-[#080b12] flex items-center justify-center">
              <Flame className="w-4 h-4 text-orange-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk']">
                Explore Indian Sounds
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-[10px] font-mono text-orange-300">
                Live Streams
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Instant ad-free streaming across India's richest musical cultures
            </p>
          </div>
        </div>
      </div>

      {/* Genre Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {INDIAN_GENRES.map((genre) => {
          const isSelected = activeGenre === genre.id;
          return (
            <div
              key={genre.id}
              onClick={() => onSelectGenre(genre.id)}
              className={`relative overflow-hidden rounded-2xl p-4 sm:p-5 cursor-pointer transition-all duration-300 border ${
                isSelected
                  ? 'border-emerald-400 bg-emerald-500/15 shadow-[0_10px_30px_rgba(16,185,129,0.25)] scale-[1.02]'
                  : `border-white/10 glass-card bg-slate-900/60 ${genre.border} hover:scale-[1.02]`
              } group`}
            >
              {/* Vibrant Background Glow */}
              <div
                className={`absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-gradient-to-br ${genre.gradient} opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-2xl sm:text-3xl filter drop-shadow">{genre.emoji}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/10 text-slate-300 border border-white/10 backdrop-blur-sm">
                    {genre.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {genre.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mb-1">
                    {genre.devanagari}
                  </p>
                  <p className="text-[11px] text-slate-400/80 line-clamp-1">
                    {genre.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
