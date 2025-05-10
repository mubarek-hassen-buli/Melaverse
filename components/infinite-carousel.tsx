"use client"
import Image from "next/image"
import { motion } from "framer-motion"

interface Partner {
  name: string
  logo: string
}

export function InfiniteCarousel() {
  // Sample partner logos - replace with actual partner logos
  const partners: Partner[] = [
    { name: "Partner 1", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Partner 2", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Partner 3", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Partner 4", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Partner 5", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Partner 6", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Partner 7", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Partner 8", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Partner 9", logo: "/placeholder.svg?height=60&width=180" },
    { name: "Partner 10", logo: "/placeholder.svg?height=60&width=180" },
  ]

  // Duplicate the partners array to create a seamless loop
  const duplicatedPartners = [...partners, ...partners]

  // Animation duration based on the number of partners
  const duration = partners.length * 10 // seconds

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-blue-900/10 py-12 rounded-xl">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold text-white">Trusted by Industry Leaders</h3>
        <p className="text-gray-400 mt-2">Partnering with the best to deliver excellence</p>
      </div>

      <div className="relative">
        {/* First row - moves left to right */}
        <motion.div
          className="flex items-center space-x-16 mb-8"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              duration,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0 px-4">
              <div className="bg-[#0a0d1a] p-4 rounded-lg h-20 w-44 flex items-center justify-center border border-blue-900/30 hover:border-blue-500/50 transition-colors">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Second row - moves right to left (opposite direction) */}
        <motion.div
          className="flex items-center space-x-16"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            x: {
              duration: duration * 1.2, // Slightly different speed for visual interest
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0 px-4">
              <div className="bg-[#0a0d1a] p-4 rounded-lg h-20 w-44 flex items-center justify-center border border-blue-900/30 hover:border-blue-500/50 transition-colors">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
