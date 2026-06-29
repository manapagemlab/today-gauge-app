import { getTopGauges } from "@/lib/getTopGauges";
import type { GaugeResult, StrategySuggestion } from "@/types/gauge";

export function getStrategySuggestions(results: GaugeResult[], count = 5): StrategySuggestion[] {
  const suggestions: StrategySuggestion[] = [];
  const orderedResults = getTopGauges(results, results.length);

  for (const result of orderedResults) {
    for (const strategy of result.strategies) {
      suggestions.push({
        id: `${result.id}-${suggestions.length}`,
        gaugeId: result.id,
        label: result.label,
        shortLabel: result.shortLabel,
        color: result.color,
        strategy
      });

      if (suggestions.length >= count) {
        return suggestions;
      }
    }
  }

  return suggestions;
}
