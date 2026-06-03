"use client";

import { useEffect, useState } from "react";
// framer-motion deferred; use CSS for cursor animation

interface TypewriterTextProps {
  texts: string[];
  delay?: number;
  className?: string;
}

export function TypewriterText({ texts, delay = 2000, className }: TypewriterTextProps) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText === currentText) {
          timeout = setTimeout(() => setIsDeleting(true), delay);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, texts, delay]);

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-5 bg-current ml-1 animate-pulse" />
    </span>
  );
}
