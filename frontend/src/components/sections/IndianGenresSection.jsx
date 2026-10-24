import React from 'react';
import { Flame } from 'lucide-react';

export const INDIAN_GENRES = [
  {
    id: 'trending',
    name: 'Top Trending & Hits',
    emoji: '🔥',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
    border: 'hover:border-emerald-400/50'
  },
  {
    id: 'bollywood',
    name: 'Bollywood Romance',
    emoji: '🎬',
    gradient: 'from-rose-500 via-pink-600 to-purple-600',
    border: 'hover:border-rose-400/50'
  },
  {
    id: 'punjabi',
    name: 'Punjabi Dhol Beats',
    emoji: '🥁',
    gradient: 'from-yellow-400 via-amber-500 to-orange-600',
    border: 'hover:border-yellow-400/50'
  },
  {
    id: 'maithili',
    name: 'Maithili Lokgeet & Hits',
    emoji: '🪕',
    gradient: 'from-amber-500 via-orange-600 to-red-600',
    border: 'hover:border-amber-400/50'
  },
  {
    id: 'bhojpuri',
    name: 'Bhojpuri Tadka',
    emoji: '🌶️',
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    border: 'hover:border-red-400/50'
  },
  {
    id: 'desi-hiphop',
    name: 'Desi Hip-Hop & Rap',
    emoji: '🎤',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-700',
    border: 'hover:border-cyan-400/50'
  },
  {
    id: '90s',
    name: '90s Golden Era',
    emoji: '📻',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    border: 'hover:border-emerald-400/50'
  },
  {
    id: 'south',
    name: 'South Melodies',
    emoji: '🎻',
    gradient: 'from-purple-600 via-violet-700 to-pink-600',
    border: 'hover:border-purple-400/50'
  },
  {
    id: 'lofi',
    name: 'Hindi Lofi & Chill',
    emoji: '☕',
    gradient: 'from-indigo-500 via-slate-700 to-cyan-700',
    border: 'hover:border-indigo-400/50'
  },
  {
    id: 'bhakti',
    name: 'Bhakti & Sufi',
    emoji: '🪔',
    gradient: 'from-orange-500 via-amber-600 to-yellow-600',
    border: 'hover:border-orange-400/50'
  }
];

export default function IndianGenresSection({ activeGenre, onSelectGenre }) {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-orange-500 via-amber-400 to-emerald-400 p-[1px] flex items-center justify-center shadow-lg shadow-orange-500/20">
            <div className="w-full h-full rounded-xl bg-[#080b12] flex items-center justify-center">
              <Flame className="w-4 h-4 text-orange-400" />
            </div>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk']">
            Explore Indian Sounds
          </h2>
        </div>
      </div>

      {/* Genre Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {INDIAN_GENRES.map((genre) => {
          const isSelected = activeGenre === genre.id || (!activeGenre && genre.id === 'trending');
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

              <div className="relative z-10 flex flex-col justify-between h-full min-h-[70px]">
                <div className="mb-2">
                  <span className="text-2xl sm:text-3xl filter drop-shadow">{genre.emoji}</span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {genre.name}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
