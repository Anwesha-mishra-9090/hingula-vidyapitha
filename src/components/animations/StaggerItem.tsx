"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export function StaggerItem({ children, ...props }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
