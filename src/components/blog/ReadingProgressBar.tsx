import { useReadingProgress } from '@/hooks/useReadingProgress';

const ReadingProgressBar = () => {
  const progress = useReadingProgress();

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 bg-muted z-50"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div 
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;
