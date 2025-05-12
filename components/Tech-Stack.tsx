"use client";

import { CheckCircle2 } from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";
import Image from "next/image";
export default function TechStack() {
  return (
    <section
      className="py-24 container mx-auto px-4 scroll-mt-20"
      id="services"
    >
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
            // dot: "bg-red-600",
            gradient: "from-blue-900/40 to-blue-600/5",
            image: "/images/website-icon.png",
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
            // dot: "bg-blue-600",
            gradient: "from-blue-800/40 to-blue-500/5",
            image: "/images/app-icon.png",
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
            // dot: "bg-amber-600",
            gradient: "from-blue-700/40 to-blue-400/5",
            image: "/images/ui-icon.png",
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
            // dot: "bg-teal-600",
            gradient: "from-blue-900/40 to-blue-600/5",
            image: "/images/web-translation-icon.png",
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
            // dot: "bg-gray-600",
            gradient: "from-blue-800/40 to-blue-500/5",
            image: "/images/SAAS-icon.png",
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
            // dot: "bg-purple-600",
            gradient: "from-blue-700/40 to-blue-400/5",
            image: "/images/content-icon.png",
          },
        ].map((service, index) => (
          <ScrollAnimation
            key={index}
            variant="fadeUp"
            delay={0.1 * index}
            once={true}
          >
            <div
              className={`p-8 rounded-3xl border border-blue-900/50 relative overflow-hidden bg-gradient-to-b ${service.gradient} hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group`}
            >
              <div
                className="absolute inset-0 z-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"
                style={{
                  backgroundImage: `url("/images/wave-bg.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center bottom",
                  backgroundRepeat: "no-repeat",
                  transform: "translateY(10%)",
                  transition: "transform 0.5s ease-out",
                }}
              ></div>
              <div
                className={`absolute -top-4 left-10 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-75 blur-lg group-hover:opacity-100 transition-all duration-500`}
              ></div>

              <div className="relative z-10">
                <div className="mb-6  transform group-hover:scale-110 transition-transform duration-300 ">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={40}
                    height={40}
                    // className=""
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-8 text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center group/item hover:translate-x-2 transition-transform duration-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 group-hover/item:text-blue-400 transition-colors duration-300" />
                      <span className="text-sm group-hover/item:text-blue-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
