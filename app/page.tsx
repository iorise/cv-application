"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { DefaultData } from "@/lib/utils/default-data";
import type { CVData, EducationType } from "@/types";
import FormInput from "@/components/Form/form";

const Home = () => {
  const [cv, setCv] = useState<CVData>(DefaultData);

  const handleCvChange = (
    name: string,
    value: string,
    section: "info" | "contact" | "education",
    index?: number,
    field?: keyof EducationType
  ) => {
    setCv((prevState) => {
      if (
        section == "education" &&
        index !== undefined &&
        field !== undefined
      ) {
        const updatedEducation = prevState.education.map((edu, i) => {
          if (i == index) {
            return {
              ...edu,
              [field]: value,
            };
          }
          return edu;
        });
        return {
          ...prevState,
          [section]: updatedEducation,
        };
      } else {
        return {
          ...prevState,
          [section]: {
            ...prevState[section],
            [name]: value
          }
        }
      }
    });
  };

  console.log(cv);
  return (
    <div>
      <Header />
      <FormInput
        info={cv.info}
        contact={cv.contact}
        education={cv.education[0]}
        onChange={handleCvChange}
      />
    </div>
  );
};

export default Home;
