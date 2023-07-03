"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { DefaultData } from "@/lib/utils/default-data";
import type { CVData } from "@/types";
import FormInput from "@/components/Form/form";

const Home = () => {
  const [cv, setCv] = useState<CVData>(DefaultData);

  const handleCvChange = (
    name: string,
    value: string,
    section: "info" | "contact"
  ) => {
    setCv((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [name]: value,
      },
    }));
  };

  console.log(cv);
  return (
    <div>
      <Header />
      <FormInput
        info={cv.info}
        contact={cv.contact}
        onChange={handleCvChange}
      />
    </div>
  );
};

export default Home;
