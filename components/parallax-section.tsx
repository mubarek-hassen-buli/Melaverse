"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Only update when section is visible
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate parallax offset - subtle movement
  const calculateParallax = () => {
    if (!sectionRef.current) return { y: 0 };

    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = rect.top + window.scrollY;
    const relativeScroll = scrollY - sectionTop;
    const parallaxY = relativeScroll * 0.15; // Subtle effect multiplier

    return { y: parallaxY };
  };

  const parallaxStyle = calculateParallax();

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600px] my-24 mx-4 rounded-3xl overflow-hidden "
      style={{
        backgroundImage: `url('/images/mobile-app.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Phone background image with parallax */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay - lighter on the right to show phone more clearly */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050714]/95 via-[#050714]/80 to-[#050714]/40 z-10"></div>

        <div
          className="absolute inset-0 flex items-center justify-end"
          style={{
            transform: `translateY(${parallaxStyle.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <Image
            src="/images/mobile-app.png"
            alt="Mobile App Interface"
            width={1200}
            height={800}
            className="h-full object-contain object-right opacity-90"
            style={{
              objectPosition: "right center",
              maxWidth: "none",
              width: "auto",
            }}
          />
        </div>

        {/* Additional decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050714] via-transparent to-[#050714]/80"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxQjI0NEEiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMGgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yIDBIMzZ2MWgtMXYtMXptLTIgNGgxdjFoLTF2LTF6bTIgMGgxdjFoLTF2LTF6Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>

        {/* Glowing elements that move slightly differently than the background */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${parallaxStyle.y * 0.7}px)`,
            transition: "transform 0.1s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${parallaxStyle.y * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        ></div>
      </div>

      {/* Content - now aligned to the left */}
      <div className="container mx-auto px-4 py-24 relative z-20">
        <div className="max-w-xl ml-0 mr-auto text-left">
          <h2 className="text-5xl font-bold mb-6">
            Designed
            <br />
            To Move
            <br />
            You.
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            More than an app — a digital ecosystem.
          </p>
          <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 text-lg">
            Open Showcase
          </Button>
          <p className="mt-6 text-gray-400">
            Empowering vision through smart tech
          </p>
        </div>
      </div>

      {/* Decorative curved lines with different parallax rates */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        style={{
          transform: `translateY(${parallaxStyle.y * 0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        style={{
          transform: `translateY(${parallaxStyle.y * 0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>
    </section>
  );
}
