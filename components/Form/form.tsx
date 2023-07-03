import { Info, Contact, Education } from "@/components/Form/Components/index";
import type { CVData, EducationType, ExperienceType } from "@/types";
import Experience from "./Components/experience";


type FormInputProps = {
  info: CVData["info"];
  contact: CVData["contact"];
  education: EducationType[];
  experience: ExperienceType[]
  onChange: (
    name: string,
    value: string,
    section: keyof CVData,
    index?: number,
    field?: keyof EducationType | keyof ExperienceType
  ) => void;
};

const FormInput = ({ onChange, info, contact, education, experience }: FormInputProps) => {
  return (
    <>
      <Info info={info} onChange={onChange} />
      <Contact contact={contact} onChange={onChange} />
      {education.map((edu, index) => (
        <Education key={index} education={edu} onChange={onChange} />
      ))}
      {experience.map((exp, index) => (
        <Experience key={index} experience={exp} onChange={onChange} />
      ))}
    </>
  );
};

export default FormInput;
