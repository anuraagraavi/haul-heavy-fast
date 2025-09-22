import { useState, useEffect } from 'react';

interface PopupState {
  hasShown: boolean;
  pageViews: number;
  sessionStart: number;
}

const STORAGE_KEY = 'heavy-haulers-popup-state';
const SHOW_DELAY = 12000; // 12 seconds
const PAGE_VIEW_THRESHOLD = 3;

export const useCustomerServicePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Get or initialize popup state
    const getPopupState = (): PopupState => {
      try {
        const stored = sessionStorage.getItem(STORAGE_KEY);
        if (stored) {
          return JSON.parse(stored);
        }
      } catch (error) {
        console.warn('Failed to parse popup state from sessionStorage');
      }
      
      return {
        hasShown: false,
        pageViews: 0,
        sessionStart: Date.now()
      };
    };

    const updatePopupState = (updates: Partial<PopupState>) => {
      const currentState = getPopupState();
      const newState = { ...currentState, ...updates };
      
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
      } catch (error) {
        console.warn('Failed to save popup state to sessionStorage');
      }
      
      return newState;
    };

    const state = getPopupState();

    // Don't show if already shown in this session
    if (state.hasShown) {
      return;
    }

    // Increment page views
    const updatedState = updatePopupState({ 
      pageViews: state.pageViews + 1 
    });

    // Check if we should show the popup
    const shouldShowByTime = Date.now() - state.sessionStart >= SHOW_DELAY;
    const shouldShowByPageViews = updatedState.pageViews >= PAGE_VIEW_THRESHOLD;

    if (shouldShowByTime || shouldShowByPageViews) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        updatePopupState({ hasShown: true });
      }, shouldShowByTime ? 0 : SHOW_DELAY);

      return () => clearTimeout(timer);
    }
  }, []);

  // Exit intent detection
  useEffect(() => {
    const state = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{"hasShown": false}');
    
    if (state.hasShown) {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0) {
        setShowPopup(true);
        
        try {
          const currentState = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
            ...currentState,
            hasShown: true
          }));
        } catch (error) {
          console.warn('Failed to update popup state on exit intent');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return {
    showPopup,
    closePopup
  };
};