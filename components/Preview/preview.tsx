import React, { useState } from "react";
import { CVData, EducationType, ExperienceType, SkillType } from "@/types";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import EducationPrev from "./components/education-prev";
import ExperiencePrev from "./components/experience-prev";
import SkillsPrev from "./components/skills-prev";
import InfoPrev from "./components/info-prev";
import ContactPrev from "./components/contact-prev";
import { motion } from "framer-motion";

type PreviewProps = {
  info: CVData["info"];
  contact: CVData["contact"];
  education: EducationType[];
  experience: ExperienceType[];
  skills: SkillType[];
  togglePreview: () => void;
};

const Preview = ({
  info,
  contact,
  education,
  experience,
  skills,
  togglePreview,
}: PreviewProps) => {
  const [isMobile] = useState(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute md:static top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 right-0 bottom-0 max-w-[700px] w-[370px] h-[625px] md:w-[700px] xl:w-[700px] max-h-[920px] xl:h-[920px] md:h-[920px] bg-white text-black rounded-lg"
        id="preview"
      >
        <InfoPrev info={info} />
        <div className="main text-white flex">
          <div className="aside w-[250px] md:w-[300px] bg-[#1c1c1c] max-h-[750px] md:h-[750px] h-[535px] rounded-bl-lg">
            <div className="flex flex-col w-full space-y-1 md:space-y-3 pl-4 pt-4 md:p-8">
              <ContactPrev contact={contact} />
              <EducationPrev education={education} />
              <SkillsPrev skills={skills} />
            </div>
          </div>
          <div className="w-full md:p-8 p-4 text-black">
            <div className="profile flex flex-col md:gap-5 gap-2">
              <h2 className="tracking-widest md:text-base text-sm">PROFILE</h2>
              <Separator className="md:w-[3rem] w-[2rem]" />
              <p className="text-xxs md:text-sm">{info.profile}</p>
            </div>
            <div>
              <ExperiencePrev experience={experience} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-28 md:mt-0 justify-center text-center mx-auto">
        {isMobile && (
          <Button className="md:hidden block absolute" onClick={togglePreview}>
            Close
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default Preview;
