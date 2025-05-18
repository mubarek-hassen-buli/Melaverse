export interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Hayatudin Jemal",
    title: "Founder & CEO",
    description:
      "Hayatudin leads our company with over 2 years of experience in business development and entrepreneurship, bringing innovative solutions to market.",
    image: "/images/orhan.png",
  },
  {
    id: 2,
    name: "Fuad",
    title: "Marketing Manager",
    description:
      "Fuad drives our marketing initiatives with creative strategies, leading campaigns that effectively connect with our target audience and boost brand awareness.",
    image: "/images/fuad.png",
  },
  {
    id: 3,
    name: "Esayas Tesfaye",
    title: "Project Manager and co-founder",
    description:
      "Esayas oversees project planning, execution, and delivery while ensuring effective communication between teams as a co-founder and project manager.",
    image:
      "/images/esayas.JPG",
  },
  {
    id: 4,
    name: "Mubarek Hassen",
    title: "CTO and co-founder",
    description:
      "Mubarek leads our technical initiatives and architecture as CTO, bringing extensive experience in software development and technical innovation to drive our technology strategy forward.",
    image:
      "/images/mubarek.png",
  },
];
