import type { GaugeResult } from "@/types/gauge";
import { getTopGauges } from "@/lib/getTopGauges";

export function createResultMessage(results: GaugeResult[]): string {
  const topTwo = getTopGauges(results, 2);

  if (topTwo.length < 2) {
    return "今日は少し立ち止まって、今の状態を見てみる日かもしれません。";
  }

  return `今日は${topTwo[0].shortLabel}と${topTwo[1].shortLabel}が重なって、しんどくなっていたかもしれません。`;
}
