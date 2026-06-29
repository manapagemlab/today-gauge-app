export function getGaugeLevel(score: number): string {
  if (score <= 39) return "低め";
  if (score <= 69) return "少し高め";
  if (score <= 84) return "高め";
  return "かなり高め";
}
