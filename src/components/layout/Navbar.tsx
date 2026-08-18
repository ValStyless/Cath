import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../../assets/logo.png';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/content';

const Navbar: React.FC = () => {
  const { lang, toggleLanguage } = useLanguage();
  const data = portfolioData[lang].navbar;

  // Inicializamos el modo en 'true' para que abra por defecto en tema dark
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6 pointer-events-none">
      <nav className={`w-full max-w-5xl pointer-events-auto transition-all duration-300 flex items-center justify-between px-6 py-3 rounded-2xl border backdrop-blur-md shadow-lg ${
        scrolled 
          ? 'bg-[var(--bg-primary)]/90 border-[var(--border-color)] shadow-xl' 
          : 'bg-[var(--bg-primary)]/70 border-[var(--border-color)]/60'
      }`}>
        
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          <img src={logoImg} alt="Logo" className="h-9 w-auto object-contain transition-transform hover:scale-105" />
        </a>

        {/* Links Centrados (Escritorio) */}
        <div className="hidden md:flex items-center gap-8 font-sub uppercase tracking-widest text-[10px] font-bold">
          {data.links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="hover:text-[var(--accent-color)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Acciones de la Derecha (Idioma, Modo Claro/Oscuro + Botón de Contacto Visible) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="min-w-[52px] px-2.5 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent-color)] transition-colors shadow-sm text-[var(--text-color)] text-[10px] font-bold uppercase tracking-[0.2em]"
            aria-label="Cambiar idioma"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-[var(--accent-color)] transition-colors shadow-sm text-[var(--text-color)]"
            aria-label="Cambiar modo"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <a 
            href="#contacto" 
            className="flex items-center gap-1.5 px-5 py-2.5 text-[10px] uppercase tracking-widest font-sub font-bold rounded-full transition-all duration-300 shadow-md group bg-black text-white dark:bg-[#F5E7DC] dark:text-black hover:bg-[var(--accent-color)] dark:hover:bg-[var(--accent-color)] dark:hover:text-white"
          >
            <span>{data.cta}</span>
            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Controles para Móvil */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="min-w-[46px] px-2 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm text-[var(--text-color)] text-[9px] font-bold uppercase tracking-[0.18em]"
            aria-label="Cambiar idioma"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm text-[var(--text-color)]"
            aria-label="Cambiar modo"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] shadow-sm text-[var(--text-color)]"
            aria-label="Menú"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Menú Desplegable Móvil */}
        {isOpen && (
          <div className="absolute top-[calc(100%+12px)] left-4 right-4 bg-[var(--bg-primary)] border border-[var(--border-color)] p-6 rounded-2xl flex flex-col gap-4 md:hidden shadow-2xl backdrop-blur-xl animate-fade-in">
            <div className="flex flex-col gap-3 text-center">
              {data.links.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="font-sub uppercase tracking-widest text-xs font-semibold py-2.5 border-b border-[var(--border-color)]/40 hover:text-[var(--accent-color)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <a 
              href="#contacto" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-3.5 bg-black text-white dark:bg-[#F5E7DC] dark:text-black text-xs font-sub uppercase tracking-widest font-bold rounded-full shadow-md"
            >
              <span>{data.cta}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;