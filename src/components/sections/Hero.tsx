import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Compass, Sparkles, Target } from 'lucide-react';
import cathImg from '../../assets/cath.webp';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/content';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Obtener idioma y datos de la sección
  const { lang } = useLanguage();
  const data = portfolioData[lang].hero;

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30; 
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section 
      id="inicio" 
      onMouseMove={handleMouseMove}
      className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-[var(--bg-primary)] transition-colors duration-300 relative overflow-hidden font-content"
    >
      {/* ==========================================
          ORBES DE LUZ Y AMBIENTE DINÁMICO
          ========================================== */}
      <div 
        className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-[var(--accent-color)]/10 dark:bg-[var(--accent-color)]/15 rounded-full blur-[150px] pointer-events-none"
        style={{ 
          transform: `translate(${mousePos.x * 1.4}px, ${mousePos.y * 1.4}px)`, 
          transition: 'transform 200ms ease-out' 
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none"
        style={{ 
          transform: `translate(${-mousePos.x * 1.1}px, ${-mousePos.y * 1.1}px)`, 
          transition: 'transform 200ms ease-out' 
        }}
      />

      {/* Malla sutil de textura editorial */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{ 
          backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* ==========================================
            COLUMNA IZQUIERDA: CONTENIDO & NARRATIVA
            ========================================== */}
        <div className={`lg:col-span-7 flex flex-col items-start space-y-8 text-left transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Badges de Estado */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full backdrop-blur-xl shadow-sm cursor-default transition-all duration-300 hover:border-[var(--accent-color)]/50">
              <Target size={14} className="text-[var(--accent-color)]" />
              <span className="font-sub text-[10px] uppercase tracking-[0.25em] text-[var(--accent-color)] font-bold">
                {data.specialistBadge}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/25 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-ping" />
              <span className="font-sub text-[10px] uppercase tracking-[0.2em] text-[var(--accent-color)] font-medium">
                {data.availableBadge}
              </span>
            </div>
          </div>

          {/* Título Principal */}
          <div className="space-y-2 relative">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-title font-extrabold tracking-tight leading-[1.02] text-[var(--text-primary)]">
              {data.firstName} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-color)]/60 font-light">
                {data.lastName}
              </span>
            </h1>
          </div>

          {/* Cita & Enfoque */}
          <div className="space-y-4 max-w-2xl">
            <p className="font-content text-lg md:text-xl text-[var(--text-primary)]/90 leading-relaxed border-l-2 border-[var(--accent-color)] pl-6 py-1 font-normal">
              {data.quote}
            </p>

            <div className="flex items-center gap-2 pt-1 text-[10px] md:text-[11px] font-sub uppercase tracking-[0.25em] text-[var(--accent-color)] font-medium">
              <Sparkles size={13} />
              <span>{data.tagline}</span>
            </div>
          </div>
          
          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
            <a 
              href="#contacto"
              className="relative group inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white dark:bg-[#F5E7DC] dark:text-black font-sub uppercase tracking-[0.2em] text-[11px] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_var(--accent-color)]/25 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[var(--accent-color)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                {data.ctaPrimary}
              </span>
              <ArrowUpRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
            </a>
            
            <a 
              href="#servicios"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[var(--border-color)] bg-[var(--bg-secondary)]/60 backdrop-blur-xl font-sub uppercase tracking-[0.2em] text-[11px] font-bold text-[var(--text-primary)] rounded-full hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300 hover:-translate-y-1 group shadow-sm"
            >
              <Compass size={16} className="text-[var(--accent-color)] transition-transform duration-500 group-hover:rotate-[180deg]" />
              <span>{data.ctaSecondary}</span>
            </a>
          </div>

        </div>

        {/* ==========================================
            COLUMNA DERECHA: FOTOGRAFÍA & TARJETA GLASS
            ========================================== */}
        <div className={`lg:col-span-5 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
          
          <div className="relative group w-full max-w-sm md:max-w-md">
            
            {/* Halo de luz posterior */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--accent-color)]/20 via-purple-500/10 to-transparent rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

            {/* Contenedor Fotográfico Studio */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-[var(--border-color)] bg-[var(--bg-secondary)]/80 backdrop-blur-xl p-3 shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
              
              <div className="relative w-full h-[460px] md:h-[530px] rounded-[2rem] overflow-hidden">
                <img 
                  src={cathImg} 
                  alt={data.imgAlt} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay Gradiente Editorial */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;