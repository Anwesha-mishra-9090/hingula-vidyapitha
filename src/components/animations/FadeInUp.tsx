"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FadeInUpProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export function FadeInUp({ children, delay = 0, ...props }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
