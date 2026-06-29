"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Download, RotateCcw } from "lucide-react";
import { ResultCard } from "@/components/ResultCard";
import { downloadResultImage } from "@/lib/downloadResultImage";
import { useGaugeContext } from "@/context/GaugeContext";

export default function ResultPage() {
  const router = useRouter();
  const resultRef = useRef<HTMLDivElement>(null);
  const { hydrated, isComplete, results, resetAnswers } = useGaugeContext();
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const today = useMemo(() => new Date(), []);
  const fileDate = today.toISOString().slice(0, 10);
  const dateLabel = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short"
  }).format(today);

  useEffect(() => {
    if (hydrated && !isComplete) {
      router.replace("/");
    }
  }, [hydrated, isComplete, router]);

  const handleSave = async () => {
    if (!resultRef.current) return;

    setIsSaving(true);
    setSaveError("");

    try {
      await downloadResultImage(resultRef.current, fileDate);
    } catch {
      setSaveError("画像を保存できませんでした。もう一度お試しください。");
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    resetAnswers();
    router.push("/check");
  };

  if (!hydrated || !isComplete) {
    return (
      <main className="mx-auto grid min-h-dvh w-full max-w-[480px] place-items-center px-4 text-center text-app-muted">
        読み込み中です。
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-[480px] space-y-4 px-4 py-5">
      <div ref={resultRef}>
        <ResultCard results={results} dateLabel={dateLabel} />
      </div>
      {saveError ? <p className="rounded-2xl bg-app-primarySoft px-4 py-3 text-sm font-semibold text-app-primarySoftText">{saveError}</p> : null}
      <div data-image-exclude="true" className="grid gap-3 pb-3">
        <button
          type="button"
          onClick={handleSave}
          disabled={isSaving}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-app-primary px-4 text-base font-medium text-white shadow-soft focus:outline-none focus:ring-4 focus:ring-app-primary/30 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Download aria-hidden="true" className="h-5 w-5" />
          {isSaving ? "画像を作成中…" : "画像として保存"}
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-app-primarySoft px-4 text-base font-medium text-app-primarySoftText focus:outline-none focus:ring-4 focus:ring-app-primary/25"
        >
          <RotateCcw aria-hidden="true" className="h-5 w-5" />
          もう一度チェックする
        </button>
      </div>
    </main>
  );
}
