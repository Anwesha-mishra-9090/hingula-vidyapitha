import { ReactNode, useEffect, useState } from "react";

export function LazyPresence({ children, keyProp }: { children: ReactNode; keyProp?: string }) {
  const [Motion, setMotion] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    import("framer-motion").then((mod) => {
      if (mounted) setMotion({ AnimatePresence: mod.AnimatePresence, motion: mod.motion });
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!Motion) return <>{children}</>;

  const { AnimatePresence, motion } = Motion;
  return (
    <AnimatePresence mode="wait">
      <motion.div key={keyProp} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default LazyPresence;
