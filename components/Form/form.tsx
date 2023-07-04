import { Info, Contact, Education, Experience, Skills } from "@/components/Form/Components/index";
import type { CVData, EducationType, ExperienceType, SkillType } from "@/types";
import React from "react";

type FormInputProps = {
  info: CVData["info"];
  contact: CVData["contact"];
  education: EducationType[];
  experience: ExperienceType[];
  itemSkill: SkillType[];
  addSkill: () => void;
  deleteSkill: (index: number) => void;
  addExperience: () => void;
  addEducation: () => void;
  handleSkillChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onChange: (
    name: string,
    value: string,
    section: keyof CVData,
    index?: number,
    field?: keyof EducationType | keyof ExperienceType
  ) => void;
};

const FormInput = ({
  onChange,
  info,
  contact,
  education,
  experience,
  itemSkill,
  deleteSkill,
  addSkill,
  addExperience,
  addEducation,
  handleSkillChange,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-5 pb-5">
      <Info info={info} onChange={onChange} />
      <Contact contact={contact} onChange={onChange} />
      <Education
        education={education}
        onChange={onChange}
        addEducation={addEducation}
      />

      <Experience
        experience={experience}
        addExperience={addExperience}
        onChange={onChange}
      />

      <Skills
        itemSkill={itemSkill}
        addSkill={addSkill}
        handleSkillChange={handleSkillChange}
        deleteSkill={deleteSkill}
      />
    </div>
  );
};

export default FormInput;
