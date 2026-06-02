'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full border-2 border-primary"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: 'spring', stiffness: 1000, damping: 28 }}
        style={{ width: 16, height: 16 }}
      />
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full bg-primary/20"
        animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        style={{ width: 40, height: 40 }}
      />
    </>
  );
}