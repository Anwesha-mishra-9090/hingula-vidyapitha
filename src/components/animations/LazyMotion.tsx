import { ReactNode, useEffect, useState } from "react";

type AnyProps = any;

export function MotionDiv(props: AnyProps) {
  const { children, ...rest } = props;
  const [Motion, setMotion] = useState<any>(null);

  useEffect(() => {
    let mounted = true;
    import("framer-motion").then((mod) => {
      if (mounted) setMotion(mod.motion);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!Motion) return <div {...rest}>{children as ReactNode}</div>;
  return <Motion.div {...rest}>{children}</Motion.div>;
}

export default MotionDiv;
