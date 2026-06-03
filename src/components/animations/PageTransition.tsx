"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { LazyPresence } from "./LazyPresence";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return <LazyPresence keyProp={pathname}>{children}</LazyPresence>;
}
