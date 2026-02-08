"use client";

import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Quiz from "@/components/Quiz";
import MatchResult from "@/components/MatchResult";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import QuemSouEu from "@/components/QuemSouEu";
import Footer from "@/components/Footer";

type Step = "hero" | "quiz" | "result";

export default function Home() {
  const [step, setStep] = useState<Step>("hero");
  const [isMatch, setIsMatch] = useState(false);

  const scrollToId = useCallback((id: string, delay = 0) => {
    const run = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    if (delay) setTimeout(run, delay);
    else run();
  }, []);

  const handleStartQuiz = () => {
    setStep("quiz");
    // Scroll após o React renderizar a seção do quiz
    setTimeout(() => scrollToId("quiz"), 150);
  };

  const handleQuizFinish = (match: boolean) => {
    setIsMatch(match);
    setStep("result");
    setTimeout(() => scrollToId("resultado"), 120);
  };

  const handleSeeCalendar = () => {
    scrollToId("horarios");
  };

  return (
    <main className="min-h-screen">
      <Header onGoToQuiz={handleStartQuiz} />
      <Hero onStartQuiz={handleStartQuiz} />

      {step === "quiz" && <Quiz onFinish={handleQuizFinish} />}

      {step === "result" && (
        <MatchResult isMatch={isMatch} onSeeCalendar={handleSeeCalendar} />
      )}

      <QuemSouEu />
      <Calendar />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
