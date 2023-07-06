import { EducationType } from "@/types";
import React from "react";

type EducationPrevProps = {
  education: EducationType[];
};

const EducationPrev = ({ education }: EducationPrevProps) => {
  return (
    <div className="education flex flex-col md:gap-3 gap-2 pt-2 md:pt-3">
      <h1 className="md:text-base text-sm">EDUCATION</h1>
      <div className="content-education text-xxs md:text-xs font-light gap-1 md:gap-2 flex flex-col">
        {education.map((item, index) => (
          <div className="flex flex-col md:gap-1 gap-0" key={index}>
            <h2 className="font-bold">{item.degree}</h2>
            <p>{item.university}</p>
            <p>
              {item.from} {item.to}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPrev;
