"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Quem sou eu", href: "#quem-sou-eu" },
  { label: "Match", href: "#quiz", isQuiz: true },
  { label: "FAQ", href: "#faq" },
  { label: "Horários", href: "#horarios" },
  { label: "Contato", href: "#contato" },
];

type HeaderProps = {
  onGoToQuiz?: () => void;
};

export default function Header({ onGoToQuiz }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isQuiz?: boolean) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isQuiz && onGoToQuiz) {
      onGoToQuiz();
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header
        className="sticky top-0 z-30 shadow-lg relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a2d47 0%, #2d4a6b 35%, #3d3a2e 100%)",
        }}
      >
        {/* Faixa de destaque em baixo */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, transparent, #E96C6C, #F8B6B0, transparent)" }}
        />
        {/* Detalhe sutil: cantos */}
        <div className="absolute top-0 right-0 w-32 h-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at right, #FAD0CB 0%, transparent 70%)" }} />
        <div className="absolute top-0 left-0 w-24 h-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at left, #FAD0CB 0%, transparent 70%)" }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 md:h-16 relative z-10">
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <span className="font-bold text-off-white text-base md:text-lg group-hover:text-rosa-suave transition-colors">
              Teacher Natalia
            </span>
            <span className="hidden sm:inline text-xs font-medium text-rosa-suave/90 border border-rosa-suave/50 rounded-full px-2.5 py-0.5">
              Inglês
            </span>
          </a>

          {/* Desktop: links na horizontal */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isQuiz)}
                className="text-off-white/85 hover:text-off-white hover:bg-white/5 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile: botão hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 text-off-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile: menu lateral */}
        {menuOpen && (
          <nav
            className="md:hidden absolute top-full left-0 right-0 py-4 px-4 shadow-lg"
            style={{ background: "linear-gradient(135deg, #2d4a6b 0%, #1a2d47 50%, #3d3a2e 100%)" }}
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.isQuiz)}
                    className="block py-3 px-4 text-off-white hover:bg-white/10 rounded-lg text-base font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
