"use client";

import { toPng } from "html-to-image";

export async function downloadResultImage(element: HTMLElement, date: string): Promise<void> {
  const dataUrl = await toPng(element, {
    cacheBust: true,
    pixelRatio: 2,
    backgroundColor: "#FFFDF8",
    filter: (node) => {
      if (!(node instanceof HTMLElement)) return true;
      return node.dataset.imageExclude !== "true";
    }
  });

  const link = document.createElement("a");
  link.download = `today-gauge-${date}.png`;
  link.href = dataUrl;
  link.click();
}
