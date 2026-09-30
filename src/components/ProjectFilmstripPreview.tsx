"use client";

import React from "react";
import Image from "next/image";
import { flagshipProjects, ProjectItem } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectFilmstripPreviewProps {
  projects?: ProjectItem[];
  activeIndex?: number;
  onSelect: (index: number) => void;
}

export function ProjectFilmstripPreview({
  projects = flagshipProjects,
  activeIndex = 0,
  onSelect,
}: ProjectFilmstripPreviewProps) {
  const { language } = useLanguage();
  const displayProjects = projects.length > 0 ? projects : flagshipProjects;

  return (
    <div className="w-full overflow-x-auto no-scrollbar select-none">
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-max py-0.5">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-300 pr-1 sm:pr-2 flex items-center gap-1.5 shrink-0 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
          {language === "id" ? "REEL PROYEK" : language === "zh" ? "核心项目胶片" : "WORKS REEL"}
        </span>

        {displayProjects.map((project, idx) => {
          const isActive = activeIndex === idx;
          const validImg = project.images?.find(
            (img) => typeof img === "string" && img.trim().length > 0
          );
          const thumbnail =
            validImg || "/assets/projects/secret-of-life/white_desk.webp";

          return (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelect(idx)}
              className={`group flex items-center gap-2.5 px-3 py-1.5 rounded-full border transition-all duration-300 cursor-pointer shrink-0 ${
                isActive
                  ? "bg-[#d4af37]/15 border-[#d4af37] text-white shadow-[0_0_12px_rgba(212,175,55,0.25)]"
                  : "bg-white/[0.03] border-white/10 hover:border-white/25 text-zinc-300 hover:text-white"
              }`}
            >
              <div className="relative w-7 h-5 rounded-md overflow-hidden bg-zinc-900 shrink-0">
                <Image
                  src={thumbnail}
                  alt={project.title}
                  fill
                  loading="lazy"
                  sizes="28px"
                  quality={75}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <span className="text-xs font-mono text-[#d4af37] font-semibold">
                0{idx + 1}
              </span>

              <span className="text-xs sm:text-sm font-serif-editorial font-medium truncate max-w-[150px] sm:max-w-[200px]">
                {language === "zh" && project.titleZh ? project.titleZh : language === "id" ? project.titleId : project.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
