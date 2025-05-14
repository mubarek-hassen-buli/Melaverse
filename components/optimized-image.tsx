"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "@/lib/performance-optimizations";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  fallbackSrc?: string;
  lazyBoundary?: string;
  lowQualityPlaceholder?: boolean;
}

/**
 * OptimizedImage component that implements:
 * - Lazy loading with IntersectionObserver
 * - Blur-up image loading effect
 * - Proper sizing and quality optimization
 * - Fallback handling
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = "/placeholder.svg",
  lazyBoundary = "200px",
  lowQualityPlaceholder = true,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(priority ? src : undefined);
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    rootMargin: lazyBoundary,
    threshold: 0.01,
  });

  // Load image when it comes into view
  useEffect(() => {
    if (isVisible && !imgSrc && !priority) {
      setImgSrc(src);
    }
  }, [isVisible, src, imgSrc, priority]);

  // Handle image load error
  const handleError = () => {
    console.warn(`Failed to load image: ${src}`);
    setImgSrc(fallbackSrc);
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ""}`}>
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={`transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setIsLoaded(true)}
          onError={handleError}
          loading={priority ? "eager" : "lazy"}
          sizes={
            props.sizes ||
            "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          placeholder={lowQualityPlaceholder ? "blur" : "empty"}
          blurDataURL={
            lowQualityPlaceholder
              ? "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23a0a0a0'/%3E%3C/svg%3E"
              : undefined
          }
          {...props}
        />
      ) : (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            aspectRatio: width && height ? `${width}/${height}` : "auto",
          }}
        />
      )}
    </div>
  );
}
