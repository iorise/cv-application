import { CVData } from "@/types";
import React from "react";

type InfoPrevProps = {
  info: CVData["info"];
};

const InfoPrev = ({ info }: InfoPrevProps) => {
  return (
    <div>
      <div className="flex justify-center items-center w-full md:h-[120px] h-[70px]">
        <div className="flex gap-5 text-[#1c1c1c] md:text-5xl text-xl font-medium uppercase md:tracking-xwidest tracking-lg-widest">
          <h1>{info.firstName}</h1>
          <h1 className="font-light">{info.lastName}</h1>
        </div>
      </div>
      <div className="flex items-center text-center justify-center bg-gray-300 md:h-[50px] h-[20px] text-xs tracking">
        <p>{info.profession}</p>
      </div>
    </div>
  );
};

export default InfoPrev;
