export function AppHeader({ title, description }: { title: string; description?: string }) {
  return (
    <header className="space-y-3 pt-5">
      <p className="text-sm font-semibold text-app-primary">今日の状態チェック</p>
      <h1 className="text-[28px] font-bold leading-tight text-app-text">{title}</h1>
      {description ? <p className="text-base leading-7 text-app-muted">{description}</p> : null}
    </header>
  );
}
