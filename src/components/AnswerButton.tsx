import { Check } from "lucide-react";
import type { AnswerValue } from "@/types/gauge";

const labels: Record<AnswerValue, string> = {
  yes: "うん",
  no: "ちがう",
  unknown: "わからない"
};

export function AnswerButton({
  value,
  selected,
  onSelect
}: {
  value: AnswerValue;
  selected: boolean;
  onSelect: (value: AnswerValue) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(value)}
      className={`flex min-h-14 w-full items-center justify-between rounded-2xl border px-4 text-left text-base font-medium transition focus:outline-none focus:ring-4 focus:ring-app-primary/25 ${
        selected ? "border-app-primary bg-app-primarySoft text-app-primarySoftText" : "border-app-border bg-white text-app-text"
      }`}
    >
      <span>{labels[value]}</span>
      {selected ? <Check aria-hidden="true" className="h-5 w-5" /> : <span className="h-5 w-5 rounded-full border border-app-border" />}
    </button>
  );
}
