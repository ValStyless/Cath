import React from 'react';
import { Megaphone, Users, Layout, Sparkles, ArrowRight, Compass, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/content';

// Importación del Logo
import albehLogo from '../../assets/logo-albeh.png';

// Mapa estático de íconos por ID
const CARD_ICONS: Record<number, React.ElementType> = {
  1: Megaphone,
  2: Users,
  3: Layout,
  4: Compass
};

const Experience: React.FC = () => {
  const { lang } = useLanguage();
  const data = portfolioData[lang].experience;

  return (
    <section 
      id="experiencia" 
      className="py-24 px-6 md:px-12 lg:px-20 bg-[var(--bg-primary)] border-t border-[var(--border-color)] relative text-[var(--foreground-color)] font-content overflow-hidden"
    >
      {/* Fondo de patrón de puntos minimalista */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* ==========================================
            SECCIÓN SUPERIOR: PRESENTACIÓN ALBEH
            ========================================== */}
        <div className="bg-[var(--bg-secondary)]/30 backdrop-blur-2xl p-8 md:p-14 rounded-[3rem] border border-[var(--border-color)] relative overflow-hidden shadow-xl">
          {/* Luz ambiental */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-color)]/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Título y Botón con Logo */}
            <div className="lg:col-span-5 space-y-8 border-b lg:border-b-0 lg:border-r border-[var(--border-color)]/50 pb-10 lg:pb-0 lg:pr-10">
              
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--accent-color)]/20 rounded-full bg-[var(--accent-color)]/5 text-[10px] uppercase tracking-[0.2em] font-sub font-bold text-[var(--accent-color)] shadow-sm">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>{data.badge}</span>
                </div>

                <h2 className="text-5xl md:text-6xl font-title font-extrabold tracking-tight leading-[1.05]">
                  {data.heading} <br />
                  <span className="text-[var(--accent-color)] drop-shadow-sm">
                    {data.headingHighlight}
                  </span>
                </h2>
              </div>

              <div className="w-16 h-1 bg-[var(--accent-color)] rounded-full opacity-80" />

              {/* BOTÓN CON LOGO INTEGRADO */}
              <div className="pt-2">
                <a 
                  href="https://www.albehci.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group inline-flex items-center gap-4 px-6 py-3.5 bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] rounded-full transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_var(--accent-color)]/20"
                >
                  <div className="w-7 h-7 flex items-center justify-center shrink-0">
                    <img 
                      src={albehLogo} 
                      alt="Logo Albeh" 
                      className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="font-sub text-xs uppercase tracking-[0.2em] font-bold mt-0.5">
                    {data.ctaBtn}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-color)]/10 flex items-center justify-center group-hover:bg-[var(--accent-color)] transition-colors duration-300">
                    <ArrowRight size={14} className="text-[var(--accent-color)] group-hover:text-[var(--bg-primary)] transform transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </a>
              </div>
            </div>

            {/* Agradecimiento a la Agencia */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[var(--accent-color)] text-[var(--bg-primary)] rounded-xl shadow-md">
                  <Award size={20} />
                </div>
                <h3 className="font-title font-bold text-2xl tracking-wide uppercase">{data.agencyTitle}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base opacity-90 leading-relaxed font-medium">
                <p className="text-justify [text-align-last:left] hyphens-auto border-l-2 border-[var(--accent-color)]/30 pl-4">
                  {data.p1Part1}
                  <strong className="text-[var(--accent-color)] font-bold">{data.p1Highlight}</strong>
                  {data.p1Part2}
                </p>
                <p className="text-justify [text-align-last:left] hyphens-auto border-l-2 border-[var(--accent-color)]/30 pl-4">
                  {data.p2Part1}
                  <strong className="text-[var(--accent-color)] font-bold">{data.p2Highlight}</strong>
                  {data.p2Part2}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ==========================================
            SECCIÓN INFERIOR: TARJETAS 3D FLIP
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.cards.map((item) => {
            const IconComp = CARD_ICONS[item.id];

            return (
              <div 
                key={item.id} 
                className="group relative h-[320px] w-full [perspective:1000px] cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-lg group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] rounded-[2rem]">
                  
                  {/* CARA FRONTAL */}
                  <div className="absolute inset-0 w-full h-full bg-[var(--bg-secondary)]/50 backdrop-blur-sm border border-[var(--border-color)] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden]">
                    
                    <div className="w-20 h-20 rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                      {IconComp && <IconComp size={32} />}
                    </div>
                    
                    <span className="text-[9px] font-sub uppercase tracking-[0.2em] font-bold text-[var(--accent-color)] mb-3 bg-[var(--accent-color)]/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    
                    <h4 className="text-xl font-title font-bold leading-tight">
                      {item.title}
                    </h4>

                    <div className="absolute bottom-6 text-[10px] font-sub uppercase tracking-widest opacity-40 animate-pulse">
                      {data.flipInstruction}
                    </div>
                  </div>

                  {/* CARA TRASERA */}
                  <div className="absolute inset-0 w-full h-full bg-[var(--bg-primary)] border-2 border-[var(--accent-color)]/60 rounded-[2rem] p-8 flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
                    
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--accent-color)]/10 blur-[40px] rounded-full pointer-events-none" />

                    <div className="flex items-center gap-3 mb-4 opacity-50">
                      {IconComp && <IconComp size={18} />}
                      <h4 className="text-sm font-title font-bold">
                        {item.title}
                      </h4>
                    </div>
                    
                    <p className="text-justify [text-align-last:left] hyphens-auto font-content text-sm opacity-90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;