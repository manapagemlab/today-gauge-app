import { describe, expect, it } from "vitest";
import { calculateGaugeScore } from "@/lib/calculateGaugeScore";
import { gauges } from "@/data/gauges";
import { getTopGauges } from "@/lib/getTopGauges";
import type { GaugeResult } from "@/types/gauge";

describe("calculateGaugeScore", () => {
  it("yesのみで70になる", () => {
    expect(calculateGaugeScore("yes")).toBe(70);
  });

  it("noのみで15になる", () => {
    expect(calculateGaugeScore("no")).toBe(15);
  });

  it("unknownのみで50になる", () => {
    expect(calculateGaugeScore("unknown")).toBe(50);
  });

  it("強いキーワード＋yesで90になる", () => {
    expect(calculateGaugeScore("yes", "かなりしんどそう")).toBe(90);
  });

  it("弱いキーワード＋yesで60になる", () => {
    expect(calculateGaugeScore("yes", "少しだけ")).toBe(60);
  });

  it("強弱両方なら強い方を優先する", () => {
    expect(calculateGaugeScore("yes", "少し泣く")).toBe(90);
  });

  it("スコアが0〜100を超えない", () => {
    expect(calculateGaugeScore("yes", "毎回")).toBeGreaterThanOrEqual(0);
    expect(calculateGaugeScore("yes", "毎回")).toBeLessThanOrEqual(100);
  });
});

describe("getTopGauges", () => {
  it("上位3項目が正しく並ぶ", () => {
    const results = [
      result("a", 70),
      result("b", 90),
      result("c", 90),
      result("d", 15)
    ];

    expect(getTopGauges(results).map((item) => item.id)).toEqual(["b", "c", "a"]);
  });
});

describe("strategy suggestions", () => {
  it("作戦アドバイス候補が15種類以上ある", () => {
    const strategyCount = gauges.reduce((total, gauge) => total + gauge.strategies.length, 0);

    expect(strategyCount).toBeGreaterThanOrEqual(15);
  });

  it("各ゲージに質問が3問ずつある", () => {
    expect(gauges.every((gauge) => gauge.questions.length === 3)).toBe(true);
  });
});

function result(id: string, score: number): GaugeResult {
  return {
    id,
    label: id,
    shortLabel: id,
    score,
    color: "#000000",
    lightColor: "#ffffff",
    icon: "Moon",
    strategies: [id]
  };
}
