import React from 'react';
import { Link } from 'react-router-dom';
import { Disc3, Library } from 'lucide-react';
import { getCoverImage } from '../../utils/helpers';
import GlassCard from '../common/GlassCard';

export default function AlbumCard3D({ album, index = 0 }) {
  const cover = getCoverImage(album?._id || album?.title, index + 3);
  const trackCount = Array.isArray(album?.musics) ? album.musics.length : 0;
  const artistName = typeof album?.artist === 'object'
    ? album?.artist?.username || 'Featured Artist'
    : 'Featured Artist';

  return (
    <Link to={`/album/${album?._id || album?.id}`} className="block group">
      <GlassCard
        glowColor="purple"
        className="p-4"
        tiltDegree={10}
      >
        <div className="relative aspect-square mb-4 flex items-center justify-center">
          
          {/* 3D Vinyl Record that slides out from behind jacket */}
          <div className="absolute right-0 w-[90%] h-[90%] rounded-full bg-zinc-950 border border-white/20 vinyl-grooves shadow-2xl transition-all duration-500 transform group-hover:translate-x-12 group-hover:rotate-90 z-0">
            <div className="w-full h-full rounded-full border border-purple-500/40 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center border border-white/20 shadow-inner">
                <Disc3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Album Jacket (Front Cover) */}
          <div className="relative w-[92%] h-[92%] rounded-xl overflow-hidden shadow-2xl z-10 border border-white/15 bg-slate-900 transition-transform duration-500 group-hover:-translate-x-2">
            <img
              src={cover}
              alt={album?.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-purple-950/80 border border-purple-400/30 text-[10px] font-mono text-purple-300 backdrop-blur-sm">
              ALBUM
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col relative z-20">
          <h4 className="text-base font-bold text-white truncate group-hover:text-purple-300 transition-colors">
            {album?.title || "Untitled Album"}
          </h4>
          <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
            <span className="truncate">{artistName}</span>
            <span className="flex items-center gap-1 font-mono text-slate-500">
              <Library className="w-3.5 h-3.5 text-purple-400" />
              {trackCount} tracks
            </span>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
