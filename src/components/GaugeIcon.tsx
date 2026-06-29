import { Apple, Calendar, Cloud, MessageCircle, Moon, RefreshCcw, ShieldAlert, Volume2 } from "lucide-react";
import type { GaugeIconName } from "@/types/gauge";

const iconMap = {
  Moon,
  Apple,
  Cloud,
  Calendar,
  Volume2,
  MessageCircle,
  RefreshCcw,
  ShieldAlert
};

export function GaugeIcon({ name, color, label }: { name: GaugeIconName; color: string; label: string }) {
  const Icon = iconMap[name];

  return (
    <span
      aria-label={`${label}のアイコン`}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-white"
      style={{ backgroundColor: color }}
    >
      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={2.3} />
    </span>
  );
}
