/**
 * Performance Optimizations for MELAVERSE
 *
 * This file contains utilities to improve website performance and scrolling smoothness.
 */

import { useEffect, useState, useCallback } from "react";

/**
 * Hook to implement intersection observer for lazy loading components
 * @param options IntersectionObserver options
 * @returns [ref, isVisible] - Ref to attach to element and visibility state
 */
export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverInit = {
    threshold: 0,
    root: null,
    rootMargin: "0px",
  }
) {
  const [ref, setRef] = useState<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }, []);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref);
      return () => observer.disconnect();
    }
    return undefined;
  }, [ref, options, callback]);

  return [setRef, isVisible] as const;
}

/**
 * Hook to throttle function calls for better performance
 * @param callback Function to throttle
 * @param delay Delay in ms between function calls
 * @returns Throttled function
 */
export function useThrottle<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number
): (...args: Parameters<T>) => void {
  const [lastCall, setLastCall] = useState(0);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        callback(...args);
        setLastCall(now);
      }
    },
    [callback, delay, lastCall]
  );
}

/**
 * Hook to defer non-critical operations until after page load
 * @returns Boolean indicating if initial page load is complete
 */
export function usePageLoadComplete() {
  const [isLoadComplete, setIsLoadComplete] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoadComplete(true);
    } else {
      const onLoad = () => setIsLoadComplete(true);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return isLoadComplete;
}

/**
 * Image loading optimization - returns a properly sized image URL
 * @param src Original image source
 * @param width Desired width
 * @param quality Image quality (1-100)
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(
  src: string,
  width: number,
  quality: number = 75
) {
  // For Next.js Image component, this is handled automatically
  // This is for cases where you might need to optimize images manually
  // Apply quality parameter to demonstrate usage
  if (src.includes("?")) {
    return `${src}&w=${width}&q=${quality}`;
  }
  return `${src}?w=${width}&q=${quality}`;
}

/**
 * Detects if the user prefers reduced motion
 * @returns Boolean indicating if reduced motion is preferred
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const onChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return prefersReducedMotion;
}
