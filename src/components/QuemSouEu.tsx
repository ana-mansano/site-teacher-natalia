"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Edite aqui: texto da seção "Quem sou eu"
 */
const TEXTO = {
  titulo: "Quem sou eu",
  subtitulo: "Teacher Natalia | Letras USP · English & Portuguese",
  paragrafo1:
    "Sou professora de inglês e português: 4 anos em escola de idiomas e 2 anos no ensino particular. Formada em Letras (português e inglês) pela USP, trabalho com aulas particulares online do iniciante ao avançado. Acredito que aprender um idioma tem a ver com confiança e prática no seu ritmo.",
  paragrafo2:
    "Gosto de alinhar as aulas ao que você precisa, seja conversação, leitura, preparação para provas ou só não enferrujar. O teste de match no site existe pra gente ver, logo de cara, se o jeito que eu ensino combina com o que você busca.",
};

export default function QuemSouEu() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="quem-sou-eu"
      className={`relative px-4 sm:px-6 py-12 sm:py-16 scroll-mt-20 quem-sou-eu-animate ${visible ? "quem-sou-eu-visible" : ""}`}
      style={{ background: "linear-gradient(180deg, #FAD0CB 0%, #F8B6B0 100%)" }}
    >
      {/* Barra fina animada embaixo (estilo header) */}
      <div className="quem-sou-eu-barra absolute bottom-0 left-0 right-0" aria-hidden />

      <div className="max-w-2xl mx-auto">
        <h2 className="quem-sou-eu-content text-2xl sm:text-3xl md:text-4xl font-bold text-marrom-escuro text-center mb-2">
          {TEXTO.titulo}
        </h2>
        <p className="quem-sou-eu-content text-marrom-medio font-semibold text-center mb-6 sm:mb-8">
          {TEXTO.subtitulo}
        </p>
        <div className="space-y-4 text-marrom-medio leading-relaxed text-base sm:text-lg">
          <p className="quem-sou-eu-p1">{TEXTO.paragrafo1}</p>
          <p className="quem-sou-eu-p2">{TEXTO.paragrafo2}</p>
        </div>
      </div>
    </section>
  );
}
