import { useCallback, useRef } from 'react';

interface UseHoverDelayOptions {
  enterDelay?: number;
  leaveDelay?: number;
}

export const useHoverDelay = (
  onEnter: () => void,
  onLeave: () => void,
  options: UseHoverDelayOptions = {}
) => {
  const { enterDelay = 0, leaveDelay = 300 } = options;
  const enterTimeoutRef = useRef<NodeJS.Timeout>();
  const leaveTimeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = useCallback(() => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = undefined;
    }

    if (enterDelay > 0) {
      enterTimeoutRef.current = setTimeout(onEnter, enterDelay);
    } else {
      onEnter();
    }
  }, [onEnter, enterDelay]);

  const handleMouseLeave = useCallback(() => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = undefined;
    }

    if (leaveDelay > 0) {
      leaveTimeoutRef.current = setTimeout(onLeave, leaveDelay);
    } else {
      onLeave();
    }
  }, [onLeave, leaveDelay]);

  const clearTimeouts = useCallback(() => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = undefined;
    }
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = undefined;
    }
  }, []);

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    clearTimeouts
  };
};