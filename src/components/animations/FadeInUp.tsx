"use client";

import { ReactNode } from "react";
import { MotionDiv } from "./LazyMotion";

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  [key: string]: any;
}

export function FadeInUp({ children, delay = 0, ...props }: FadeInUpProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}
