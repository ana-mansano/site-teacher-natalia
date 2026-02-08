"use client";

type MatchResultProps = {
  isMatch: boolean;
  onSeeCalendar: () => void;
};

export default function MatchResult({ isMatch, onSeeCalendar }: MatchResultProps) {
  return (
    <section
      id="resultado"
      className="px-4 sm:px-6 py-12 sm:py-16 scroll-mt-20"
      style={{ background: "linear-gradient(180deg, #F6F1EB 0%, #FAD0CB 100%)" }}
    >
      <div className="max-w-xl mx-auto text-center">
        {isMatch ? (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-marrom-escuro mb-4 sm:mb-6">
              Acho que a gente combina!
            </h2>
            <p className="text-marrom-medio text-base sm:text-lg leading-relaxed mb-2">
              <span className="text-marrom-escuro font-medium">We might be a good match.</span>
            </p>
            <p className="text-marrom-medio text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Agora dá uma olhada nos meus horários e, se fizer sentido, me
              chama. Sem pressão, a ideia é a gente se conectar do jeito certo.
            </p>
            <button
              type="button"
              onClick={onSeeCalendar}
              className="btn-primary text-base sm:text-lg min-h-[48px]"
            >
              Check my schedule
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-marrom-escuro mb-4 sm:mb-6">
              Talvez a gente precise conversar um pouco mais
            </h2>
            <p className="text-marrom-medio text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              O jeito que eu ensino pode não ser exatamente o que você está
              imaginando agora, e tudo bem! Se quiser, dá uma olhada nos
              horários e me manda uma mensagem. A gente se fala e vê se encaixa.
            </p>
            <button
              type="button"
              onClick={onSeeCalendar}
              className="btn-primary text-base sm:text-lg min-h-[48px]"
            >
              See schedule & get in touch
            </button>
          </>
        )}
      </div>
    </section>
  );
}
