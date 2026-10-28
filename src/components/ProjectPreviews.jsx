import React from 'react';
import { ShoppingBag, CloudSun, CheckSquare, Search, Tag, Wind, Droplets, ArrowUpRight, Flame } from 'lucide-react';

export function TezSavdoPreview() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#1E1B4B]/80 via-[#171827] to-[#0F101A] select-none">
      {/* Mini App Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-accent-purple/20 flex items-center justify-center text-accent-purple">
            <ShoppingBag className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs font-bold text-white tracking-wide">TEZ SAVDO</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-accent-cyan font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          UZ Market
        </div>
      </div>

      {/* Mini Search & Filter Bar */}
      <div className="my-2 py-1.5 px-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-[11px] text-gray-400">
        <div className="flex items-center gap-1.5">
          <Search className="w-3 h-3 text-accent-purple" />
          <span>Mahsulotlarni qidirish...</span>
        </div>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-accent-purple/20 text-accent-purple font-mono">React</span>
      </div>

      {/* Mini Product Showcase Cards */}
      <div className="grid grid-cols-2 gap-2 mt-1">
        <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:border-accent-purple/30 transition-colors">
          <div className="h-10 rounded bg-gradient-to-tr from-accent-purple/20 to-indigo-600/10 flex items-center justify-center mb-1.5">
            <Tag className="w-4 h-4 text-accent-purple" />
          </div>
          <div className="text-[11px] font-semibold text-white truncate">Smartfon Pro Max</div>
          <div className="text-[10px] text-accent-cyan font-mono font-medium">3,450,000 UZS</div>
        </div>
        <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 hover:border-accent-cyan/30 transition-colors">
          <div className="h-10 rounded bg-gradient-to-tr from-accent-cyan/20 to-blue-600/10 flex items-center justify-center mb-1.5">
            <Flame className="w-4 h-4 text-accent-cyan" />
          </div>
          <div className="text-[11px] font-semibold text-white truncate">Simsiz Quloqchin</div>
          <div className="text-[10px] text-accent-cyan font-mono font-medium">420,000 UZS</div>
        </div>
      </div>
    </div>
  );
}

export function WeatherAppPreview() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#0C2438]/80 via-[#171827] to-[#0A1624] select-none">
      {/* Mini Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan">
            <CloudSun className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs font-bold text-white tracking-wide">WEATHER PULSE</span>
        </div>
        <span className="text-[10px] font-mono text-gray-400">Tashkent, UZ</span>
      </div>

      {/* Main Temperature Display */}
      <div className="my-2 flex items-center justify-between">
        <div>
          <div className="text-3xl font-extrabold text-white tracking-tight flex items-start">
            +24<span className="text-lg text-accent-cyan">°C</span>
          </div>
          <div className="text-[11px] text-gray-400">Ochiq va quyoshli ob-havo</div>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center">
          <CloudSun className="w-7 h-7 text-accent-cyan animate-pulse" />
        </div>
      </div>

      {/* Mini Stats Bar */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/5 text-[10px] text-gray-300">
          <Wind className="w-3 h-3 text-accent-cyan" />
          <span>Shamol: 4.2 m/s</span>
        </div>
        <div className="flex items-center gap-1.5 p-1.5 rounded-lg bg-white/5 text-[10px] text-gray-300">
          <Droplets className="w-3 h-3 text-accent-purple" />
          <span>Namlik: 48%</span>
        </div>
      </div>
    </div>
  );
}

export function TaskManagerPreview() {
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#06322B]/80 via-[#171827] to-[#0B1A1E] select-none">
      {/* Mini Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckSquare className="w-3.5 h-3.5" />
          </div>
          <span className="font-mono text-xs font-bold text-white tracking-wide">TASKFLOW UI</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          3 / 4 Bajarildi
        </div>
      </div>

      {/* Mini Task List */}
      <div className="space-y-1.5 my-2">
        <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded bg-emerald-500/30 flex items-center justify-center text-emerald-400">
              ✓
            </div>
            <span className="text-gray-300 line-through">React komponentlarini ajratish</span>
          </div>
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded">Done</span>
        </div>

        <div className="p-1.5 rounded-lg bg-white/5 border border-accent-purple/30 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded border border-accent-purple flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-ping"></span>
            </div>
            <span className="text-white font-medium">LocalStorage integratsiyasi</span>
          </div>
          <span className="text-[9px] font-mono text-accent-purple bg-accent-purple/10 px-1 rounded">Doing</span>
        </div>
      </div>

      {/* Mini Progress */}
      <div className="pt-2 border-t border-white/5">
        <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-accent-cyan w-3/4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export function ProjectPreview({ type }) {
  switch (type) {
    case 'marketplace':
      return <TezSavdoPreview />;
    case 'weather':
      return <WeatherAppPreview />;
    case 'tasks':
      return <TaskManagerPreview />;
    default:
      return <TezSavdoPreview />;
  }
}
