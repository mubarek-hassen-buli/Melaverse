"use client";

import { ScrollAnimation } from "./scroll-animation";
import Image from "next/image";

export default function CoreContinuum() {
  return (
    <section
      className="py-24 container mx-auto px-4 scroll-mt-20"
      id="core-continuum"
    >
      <ScrollAnimation variant="fadeUp">
        <h2 className="text-5xl font-bold text-center mb-16">
          Our Core Continuum
        </h2>
      </ScrollAnimation>
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-900 transform -translate-x-1/2"></div>

        <div className="grid grid-cols-1 gap-32">
          <ScrollAnimation variant="fadeUp">
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="md:text-right order-2 md:order-1 relative md:pr-16">
                  <div className="absolute top-0 right-0 -mt-6 mr-2 md:mr-16">
                    <Image
                      src="/images/Mask-group.png"
                      alt="Automation Engine"
                      width={40}
                      height={40}
                      className="rounded-xl border border-purple-900/30"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 pt-8">
                    Automation Engine
                  </h3>
                  <p className="text-gray-400">
                    Where custom workflows and smart logic power efficient
                    digital systems.
                  </p>
                </div>
                <div className="order-1 md:order-2 md:pl-16">
                  <Image
                    src="/images/Quantum-Fiber.jpg"
                    alt="Automation Engine"
                    width={200}
                    height={100}
                    className="rounded-xl border border-purple-900/30 w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeUp">
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="md:pl-16">
                  <Image
                    src="/images/leonardo.jpg"
                    alt="AI Learning Module"
                    width={200}
                    height={100}
                    className="rounded-xl border border-green-900/30 w-full h-auto"
                  />
                </div>
                <div className="md:pr-16 mt-6 md:mt-0">
                  <div className="absolute top-0  mr-2 md:mr-16">
                    <Image
                      src="/images/Mask-group-1.png"
                      alt="Automation Engine"
                      width={40}
                      height={40}
                      className="rounded-xl border border-purple-900/30"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    AI Learning Module
                  </h3>
                  <p className="text-gray-400">
                    Machine learning systems designed to adapt, analyze, and
                    optimize in real-time.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeUp">
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="md:text-right order-2 md:order-1 md:pr-16">
                  <div className="absolute top-0.5 right-[800] -mt-6 mr-2 md:mr-16">
                    <Image
                      src="/images/ui-ux-01.png"
                      alt="Automation Engine"
                      width={40}
                      height={40}
                      className="rounded-xl border border-purple-900/30"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Integrated Platform Network
                  </h3>
                  <p className="text-gray-400">
                    A fully connected system architecture that links web,
                    mobile, and cloud apps seamlessly.
                  </p>
                </div>
                <div className="order-1 md:order-2 md:pl-16">
                  <Image
                    src="/images/QClay.jpg"
                    alt="Integrated Platform"
                    width={200}
                    height={50}
                    className="rounded-xl border border-blue-900/30 w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeUp">
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="md:pl-16">
                  <Image
                    src="/images/mobile-img.jpg"
                    alt="Digital Transformation"
                    width={200}
                    height={100}
                    className="rounded-xl border border-amber-900/30 w-full h-auto"
                  />
                </div>
                <div className="md:pr-16 mt-6 md:mt-0">
                  <div className="absolute top-0  mr-2 md:mr-16">
                    <Image
                      src="/images/Mask-group-2.png"
                      alt="Automation Engine"
                      width={40}
                      height={40}
                      className="rounded-xl border border-purple-900/30"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">
                    Digital Transformation
                  </h3>
                  <p className="text-gray-400">
                    End-to-end solutions that modernize legacy systems and
                    create new digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
