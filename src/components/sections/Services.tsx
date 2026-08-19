import React, { useState } from 'react';
import { Palette, Share2, Video, Orbit, Sparkles, CheckCircle2, UsersRound } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/content';

// Mapa estático de íconos por ID
const SERVICE_ICONS: Record<string, React.ElementType> = {
  "01": Palette,
  "02": Share2,
  "03": Video,
  "04": UsersRound,
};

const Services: React.FC = () => {
  const { lang } = useLanguage();
  const data = portfolioData[lang].services;

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section 
      id="servicios" 
      className="py-20 px-6 md:px-12 lg:px-20 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] transition-colors duration-500 relative overflow-hidden text-[var(--text-color)] font-content"
    >
      {/* LUCES Y AMBIENTAL */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[var(--accent-color)]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Malla de textura sutil */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: 'radial-gradient(var(--text-color) 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--border-color)]/60 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/25 rounded-full backdrop-blur-xl">
              <Orbit size={13} className="text-[var(--accent-color)] animate-spin-slow" />
              <span className="font-sub text-[10px] uppercase tracking-[0.25em] text-[var(--accent-color)] font-medium">
                {data.badge}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-title font-extrabold tracking-tight leading-[1.05]">
              {data.heading} <span className="font-light text-[var(--accent-color)]">{data.headingHighlight}</span>
            </h2>
          </div>

          <p className="font-content text-sm opacity-80 leading-relaxed font-normal max-w-md md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[var(--accent-color)]/60 pl-4 md:pl-0 md:pr-4">
            {data.description}
          </p>
        </div>

        {/* GRID DE TARJETAS ARQUITECTÓNICAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {data.list.map((service, index) => {
            const IconComponent = SERVICE_ICONS[service.id];
            const isHovered = activeCard === index;

            return (
              <div 
                key={service.id} 
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-[var(--bg-primary)] backdrop-blur-2xl p-7 md:p-8 rounded-[2.2rem] border transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl ${
                  isHovered 
                    ? 'border-[var(--accent-color)]/70 -translate-y-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
                    : 'border-[var(--border-color)] hover:border-[var(--accent-color)]/40'
                }`}
              >
                {/* Indicador Láser en Borde Superior */}
                <div 
                  className={`absolute top-0 left-8 right-8 h-1 bg-[var(--accent-color)] rounded-b-full transition-all duration-500 ${
                    isHovered ? 'opacity-100 shadow-[0_0_12px_var(--accent-color)]' : 'opacity-0'
                  }`} 
                />

                {/* Resplandor suave interno */}
                <div 
                  className={`absolute -top-10 -right-10 w-36 h-36 bg-[var(--accent-color)]/10 blur-[40px] rounded-full transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} 
                />

                <div className="space-y-6 relative z-10">
                  {/* CABECERA DE TARJETA */}
                  <div className="flex items-start justify-between gap-4">
                    <div className={`w-13 h-13 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                      isHovered 
                        ? 'bg-[var(--accent-color)] border-[var(--accent-color)] text-[var(--bg-primary)] shadow-md rotate-3' 
                        : 'bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--accent-color)]'
                    }`}>
                      {IconComponent && <IconComponent size={22} />}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-sub text-[9px] uppercase tracking-[0.2em] font-medium text-[var(--accent-color)] px-2.5 py-1 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20">
                        {service.badge}
                      </span>
                      <span className="font-title text-sm font-black opacity-30">
                        {service.id}
                      </span>
                    </div>
                  </div>

                  {/* TÍTULO Y SUBTÍTULO */}
                  <div className="space-y-1">
                    <h3 className={`text-2xl font-title font-bold tracking-tight transition-colors duration-300 ${
                      isHovered ? 'text-[var(--accent-color)]' : ''
                    }`}>
                      {service.title}
                    </h3>
                    <p className="font-sub text-[10px] uppercase tracking-wider opacity-60 font-normal">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* DESCRIPCIÓN JUSTIFICADA */}
                  <p className="text-justify [text-align-last:left] hyphens-auto font-content text-xs md:text-sm opacity-80 leading-relaxed font-normal border-l-2 border-[var(--accent-color)]/40 pl-4 py-0.5">
                    "{service.description}"
                  </p>

                  {/* ENTREGABLES CLAVE */}
                  <div className="space-y-2 pt-2">
                    <span className="font-sub text-[9px] uppercase tracking-[0.2em] text-[var(--accent-color)] font-medium block">
                      {data.includesLabel}
                    </span>
                    <div className="space-y-1.5">
                      {service.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs opacity-90">
                          <CheckCircle2 size={13} className="text-[var(--accent-color)] shrink-0" />
                          <span className="font-content font-normal text-[11px] opacity-80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* PIE DE TARJETA SOLO CON TAGS */}
                <div className="pt-6 mt-6 border-t border-[var(--border-color)]/50 flex items-center justify-between relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className={`text-[9px] font-sub uppercase tracking-wider px-2.5 py-1 rounded-md transition-colors duration-300 ${
                          isHovered 
                            ? 'bg-[var(--accent-color)]/15 text-[var(--accent-color)] font-medium' 
                            : 'bg-[var(--bg-secondary)] text-[var(--text-color)] opacity-60 font-normal'
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* PIE DE SECCIÓN */}
        <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]/50 text-[10px] font-sub uppercase tracking-[0.2em] opacity-60 font-normal">
          <span className="flex items-center gap-2">
            <Sparkles size={12} className="text-[var(--accent-color)]" />
            {data.footerTag}
          </span>
          <span>Catherine de Jesus &bull; 2026</span>
        </div>

      </div>
    </section>
  );
};

export default Services;