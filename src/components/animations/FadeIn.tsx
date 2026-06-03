"use client";

import { ReactNode } from "react";
import { MotionDiv } from "./LazyMotion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  [key: string]: any;
}

export function FadeIn({ children, delay = 0, ...props }: FadeInProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}
