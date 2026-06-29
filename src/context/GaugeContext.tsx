"use client";

import { createContext, useContext } from "react";
import { useGaugeAnswers } from "@/hooks/useGaugeAnswers";

type GaugeContextValue = ReturnType<typeof useGaugeAnswers>;

const GaugeContext = createContext<GaugeContextValue | null>(null);

export function GaugeProvider({ children }: { children: React.ReactNode }) {
  const value = useGaugeAnswers();

  return <GaugeContext.Provider value={value}>{children}</GaugeContext.Provider>;
}

export function useGaugeContext(): GaugeContextValue {
  const context = useContext(GaugeContext);

  if (!context) {
    throw new Error("useGaugeContext must be used within GaugeProvider");
  }

  return context;
}
