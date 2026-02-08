"use client";

/**
 * Edite aqui: perguntas e respostas do FAQ
 */
const FAQ_ITEMS = [
  {
    pergunta: "Quais são os valores?",
    resposta:
      "No pacote inicial, com 1 hora de aula por semana, o valor da hora-aula é de R$ 75,00. Para demais pacotes, consulte valores pelo WhatsApp.",
  },
  {
    pergunta: "Qual a duração das aulas?",
    resposta: "Cada aula tem duração de 1 hora.",
  },
  {
    pergunta: "Tem disponibilidade de mais de uma aula por semana?",
    resposta:
      "A disponibilidade varia entre os horários pessoais dos alunos e os meus! Consulte a possibilidade de mais de uma aula por semana pelo meu WhatsApp.",
  },
  {
    pergunta: "Quais recursos técnicos são usados nas aulas?",
    resposta:
      "Para as aulas (todas síncronas e ao vivo), usamos o Google Meet. Para acesso aos itens disponibilizados no pacote, usamos o Google Drive. Sem plataformas complicadas, tudo para manter o acesso o mais simples possível para o aluno.",
  },
  {
    pergunta: "O que o pacote inclui?",
    resposta: `Pacote de 4 aulas mensais (1 aula por semana).

O pacote inclui:

• 1 hora de aula por semana
• Gravação da aula disponibilizada
• Acesso aos materiais usados em cada aula (slides e livros didáticos)
• Atividades e homework toda semana
• Teste de nível a cada 3 meses`,
  },
  {
    pergunta: "Posso pedir uma aula avulsa e depois fechar um pacote?",
    resposta:
      "Sim, claro! Como não trabalho com “aula-teste”, você pode contratar uma aula avulsa para ter uma experiência inicial e, se gostar, pode fechar um pacote a qualquer momento :)",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="px-4 sm:px-6 py-12 sm:py-16 scroll-mt-20"
      style={{ background: "linear-gradient(180deg, #F6F1EB 0%, #FAD0CB 100%)" }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-marrom-escuro text-center mb-2">
          Perguntas frequentes
        </h2>
        <p className="text-marrom-medio text-center text-sm sm:text-base mb-8 sm:mb-10">
          Frequently asked questions
        </p>
        <ul className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <li key={i} className="faq-item">
              <details className="group rounded-2xl border-2 border-rosa-suave bg-white overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-4 sm:px-5 text-left font-medium text-marrom-escuro hover:bg-rosa-suave/50 transition-colors">
                  <span className="pr-2">{item.pergunta}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rosa-claro/50 flex items-center justify-center text-marrom-medio group-open:rotate-180 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 sm:px-5 pb-4 pt-0 text-marrom-medio leading-relaxed whitespace-pre-line">
                  {item.resposta}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
