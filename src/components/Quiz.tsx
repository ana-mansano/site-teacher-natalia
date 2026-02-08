"use client";

import { useState, useRef, useEffect } from "react";
import { QUIZ_QUESTIONS, MATCH_THRESHOLD } from "@/data/quiz";

type QuizProps = {
  onFinish: (isMatch: boolean) => void;
};

const AUTO_ADVANCE_MS = 550;

export default function Quiz({ onFinish }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const question = QUIZ_QUESTIONS[currentIndex];
  const isLastQuestion = currentIndex === QUIZ_QUESTIONS.length - 1;
  const isFirstQuestion = currentIndex === 0;

  const advance = () => {
    if (selectedOption === null) return;
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);

    if (isLastQuestion) {
      const scores = newAnswers.map((optIdx, i) => QUIZ_QUESTIONS[i].options[optIdx].score);
      const avg = scores.reduce((a, b) => a + b, 0) / QUIZ_QUESTIONS.length;
      onFinish(avg >= MATCH_THRESHOLD);
      return;
    }

    setCurrentIndex((i) => i + 1);
    setSelectedOption(null);
  };

  const goBack = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (currentIndex === 0) return;
    const previousSelected = answers[answers.length - 1];
    setAnswers(answers.slice(0, -1));
    setCurrentIndex((i) => i - 1);
    setSelectedOption(previousSelected);
  };

  const handleSelect = (optionIndex: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIndex);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(advance, AUTO_ADVANCE_MS);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    advance();
  };


  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const progress =
    ((currentIndex + (selectedOption !== null ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100;

  return (
    <section
      id="quiz"
      className="px-4 sm:px-6 py-10 sm:py-16 bg-rosa-suave/50 scroll-mt-20"
    >
      <div className="max-w-xl mx-auto">
        <p className="text-marrom-medio text-center mb-2 text-sm font-medium">
          Pergunta {currentIndex + 1} de {QUIZ_QUESTIONS.length}
        </p>
        <div className="h-1.5 sm:h-2 bg-rosa-claro rounded-full overflow-hidden mb-6 sm:mb-8">
          <div
            className="h-full bg-rosa-destaque rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-marrom-escuro mb-6 sm:mb-8 text-center">
          {question.question}
        </h2>

        <ul className="space-y-2 sm:space-y-3">
          {question.options.map((opt, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => handleSelect(i)}
                disabled={selectedOption !== null}
                className={`quiz-option w-full text-left flex items-center gap-3 min-h-[48px] sm:min-h-[52px] ${
                  selectedOption === i ? "selected" : ""
                } ${selectedOption !== null && selectedOption !== i ? "opacity-70" : ""}`}
              >
                <span
                  className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm ${
                    selectedOption === i
                      ? "border-rosa-destaque bg-rosa-destaque text-white"
                      : "border-marrom-medio"
                  }`}
                >
                  {selectedOption === i ? "✓" : ""}
                </span>
                <span className="text-marrom-escuro font-medium text-sm sm:text-base">
                  {opt.label}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
          {!isFirstQuestion && (
            <button
              type="button"
              onClick={goBack}
              className="min-h-[44px] px-5 py-2.5 rounded-2xl font-medium text-marrom-medio border-2 border-marrom-medio hover:bg-rosa-suave transition-colors text-sm sm:text-base"
            >
              Anterior
            </button>
          )}
          <button
            type="button"
            onClick={handleNext}
            disabled={selectedOption === null}
            className="btn-primary min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
          >
            {isLastQuestion ? "Ver resultado" : "Próxima"}
          </button>
        </div>
      </div>
    </section>
  );
}
