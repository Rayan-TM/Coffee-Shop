import { useEffect, useRef, useState, useCallback } from "react";

export default function useOnScreen(initialStatus = false, threshold = 0.3) {
  const container = useRef();
  const [isVisible, setIsVisible] = useState(initialStatus);

  const handleIntersection = useCallback(([entry]) => {
    setIsVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    const target = container.current;
    if (!target) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      passive: true,
    });

    observer.observe(target);

    return () => observer.disconnect(target);
  }, [handleIntersection]);

  return [container, isVisible];
}
