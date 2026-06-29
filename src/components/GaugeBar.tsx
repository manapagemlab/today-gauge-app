import { getGaugeLevel } from "@/lib/gaugeLevel";
import { GaugeIcon } from "@/components/GaugeIcon";
import type { GaugeResult } from "@/types/gauge";

export function GaugeBar({ result }: { result: GaugeResult }) {
  const level = getGaugeLevel(result.score);

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-app-border bg-white p-3 shadow-soft">
      <GaugeIcon name={result.icon} color={result.color} label={result.label} />
      <div className="min-w-0 flex-1 space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-base font-semibold leading-tight text-app-text">{result.label}</p>
            <p className="text-xs font-medium text-app-muted">{level}</p>
          </div>
          <p className="shrink-0 text-lg font-bold" style={{ color: result.color }}>
            {result.score}%
          </p>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-app-empty" aria-hidden="true">
          <div className="h-full rounded-full" style={{ width: `${result.score}%`, backgroundColor: result.color }} />
        </div>
      </div>
    </div>
  );
}
