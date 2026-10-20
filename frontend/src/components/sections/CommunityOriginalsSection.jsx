import React from 'react';
import { Sparkles, Upload, Disc3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SongCard3D from '../cards/SongCard3D';
import { useAuth } from '../../context/AuthContext';

export default function CommunityOriginalsSection({ songs = [], onPlaySong }) {
  const { isArtist } = useAuth();

  if (!songs || songs.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 p-[1px] flex items-center justify-center shadow-lg shadow-purple-500/20">
            <div className="w-full h-full rounded-xl bg-[#080b12] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk']">
                AURA Originals • Artist Drops
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] font-mono text-purple-300">
                Community Creators
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Original tracks released by creators hosted directly on this platform
            </p>
          </div>
        </div>

        {isArtist && (
          <Link
            to="/artist/studio"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-900/40 hover:bg-purple-800/50 border border-purple-500/30 text-purple-300 text-xs font-semibold transition-all hover:scale-105"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Your Sound</span>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {songs.map((song, i) => (
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
