import React, { useState } from 'react';
import { Mail, FileText, ArrowUpRight, Check, Copy, MessageCircle, Sparkles, Send, Handshake, ShieldCheck } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/content';

// Ícono SVG local de Instagram
const InstagramIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const data = portfolioData[lang].contact;

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="contacto" 
      className="py-24 px-6 md:px-12 lg:px-20 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-500 relative overflow-hidden text-[var(--text-color)] font-content"
    >
      {/* LUCES Y AMBIENTAL DE FONDO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[var(--accent-color)]/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Malla texturizada sutil */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: 'radial-gradient(var(--text-color) 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        
        {/* ENCABEZADO PERSUASIVO */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/25 rounded-full backdrop-blur-xl">
            <Handshake size={14} className="text-[var(--accent-color)]" />
            <span className="font-sub text-[10px] uppercase tracking-[0.3em] text-[var(--accent-color)] font-medium">
              {data.badge}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-title font-extrabold tracking-tight leading-[1.08]">
            {data.headingLine1} <br />
            <span className="font-light text-[var(--accent-color)]">{data.headingLine2}</span>
          </h2>

          <p className="font-content text-sm md:text-base opacity-85 leading-relaxed font-normal text-justify [text-align-last:center] hyphens-auto max-w-xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* TARJETA DE PRESENTACIÓN FÍSICA (BUSINESS CARD) */}
        <div className="relative group max-w-3xl mx-auto perspective-1000">
          
          {/* Halo de luz tras la tarjeta */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[var(--accent-color)]/30 via-transparent to-[var(--accent-color)]/30 rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

          {/* CUERPO PRINCIPAL DE LA TARJETA */}
          <div className="relative bg-[var(--bg-secondary)] border border-[var(--accent-color)]/40 rounded-[2.2rem] p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl overflow-hidden flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-10 transition-all duration-500 hover:border-[var(--accent-color)]/70">
            
            {/* Bisel / Marco Emboscado Interno */}
            <div className="absolute inset-2 md:inset-3 border border-[var(--border-color)]/40 rounded-[1.8rem] pointer-events-none" />

            {/* Guías de Imprenta en Esquinas */}
            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-[var(--accent-color)]/40 pointer-events-none" />
            <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-[var(--accent-color)]/40 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-[var(--accent-color)]/40 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-[var(--accent-color)]/40 pointer-events-none" />

            {/* Monograma en relieve en fondo (Watermark) */}
            <div className="absolute -right-6 -bottom-8 text-[var(--accent-color)]/5 font-title font-black text-[11rem] pointer-events-none select-none">
              CJ
            </div>

            {/* LADO IZQUIERDO: MARCA & PRESENTACIÓN (FRENTE) */}
            <div className="w-full md:w-5/12 flex flex-col justify-between space-y-8 border-b md:border-b-0 md:border-r border-[var(--border-color)]/80 pb-8 md:pb-0 md:pr-8 relative z-10">
              
              <div className="space-y-6">
                {/* Logo & Sello de Disponibilidad */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-color)] shadow-sm inline-block">
                    <img src={logoImg} alt="Catherine Logo" className="h-9 w-auto object-contain" />
                  </div>

                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--accent-color)]/15 border border-[var(--accent-color)]/30 rounded-full text-[9px] font-sub uppercase tracking-wider text-[var(--accent-color)] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] animate-ping" />
                    {data.availabilityBadge}
                  </span>
                </div>

                {/* Nombre & Título Profesional */}
                <div className="space-y-1.5">
                  <h3 className="text-2xl md:text-3xl font-title font-bold tracking-tight text-[var(--text-color)]">
                    {data.name}
                  </h3>
                  <p className="font-sub text-[10px] uppercase tracking-[0.25em] text-[var(--accent-color)] font-medium">
                    {data.title}
                  </p>
                </div>
              </div>

              {/* Nota de Garantía */}
              <div className="pt-4 border-t border-[var(--border-color)]/40 space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] font-sub uppercase tracking-wider text-[var(--accent-color)] font-medium">
                  <ShieldCheck size={13} />
                  <span>{data.guaranteeBadge}</span>
                </div>
                <p className="font-content text-xs opacity-80 font-normal leading-relaxed text-justify [text-align-last:left]">
                  {data.guaranteeText}
                </p>
              </div>

            </div>

            {/* LADO DERECHO: CANALES DIRECTOS */}
            <div className="w-full md:w-7/12 flex flex-col justify-center space-y-5 relative z-10 pl-0 md:pl-2">
              
              <span className="font-sub text-[9px] uppercase tracking-[0.3em] text-[var(--accent-color)] font-medium block">
                {data.directoryBadge}
              </span>

              {/* FILA 1: WHATSAPP */}
              <a 
                href={`https://wa.me/527222948016?text=${encodeURIComponent(data.whatsappMessage)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group/item p-3 rounded-2xl bg-[var(--bg-primary)]/50 hover:bg-[var(--bg-primary)] border border-[var(--border-color)]/70 hover:border-[var(--accent-color)] transition-all duration-300 shadow-sm"
              >
                <div className="w-11 h-11 rounded-full bg-[var(--accent-color)]/20 text-[var(--accent-color)] border border-[var(--accent-color)]/30 flex items-center justify-center shrink-0 group-hover/item:scale-105 group-hover/item:bg-[var(--accent-color)] group-hover/item:text-[var(--bg-primary)] transition-all">
                  <MessageCircle size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-sub text-[9px] uppercase tracking-wider opacity-50 font-medium">{data.whatsappLabel}</span>
                  <span className="font-content text-sm md:text-base font-semibold text-[var(--text-color)] group-hover/item:text-[var(--accent-color)] transition-colors">
                    {data.whatsappNumber}
                  </span>
                </div>
                <ArrowUpRight size={16} className="opacity-40 group-hover/item:opacity-100 group-hover/item:text-[var(--accent-color)] transition-all" />
              </a>

              {/* FILA 2: INSTAGRAM */}
              <a 
                href="https://instagram.com/_cath_cz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group/item p-3 rounded-2xl bg-[var(--bg-primary)]/50 hover:bg-[var(--bg-primary)] border border-[var(--border-color)]/70 hover:border-[var(--accent-color)] transition-all duration-300 shadow-sm"
              >
                <div className="w-11 h-11 rounded-full bg-[var(--accent-color)]/20 text-[var(--accent-color)] border border-[var(--accent-color)]/30 flex items-center justify-center shrink-0 group-hover/item:scale-105 group-hover/item:bg-[var(--accent-color)] group-hover/item:text-[var(--bg-primary)] transition-all">
                  <InstagramIcon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-sub text-[9px] uppercase tracking-wider opacity-50 font-medium">{data.instagramLabel}</span>
                  <span className="font-content text-sm md:text-base font-semibold text-[var(--text-color)] group-hover/item:text-[var(--accent-color)] transition-colors">
                    {data.instagramUser}
                  </span>
                </div>
                <ArrowUpRight size={16} className="opacity-40 group-hover/item:opacity-100 group-hover/item:text-[var(--accent-color)] transition-all" />
              </a>

              {/* FILA 3: CORREO ELECTRÓNICO */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-[var(--bg-primary)]/50 hover:bg-[var(--bg-primary)] border border-[var(--border-color)]/70 hover:border-[var(--accent-color)] transition-all duration-300 shadow-sm">
                <a 
                  href={`mailto:${data.emailAddress}`}
                  className="flex items-center gap-4 flex-1 min-w-0"
                >
                  <div className="w-11 h-11 rounded-full bg-[var(--accent-color)]/20 text-[var(--accent-color)] border border-[var(--accent-color)]/30 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block font-sub text-[9px] uppercase tracking-wider opacity-50 font-medium">{data.emailLabel}</span>
                    <span className="font-content text-xs md:text-sm font-semibold text-[var(--text-color)] truncate block">
                      {data.emailAddress}
                    </span>
                  </div>
                </a>

                {/* Copia Rápida */}
                <button 
                  onClick={handleCopyEmail}
                  title={data.copyTooltip}
                  className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-color)] hover:border-[var(--accent-color)] transition-colors shrink-0"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className="opacity-60" />}
                </button>
              </div>

            </div>

          </div>

          {/* BOTONES EXTERNOS DE ACCIÓN RÁPIDA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a 
              href={`https://wa.me/527222948016?text=${encodeURIComponent(data.ctaWhatsappMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--accent-color)] text-[var(--bg-primary)] font-sub uppercase tracking-[0.2em] text-[11px] font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_var(--accent-color)]/30 hover:-translate-y-1 group"
            >
              <Send size={15} className="transition-transform group-hover:translate-x-1" />
              <span>{data.ctaWhatsapp}</span>
            </a>

            <a 
              href="/cv-catherine.pdf" 
              download 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] font-sub uppercase tracking-[0.2em] text-[11px] font-bold text-[var(--text-color)] rounded-full hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300 hover:-translate-y-1 group shadow-sm"
            >
              <FileText size={15} className="text-[var(--accent-color)]" />
              <span>{data.ctaCv}</span>
            </a>
          </div>

        </div>

        {/* PIE DE SECCIÓN */}
        <div className="flex items-center justify-between pt-8 border-t border-[var(--border-color)]/50 text-[10px] font-sub uppercase tracking-[0.2em] opacity-60 font-normal">
          <span className="flex items-center gap-2">
            <Sparkles size={12} className="text-[var(--accent-color)]" />
            {data.footerNotice}
          </span>
          <span>Catherine de Jesus &bull; 2026</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;