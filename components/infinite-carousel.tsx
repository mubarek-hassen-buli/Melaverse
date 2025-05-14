"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Partner {
  name: string;
  logo: string;
}

export function InfiniteCarousel() {
  // Sample partner logos - replace with actual partner logos
  const partners: Partner[] = [
    { name: "Partner 1", logo: "/images/logo-01.png" },
    { name: "Partner 2", logo: "/images/logo-02.png" },
    { name: "Partner 3", logo: "/images/logo-03.png" },
    { name: "Partner 4", logo: "/images/logo-04.png" },
    { name: "Partner 5", logo: "/images/logo-05.png" },
  ];

  // Create a double array to ensure seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  // Animation duration based on the number of partners
  const duration = partners.length * 8; // seconds

  return (
    <div className="w-full overflow-hidden py-12">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Trusted by Industry Leaders
        </h3>
        <p className="text-gray-400 mt-2">
          Partnering with the best to deliver excellence
        </p>
      </div>

      <div className="relative py-6">
        {/* Single row with futuristic design */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/0 via-blue-500/5 to-blue-900/0 h-full w-full"></div>

        {/* Animated glow line */}
        <div className="absolute h-px w-full top-1/2 transform -translate-y-1/2 overflow-hidden">
          <motion.div
            className="h-px w-[50%] bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-blue-500/0"
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <motion.div
          className="flex items-center space-x-12"
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
            <motion.div
              key={`partner-${index}`}
              className="flex-shrink-0 px-4"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-50 blur-md transition duration-300"></div>

                <div className="relative bg-transparent p-4 h-20 w-44 flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="max-h-12 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
