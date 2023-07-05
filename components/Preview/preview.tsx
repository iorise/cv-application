import React from "react";
import { CVData, EducationType, ExperienceType, SkillType } from "@/types";
import styles from "@/components/Preview/preview.module.css";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

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
  return (
    <div className="wrapper-preview break-words">
      <div className={styles.wrapper}>
        {/* header */}
        <div className={styles.header}>
          <div className="flex gap-5">
            <h1 className={styles.headerText}>{info.firstName}</h1>
            <h1 className={styles.headerTextLast}>{info.lastName}</h1>
          </div>
        </div>
        {/* splitter */}
        <div className="flex items-center text-center justify-center bg-gray-300 h-[50px]">
          <p>{info.profession}</p>
        </div>
        {/* main */}
        <div className="main text-white flex">
          <div className="aside w-[35%] bg-black h-[730px]">
            {/* contact */}
            <div className="flex flex-col  w-full space-y-3 p-8">
              <div className="contact">
                <h1>CONTACT</h1>
                <p>{contact.website}</p>
                <p>{contact.email}</p>
                <p>{contact.address}</p>
                <p>{contact.phone}</p>
              </div>
              <div className="education">
                <h1>EDUCATION</h1>
                <div className="content-education">
                  {education.map((item, index) => (
                    <React.Fragment key={index}>
                      <h2>{item.degree}</h2>
                      <p>{item.university}</p>
                      <p>
                        {item.from} {item.to}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="Skills">
                <h2>SKILLS</h2>
                {skills.map((item, index) => (
                  <ul key={index}>
                    <li>{item.skill}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="middle text-black">
            <div className="profile">
              <h2>PROFILE</h2>
              <h4>{info.profile}</h4>
            </div>
            <div className="experience">
              <h2>WORK EXPERIENCE</h2>
              {experience.map((item, index) => (
                <div key={index}>
                  <h3>{item.title}</h3>
                  <div className="flex items-center">
                    <div>
                      <h4>{item.company}</h4>
                    </div>
                    <Separator orientation="vertical" />
                    <div>
                      <h5>{item.from}</h5>
                    </div>
                    <h5>{item.to}</h5>
                  </div>
                  <h5>{item.description}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <Button onClick={togglePreview}>
        Close
      </Button> */}
      </div>
    </div>
  );
};

export default Preview;
