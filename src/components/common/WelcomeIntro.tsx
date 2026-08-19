import React, { useEffect, useState } from 'react';
import { Orbit, Sparkles } from 'lucide-react';

const logoImg = new URL('../../assets/logo.png', import.meta.url).href;

interface WelcomeIntroProps {
  onComplete: () => void;
}

const WelcomeIntro: React.FC<WelcomeIntroProps> = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1750);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2750);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none font-content select-none bg-[#1a1a1a]">
      
      {/* ==========================================
          CORTINAS DUAL-TONE (LUZ & SOMBRA)
          ========================================== */}
      {/* Cortina Izquierda: Tono Claro (Beige Alabastro) */}
      <div 
        className={`absolute inset-y-0 left-0 w-1/2 bg-[#EBEAE8] border-r border-[#DACABD]/50 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? '-translate-x-full' : 'translate-x-0'
        }`} 
      />

      {/* Cortina Derecha: Tono Oscuro (Carbón Obsidiana) */}
      <div 
        className={`absolute inset-y-0 right-0 w-1/2 bg-[#1a1a1a] border-l border-[#4a4138]/50 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? 'translate-x-full' : 'translate-x-0'
        }`} 
      />

      {/* Halo de resplandor central que fusiona ambos mundos */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,100vw)] h-[min(700px,100vw)] bg-[#89725B]/10 rounded-full blur-[140px] pointer-events-none transition-opacity duration-700 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />

      {/* ==========================================
          TARJETA CENTRAL DE CRISTAL ESMERILADO
          ========================================== */}
      <div 
        aria-label="Presentación de Catherine de Jesus"
        className={`relative z-10 w-[calc(100%-2rem)] max-w-2xl p-5 sm:p-7 md:p-10 bg-[#262422]/95 border border-[#89725B]/30 backdrop-blur-md rounded-[2rem] shadow-[0_24px_60px_rgba(0,0,0,0.42)] flex flex-col md:flex-row items-center gap-6 md:gap-9 transition-all duration-700 ease-out ${
          isOpen ? 'opacity-0 scale-95 filter blur-sm' : 'opacity-100 scale-100 animate-zoom-in'
        }`}
      >
        
        {/* BLOQUE IZQUIERDO: LOGOTIPO SOBRE FONDO CREMA */}
        <div className="w-full md:w-5/12 flex flex-col items-center justify-center p-6 sm:p-8 bg-[#F5E7DC] rounded-[1.75rem] border border-[#DACABD] relative shadow-inner">
          {/* Indicador pulsante bronce */}
          <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89725B] animate-ping" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-[#89725B]" />
          </div>
          
          <img 
            src={logoImg} 
            alt="Catherine Logo" 
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain animate-fade-in-up mix-blend-multiply" 
            style={{ animationDelay: '0.2s' }}
          />

          <span className="font-sub text-[9px] uppercase tracking-[0.4em] text-[#89725B] font-extrabold mt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Est. 2026
          </span>
        </div>

        {/* BLOQUE DERECHO: TIPOGRAFÍA DE LUJO SOBRE FONDO OSCURO */}
        <div className="w-full md:w-7/12 text-center md:text-left space-y-3">
          
          {/* Badge de Inicio */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#89725B]/20 border border-[#89725B]/40 text-[#EBEAE8] rounded-full backdrop-blur-md animate-fade-in-up shadow-sm" style={{ animationDelay: '0.3s' }}>
            <Orbit size={12} className="animate-spin-slow text-[#89725B]" />
            <span className="font-sub text-[9px] uppercase tracking-[0.3em] font-medium text-[#EBEAE8]">
              PORTFOLIO PROFESIONAL
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-title text-[#EBEAE8] font-extrabold tracking-tight leading-[1.02] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Catherine <br />
            <span className="text-[#bfa388] font-light text-3xl sm:text-4xl md:text-5xl">de Jesus</span>
          </h1>

          <p className="text-[#EBEAE8] text-base sm:text-lg md:text-xl font-sub font-semibold tracking-wide animate-fade-in-up" style={{ animationDelay: '0.55s' }}>
            Practicante de Marketing
          </p>

          {/* Divisor Gráfico */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#89725B]/40 to-transparent my-2" />

          {/* Subtítulo / Tagline */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-sub uppercase tracking-[0.2em] text-[#bfa388] font-semibold animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Sparkles size={12} className="text-[#89725B]" />
            <span>Estrategia &bull; Branding &bull; Contenido</span>
          </div>

        </div>

      </div>

      {/* ESTILOS DE ANIMACIÓN INTERNA */}
      <style>{`
        @keyframes zoomIn {
          0% { opacity: 0; transform: scale(0.94) translateY(12px); filter: blur(6px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
        .animate-zoom-in {
          animation: zoomIn 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-zoom-in,
          .animate-fade-in-up,
          .animate-ping,
          .animate-spin-slow {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default WelcomeIntro;