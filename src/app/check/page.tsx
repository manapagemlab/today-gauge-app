"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";
import { gaugeQuestionItems } from "@/data/gauges";
import { useGaugeContext } from "@/context/GaugeContext";

export default function CheckPage() {
  const router = useRouter();
  const { answers, updateAnswer, updateNote } = useGaugeContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showError, setShowError] = useState(false);
  const currentQuestion = gaugeQuestionItems[currentIndex];
  const currentAnswer = answers.find((answer) => answer.id === currentQuestion.id) ?? answers[currentIndex];
  const isAnswered = currentAnswer?.answer !== null;

  const goNext = () => {
    if (!isAnswered) {
      setShowError(true);
      return;
    }

    setShowError(false);

    if (currentIndex === gaugeQuestionItems.length - 1) {
      router.push("/result");
      return;
    }

    setCurrentIndex((index) => index + 1);
  };

  const goBack = () => {
    setShowError(false);
    if (currentIndex === 0) {
      router.push("/");
      return;
    }
    setCurrentIndex((index) => index - 1);
  };

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col gap-4 px-4 py-5">
      <ProgressBar current={currentIndex + 1} total={gaugeQuestionItems.length} />
      <QuestionCard
        gauge={currentQuestion.gauge}
        question={currentQuestion.question}
        questionIndex={currentQuestion.questionIndex}
        answer={currentAnswer}
        onAnswer={(value) => {
          updateAnswer(currentQuestion.id, value);
          setShowError(false);
        }}
        onNote={(value) => updateNote(currentQuestion.id, value)}
      />
      {showError ? <p className="rounded-2xl bg-app-primarySoft px-4 py-3 text-sm font-semibold text-app-primarySoftText">答えを1つ選んでください。</p> : null}
      <div className="mt-auto grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={goBack}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-app-primarySoft px-4 text-base font-medium text-app-primarySoftText focus:outline-none focus:ring-4 focus:ring-app-primary/25"
        >
          <ArrowLeft aria-hidden="true" className="h-5 w-5" />
          戻る
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label={currentIndex === gaugeQuestionItems.length - 1 ? "結果を見る" : "次の質問へ進む"}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-app-primary px-4 text-base font-medium text-white shadow-soft focus:outline-none focus:ring-4 focus:ring-app-primary/30 disabled:opacity-60"
        >
          {currentIndex === gaugeQuestionItems.length - 1 ? "結果へ" : "次へ"}
          <ArrowRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </main>
  );
}
