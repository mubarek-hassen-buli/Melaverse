"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ProductDevelopment() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with stars effect */}
      <div className="absolute inset-0 bg-[#010b19]">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title above the computer */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">End-to-End Product Development</h2>
        </motion.div>

        {/* Computer image with text overlay */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/laptop.png"
              alt="Laptop with blue screen"
              width={1200}
              height={800}
              className="w-full h-auto"
            />

            {/* Text overlay in the center of the computer screen */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-[55%] mt-[-5%]">
              <p className="text-white text-lg md:text-xl font-medium">
                From UI/UX to full-stack engineering, we&apos;ve got your digital product covered.
              </p>
              <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-full">Connect now</Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Glowing effects */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-blue-500/20 blur-xl"></div>
          <div className="absolute bottom-10 left-1/4 right-1/4 h-1 bg-blue-500/70"></div>
        </div>
      </div>
    </section>
  )
}
