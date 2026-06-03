"use client";

import { useState, useEffect, useRef } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
  aspectRatio?: string; // e.g. '16/9' or '4/3'
}

export function LazyImage({ src, alt, className, placeholderColor = "#f0f0f0", aspectRatio = '16/9' }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const style: any = { backgroundColor: placeholderColor };
  if (aspectRatio) style.aspectRatio = aspectRatio;

  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {isInView && (
        <>
          {
            (() => {
              const widths = [480, 768, 1024, 1366, 1600];
              let srcSet: string | undefined = undefined;
              if (src.includes("w=")) {
                srcSet = widths.map((w) => src.replace(/w=\d+/, `w=${w}`) + ` ${w}w`).join(", ");
              }

              return (
                <img
                  ref={imgRef}
                  src={src}
                  srcSet={srcSet}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={alt}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full object-cover transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoad={() => setIsLoaded(true)}
                />
              );
            })()
          }
          {!isLoaded && (
            <div className="absolute inset-0 animate-pulse" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.06), rgba(255,255,255,0.02))" }} />
          )}
        </>
      )}
    </div>
  );
}
