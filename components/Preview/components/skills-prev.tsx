import { SkillType } from "@/types";
import React from "react";

type SkillsPrevProps = {
  skills: SkillType[];
};

const SkillsPrev = ({ skills }: SkillsPrevProps) => {
  return (
    <div className="flex flex-col pt-2 md:pt-3 text-xxs md:text-xs">
      <h2 className="md:text-base text-sm md:mb-1 mb-1">SKILLS</h2>
      {skills.map((item, index) => (
        <ul className="list-disc ml-5 font-light md:pt-2 pt-1" key={index}>
          <li>{item.skill}</li>
        </ul>
      ))}
    </div>
  );
};

export default SkillsPrev;
