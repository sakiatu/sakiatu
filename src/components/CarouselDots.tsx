import { cn } from '@/lib/utils';

export default function CarouselDots({ current, count }: { current: number; count: number }) {
  return (
    <div className="flex pt-6 items-center justify-center text-sm text-muted-foreground">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              'size-2 rounded-full mx-1',
              i + 1 === current ? 'bg-violet-500/80' : 'bg-neutral-600'
            )}
          />
        ))}
    </div>
  );
}
