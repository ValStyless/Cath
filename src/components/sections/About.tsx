import React, { useState, useRef, useCallback } from 'react';
import { Compass, Target, Award, ArrowRight, Zap, Orbit, Layers, Cpu } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/content';

// Claves fijas para controlar las pestañas y mapear iconos
type TabKey = 'vision' | 'pasion' | 'trayectoria';

// Mapeo estático de íconos (los íconos no se traducen)
const TAB_ICONS: Record<TabKey, React.ElementType> = {
  vision: Target,
  pasion: Compass,
  trayectoria: Award,
};

const About: React.FC = () => {
  const { lang } = useLanguage();
  const data = portfolioData[lang].about;

  const [activeTab, setActiveTab] = useState<TabKey>('vision');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Estado para el efecto 3D Tilt de la tarjeta
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardRotation, setCardRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [isHoveredCard, setIsHoveredCard] = useState(false);

  // Rastreo del ratón suavizado para los orbes de fondo
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 25;
    setMousePos({ x, y });
  }, []);

  // Rastreo del ratón para el efecto 3D Tilt
  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8; 
    const rotateY = ((x - centerX) / centerX) * 8;

    setCardRotation({ rotateX, rotateY });
  }, []);

  const handleCardMouseLeave = () => {
    setIsHoveredCard(false);
    setCardRotation({ rotateX: 0, rotateY: 0 });
  };

  const currentContent = data.tabs[activeTab];

  return (
    <section 
      id="detalles-creativos" 
      onMouseMove={handleMouseMove}
      className="py-24 px-6 md:px-12 lg:px-20 bg-[var(--bg-primary)] border-t border-[var(--border-color)] transition-colors duration-500 relative overflow-hidden text-[var(--foreground-color)] font-content selection:bg-[var(--accent-color)]/30"
    >
      {/* ==========================================
          LUCES Y ORBES AMBIENTALES
          ========================================== */}
      <div 
        className="absolute top-1/4 left-10 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-[var(--accent-color)]/10 rounded-full blur-[140px] pointer-events-none transition-transform duration-1000 ease-out z-0"
        style={{ transform: `translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 0)` }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[450px] md:w-[600px] h-[450px] md:h-[600px] bg-[var(--accent-color)]/5 rounded-full blur-[160px] pointer-events-none transition-transform duration-1000 ease-out z-0"
        style={{ transform: `translate3d(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px, 0)` }}
      />

      {/* ==========================================
          OBJETOS FLOTANTES INTERACTIVOS
          ========================================== */}
      <div 
        className="absolute top-16 right-12 p-3.5 rounded-2xl bg-[var(--bg-secondary)]/40 border border-[var(--border-color)]/80 backdrop-blur-xl shadow-xl hidden lg:flex items-center gap-3.5 transition-transform duration-700 ease-out z-20 pointer-events-none"
        style={{ transform: `translate3d(${-mousePos.x * 0.8}px, ${-mousePos.y * 0.8}px, 0)` }}
      >
        <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] shadow-inner">
          <Layers size={18} />
        </div>
      </div>

      <div 
        className="absolute bottom-20 left-12 p-3.5 rounded-2xl bg-[var(--bg-secondary)]/40 border border-[var(--border-color)]/80 backdrop-blur-xl shadow-xl hidden lg:flex items-center gap-3.5 transition-transform duration-700 ease-out z-20 pointer-events-none"
        style={{ transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)` }}
      >
        <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] shadow-inner">
          <Cpu size={18} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ==========================================
            ENCABEZADO DE SECCIÓN
            ========================================== */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[var(--bg-secondary)]/60 border border-[var(--border-color)] rounded-full backdrop-blur-xl shadow-sm">
            <Orbit size={14} className="text-[var(--accent-color)] animate-[spin_10s_linear_infinite]" />
            <span className="font-sub text-[10px] uppercase tracking-[0.25em] text-[var(--accent-color)] font-semibold">
              {data.sectionBadge}
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-title font-extrabold tracking-tight leading-[1.08]">
            {data.title} <span className="font-light text-[var(--accent-color)]">{data.titleHighlight}</span>
          </h2>
          
          <p className="font-content text-base md:text-lg opacity-80 max-w-xl leading-relaxed font-normal">
            {data.description}
          </p>
        </div>

        {/* ==========================================
            SISTEMA INTERACTIVO (PESTAÑAS + TARJETA 3D)
            ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Navegación lateral (Izquierda) */}
          <div 
            role="tablist" 
            aria-label="Filosofía y Enfoque"
            className="lg:col-span-5 flex flex-col justify-center gap-3.5"
          >
            {(Object.keys(data.tabs) as TabKey[]).map((key) => {
              const item = data.tabs[key];
              const IconComp = TAB_ICONS[key];
              const isActive = activeTab === key;

              return (
                <button
                  key={key}
                  role="tab"
                  id={`tab-${key}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${key}`}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden backdrop-blur-md cursor-pointer ${
                    isActive 
                      ? 'bg-[var(--bg-secondary)]/90 border-[var(--accent-color)]/60 shadow-lg translate-x-1 sm:translate-x-2' 
                      : 'bg-[var(--bg-secondary)]/30 border-[var(--border-color)]/60 hover:border-[var(--accent-color)]/40 hover:bg-[var(--bg-secondary)]/50 hover:translate-x-1'
                  }`}
                >
                  {/* Borde indicativo activo */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent-color)] transition-transform duration-300 shadow-[0_0_12px_var(--accent-color)] ${isActive ? 'scale-y-100' : 'scale-y-0 opacity-0'}`} />

                  {/* Resplandor suave */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-[var(--accent-color)]/10 to-transparent transition-opacity duration-300 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`} />

                  <div className="flex items-center gap-4 relative z-10 pl-1">
                    <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 border ${
                      isActive 
                        ? 'bg-[var(--accent-color)] border-[var(--accent-color)] text-[var(--bg-primary)] shadow-md rotate-3' 
                        : 'bg-[var(--bg-primary)]/60 border-[var(--border-color)] text-[var(--foreground-color)] group-hover:text-[var(--accent-color)] group-hover:border-[var(--accent-color)]/40'
                    }`}>
                      <IconComp size={20} />
                    </div>
                    <div>
                      <span className={`block font-title text-base font-bold tracking-wide transition-colors duration-300 ${isActive ? 'text-[var(--accent-color)]' : ''}`}>
                        {item.title.split('&')[0]}
                      </span>
                      <span className="block font-content text-xs opacity-60 mt-0.5 uppercase tracking-wider font-medium">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-[var(--accent-color)] text-[var(--bg-primary)] translate-x-0.5' : 'bg-transparent text-[var(--foreground-color)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--accent-color)]'}`}>
                    <ArrowRight size={15} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tarjeta de visualización principal 3D (Derecha) */}
          <div className="lg:col-span-7 [perspective:1000px] flex">
            <div 
              ref={cardRef}
              id={`panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
              onMouseEnter={() => setIsHoveredCard(true)}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              style={{
                transform: `rotateX(${cardRotation.rotateX}deg) rotateY(${cardRotation.rotateY}deg)`,
                transition: isHoveredCard ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
              className="w-full p-8 md:p-12 rounded-3xl bg-[var(--bg-secondary)]/40 border border-[var(--border-color)] backdrop-blur-2xl shadow-2xl relative overflow-hidden flex flex-col justify-between group/card hover:border-[var(--accent-color)]/50 transition-colors duration-500 min-h-[380px]"
            >
              
              {/* Marca de agua tipográfica */}
              <div className={`absolute -right-2 -bottom-6 text-[var(--accent-color)]/5 font-title font-black text-[10rem] md:text-[12rem] pointer-events-none select-none transition-transform duration-700 ease-out ${isHoveredCard ? 'scale-105' : 'scale-100'}`}>
                CJ
              </div>

              {/* Destello decorativo superior */}
              <div className="absolute top-6 right-6 w-32 h-32 rounded-full bg-[var(--accent-color)]/10 blur-[40px] pointer-events-none animate-pulse" />

              {/* Contenido Dinámico */}
              <div className="relative z-10 transition-all duration-500 ease-out">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 text-[var(--accent-color)] rounded-full text-[10px] font-sub uppercase tracking-[0.2em] font-semibold w-fit mb-6">
                  <Zap size={13} className="text-[var(--accent-color)]" />
                  {currentContent.badge}
                </div>
                
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-title font-bold tracking-tight mb-5">
                  {currentContent.title}
                </h3>

                <p className="font-content text-base md:text-lg opacity-85 leading-relaxed border-l-2 border-[var(--accent-color)]/50 pl-5 font-normal">
                  "{currentContent.text}"
                </p>
              </div>

              {/* Pie de la tarjeta */}
              <div className="pt-8 mt-8 border-t border-[var(--border-color)]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] font-sub uppercase tracking-[0.2em] opacity-75 relative z-20">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-color)] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-color)]"></span>
                  </span>
                  <span className="font-medium">{data.footerTag}</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-primary)]/80 rounded-xl border border-[var(--border-color)] backdrop-blur-md">
                  <span className="text-[var(--accent-color)] font-semibold">Catherine de Jesus</span>
                  <span className="opacity-30">&bull;</span>
                  <span>2026</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;