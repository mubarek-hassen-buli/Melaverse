"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function CallToAction() {
  return (
    <section className="relative py-24 mt-16 mb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/footer_bg.png" alt="Digital Background" fill className="object-cover" priority />

        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-900/30"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Digitalize Your Product and Reach More Clients?
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            Let&apos;s bring your idea to life with cutting-edge technology and creative innovation
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg rounded-full">
              Connect now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
