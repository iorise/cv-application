import { ExperienceType } from "@/types";
import { Separator } from "@/components/ui/separator";
import React from "react";

type ExperiencePrevProps = {
  experience: ExperienceType[];
};

const ExperiencePrev = ({ experience }: ExperiencePrevProps) => {
  return (
    <div className="pt-3 md:pt-5 flex flex-col md:gap-5 gap-2 md:text-sm text-xxs">
      <h2 className="tracking-widest md:text-base text-sm">WORK EXPERIENCE</h2>
      <Separator className="w-[2rem] md:w-[3rem]" />
      {experience.map((item, index) => (
        <div className="flex flex-col gap-1 md:gap-2" key={index}>
          <h3 className="md:font-semibold font-medium md:text-base text-sm">{item.title}</h3>
          <div className="flex items-center gap-2">
            {item.company && (
              <div className="flex items-center gap-2">
                <p>{item.company} </p>
                <Separator orientation="vertical" className="opacity-50" />
              </div>
            )}

            <div>
              <p>{item.from ? `${item.from} - ${item.to}` : ""}</p>
            </div>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePrev;
