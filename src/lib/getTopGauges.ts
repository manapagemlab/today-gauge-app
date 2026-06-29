import type { GaugeResult } from "@/types/gauge";

export function getTopGauges(results: GaugeResult[], count = 3): GaugeResult[] {
  return [...results]
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return results.findIndex((result) => result.id === a.id) - results.findIndex((result) => result.id === b.id);
    })
    .slice(0, count);
}
