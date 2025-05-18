import React from "react";
import { TeamMember } from "../data/TeamMember";


// import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-lg relative group">
      <div className="relative w-full aspect-square">
        {/* Image with dark overlay */}
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center rounded-3xl"
        />
        
        {/* Dark overlay that's always visible but darker on hover */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 rounded-3xl" />
        
        {/* Content that appears on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-xl font-sora font-semibold mb-1">{member.name}</h3>
          <p className="text-white/90 text-sm font-medium">{member.title}</p>
          <p className="text-white/80 text-xs mt-2 line-clamp-3">{member.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;