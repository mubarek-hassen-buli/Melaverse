import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParallaxSection } from "@/components/parallax-section";
import { AnimatedGlobe } from "@/components/animated-globe";
import { ScrollAnimation } from "@/components/scroll-animation";
import { InfiniteCarousel } from "@/components/infinite-carousel";
import { CallToAction } from "@/components/call-to-action";
import { ProductDevelopment } from "@/components/product-development";
import { Footer } from "@/components/footer";
import { Globe } from "@/components/magicui/globe";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#050714] text-white">
      {/* Hero Section */}
      <header className="relative">
        <nav className="container mx-auto flex items-center justify-between py-6 px-4">
          <div className="text-2xl font-bold flex items-center">
            <span className="text-purple-500 mr-2">M</span>ELAVERSE
          </div>
          <div className="hidden md:flex items-center space-x-8">
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
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-purple-400"
            >
              Login
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200">
              Connect now
            </Button>
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
            <div className="w-full max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute -top-20 left-0 right-0 h-40 bg-blue-600/30 blur-[100px] rounded-full"></div>
                <Image
                  src="/images/dashboard.png"
                  alt="MELAVERSE Dashboard Interface"
                  width={1200}
                  height={600}
                  className="rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20"
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </header>

      {/* Our Vision Section */}
      <section className="py-24 container mx-auto px-4">
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
                solutions. Whether you're a startup or an enterprise, we help
                you move faster, work smarter, and stay ahead of the curve.
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
              image: "/placeholder.svg?height=300&width=300",
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
              name: "Orhan Osman",
              role: "Marketing manager",
              image: "/placeholder.svg?height=300&width=300",
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

      {/* Empowering Innovation Section */}
      <section className="py-24 relative overflow-hidden">
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

      {/* Tech Stack and Services */}
      <section className="py-24 container mx-auto px-4">
        <ScrollAnimation variant="fadeUp">
          <h2 className="text-5xl font-bold text-center mb-16">
            Tech stack and services
          </h2>
        </ScrollAnimation>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Website Development",
              description:
                "We design and build modern, high-performance websites that are fast, responsive, and future-ready.",
              features: [
                "Business Websites",
                "E-commerce Platforms",
                "Landing Pages",
              ],
              dot: "bg-red-600",
              gradient: "from-blue-900/40 to-blue-600/5",
            },
            {
              title: "Mobile App Development",
              description:
                "Custom Android & iOS apps built to impress — smooth performance, stunning UI, and smart functionality",
              features: [
                "iOS & Android Apps",
                "UI/UX Mobile Design",
                "App Maintenance & Updates",
              ],
              dot: "bg-blue-600",
              gradient: "from-blue-800/40 to-blue-500/5",
            },
            {
              title: "UI UX design",
              description:
                "We craft intuitive, engaging, and visually stunning interfaces that elevate your product and enhance user satisfaction.",
              features: [
                "User Research & Wireframing",
                "High-Fidelity Prototyping",
                "Mobile & Web Interface Design",
              ],
              dot: "bg-amber-600",
              gradient: "from-blue-700/40 to-blue-400/5",
            },
            {
              title: "Website translation integration",
              description:
                "Make your platform globally accessible with our seamless translation solutions.",
              features: [
                "Multi-language Support",
                "Cultural Adaptation",
                "SEO for International Markets",
              ],
              dot: "bg-teal-600",
              gradient: "from-blue-900/40 to-blue-600/5",
            },
            {
              title: "SAAS platform Development",
              description:
                "Build scalable, secure, and feature-rich software-as-a-service solutions.",
              features: [
                "Cloud Architecture",
                "Subscription Management",
                "User Analytics",
              ],
              dot: "bg-gray-600",
              gradient: "from-blue-800/40 to-blue-500/5",
            },
            {
              title: "Content Creation and Video Editing",
              description:
                "Compelling visual storytelling that captures attention and drives engagement.",
              features: [
                "Brand Videos",
                "Product Demonstrations",
                "Social Media Content",
              ],
              dot: "bg-purple-600",
              gradient: "from-blue-700/40 to-blue-400/5",
            },
          ].map((service, index) => (
            <ScrollAnimation
              key={index}
              variant="fadeUp"
              delay={0.1 * index}
              once={true}
            >
              <div
                className={`p-8 rounded-3xl border border-blue-900/50 relative overflow-hidden bg-gradient-to-b ${service.gradient} hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300`}
              >
                <div
                  className={`absolute top-0 left-10 w-8 h-8 ${service.dot} rounded-full -translate-y-1/2 z-10`}
                ></div>

                {/* Wave pattern created with CSS */}
                <div className="absolute bottom-0 left-0 right-0 h-24 opacity-40">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-blue-400/40 to-blue-600/30"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 h-1 bg-blue-500/40 rounded-full"></div>
                  <div className="absolute bottom-8 left-0 right-0 h-1 bg-blue-400/30 rounded-full transform translate-x-4"></div>
                  <div className="absolute bottom-12 left-0 right-0 h-1 bg-blue-300/20 rounded-full transform -translate-x-4"></div>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 text-blue-400">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="4"
                        fill="currentColor"
                        fillOpacity="0.2"
                      />
                      <path
                        d="M12 8v8m-4-4h8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-8 text-sm">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Designed To Move You */}
      <ParallaxSection />

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
      <section className="py-24 container mx-auto px-4">
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
                  src="/placeholder.svg?height=300&width=600"
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

      {/* Product Development Section */}
      <ProductDevelopment />

      {/* Our Core Continuum */}
      <section className="py-24 container mx-auto px-4">
        <ScrollAnimation variant="fadeUp">
          <h2 className="text-5xl font-bold text-center mb-16">
            Our Core Continuum
          </h2>
        </ScrollAnimation>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-900 transform -translate-x-1/2"></div>

          <div className="grid grid-cols-1 gap-24">
            <ScrollAnimation variant="fadeUp">
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-3xl font-bold mb-4">
                      Automation Engine
                    </h3>
                    <p className="text-gray-400">
                      Where custom workflows and smart logic power efficient
                      digital systems.
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Automation Engine"
                      width={500}
                      height={300}
                      className="rounded-xl border border-purple-900/30"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeUp">
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="AI Learning Module"
                      width={500}
                      height={300}
                      className="rounded-xl border border-green-900/30"
                    />
                  </div>
                  <div>
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
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right order-2 md:order-1">
                    <h3 className="text-3xl font-bold mb-4">
                      Integrated Platform Network
                    </h3>
                    <p className="text-gray-400">
                      A fully connected system architecture that links web,
                      mobile, and cloud apps seamlessly.
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Integrated Platform"
                      width={500}
                      height={300}
                      className="rounded-xl border border-blue-900/30"
                    />
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation variant="fadeUp">
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Digital Transformation"
                      width={500}
                      height={300}
                      className="rounded-xl border border-amber-900/30"
                    />
                  </div>
                  <div>
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

      {/* Call to Action Section */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </div>
  );
}
