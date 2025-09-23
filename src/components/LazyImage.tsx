import { useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  webp?: string;
  avif?: string;
  fetchPriority?: 'high' | 'low' | 'auto';
}

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes,
  webp,
  avif,
  fetchPriority = 'auto'
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true, threshold: 0.1 });
  const imgRef = useRef<HTMLImageElement>(null);

  const shouldLoad = priority || isVisible;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // For priority images, don't use lazy loading
  if (priority) {
    return (
      <picture>
        {avif && <source srcSet={avif} type="image/avif" />}
        {webp && <source srcSet={webp} type="image/webp" />}
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={className}
          sizes={sizes}
          fetchPriority={fetchPriority}
          onLoad={handleLoad}
          onError={handleError}
          loading="eager"
        />
      </picture>
    );
  }

  return (
    <div ref={ref as any} className={`relative ${className}`}>
      {!shouldLoad && (
        <div className="w-full h-full bg-muted animate-pulse rounded" />
      )}
      
      {shouldLoad && (
        <picture>
          {avif && <source srcSet={avif} type="image/avif" />}
          {webp && <source srcSet={webp} type="image/webp" />}
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            sizes={sizes}
            fetchPriority={fetchPriority}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
          />
        </picture>
      )}
      
      {hasError && (
        <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default LazyImage;