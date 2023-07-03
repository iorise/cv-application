import React from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ExperienceType } from "@/types";
import { Textarea } from "@/components/ui/textarea";

type ExperienceProps = {
  experience: ExperienceType;
  onChange: (
    name: string,
    value: string,
    section: "experience",
    index?: number,
    field?: keyof ExperienceType
  ) => void;
};

const Experience = ({ experience, onChange }: ExperienceProps) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ExperienceType
  ) => {
    const { value } = event.target;
    onChange(field, value, "experience", 0, field);
  };
  return (
    <div className="w-full items-center flex justify-center md:justify-start p-5">
      <Card className="md:w-[30%] w-[90%] h-[300px]">
        <CardHeader>
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <div className="gap-1 flex flex-col">
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <Input
                  type="text"
                  placeholder="Title"
                  value={experience.title}
                  onChange={(e) => handleInputChange(e, "title")}
                  name="title"
                />
                <Input
                  type="text"
                  placeholder="Company"
                  value={experience.company}
                  onChange={(e) => handleInputChange(e, "company")}
                  name="company"
                />
              </div>
              <div className="flex justify-between">
                <Input
                  type="text"
                  placeholder="From"
                  value={experience.from}
                  onChange={(e) => handleInputChange(e, "from")}
                  name="from"
                />
                <Input
                  type="text"
                  placeholder="To"
                  value={experience.to}
                  onChange={(e) => handleInputChange(e, "to")}
                  name="to"
                />
              </div>
              <Textarea
                className="h-[100px] resize-none"
                placeholder="Description"
                value={experience.description}
                onChange={(e) => handleInputChange(e, "description")}
                name="description"
              />
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Experience;
