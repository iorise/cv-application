import {
  Info,
  Contact,
  Education,
  Experience,
  Skills,
} from "@/components/Form/Components/index";
import type { CVData, EducationType, ExperienceType, SkillType } from "@/types";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { AiFillSave } from "react-icons/ai";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

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
  handleAutoFill: () => void;
  togglePreview: () => void;
  handleGenerate: () => void;
};

enum FormStep {
  INFO = "info",
  CONTACT = "contact",
  EDUCATION = "education",
  EXPERIENCE = "experience",
  SKILLS = "skills",
}

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
  handleAutoFill,
  togglePreview,
  handleGenerate,
}: FormInputProps) => {
  const [activeStep, setActiveStep] = useState(FormStep.INFO);

  const getCurrentStepComponent = () => {
    switch (activeStep) {
      case FormStep.INFO:
        return <Info info={info} onChange={onChange} />;
      case FormStep.CONTACT:
        return <Contact contact={contact} onChange={onChange} />;
      case FormStep.EDUCATION:
        return (
          <Education
            education={education}
            onChange={onChange}
            addEducation={addEducation}
          />
        );
      case FormStep.EXPERIENCE:
        return (
          <Experience
            experience={experience}
            addExperience={addExperience}
            onChange={onChange}
          />
        );
      case FormStep.SKILLS:
        return (
          <Skills
            itemSkill={itemSkill}
            addSkill={addSkill}
            handleSkillChange={handleSkillChange}
            deleteSkill={deleteSkill}
          />
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    switch (activeStep) {
      case FormStep.INFO:
        setActiveStep(FormStep.CONTACT);
        break;
      case FormStep.CONTACT:
        setActiveStep(FormStep.EDUCATION);
        break;
      case FormStep.EDUCATION:
        setActiveStep(FormStep.EXPERIENCE);
        break;
      case FormStep.EXPERIENCE:
        setActiveStep(FormStep.SKILLS);
        break;
      case FormStep.SKILLS:
        break;
      default:
        break;
    }
  };

  const handlePrev = () => {
    switch (activeStep) {
      case FormStep.INFO:
        handleAutoFill();
        setActiveStep(FormStep.SKILLS);
        break;
      case FormStep.CONTACT:
        setActiveStep(FormStep.INFO);
        break;
      case FormStep.EDUCATION:
        setActiveStep(FormStep.CONTACT);
        break;
      case FormStep.EXPERIENCE:
        setActiveStep(FormStep.EDUCATION);
        break;
      case FormStep.SKILLS:
        setActiveStep(FormStep.EXPERIENCE);
        break;
      default:
        break;
    }
  };

  const getButtonTextPrev = (step: FormStep) => {
    switch (step) {
      case FormStep.INFO:
        return (
          <div className="flex gap-2 items-center">
            <AiFillSave />
            Autofill
          </div>
        );
      case FormStep.CONTACT:
        return "Info";
      case FormStep.EDUCATION:
        return "Contact";
      case FormStep.EXPERIENCE:
        return "Education";
      case FormStep.SKILLS:
        return "Experience";
      default:
        return "";
    }
  };

  const getButtonTextNext = (step: FormStep) => {
    switch (step) {
      case FormStep.INFO:
        return "Contact";
      case FormStep.CONTACT:
        return "Education";
      case FormStep.EDUCATION:
        return "Experience";
      case FormStep.EXPERIENCE:
        return "Skills";
      case FormStep.SKILLS:
        return (
          <div className="flex gap-2 items-center">
            <AiFillSave />
            Save
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <motion.div
        key={activeStep}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-center w-full h-[70vh] md:h-full">
          {getCurrentStepComponent()}
        </div>
      </motion.div>
      <div className="flex justify-between mx-5">
        {activeStep === FormStep.INFO ? (
          <Button
            className="w-24 h-10"
            onClick={() => {
              handleAutoFill();
              handlePrev();
            }}
            variant={"default"}
            size={"lg"}
          >
            {getButtonTextPrev(activeStep)}
          </Button>
        ) : (
          <Button
            className="w-24 h-10"
            onClick={handlePrev}
            variant={"secondary"}
          >
            {getButtonTextPrev(activeStep)}
          </Button>
        )}

        <Button className="md:hidden block" onClick={togglePreview}>
          Preview
        </Button>
        <Link
          className="md:block hidden"
          href="https://github.com/iorise"
          target="_blank"
        >
          <Button className="bg-white hover:bg-white/90">
            <AiFillGithub size={25} />
          </Button>
        </Link>
        {activeStep === FormStep.SKILLS ? (
          <Button
            className="w-24 h-10"
            onClick={handleGenerate}
            variant={"default"}
            size={"lg"}
          >
            {getButtonTextNext(activeStep)}
          </Button>
        ) : (
          <Button
            className="w-24 h-10"
            onClick={handleNext}
            variant={"secondary"}
            size={"lg"}
          >
            {getButtonTextNext(activeStep)}
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormInput;
