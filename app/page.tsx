"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import { DefaultData } from "@/lib/utils/default-data";
import type { CVData } from "@/types";
import FormInput from "@/components/Form/form";

const Home = () => {
  const [cv, setCv] = useState<CVData>(DefaultData);

  const handleCvChange = (name: string, value: string) => {
    setCv((prevState) => ({
      ...prevState,
      info: {
        ...prevState.info,
        [name]: value,
      },
      contact: {
        ...prevState.contact,
        [name]: value,
      },
    }));
  };
  console.log(cv.info);
  return (
    <div>
      <Header />
      <FormInput info={cv.info} onChange={handleCvChange} />
    </div>
  );
};

export default Home;
