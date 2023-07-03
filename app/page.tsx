"use client";

import Header from "@/components/Header";
import { DefaultData } from "@/lib/utils/default-data";
import type { CVData, EducationType, ExperienceType } from "@/types";
import FormInput from "@/components/Form/form";
import React, { useState } from "react";

const Home = () => {
  const [cv, setCv] = useState<CVData>(DefaultData);

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

  console.log(cv);
  return (
    <div>
      <Header />
      <FormInput
        onChange={handleCvChange}
        info={cv.info}
        contact={cv.contact}
        education={cv.education}
        experience={cv.experience}
        />
    </div>
  );
};

export default Home;
