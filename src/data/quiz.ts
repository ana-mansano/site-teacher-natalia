/**
 * ============================================
 * CONFIGURAÇÃO DO QUESTIONÁRIO DE MATCH
 * ============================================
 * Edite aqui: perguntas, opções e quais são as
 * respostas que "combinam" com o método da professora.
 *
 * LÓGICA DO MATCH (resumida):
 * - Cada opção pode ter um peso (score) de 0 a 1.
 * - Respostas alinhadas ao método = score mais alto.
 * - No final, somamos os scores e dividimos pelo número de perguntas.
 * - Se a média >= 0.5, consideramos "match". Ajuste o limiar em page.tsx se quiser.
 */

export type QuizQuestion = {
  id: string;
  question: string;
  options: { label: string; score: number }[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "objetivo",
    question: "O que mais te motiva a estudar inglês agora?",
    options: [
      { label: "Quero falar no dia a dia e me virar em viagens", score: 1 },
      { label: "Preciso para trabalho / prova / certificado", score: 0.6 },
      { label: "Só quero retomar e não esquecer", score: 0.8 },
      { label: "Ainda não sei direito, quero explorar", score: 0.7 },
    ],
  },
  {
    id: "ritmo",
    question: "Como você prefere aprender?",
    options: [
      { label: "Com calma, sem pressão, no meu tempo", score: 1 },
      { label: "Intensivo, quero resultados rápido", score: 0.3 },
      { label: "Um pouco de cada: foco mas sem sufoco", score: 0.9 },
      { label: "Gosto de desafios e metas claras", score: 0.6 },
    ],
  },
  {
    id: "aula",
    question: "Que tipo de aula faz mais sentido pra você?",
    options: [
      { label: "Conversação e situações reais", score: 1 },
      { label: "Gramática e exercícios escritos", score: 0.4 },
      { label: "Mix: falar + um pouco de estrutura", score: 0.95 },
      { label: "Tudo que for prático e aplicado", score: 0.9 },
    ],
  },
  {
    id: "conexao",
    question: "O que é mais importante na relação com a professora?",
    options: [
      { label: "Paciente, que entenda meu ritmo", score: 1 },
      { label: "Objetiva e que cobré resultado", score: 0.3 },
      { label: "Que eu me sinta à vontade para errar", score: 1 },
      { label: "Que adapte o conteúdo ao que eu gosto", score: 0.9 },
    ],
  },
  {
    id: "compromisso",
    question: "Como você enxerga a frequência das aulas?",
    options: [
      { label: "1x por semana, regular, funciona bem", score: 1 },
      { label: "2x ou mais, quero avançar rápido", score: 0.5 },
      { label: "Flexível, conforme minha rotina", score: 0.7 },
      { label: "Prefiro combinar depois de conversar", score: 0.8 },
    ],
  },
];

/**
 * Limiar para considerar "match".
 * score médio >= MATCH_THRESHOLD => match positivo.
 * Ajuste entre 0 e 1 (ex: 0.5 = 50% das respostas alinhadas).
 */
export const MATCH_THRESHOLD = 0.55;
