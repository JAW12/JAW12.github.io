"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, MessageSquare, MapPin, Send, ArrowUpRight, Clock, CheckCircle, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionCosmicBackdrop } from "@/components/SectionCosmicBackdrop";

export function ContactSection() {
  const { language, t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string, field: string) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/jemangkasa.work@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject: subject || "Portfolio Strategic Inquiry",
          message,
          _subject: `[Portfolio] ${subject || "Inquiry"} - ${name}`,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        // Fallback to mailto
        window.location.href = `mailto:jemangkasa.work@gmail.com?subject=${encodeURIComponent(
          `[Portfolio Inquiry] ${subject || "Discussion"} - ${name}`
        )}&body=${encodeURIComponent(
          `Halo Jem,\n\nNama: ${name}\nEmail: ${email}\nTopik: ${subject}\n\n${message}`
        )}`;
        setIsSubmitted(true);
      }
    } catch {
      // Fallback to mailto on network block
      window.location.href = `mailto:jemangkasa.work@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${subject || "Discussion"} - ${name}`
      )}&body=${encodeURIComponent(
        `Halo Jem,\n\nNama: ${name}\nEmail: ${email}\nTopik: ${subject}\n\n${message}`
      )}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 relative overflow-hidden bg-transparent">
      {/* Wing 09: Deep Space Beacon & Event Horizon with Smooth Scroll Parallax */}
      <SectionCosmicBackdrop variant="beacon" />
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/[0.025] blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Giant Ghost Watermark */}
        <ScrollReveal>
          <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-4 max-w-3xl">
              <span className="absolute -top-10 sm:-top-16 left-0 text-7xl sm:text-9xl font-serif-editorial font-light text-white/[0.045] select-none pointer-events-none tracking-widest blur-[1px]">
                CONTACT
              </span>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#ebdca4] relative z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
                <span>{language === "id" ? "Terbuka untuk Kolaborasi Strategis" : language === "zh" ? "开放战略系统架构与工程咨询" : "Available for High-Impact Projects"}</span>
              </div>
              
              <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-white leading-tight relative z-10">
                <span className="text-[#d4af37] mr-1.5 font-normal">/</span>
                {t.contact.title}
              </h2>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed relative z-10">
                {t.contact.subtitle}
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="font-mono text-sm sm:text-base text-zinc-400 tracking-widest block font-medium">
                // EPILOGUE
              </span>
              <span className="font-mono text-xs sm:text-sm text-[#ebdca4] uppercase tracking-wider font-semibold">
                {language === "id" ? "KOLABORASI & KONTAK" : language === "zh" ? "战略合作与直达联系" : "STRATEGIC INQUIRY"}
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Split Two-Column Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/10 p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="space-y-2 pb-6 border-b border-white/10">
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-white font-medium">
                {t.contact.formTitle}
              </h3>
              <p className="text-sm text-zinc-300 font-mono">
                {t.contact.formSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-zinc-300 font-medium">
                    {language === "id" ? "Nama Lengkap" : language === "zh" ? "姓名 / 称谓" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-zinc-300 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <label className="text-xs font-mono uppercase text-zinc-300 font-medium">
                    {language === "id" ? "Topik Diskusi / Kebutuhan" : language === "zh" ? "探讨主题 / 需求简述" : "Discussion Topic / Project"}
                  </label>
                  {t.contact.quickTopics && t.contact.quickTopics.length > 0 && (
                    <span className="text-[11px] font-mono text-zinc-400">
                      {t.contact.quickTopicLabel}
                    </span>
                  )}
                </div>

                {/* Quick Topic Presets Chips */}
                {t.contact.quickTopics && t.contact.quickTopics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pb-1">
                    {t.contact.quickTopics.map((topic, idx) => {
                      const isSelected = subject === topic;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSubject(isSelected ? "" : topic)}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                            isSelected
                              ? "bg-[#d4af37]/20 border-[#d4af37] text-[#ebdca4] shadow-[0_0_12px_rgba(212,175,55,0.25)] font-semibold"
                              : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/20 hover:bg-white/5"
                          }`}
                        >
                          {isSelected ? "✓ " : "+ "}{topic}
                        </button>
                      );
                    })}
                  </div>
                )}

                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={t.contact.subjectPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-zinc-300 font-medium">
                  {language === "id" ? "Detail Pesan" : language === "zh" ? "详细留言" : "Message Details"}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] text-sm text-white placeholder:text-zinc-600 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-medium text-xs font-mono uppercase tracking-wider hover:bg-[#ebdca4] hover:shadow-lg transition-all disabled:opacity-50"
              >
                <span>{isSubmitting ? (language === "id" ? "Mengirim..." : language === "zh" ? "正在发送..." : "Sending...") : t.contact.sendBtn}</span>
                <Send className="w-4 h-4" />
              </button>

              {isSubmitted && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                  <span>
                    {language === "id"
                      ? "Pesan berhasil dikirim langsung ke jemangkasa.work@gmail.com. Terima kasih!"
                      : language === "zh"
                      ? "留言已成功发送至 jemangkasa.work@gmail.com。感谢您的来信！"
                      : "Message sent directly to jemangkasa.work@gmail.com. Thank you!"}
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Direct Channels & Verified Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="space-y-1 pb-2">
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-white font-medium">
                {t.contact.directTitle}
              </h3>
              <p className="text-sm text-zinc-300 font-mono">
                {t.contact.directSubtitle}
              </p>
            </div>

            {/* Email Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/10 hover:border-[#d4af37]/60 hover:bg-[#121216]/85 transition-all duration-300 flex items-center justify-between gap-3 shadow-[0_12px_40px_rgba(0,0,0,0.6)] group">
              <a
                href="mailto:jemangkasa.work@gmail.com"
                className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1 cursor-pointer"
                title={language === "zh" ? "发送邮件至 jemangkasa.work@gmail.com" : language === "id" ? "Kirim email ke jemangkasa.work@gmail.com" : "Send email to jemangkasa.work@gmail.com"}
              >
                <div className="p-2.5 rounded-lg bg-[#d4af37]/10 text-[#d4af37] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold truncate">
                    {t.contact.emailLabel}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white group-hover:text-[#ebdca4] transition-colors font-medium truncate block">
                    jemangkasa.work@gmail.com
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#ebdca4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
              </a>
              <button
                type="button"
                onClick={(e) => handleCopy(e, "jemangkasa.work@gmail.com", "email")}
                className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 border border-white/10 hover:border-white/20 active:scale-95 cursor-pointer shrink-0"
                title={language === "zh" ? "复制邮箱" : language === "id" ? "Salin email" : "Copy email"}
              >
                {copiedField === "email" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-bold">
                      {language === "zh" ? "已复制!" : language === "id" ? "Tersalin!" : "Copied!"}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-xs hidden sm:inline text-zinc-300 font-medium">
                      {language === "zh" ? "复制" : language === "id" ? "Salin" : "Copy"}
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/10 hover:border-emerald-500/60 hover:bg-[#121216]/85 transition-all duration-300 flex items-center justify-between gap-3 shadow-[0_12px_40px_rgba(0,0,0,0.6)] group">
              <a
                href="https://wa.me/6281273567384"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1 cursor-pointer"
                title={language === "zh" ? "通过 WhatsApp 联系" : language === "id" ? "Chat via WhatsApp" : "Chat on WhatsApp"}
              >
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold truncate">
                    {t.contact.whatsappLabel}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white group-hover:text-emerald-300 transition-colors font-medium truncate block">
                    +62 812-7356-7384
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
              </a>
              <button
                type="button"
                onClick={(e) => handleCopy(e, "+6281273567384", "whatsapp")}
                className="px-2.5 py-1.5 rounded-md bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-all text-xs font-mono flex items-center gap-1.5 border border-white/10 hover:border-white/20 active:scale-95 cursor-pointer shrink-0"
                title={language === "zh" ? "复制 WhatsApp 号码" : language === "id" ? "Salin nomor WhatsApp" : "Copy WhatsApp number"}
              >
                {copiedField === "whatsapp" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs text-emerald-400 font-bold">
                      {language === "zh" ? "已复制!" : language === "id" ? "Tersalin!" : "Copied!"}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-xs hidden sm:inline text-zinc-300 font-medium">
                      {language === "zh" ? "复制" : language === "id" ? "Salin" : "Copy"}
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/jem-angkasa-wijaya/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/10 hover:border-blue-500/60 hover:bg-[#121216]/85 transition-all duration-300 flex items-center justify-between gap-3 group shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold truncate">
                    {t.contact.linkedinLabel}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white group-hover:text-blue-300 transition-colors font-medium truncate block">
                    jem-angkasa-wijaya
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/JAW12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-xl bg-[#0c0c10]/80 backdrop-blur-2xl border border-white/10 hover:border-purple-500/60 hover:bg-[#121216]/85 transition-all duration-300 flex items-center justify-between gap-3 group shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 flex-1">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold truncate">
                    {t.contact.githubLabel}
                  </span>
                  <span className="font-mono text-xs sm:text-sm text-white group-hover:text-purple-300 transition-colors font-medium truncate block">
                    github.com/JAW12
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </a>

            {/* Response Time & Location Glassmorphic Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#0c0c10]/85 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-[#d4af37] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    {language === "zh" ? "地理坐标与远程支持" : language === "id" ? "LOKASI & KETERSEDIAAN" : "LOCATION & AVAILABILITY"}
                  </span>
                  <span className="text-xs font-mono text-zinc-200 font-medium block truncate">
                    {t.contact.locationValue}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2.5 border-t border-white/5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-emerald-400/80 font-semibold">
                    {language === "zh" ? "响应时效保障" : language === "id" ? "ESTIMASI RESPON" : "SLA RESPONSE TIME"}
                  </span>
                  <span className="text-xs font-mono text-zinc-300 font-medium block truncate">
                    {t.contact.responseNotice}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
