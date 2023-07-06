"use client";

import Header from "@/components/Header";
import FormInput from "@/components/Form/form";
import Preview from "@/components/Preview/preview";
import ModeToggle from "@/components/toggle-theme";
import React, { useState, useEffect, useLayoutEffect } from "react";
import type { CVData, EducationType, ExperienceType } from "@/types";
import { DefaultData } from "@/lib/utils/default-data";
import { ExampleData } from "@/lib/utils/example-data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Home = () => {
  const [cv, setCv] = useState<CVData>(DefaultData);
  const [isMobile, setIsMobile] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(!isMobile);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1024);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { info, contact, education, experience, skills } = cv;

  const handleCvChange = (
    name: string,
    value: string,
    section: keyof CVData,
    index?: number,
    field?: keyof EducationType | keyof ExperienceType
  ) => {
    setCv((prevState) => {
      if (section === "education") {
        const updatedEducation = [...prevState.education];
        if (index !== undefined && field !== undefined) {
          updatedEducation[index] = {
            ...updatedEducation[index],
            [field]: value,
          };
        } else {
          updatedEducation.push(DefaultData.education[0]);
        }
        return {
          ...prevState,
          education: updatedEducation,
        };
      }
      if (section === "experience") {
        const updatedExperience = [...prevState.experience];
        if (index !== undefined && field !== undefined) {
          updatedExperience[index] = {
            ...updatedExperience[index],
            [field]: value,
          };
        } else {
          updatedExperience.push(DefaultData.experience[0]);
        }
        return {
          ...prevState,
          experience: updatedExperience,
        };
      }
      return {
        ...prevState,
        [section]: {
          ...prevState[section],
          [name]: value,
        },
      };
    });
  };

  const updateSkill = (index: number, newSkill: string) => {
    const updatedSkills = [...cv.skills];
    updatedSkills[index].skill = newSkill;

    setCv((prevCv) => ({
      ...prevCv,
      skills: updatedSkills,
    }));
  };

  const handleSkillChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newSkill = event.target.value;
    updateSkill(index, newSkill);
  };

  const addSkill = () => {
    const newSkill = {
      skill: "",
      key: cv.skills.length,
    };

    const updatedSkills = [...cv.skills, newSkill];

    setCv((prevCv) => ({
      ...prevCv,
      skills: updatedSkills,
    }));
  };

  const deleteSkill = (index: number) => {
    const updatedSkills = cv.skills.filter((_, i) => i !== index);

    setCv((prevCv) => ({
      ...prevCv,
      skills: updatedSkills,
    }));
  };

  const addExperience = () => {
    const newExperience: ExperienceType = {
      title: "",
      company: "",
      from: "",
      to: "",
      description: "",
    };

    setCv((prevCv) => ({
      ...prevCv,
      experience: [...prevCv.experience, newExperience],
    }));
  };

  const addEducation = () => {
    const newEducation: EducationType = {
      degree: "",
      university: "",
      from: "",
      to: "",
    };

    setCv((prevCv) => ({
      ...prevCv,
      education: [...prevCv.education, newEducation],
    }));
  };

  const handleAutofill = () => {
    const isAlreadyFilled = JSON.stringify(cv) === JSON.stringify(ExampleData);

    if (!isAlreadyFilled) {
      setCv(ExampleData);
    }
  };

  const togglePreview = () => {
    setPreviewVisible(!previewVisible);
  };

  console.log(cv);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="hidden">
        <Header handleAutoFill={handleAutofill} />
      </div>
      <div className="xl:flex justify-center items-center xl:gap-[100px] relative min-h-screen flex-grow-1">
        {/* <ModeToggle /> */}

        <div className="relative">
          <FormInput
            onChange={handleCvChange}
            info={info}
            contact={contact}
            education={education}
            experience={experience}
            itemSkill={skills}
            addSkill={addSkill}
            deleteSkill={deleteSkill}
            handleSkillChange={handleSkillChange}
            addExperience={addExperience}
            addEducation={addEducation}
            handleAutoFill={handleAutofill}
            togglePreview={togglePreview}
          />
        </div>

        <div className={`${previewVisible ? "" : "hidden"} `}>
          <Preview
            info={info}
            contact={contact}
            education={education}
            experience={experience}
            skills={skills}
            togglePreview={togglePreview}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
