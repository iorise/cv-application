"use client";

import Header from "@/components/Header";
import { DefaultData } from "@/lib/utils/default-data";
import type { CVData, EducationType, ExperienceType } from "@/types";
import FormInput from "@/components/Form/form";
import React, { useState } from "react";
import ModeToggle from "@/components/toggle-theme";
import { ExampleData } from "@/lib/utils/example-data";
import Preview from "@/components/Preview/preview";

const Home = () => {
  const [cv, setCv] = useState<CVData>(DefaultData);

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
    const isAlreadyFilled = JSON.stringify(cv) === JSON.stringify(ExampleData)

    if (!isAlreadyFilled) {
      setCv(ExampleData)
    }
  };

  console.log(cv);
  return (
    <div>
      <ModeToggle />
      <Header handleAutoFill={handleAutofill} />
      <div className="flex">
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
        />
        <Preview info={info} />
      </div>
    </div>
  );
};

export default Home;
