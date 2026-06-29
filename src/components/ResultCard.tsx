import { GaugeBar } from "@/components/GaugeBar";
import { StrategyCard } from "@/components/StrategyCard";
import { createResultMessage } from "@/lib/createResultMessage";
import { getStrategySuggestions } from "@/lib/getStrategySuggestions";
import { getTopGauges } from "@/lib/getTopGauges";
import type { GaugeResult } from "@/types/gauge";

export function ResultCard({ results, dateLabel }: { results: GaugeResult[]; dateLabel: string }) {
  const topGauges = getTopGauges(results, 3);
  const strategySuggestions = getStrategySuggestions(results, 5);
  const message = createResultMessage(results);

  return (
    <section className="space-y-4 rounded-[20px] bg-app-background p-1" aria-label="診断結果カード">
      <div className="rounded-[20px] border border-app-border bg-white p-4 shadow-soft">
        <p className="text-sm font-semibold text-app-muted">{dateLabel}</p>
        <h1 className="mt-1 text-[26px] font-bold leading-tight text-app-text">今日のしんどさゲージ</h1>
        <p className="mt-4 rounded-2xl bg-app-primarySoft px-4 py-4 text-lg font-semibold leading-8 text-app-text">{message}</p>
        <p className="mt-4 text-sm leading-6 text-app-muted">
          この結果は医療的な診断ではありません。
          <br />
          今日の状態を親子で整理するための目安です。
        </p>
      </div>

      <div className="rounded-[20px] border border-app-border bg-white p-4 shadow-soft">
        <h2 className="text-lg font-semibold text-app-text">上位3項目</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {topGauges.map((result) => (
            <span
              key={result.id}
              className="rounded-full px-3 py-2 text-sm font-semibold"
              style={{ backgroundColor: result.lightColor, color: result.color }}
            >
              {result.shortLabel} {result.score}%
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {results.map((result) => (
          <GaugeBar key={result.id} result={result} />
        ))}
      </div>

      <div className="space-y-3">
        <div className="px-1">
          <h2 className="text-lg font-semibold text-app-text">今日の作戦</h2>
          <p className="mt-1 text-sm leading-6 text-app-muted">資料を参考に、今日ためしやすい順に選んでいます。</p>
        </div>
        {strategySuggestions.map((suggestion, index) => (
          <StrategyCard key={suggestion.id} suggestion={suggestion} index={index} />
        ))}
      </div>
    </section>
  );
}
