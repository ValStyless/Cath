import React from 'react';
import { ArrowUp, ArrowUpRight, Sparkles, Mail, MessageCircle, FileText, Compass, MapPin } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/content';

// Ícono SVG local para Instagram
const InstagramIcon = ({ size = 15, className = "" }: { size?: number; className?: string }) => (
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

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const data = portfolioData[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-color)] font-content pt-20 pb-12 px-6 md:px-12 lg:px-20 relative overflow-hidden transition-colors duration-500">
      
      {/* Línea divisoria superior en degradado láser */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-color)]/50 to-transparent pointer-events-none" />

      {/* Halo de luz ambiental de fondo */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[var(--accent-color)]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Malla texturizada sutil */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: 'radial-gradient(var(--text-color) 1px, transparent 1px)', 
          backgroundSize: '36px 36px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* ==========================================
            CABECERA DEL MAPA DE SITIO
            ========================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-color)]/70 pb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/25 rounded-full backdrop-blur-md">
              <Compass size={13} className="text-[var(--accent-color)] animate-spin-slow" />
              <span className="font-sub text-[10px] uppercase tracking-[0.3em] text-[var(--accent-color)] font-medium">
                {data.badge}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-title font-extrabold tracking-tight leading-none">
              {data.heading} <span className="font-light text-[var(--accent-color)]">{data.headingHighlight}</span>
            </h2>
          </div>

          <p className="font-content text-xs md:text-sm opacity-75 max-w-sm md:text-right font-normal leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* ==========================================
            GRID REDISTRIBUIDO EN 3 COLUMNAS
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* COLUMNA 1: IDENTIDAD & MARCA (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-[var(--border-color)]/60 pb-8 lg:pb-0">
            <div className="flex items-center gap-3.5">
              <div className="p-3 bg-[var(--bg-primary)] rounded-2xl border border-[var(--border-color)] shadow-md inline-block">
                <img src={logoImg} alt="Catherine Logo" className="h-10 w-auto object-contain" />
              </div>
              <div>
                <h3 className="font-title text-xl font-bold tracking-tight">Catherine de Jesus</h3>
                <p className="font-sub text-[9px] uppercase tracking-[0.25em] text-[var(--accent-color)] font-medium mt-0.5">
                  {data.role}
                </p>
              </div>
            </div>

            <p className="text-justify [text-align-last:left] hyphens-auto font-content text-xs md:text-sm opacity-80 leading-relaxed font-normal">
              {data.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-[10px] font-sub uppercase tracking-wider opacity-75 font-medium pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[var(--accent-color)]" />
                {data.location}
              </span>
              <span>&bull;</span>
              <span className="text-[var(--accent-color)]">{data.availability}</span>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN PRINCIPAL NUMERADA (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-color)]/60">
              <span className="font-title text-xs font-bold text-[var(--accent-color)]">{data.navColNumber}</span>
              <span className="font-sub text-[10px] uppercase tracking-[0.25em] font-medium opacity-70">
                {data.navColTitle}
              </span>
            </div>

            <ul className="space-y-3 font-sub text-xs uppercase tracking-wider font-semibold">
              {data.navLinks.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className="flex items-center justify-between group py-1 opacity-80 hover:opacity-100 hover:text-[var(--accent-color)] transition-all"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                    <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent-color)] shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: CANALES DIRECTOS & CV (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[var(--border-color)]/60">
              <span className="font-title text-xs font-bold text-[var(--accent-color)]">{data.contactColNumber}</span>
              <span className="font-sub text-[10px] uppercase tracking-[0.25em] font-medium opacity-70">
                {data.contactColTitle}
              </span>
            </div>

            <div className="space-y-2.5 font-sub text-xs font-medium">
              <a 
                href="https://wa.me/527222948016" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle size={15} className="text-[var(--accent-color)] shrink-0" />
                  <span className="opacity-90 group-hover:opacity-100">{data.whatsappLabel}</span>
                </div>
                <ArrowUpRight size={13} className="opacity-50 group-hover:opacity-100 group-hover:text-[var(--accent-color)] transition-all" />
              </a>

              <a 
                href="mailto:cathdjc.23@gmail.com"
                className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Mail size={15} className="text-[var(--accent-color)] shrink-0" />
                  <span className="truncate opacity-90 group-hover:opacity-100">{data.emailLabel}</span>
                </div>
                <ArrowUpRight size={13} className="opacity-50 group-hover:opacity-100 group-hover:text-[var(--accent-color)] transition-all shrink-0" />
              </a>

              <a 
                href="https://instagram.com/_cath_cz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <InstagramIcon size={15} className="text-[var(--accent-color)] shrink-0" />
                  <span className="opacity-90 group-hover:opacity-100">{data.instagramLabel}</span>
                </div>
                <ArrowUpRight size={13} className="opacity-50 group-hover:opacity-100 group-hover:text-[var(--accent-color)] transition-all" />
              </a>

              <a 
                href="/cv-catherine.pdf" 
                download
                className="flex items-center justify-between p-3 rounded-xl bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30 hover:bg-[var(--accent-color)] hover:text-[var(--bg-primary)] transition-all font-bold text-[10px] uppercase tracking-wider group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <FileText size={14} />
                  <span>{data.cvLabel}</span>
                </div>
                <ArrowUpRight size={13} className="opacity-70 group-hover:opacity-100 transition-all" />
              </a>
            </div>
          </div>

        </div>

        {/* ==========================================
            BARRA INFERIOR DE COPYRIGHT Y SCROLL UP
            ========================================== */}
        <div className="pt-8 border-t border-[var(--border-color)]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-sub uppercase tracking-[0.2em] opacity-65 font-normal">
          <p>
            {data.copyright}
          </p>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Sparkles size={12} className="text-[var(--accent-color)]" />
              {data.designBadge}
            </span>

            <button 
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all group shadow-sm"
              aria-label={data.scrollTop}
            >
              <span>{data.scrollTop}</span>
              <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;