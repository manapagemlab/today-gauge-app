import type { AnswerValue } from "@/types/gauge";

const STRONG_KEYWORDS = [
  "毎回",
  "かなり",
  "すごく",
  "崩れる",
  "崩れやすい",
  "泣く",
  "怒る",
  "パニック",
  "動けない",
  "しんどそう",
  "できない"
];

const WEAK_KEYWORDS = ["少し", "ちょっと", "たまに", "ときどき", "そこまでではない"];

const baseScores: Record<AnswerValue, number> = {
  yes: 70,
  no: 15,
  unknown: 50
};

const strongScores: Record<AnswerValue, number> = {
  yes: 90,
  no: 25,
  unknown: 70
};

const weakScores: Record<AnswerValue, number> = {
  yes: 60,
  no: 15,
  unknown: 45
};

export function calculateGaugeScore(answer: AnswerValue, note = ""): number {
  const normalizedNote = note.trim();
  const hasStrongKeyword = STRONG_KEYWORDS.some((keyword) => normalizedNote.includes(keyword));
  const hasWeakKeyword = WEAK_KEYWORDS.some((keyword) => normalizedNote.includes(keyword));

  const score = hasStrongKeyword
    ? strongScores[answer]
    : hasWeakKeyword
      ? weakScores[answer]
      : baseScores[answer];

  return Math.max(0, Math.min(100, Math.round(score)));
}
