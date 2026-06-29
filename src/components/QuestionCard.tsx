import { AnswerButton } from "@/components/AnswerButton";
import type { AnswerValue, Gauge, GaugeAnswer } from "@/types/gauge";

export function QuestionCard({
  gauge,
  question,
  questionIndex,
  answer,
  onAnswer,
  onNote
}: {
  gauge: Gauge;
  question: string;
  questionIndex: number;
  answer: GaugeAnswer;
  onAnswer: (value: AnswerValue) => void;
  onNote: (value: string) => void;
}) {
  return (
    <section className="rounded-[20px] border border-app-border bg-white p-4 shadow-soft">
      <div className="mb-5 inline-flex rounded-full px-3 py-1 text-sm font-semibold" style={{ backgroundColor: gauge.lightColor, color: gauge.color }}>
        {gauge.label}・{questionIndex + 1} / 3
      </div>
      <h2 className="text-2xl font-bold leading-snug text-app-text">「{question}」</h2>
      <div className="mt-6 space-y-3">
        {(["yes", "no", "unknown"] as AnswerValue[]).map((value) => (
          <AnswerButton key={value} value={value} selected={answer.answer === value} onSelect={onAnswer} />
        ))}
      </div>
      <label className="mt-6 block text-sm font-semibold text-app-text" htmlFor={`note-${answer.id}`}>
        気になる様子があれば、短く書いてください
      </label>
      <textarea
        id={`note-${answer.id}`}
        value={answer.note}
        onChange={(event) => onNote(event.target.value)}
        rows={3}
        className="mt-2 w-full resize-none rounded-2xl border border-app-border bg-white px-4 py-3 text-base text-app-text outline-none transition focus:border-app-primary focus:ring-4 focus:ring-app-primary/20"
        placeholder="例：少し眠そう、音が気になった"
      />
    </section>
  );
}
