import Info from "./Components/info";
import type { InfoData } from "@/types";

type FormInputProps = {
  info: InfoData
  onChange: (name: string, value: string) => void;
};

const FormInput = ({info, onChange}: FormInputProps) => {
  return (
    <div>
      <div><Info info={info} onChange={onChange}/></div>
    </div>
  );
};

export default FormInput;
