"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"

export function AnimatedGlobe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <div ref={ref} className="w-full max-w-4xl mx-auto relative">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 0.8,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
        className="relative"
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 120,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="w-full"
        >
          <Image
            src="/images/digital-globe.png"
            alt="Digital Globe"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Glowing orbs that orbit the globe */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full blur-sm"
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, -20, 0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400 rounded-full blur-sm"
          animate={{
            x: [0, -15, 0, 15, 0],
            y: [0, 15, 0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-teal-400 rounded-full blur-sm"
          animate={{
            x: [0, 10, 0, -10, 0],
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050714] via-transparent to-transparent"></div>
    </div>
  )
}
