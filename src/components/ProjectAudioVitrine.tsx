"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectItem } from "@/data/projects";
import { Disc, Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

interface ProjectAudioVitrineProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectAudioVitrine({ project, className = "" }: ProjectAudioVitrineProps) {
  const { language } = useLanguage();
  const tracks = project.audioTracks || [];
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeTrack = tracks[currentTrackIdx] || tracks[0];

  useEffect(() => {
    // Reset state when project changes
    setCurrentTrackIdx(0);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [project.id]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleTrackChange = (idx: number) => {
    setCurrentTrackIdx(idx);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = tracks[idx].url;
      audioRef.current.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (sec: number) => {
    if (isNaN(sec)) return "0:00";
    const mins = Math.floor(sec / 60);
    const secs = Math.floor(sec % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (!tracks.length) return null;

  return (
    <div
      className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c0c10] via-[#14141c] to-[#0a0a0e] border border-[#d4af37]/30 shadow-2xl p-5 sm:p-6 flex flex-col justify-between select-none group ${className}`}
    >
      <audio
        ref={audioRef}
        src={activeTrack?.url}
        preload="none"
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
          }
        }}
        onEnded={() => {
          if (currentTrackIdx < tracks.length - 1) {
            handleTrackChange(currentTrackIdx + 1);
          } else {
            setIsPlaying(false);
          }
        }}
      />

      {/* Dynamic Background Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header: Genre Tag & Dynamic Visualizer */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2.5 min-w-0 pr-2">
          <div className="p-2.5 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#ebdca4] shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <Disc className={`w-4 h-4 text-[#d4af37] ${isPlaying ? "animate-spin" : ""}`} />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] block font-semibold truncate">
              {language === "zh" && activeTrack?.genreZh
                ? activeTrack.genreZh
                : language === "id" && activeTrack?.genreId
                ? activeTrack.genreId
                : activeTrack?.genre}
            </span>
            <span className="text-xs sm:text-sm font-serif-editorial text-white font-medium block truncate">
              {activeTrack?.title}
            </span>
          </div>
        </div>

        {/* Dynamic Waveform Visualizer Bars */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleMute}
            className="p-1.5 rounded-lg bg-black/40 hover:bg-black/70 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-zinc-300" />}
          </button>
          <div className="flex items-end gap-1 h-6 px-2.5 py-1 bg-black/50 rounded-lg border border-white/10">
            {[40, 75, 100, 55, 90, 45, 80, 60].map((h, i) => (
              <span
                key={i}
                className={`w-1 bg-[#d4af37] rounded-full transition-all duration-300 ${
                  isPlaying ? "animate-pulse" : "opacity-30"
                }`}
                style={{
                  height: isPlaying ? `${Math.max(25, (h * ((i % 3) + 1)) % 100)}%` : "25%",
                  animationDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Center Deck: Play Button & Scrubber */}
      <div className="space-y-3.5 my-auto relative z-10">
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#ebdca4] to-[#f3e5ab] text-zinc-950 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-0.5" />
            )}
          </button>
        </div>

        {/* Progress Bar & Timing */}
        <div className="space-y-1">
          <div
            className="h-2 bg-white/10 hover:bg-white/20 rounded-full overflow-hidden cursor-pointer relative transition-colors"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = (e.clientX - rect.left) / rect.width;
              if (audioRef.current && duration) {
                audioRef.current.currentTime = pos * duration;
              }
            }}
          >
            <div
              className="h-full bg-gradient-to-r from-[#d4af37] to-[#ebdca4] rounded-full transition-[width] duration-100"
              style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <span>{formatTime(currentTime)}</span>
            <span className="text-[#ebdca4] flex items-center gap-1">
              <Music className="w-3 h-3 text-[#d4af37]" />
              Track 0{currentTrackIdx + 1} / 0{tracks.length}
            </span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* Bottom Arrangement Selectors */}
      <div className="space-y-1.5 pt-2 border-t border-white/10 relative z-10">
        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
          {language === "zh"
            ? "曲风版本 (5 Versions)"
            : language === "id"
            ? "Aransemen Musik (5 Versi)"
            : "Arrangement Tracks (5 Versions)"}
        </span>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-thin">
          {tracks.map((t, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleTrackChange(idx)}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono shrink-0 transition-all cursor-pointer ${
                currentTrackIdx === idx
                  ? "bg-[#d4af37] text-zinc-950 font-bold shadow-md scale-105"
                  : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
              }`}
            >
              {language === "zh" && t.genreZh ? t.genreZh : language === "id" && t.genreId ? t.genreId : t.genre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
