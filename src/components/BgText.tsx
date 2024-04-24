import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export default function BgText({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        'absolute font-bg tracking-[3rem] text-gray-200 select-none -z-10',
        'text-[196px] sm:text-[260px]',
        className
      )}
    >
      {children}
    </div>
  );
}
