import { useState, useEffect, useCallback } from 'react';

export function useScrollspy(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string>('');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;

    for (let i = ids.length - 1; i >= 0; i--) {
      const element = document.getElementById(ids[i]);
      if (element && element.offsetTop <= scrollPosition) {
        setActiveId(ids[i]);
        return;
      }
    }

    if (ids.length > 0) {
      setActiveId(ids[0]);
    }
  }, [ids, offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return activeId;
}
