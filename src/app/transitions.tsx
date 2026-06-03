"use client";

import { ReactNode } from "react";
import { LazyPresence } from "../components/animations/LazyPresence";
import { MotionDiv } from "../components/animations/LazyMotion";
import { pageTransition } from "./animations";

export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <LazyPresence>
      <MotionDiv initial="initial" animate="animate" exit="exit" variants={pageTransition}>
        {children}
      </MotionDiv>
    </LazyPresence>
  );
}
