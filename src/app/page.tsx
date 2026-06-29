"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Disclaimer } from "@/components/Disclaimer";

export default function HomePage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col gap-5 px-4 pb-6 pt-4">
      <section className="relative min-h-[430px] overflow-hidden rounded-[28px] bg-white shadow-soft">
        <img
          src={`${basePath}/images/today-gauge-hero.png`}
          alt="親子がスマホで今日の気持ちを確認しているやさしいイラスト"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/95" />
        <div className="relative flex min-h-[430px] flex-col justify-end p-5">
          <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-semibold text-app-primary shadow-soft">
            <Sparkles aria-hidden="true" className="h-4 w-4" />
            今日の親子ミニチェック
          </div>
          <h1 className="text-[32px] font-bold leading-tight text-app-text">今日のしんどさゲージ診断</h1>
          <p className="mt-3 text-base leading-7 text-app-muted">
            学校のあと、予定が変わった日、にぎやかな場所のあと。24個のミニ質問で、今の「しんどい」を8つのゲージに見える化します。
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["からだ", "おなか", "こころ", "予定", "音や光"].map((label) => (
              <span key={label} className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-app-muted shadow-soft">
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
      <Disclaimer />
      <section className="rounded-[20px] border border-app-border bg-white p-4 shadow-soft">
        <div className="grid gap-3 text-base leading-7 text-app-text">
          <p>「なんとなく大変」を、親子で話しやすい言葉に変えていきます。</p>
          <p>結果は「今日はどこを下げるとラクになりそうか」を決めるための、やさしい作戦メモです。</p>
        </div>
      </section>
      <Link
        href="/check"
        className="mt-auto flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-app-primary px-5 text-base font-medium text-white shadow-soft transition hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-app-primary/30"
      >
        今日のゲージを見てみる
        <ArrowRight aria-hidden="true" className="h-5 w-5" />
      </Link>
    </main>
  );
}
