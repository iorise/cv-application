import { Info, Contact } from "@/components/Form/Components/index";
import type { CVData } from "@/types";

type FormInputProps = {
  info: CVData["info"];
  contact: CVData["contact"];
  onChange: (name: string, value: string, section: "info" | "contact") => void;
};

const FormInput = ({ info, contact, onChange }: FormInputProps) => {
  return (
    <>
      <Info info={info} onChange={onChange} />
      <Contact contact={contact} onChange={onChange} />
    </>
  );
};

export default FormInput;
