import { useRef, useState, useEffect, useCallback } from 'react';

interface UseHorizontalTimelineNavReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollLeft: () => void;
  scrollRight: () => void;
  hasInteracted: boolean;
}

export function useHorizontalTimelineNav(): UseHorizontalTimelineNavReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const updateScrollState = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    updateScrollState();

    const handleScroll = () => {
      updateScrollState();
      setHasInteracted(true);
    };

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScrollState);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  const scrollLeft = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = 320 + 32; // card width + gap
    container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    setHasInteracted(true);
  }, []);

  const scrollRight = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = 320 + 32; // card width + gap
    container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    setHasInteracted(true);
  }, []);

  return {
    containerRef,
    canScrollLeft,
    canScrollRight,
    scrollLeft,
    scrollRight,
    hasInteracted,
  };
}
