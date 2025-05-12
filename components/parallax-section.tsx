"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ParallaxSection() {
  return (
    <section className="relative min-h-[600px] my-12 md:my-24 mx-auto max-w-6xl rounded-3xl overflow-hidden bg-[#050714] p-8 md:p-16 flex items-center">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/mobile-app.png"
          alt="Mobile App Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#050714] via-[#050714]/90 to-[#050714]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050714] via-transparent to-[#050714]"></div> */}
      </div>

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Left content */}
        <div className="max-w-md text-left text-white md:w-1/2">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
            Designed
            <br />
            To Move
            <br />
            You.
          </h2>
          <p className="text-lg md:text-xl text-blue-100/90 mb-8 font-light">
            More than an app — a digital ecosystem.
          </p>
          <Button
            variant="outline"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-0 rounded-full px-8 py-3 text-lg font-medium shadow-lg transition-all hover:scale-105 hover:shadow-blue-500/25"
          >
            Open Showcase
          </Button>
          <p className="mt-6 text-sm text-blue-200/60 font-light">
            Empowering vision through smart tech
          </p>
        </div>

        {/* Right content - Decorative Element */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
