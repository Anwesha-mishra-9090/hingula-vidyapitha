"use client";

import { ReactNode } from "react";
import { MotionDiv } from "./LazyMotion";

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export function StaggerItem({ children, ...props }: StaggerItemProps) {
  return (
    <MotionDiv
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      {...props}
    >
      {children}
    </MotionDiv>
  );
}
