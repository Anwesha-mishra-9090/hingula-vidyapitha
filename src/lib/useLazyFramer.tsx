import { useEffect, useState } from "react";

export function useLazyFramer() {
  const [mod, setMod] = useState<any>(null);
  useEffect(() => {
    let mounted = true;
    import("framer-motion").then((m) => {
      if (mounted) setMod(m);
    });
    return () => {
      mounted = false;
    };
  }, []);
  return mod;
}

export default useLazyFramer;
