import React from "react";
import { teamMembers } from "../data/TeamMember";
import TeamMemberCard from "./TeamMemberCard";
import { Button } from "./ui/button";

const TeamGrid: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        {/* Left side content */}
        <div className="md:w-1/3 flex flex-col justify-start">
          <div className="sticky top-20">
            <h2 className="text-4xl md:text-5xl font-sora font-bold text-white mb-4">
              Our leading, strong & creative team
            </h2>
            <p className="text-white mb-8">
              These people work on making our product best.
            </p>
            <Button className="bg-white text-black rounded-full px-8 py-6 h-auto w-fit">
              Connect with us
            </Button>
          </div>
        </div>

        {/* Right side - team member grid with staggered layout */}
        <div className="md:w-2/3">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* First column */}
            <div className="space-y-4 md:space-y-6 mt-10">
              {teamMembers
                .filter((_, i) => i % 2 === 0)
                .map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
            </div>

            {/* Second column */}
            <div className="space-y-4 md:space-y-6">
              {teamMembers
                .filter((_, i) => i % 2 === 1)
                .map((member) => (
                  <TeamMemberCard key={member.id} member={member} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
