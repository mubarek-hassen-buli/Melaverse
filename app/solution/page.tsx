import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ScrollAnimation } from "@/components/scroll-animation";
import TechStack from "@/components/Tech-Stack";
import { Button } from "@/components/ui/button";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/lib/data";
import Innovation from "@/components/Innovation";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";
import Link from "next/link";
function Solution() {
  return (
    <section>
      <header className="relative">
        <nav className="container mx-auto flex items-center justify-between py-6 px-4">
          <div className="text-2xl font-bold flex items-center">
            <Link href="/">
              <span className="text-purple-500 mr-1">MELAVERSE</span>
            </Link>
          </div>

          <FloatingNav navItems={navItems} />

          <div className="flex items-center space-x-4">
            <InteractiveHoverButton>Connect now</InteractiveHoverButton>
          </div>
        </nav>

        <ScrollAnimation variant="fadeUp" duration={0.8}>
          <div className="container mx-auto px-4 py-20 text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Real solution for the Digital Age
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              we turn ambitious into scalable, human-friendly products using
              cutting-edge tools and future-first thinking
            </p>
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg rounded-full">
              Learn More
            </Button>
          </div>
        </ScrollAnimation>

        {/* <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-blue-500/20 to-transparent"></div> */}
      </header>
      {/* Tech Stack and Services */}
      <TechStack header="What we Deliver" />
      {/* Innovation */}
      <Innovation />
      {/* Call to Action */}
      <CallToAction />
      {/* Footer */}
      <Footer />
    </section>
  );
}

export default Solution;
