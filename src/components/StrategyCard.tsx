import type { StrategySuggestion } from "@/types/gauge";

export function StrategyCard({ suggestion, index }: { suggestion: StrategySuggestion; index: number }) {
  return (
    <div className="rounded-2xl border border-app-border bg-white p-4 shadow-soft">
      <p className="text-sm font-semibold" style={{ color: suggestion.color }}>
        作戦 {index + 1}・{suggestion.shortLabel}
      </p>
      <p className="mt-2 text-base font-semibold leading-7 text-app-text">{suggestion.strategy}</p>
    </div>
  );
}
