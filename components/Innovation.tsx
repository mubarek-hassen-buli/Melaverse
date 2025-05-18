import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

const FeatureCard = ({ title, description, image }: FeatureCardProps) => {
  return (
    <Card
      className="p-12 rounded-2xl overflow-hidden relative h-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </Card>
  );
};

const Innovation = () => {
  return (
    <div className=" relative py-20 px-36 max-w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column with heading and button */}
        <div className="lg:col-span-4 pr-0 lg:pr-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Drive Innovation Forward
          </h2>
          <p className="text-gray-400 mb-8">
            At Melaverse, we blend breakthrough technology with bold promotion
            to help businesses grow smarter, faster, and sharper.
          </p>
          <Button className="bg-white text-black">Explore solutions</Button>
        </div>

        {/* Right column with 2x2 cards grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Innovate with Purpose"
            description="We turn complex challenges into elegant tech solutions designed for impact, built for scale."
            image="/images/gird-1.jpg"
          />
          <FeatureCard
            title="Design That Engages"
            description="Our UI/UX experts craft immersive experiences that connect brands with the people they serve."
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800"
          />
          <FeatureCard
            title="Develop to Elevate"
            description="From websites to mobile apps, we build powerful platforms that push boundaries and expectations."
            image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800"
          />
          <FeatureCard
            title="Promote with Precision"
            description="Creative marketing meets smart data — delivering real growth through digital storytelling."
            image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800"
          />
        </div>
      </div>
    </div>
  );
};

export default Innovation;
