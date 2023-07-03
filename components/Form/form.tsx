import { Info, Contact, Education } from "@/components/Form/Components/index";
import type { CVData, EducationType } from "@/types";

type FormInputProps = {
  info: CVData["info"];
  contact: CVData["contact"];
  education: EducationType;
  onChange: (
    name: string,
    value: string,
    section: "info" | "contact" | "education",
    index?: number,
    field?: keyof EducationType
  ) => void;
};

const FormInput = ({ onChange, info, contact, education }: FormInputProps) => {
  return (
    <>
      <Info info={info} onChange={onChange} />
      <Contact contact={contact} onChange={onChange} />
      <Education education={education} onChange={onChange} />
    </>
  );
};

export default FormInput;
