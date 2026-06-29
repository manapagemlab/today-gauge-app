"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { gaugeQuestionItems, gauges } from "@/data/gauges";
import { calculateGaugeScore } from "@/lib/calculateGaugeScore";
import { readLocalStorage, removeLocalStorage, writeLocalStorage } from "@/hooks/useLocalStorage";
import type { AnswerValue, GaugeAnswer, GaugeResult } from "@/types/gauge";

const STORAGE_KEY = "today-gauge-answers";

const initialAnswers = (): GaugeAnswer[] =>
  gaugeQuestionItems.map((item) => ({
    id: item.id,
    answer: null,
    note: ""
  }));

function normalizeAnswers(answers: GaugeAnswer[]): GaugeAnswer[] {
  return gaugeQuestionItems.map((item) => {
    const stored = answers.find((answer) => answer.id === item.id);
    return {
      id: item.id,
      answer: stored?.answer ?? null,
      note: stored?.note ?? ""
    };
  });
}

export function useGaugeAnswers() {
  const [answers, setAnswers] = useState<GaugeAnswer[]>(initialAnswers);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setAnswers(normalizeAnswers(readLocalStorage<GaugeAnswer[]>(STORAGE_KEY, initialAnswers())));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeLocalStorage(STORAGE_KEY, answers);
  }, [answers, hydrated]);

  const updateAnswer = useCallback((id: string, answer: AnswerValue | null) => {
    setAnswers((current) => current.map((item) => (item.id === id ? { ...item, answer } : item)));
  }, []);

  const updateNote = useCallback((id: string, note: string) => {
    setAnswers((current) => current.map((item) => (item.id === id ? { ...item, note } : item)));
  }, []);

  const resetAnswers = useCallback(() => {
    removeLocalStorage(STORAGE_KEY);
    setAnswers(initialAnswers());
  }, []);

  const results = useMemo<GaugeResult[]>(() => {
    return gauges.map((gauge) => {
      const gaugeQuestionIds = gauge.questions.map((_, questionIndex) => `${gauge.id}-${questionIndex}`);
      const gaugeAnswers = answers.filter((answer) => gaugeQuestionIds.includes(answer.id));
      const scoredAnswers = gaugeAnswers
        .filter((answer): answer is GaugeAnswer & { answer: AnswerValue } => answer.answer !== null)
        .map((answer) => calculateGaugeScore(answer.answer, answer.note));
      const score =
        scoredAnswers.length > 0
          ? Math.round(scoredAnswers.reduce((total, current) => total + current, 0) / scoredAnswers.length)
          : 0;

      return {
        id: gauge.id,
        label: gauge.label,
        shortLabel: gauge.shortLabel,
        score,
        color: gauge.color,
        lightColor: gauge.lightColor,
        icon: gauge.icon,
        strategies: gauge.strategies
      };
    });
  }, [answers]);

  const isComplete = answers.every((answer) => answer.answer !== null);

  return {
    answers,
    hydrated,
    results,
    isComplete,
    updateAnswer,
    updateNote,
    resetAnswers
  };
}
