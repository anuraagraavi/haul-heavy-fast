import LazyImage from '@/components/LazyImage';
import { cn } from '@/lib/utils';
import type { BlogImageData } from '@/types/blog';

// Default fallback image
const FALLBACK_IMAGE = '/placeholder.svg';

interface BlogFigureProps {
  image: BlogImageData;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const BlogFigure = ({ 
  image, 
  className, 
  priority = false
}: BlogFigureProps) => {
  return (
    <figure className={cn("my-8", className)}>
      <LazyImage
        src={image.src || FALLBACK_IMAGE}
        alt={image.alt}
        className="w-full h-auto rounded-xl object-cover"
        priority={priority}
        width={800}
        height={450}
      />
      {(image.caption || image.credit) && (
        <figcaption className="mt-3 text-sm text-muted-foreground text-center">
          {image.caption}
          {image.credit && (
            <span className="ml-2 opacity-70">
              (Photo: {image.credit})
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

// Full width image with parallax-like effect
interface HeroImageProps {
  image: BlogImageData;
  className?: string;
}

export const BlogHeroImage = ({ image, className }: HeroImageProps) => (
  <figure className={cn("relative -mx-4 md:-mx-8 lg:-mx-12 my-8", className)}>
    <LazyImage
      src={image.src || FALLBACK_IMAGE}
      alt={image.alt}
      className="w-full h-48 md:h-64 lg:h-80 object-cover"
      priority
      fetchPriority="high"
      width={1200}
      height={630}
    />
    {(image.caption || image.credit) && (
      <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent text-sm text-foreground">
        {image.caption}
        {image.credit && (
          <span className="ml-2 opacity-70">Photo: {image.credit}</span>
        )}
      </figcaption>
    )}
  </figure>
);

// Image grid for multiple images
interface ImageGridProps {
  images: BlogImageData[];
  columns?: 2 | 3;
  className?: string;
}

export const BlogImageGrid = ({ images, columns = 2, className }: ImageGridProps) => (
  <div 
    className={cn(
      "grid gap-4 my-8",
      columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3",
      className
    )}
  >
    {images.map((image, index) => (
      <BlogFigure key={index} image={image} />
    ))}
  </div>
);

// Process infographic placeholder
interface ProcessVisualProps {
  title: string;
  steps: string[];
  className?: string;
}

export const ProcessVisual = ({ title, steps, className }: ProcessVisualProps) => (
  <div 
    className={cn(
      "bg-card border border-border rounded-xl p-6 my-8",
      className
    )}
  >
    <h4 className="font-semibold text-foreground mb-4 text-center">{title}</h4>
    <div className="flex flex-wrap justify-center gap-2">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
          <span className="text-sm text-foreground">{step}</span>
          {index < steps.length - 1 && (
            <span className="text-muted-foreground mx-2">→</span>
          )}
        </div>
      ))}
    </div>
  </div>
);
