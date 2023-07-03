import React from "react";
import type { EducationType } from "@/types";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type EducationProps = {
  education: EducationType;
  onChange: (
    name: string,
    value: string,
    section: "education",
    index?: number,
    field?: keyof EducationType
  ) => void;
};

const Education = ({ education, onChange }: EducationProps) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof EducationType
  ) => {
    const { value } = event.target;
    onChange(field, value, "education", 0, field);
  };

  return (
    <div className="w-full items-center flex justify-center md:justify-start p-5">
      <Card className="md:w-[30%] w-[90%] h-[300px]">
        <CardHeader>
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <div className="gap-1 flex flex-col">
          <CardContent>
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Degree"
                value={education.degree}
                onChange={(e) => handleInputChange(e, "degree")}
                name="degree"
              />
              <Input
                type="text"
                placeholder="University"
                value={education.university}
                onChange={(e) => handleInputChange(e, "university")}
                name="university"
              />
              <div className="flex justify-between gap-3">
                <Input
                  type="text"
                  placeholder="From"
                  value={education.from}
                  onChange={(e) => handleInputChange(e, "from")}
                  name="from"
                />
                <Input
                  type="text"
                  placeholder="To"
                  value={education.to}
                  onChange={(e) => handleInputChange(e, "to")}
                  name="to"
                />
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Education;
