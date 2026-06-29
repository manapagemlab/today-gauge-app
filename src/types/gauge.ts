export type AnswerValue = "yes" | "no" | "unknown";

export type GaugeIconName =
  | "Moon"
  | "Apple"
  | "Cloud"
  | "Calendar"
  | "Volume2"
  | "MessageCircle"
  | "RefreshCcw"
  | "ShieldAlert";

export type Gauge = {
  id: string;
  label: string;
  shortLabel: string;
  questions: string[];
  color: string;
  lightColor: string;
  icon: GaugeIconName;
  strategies: string[];
};

export type GaugeAnswer = {
  id: string;
  answer: AnswerValue | null;
  note: string;
};

export type GaugeQuestionItem = {
  id: string;
  gauge: Gauge;
  question: string;
  questionIndex: number;
};

export type GaugeResult = {
  id: string;
  label: string;
  shortLabel: string;
  score: number;
  color: string;
  lightColor: string;
  icon: GaugeIconName;
  strategies: string[];
};

export type StrategySuggestion = {
  id: string;
  gaugeId: string;
  label: string;
  shortLabel: string;
  color: string;
  strategy: string;
};
