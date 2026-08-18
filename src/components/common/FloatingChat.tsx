import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Bot, Sparkles, ArrowUpRight, RotateCcw, MessageCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { portfolioData } from '../../data/content';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  ctaLink?: { label: string; url: string };
}

interface QuestionOption {
  id: string;
  label: string;
  answer: string;
  ctaLink?: { label: string; url: string };
}

const FloatingChat: React.FC = () => {
  const { lang } = useLanguage();
  const data = portfolioData[lang].chat;

  const [isOpen, setIsOpen] = useState(false);
  const [answeredOptionIds, setAnsweredOptionIds] = useState<string[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: data.welcomeMessage
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Actualiza el mensaje inicial de bienvenida si cambia el idioma y no hay historial adicional
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [{ id: 'welcome', sender: 'bot', text: data.welcomeMessage }];
      }
      return prev;
    });
  }, [lang, data.welcomeMessage]);

  // Filtrar preguntas no respondidas y tomar máximo 3 (o 2 según disponibilidad)
  const availableOptions = data.faqOptions.filter(opt => !answeredOptionIds.includes(opt.id));
  const visibleOptions = availableOptions.slice(0, 3);

  // Auto-scroll al recibir o enviar mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSelectOption = (option: QuestionOption) => {
    setAnsweredOptionIds((prev) => [...prev, option.id]);

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: option.label
    };

    const botMsg: Message = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: option.answer,
      ctaLink: option.ctaLink
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleReset = () => {
    setAnsweredOptionIds([]);
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: data.resetMessage
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-content">
      
      {/* ==========================================
          VENTANA DE CHAT ABIERTA
          ========================================== */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] max-h-[80vh] bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-2xl flex flex-col overflow-hidden animate-fade-in transition-all duration-300">
          
          {/* CABECERA DEL CHAT */}
          <div className="p-4 px-5 bg-[var(--bg-primary)] border-b border-[var(--border-color)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-color)]/15 border border-[var(--accent-color)]/30 flex items-center justify-center text-[var(--accent-color)] relative">
                <Bot size={20} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[var(--bg-primary)]" />
              </div>
              <div>
                <h4 className="font-title text-sm font-bold tracking-tight text-[var(--text-color)]">
                  {data.assistantTitle}
                </h4>
                <div className="flex items-center gap-1.5 text-[9px] font-sub uppercase tracking-wider text-[var(--accent-color)] font-medium">
                  <Sparkles size={10} />
                  <span>{data.onlineStatus}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button 
                onClick={handleReset}
                className="p-2 rounded-xl text-[var(--text-color)] opacity-60 hover:opacity-100 hover:bg-[var(--bg-secondary)] transition-colors"
                title={data.resetTooltip}
              >
                <RotateCcw size={15} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-[var(--text-color)] opacity-60 hover:opacity-100 hover:bg-[var(--bg-secondary)] transition-colors"
                title={data.closeTooltip}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* CUERPO DEL CHAT (MENSAJES) */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-normal">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-2`}
              >
                <div 
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[var(--accent-color)] text-[var(--bg-primary)] font-medium rounded-br-xs shadow-sm'
                      : 'bg-[var(--bg-primary)] text-[var(--text-color)] border border-[var(--border-color)] text-justify [text-align-last:left] rounded-bl-xs shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Botón CTA dentro de la respuesta si aplica */}
                {msg.ctaLink && (
                  <a 
                    href={msg.ctaLink.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-full font-sub text-[10px] uppercase tracking-wider font-bold shadow-md hover:opacity-90 transition-opacity mt-1"
                  >
                    <MessageCircle size={14} />
                    <span>{msg.ctaLink.label}</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* OPCIONES DE PREGUNTAS FRECUENTES (DINÁMICAS: MÁX 3, SIN REPETIR) */}
          {visibleOptions.length > 0 ? (
            <div className="p-3 bg-[var(--bg-primary)]/80 border-t border-[var(--border-color)] space-y-2">
              <span className="font-sub text-[9px] uppercase tracking-[0.2em] opacity-60 font-medium block px-1">
                {data.suggestedTitle}
              </span>
              <div className="flex flex-col gap-1.5 max-h-[140px] overflow-y-auto pr-1">
                {visibleOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelectOption(option)}
                    className="w-full text-left p-2.5 px-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-[11px] font-content font-medium text-[var(--text-color)] hover:text-[var(--accent-color)] transition-all flex items-center justify-between group"
                  >
                    <span className="truncate pr-2">{option.label}</span>
                    <HelpCircle size={13} className="opacity-40 group-hover:opacity-100 text-[var(--accent-color)] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-3 bg-[var(--bg-primary)]/80 border-t border-[var(--border-color)] text-center">
              <span className="font-sub text-[9px] uppercase tracking-[0.15em] opacity-60 font-medium block">
                {data.allReviewed}
              </span>
            </div>
          )}

          {/* FOOTER DEL CHAT (ACCESO DIRECTO A WHATSAPP) */}
          <div className="p-3 px-4 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] flex items-center justify-between text-[10px] font-sub uppercase tracking-wider">
            <span className="opacity-60 font-normal">{data.additionalQuestions}</span>
            <a 
              href="https://wa.me/527222948016" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--accent-color)] font-bold flex items-center gap-1 hover:underline"
            >
              <span>{data.talkToCatherine}</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

        </div>
      )}

      {/* ==========================================
          BOTÓN FLOTANTE TRIGGER (SOLO SE MUESTRA CUANDO EL CHAT ESTÁ CERRADO)
          ========================================== */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[var(--accent-color)] text-[var(--bg-primary)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label={data.openAriaLabel}
        >
          {/* Resplandor suave al hacer hover */}
          <span className="absolute -inset-1 rounded-full bg-[var(--accent-color)]/40 blur-md group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="relative z-10 flex items-center justify-center">
            <MessageSquare size={22} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[var(--accent-color)]" />
          </div>
        </button>
      )}

    </div>
  );
};

export default FloatingChat;