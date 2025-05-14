import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParallaxSection } from "@/components/parallax-section";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";
import { ScrollAnimation } from "@/components/scroll-animation";
import { InfiniteCarousel } from "@/components/infinite-carousel";
import { CallToAction } from "@/components/call-to-action";
import { ProductDevelopment } from "@/components/product-development";
import { Footer } from "@/components/footer";
import { Globe } from "@/components/magicui/globe";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import Approach from "@/components/Approachs";
import CoreContinuum from "@/components/Core-Continuum";
import TechStack from "@/components/Tech-Stack";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050714] text-white">
      {/* Hero Section */}
      <header className="relative">
        <nav className="container mx-auto flex items-center justify-between py-6 px-4">
          <div className="text-2xl font-bold flex items-center">
            <span className="text-purple-500 mr-1">MELAVERSE</span>
          </div>
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#why"
              className="hover:text-purple-400 transition-colors"
            >
              Why MELAVERSE
            </Link>
            <Link
              href="#solutions"
              className="hover:text-purple-400 transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#about"
              className="hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#visions"
              className="hover:text-purple-400 transition-colors"
            >
              Visions
            </Link>
          </div> */}
          <FloatingNav navItems={navItems} />

          <div className="flex items-center space-x-4">
            <InteractiveHoverButton>Connect now</InteractiveHoverButton>
          </div>
        </nav>

        <ScrollAnimation variant="fadeUp" duration={0.8}>
          <div className="container mx-auto px-4 py-20 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Unleashing the Future of Technology.
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Turning futuristic concepts into working platforms.
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg rounded-full">
              Explore our universe
            </Button>
          </div>
        </ScrollAnimation>

        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-blue-500/20 to-transparent"></div>

        <ScrollAnimation variant="scale" delay={0.3} duration={0.8}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="w-full">
              <div className="relative">
                <div className="absolute -top-20 left-0 right-0 h-40 bg-blue-600/30 blur-[100px] rounded-full"></div>
                <Image
                  src="/images/dashboard.png"
                  alt="MELAVERSE Dashboard Interface"
                  width={2000}
                  height={800}
                  className="w-full h-auto rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </header>
      {/* Our Core Continuum */}
      <CoreContinuum />
      {/* Designed To Move You */}
      <ParallaxSection />
      {/* Tech Stack and Services */}
      <TechStack />
      {/* Trusted Partners Section */}
      <section className="py-16 container mx-auto px-4">
        <ScrollAnimation variant="fadeUp">
          <h2 className="text-5xl font-bold text-center mb-16">
            Trusted Partners
          </h2>
        </ScrollAnimation>
        <ScrollAnimation variant="fadeUp" delay={0.2}>
          <InfiniteCarousel />
        </ScrollAnimation>
      </section>

      {/* Our Work in Motion */}
      <section
        className="py-24 container mx-auto px-4 scroll-mt-20"
        id="project"
      >
        <ScrollAnimation variant="fadeUp">
          <h2 className="text-5xl font-bold text-center mb-16">
            Our Work in <span className="text-orange-500">motion</span>
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item, index) => (
            <ScrollAnimation
              key={item}
              variant={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
              delay={0.1 * index}
            >
              <div className="rounded-xl overflow-hidden border border-gray-800">
                <Image
                  src={`/images/project-${item}.png`}
                  alt={`Project ${item}`}
                  width={600}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>
      <AnimatedTestimonialsDemo />
      {/* Product Development Section */}
      <ProductDevelopment />
      <section className="mx-auto text-center" id="why-melaverse">
        <Approach />
      </section>

      {/* Our Vision Section */}
      <section
        className="py-24 container mx-auto px-4 scroll-mt-20"
        id="vision"
      >
        <ScrollAnimation variant="fadeUp">
          <h2 className="text-5xl font-bold text-center mb-16">Our Vision</h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-8">
          <ScrollAnimation variant="fadeLeft" delay={0.1}>
            <div className="bg-gradient-to-br from-purple-900 to-purple-950 p-8 rounded-3xl transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Empower Through Technology
              </h3>
              <p className="text-gray-300 mb-8">
                We aim to simplify complex challenges through tailored software
                solutions. Whether you&apos;re a startup or an enterprise, we
                help you move faster, work smarter, and stay ahead of the curve.
              </p>
              <Link
                href="#"
                className="text-purple-400 flex items-center group"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeUp" delay={0.2}>
            <div className="bg-gradient-to-br from-teal-900 to-teal-950 p-8 rounded-3xl transform hover:rotate-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">Build What Matters</h3>
              <p className="text-gray-300 mb-8">
                We focus on solutions that are both scalable and impactful, with
                purpose-driven design at the core. You get reliable digital
                tools that solve real problems, improve productivity, and
                elevate your brand.
              </p>
              <Link href="#" className="text-teal-400 flex items-center group">
                Learn More{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeRight" delay={0.3}>
            <div className="bg-gradient-to-br from-amber-900 to-amber-950 p-8 rounded-3xl transform rotate-[3deg] hover:rotate-0 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Global Impact, Local Focus
              </h3>
              <p className="text-gray-300 mb-8">
                We blend world-class technologies with deep understanding of
                local needs. Your business gets future-ready services built with
                insight, care, and market-fit from day one.
              </p>
              <Link href="#" className="text-amber-400 flex items-center group">
                Learn More{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      {/* Empowering Innovation Section */}
      <section className="py-24 relative overflow-hidden" id="#why-melaverse">
        <div className="absolute inset-0 flex items-center justify-center">
          <Globe />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation variant="fadeUp">
            <div className="flex flex-wrap justify-center mb-16">
              <div className="mx-8 text-center">
                <div className="text-6xl font-bold text-white mb-2">7+</div>
                <div className="text-gray-400">Delivered Projects</div>
              </div>
              <div className="mx-8 text-center">
                <div className="text-6xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeUp" delay={0.2}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-6">Empowering Innovation</h2>
              <p className="text-xl text-gray-300">
                We build intelligent software solutions that elevate businesses
                and solve real-world challenges.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Meet the Brains Section */}
      <section className="py-24 container mx-auto px-4">
        <ScrollAnimation variant="fadeUp">
          <h2 className="text-5xl font-bold text-center mb-16">
            Meet the Brains
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              name: "Hayatuden Jemal",
              role: "CEO and Founder",
              image: "/images/orhan.png",
            },
            {
              name: "Mubarek Hassen",
              role: "CTO and Co-founder",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Esayas Tesfaye",
              role: "Project manager and Co-founder",
              image: "/placeholder.svg?height=300&width=300",
            },
            {
              name: "Fuad ",
              role: "Marketing manager",
              image: "/images/fuad.png",
            },
          ].map((member, index) => (
            <ScrollAnimation key={index} variant="fadeUp" delay={0.1 * index}>
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 transform skew-x-12 -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="bg-gray-900 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="pt-4 pb-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-amber-500">{member.role}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
}
