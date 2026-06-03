"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScaleX(progress);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-primary to-gold"
      style={{ transform: `scaleX(${scaleX})`, transformOrigin: "left" }}
    />
  );
}
