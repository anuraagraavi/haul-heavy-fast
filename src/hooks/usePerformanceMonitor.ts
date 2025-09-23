import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  cls?: number;
  fid?: number;
  ttfb?: number;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {};

    // Core Web Vitals observer
    if ('PerformanceObserver' in window) {
      // LCP Observer
      try {
        const lcpObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          metrics.lcp = lastEntry.startTime;
          
          // Send to analytics if needed
          if (process.env.NODE_ENV === 'production') {
            console.log('LCP:', metrics.lcp);
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('LCP observer failed:', error);
      }

      // FID Observer
      try {
        const fidObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry: any) => {
            metrics.fid = entry.processingStart - entry.startTime;
            
            if (process.env.NODE_ENV === 'production') {
              console.log('FID:', metrics.fid);
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID observer failed:', error);
      }

      // CLS Observer
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          metrics.cls = clsValue;
          
          if (process.env.NODE_ENV === 'production') {
            console.log('CLS:', metrics.cls);
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS observer failed:', error);
      }
    }

    // FCP and TTFB from Navigation Timing
    if ('performance' in window && 'getEntriesByType' in performance) {
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        metrics.fcp = fcpEntry.startTime;
      }

      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const nav = navigationEntries[0];
        metrics.ttfb = nav.responseStart - nav.requestStart;
      }
    }

    // Performance budget alerts (development only)
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        if (metrics.lcp && metrics.lcp > 2500) {
          console.warn(`⚠️ LCP is slow: ${metrics.lcp}ms (target: <2500ms)`);
        }
        if (metrics.fcp && metrics.fcp > 1800) {
          console.warn(`⚠️ FCP is slow: ${metrics.fcp}ms (target: <1800ms)`);
        }
        if (metrics.cls && metrics.cls > 0.1) {
          console.warn(`⚠️ CLS is high: ${metrics.cls} (target: <0.1)`);
        }
        if (metrics.fid && metrics.fid > 100) {
          console.warn(`⚠️ FID is slow: ${metrics.fid}ms (target: <100ms)`);
        }
      }, 3000);
    }

    return () => {
      // Cleanup observers if needed
    };
  }, []);
};

export default usePerformanceMonitor;