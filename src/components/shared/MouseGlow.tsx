"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
      animate={{
        x: mousePosition.x - 20,
        y: mousePosition.y - 20,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      style={{
        width: 40,
        height: 40,
        background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)",
      }}
    />
  );
}
