"use client";

export default function Hero({ onStartQuiz }: { onStartQuiz: () => void }) {
  return (
    <section
      id="inicio"
      className="relative min-h-[80vh] sm:min-h-[85vh] flex flex-col justify-center px-5 sm:px-6 py-10 sm:py-16 overflow-hidden"
    >
      {/* Gradiente mais suave: menos rosa puro, mais off-white/creme no mobile */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(165deg, #F6F1EB 0%, #FAD0CB 40%, #F8B6B0 100%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-t from-off-white to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="hero-animate hero-animate-delay-1 text-marrom-escuro font-semibold mb-3 text-base sm:text-lg">
          Hiii, how are you doing? I&apos;m Natalia!
        </p>
        <h1 className="hero-animate hero-animate-delay-2 text-2xl sm:text-4xl md:text-5xl font-bold text-marrom-escuro leading-tight mb-4 sm:mb-5">
          Pronto para ficar confiante no inglês de vez?
        </h1>
        <p className="hero-animate hero-animate-delay-2 text-marrom-medio text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed">
          Aulas particulares (iniciante ao avançado), 100% online, com professora formada na área.
        </p>
        <p className="hero-animate hero-animate-delay-3 text-marrom-medio text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
          Será que o jeito que ensino inglês faz sentido para o que você precisa? Faça o teste de necessidades e vem ver se damos match!
        </p>
        <button
          type="button"
          onClick={onStartQuiz}
          className="hero-animate hero-animate-delay-4 cta-breathe btn-primary text-base sm:text-lg shadow-lg hover:shadow-xl min-h-[48px] px-6 py-3"
          aria-label="Iniciar teste de necessidades e match"
        >
          Vamos ver se damos match?
        </button>
      </div>
    </section>
  );
}
