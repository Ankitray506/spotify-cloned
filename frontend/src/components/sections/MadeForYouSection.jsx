import React from 'react';
import { Cpu, Sparkles } from 'lucide-react';
import SongCard3D from '../cards/SongCard3D';

export default function MadeForYouSection({ songs = [], topGenres = [] }) {
  if (!songs || songs.length === 0) return null;

  const formattedGenres = topGenres.map(g => g.charAt(0).toUpperCase() + g.slice(1)).join(' • ');

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 via-teal-500 to-emerald-400 p-[1px] flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full rounded-xl bg-[#080b12] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk']">
              Made For You
            </h2>
            <p className="text-xs text-slate-400">
              Songs tuned to your taste: <strong className="text-emerald-400 font-medium">{formattedGenres || 'Your Vibe'}</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {songs.slice(0, 5).map((song, i) => (
          <SongCard3D
            key={song._id || song.id || i}
            song={song}
            playlist={songs}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
