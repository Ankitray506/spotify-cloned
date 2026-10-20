import React from 'react';
import { History, Zap, Trash2, Play } from 'lucide-react';
import SongCard3D from '../cards/SongCard3D';
import { useMusic } from '../../context/MusicContext';

export default function ListeningHistorySection() {
  const { history, clearHistory, playSong } = useMusic();

  if (!history || history.length === 0) return null;

  return (
    <section className="mb-12 animate-fade-in">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px] flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <div className="w-full h-full rounded-xl bg-[#080b12] flex items-center justify-center">
              <History className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk']">
                Recently Played
              </h2>
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                <Zap className="w-2.5 h-2.5 fill-current" />
                Offline Ready ⚡
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Cached in local browser memory. Replay anytime with 0 MB data usage.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (history.length > 0) playSong(history[0], history);
            }}
            className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            Play All
          </button>

          <button
            onClick={clearHistory}
            title="Clear recently played history"
            className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {history.slice(0, 10).map((song, i) => (
          <SongCard3D
            key={`history_${song._id || song.id || i}`}
            song={song}
            playlist={history}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
