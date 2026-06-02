'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoMarkProps {
  size?: number;
  className?: string;
  withText?: boolean;
  textClassName?: string;
}

export function LogoMark({ size = 40, className, withText = false, textClassName }: LogoMarkProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative flex-shrink-0">
        <Image
          src="/images/logos/logo.svg"
          alt="Hingula Vidya Pitha Logo"
          width={size}
          height={size}
          className="rounded-full ring-1 ring-gold/30 shadow-md"
          priority
        />
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-1 ring-white dark:ring-gray-900" />
      </div>
      
      {withText && (
        <div className={cn('min-w-0', textClassName)}>
          <div className="font-display text-sm font-semibold leading-tight">
            Hingula Vidya Pitha
          </div>
          <div className="text-[9px] uppercase tracking-wider text-muted-foreground">
            BSE Odisha · Est. 1992
          </div>
        </div>
      )}
    </div>
  );
}