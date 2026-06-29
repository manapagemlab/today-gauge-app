import type { Metadata, Viewport } from "next";
import { GaugeProvider } from "@/context/GaugeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "今日のしんどさゲージ診断",
  description: "今日の疲れ・空腹・不安・刺激などを親子で見える化するWebアプリ"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFDF8"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="font-sans">
        <GaugeProvider>{children}</GaugeProvider>
      </body>
    </html>
  );
}
