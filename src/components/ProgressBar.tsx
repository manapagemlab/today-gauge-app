export function ProgressBar({ current, total }: { current: number; total: number }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div aria-label={`進捗 ${current} / ${total}`} className="space-y-2">
      <div className="flex items-center justify-between text-sm font-semibold text-app-muted">
        <span>{current} / {total}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-app-empty">
        <div className="h-full rounded-full bg-app-primary transition-all" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
