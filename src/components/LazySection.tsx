import { ReactNode, Suspense } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Skeleton } from '@/components/ui/skeleton';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  fallback?: ReactNode;
  minHeight?: string;
}

const LazySection = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  fallback,
  minHeight = 'min-h-[200px]'
}: LazySectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ 
    threshold, 
    triggerOnce: true,
    rootMargin: '50px'
  });

  const defaultFallback = (
    <div className={`${minHeight} ${className}`}>
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );

  return (
    <div ref={ref as any} className={className}>
      {isVisible ? (
        <Suspense fallback={fallback || defaultFallback}>
          {children}
        </Suspense>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  );
};

export default LazySection;