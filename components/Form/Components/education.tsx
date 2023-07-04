import React from "react";
import type { EducationType } from "@/types";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@/components/ui/button";

type EducationProps = {
  education: EducationType[];
  addEducation: () => void;
  onChange: (
    name: string,
    value: string,
    section: "education",
    index?: number,
    field?: keyof EducationType
  ) => void;
};

const Education = ({ education, onChange, addEducation }: EducationProps) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof EducationType,
    index: number
  ) => {
    const { value } = event.target;
    onChange(field, value, "education", index, field);
  };

  return (

      <Card className="">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Education</CardTitle>
            <CardTitle>
              {education.length < 3 ? (
                <Button variant="secondary" onClick={addEducation}>
                  +
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  disabled={true}
                  onClick={addEducation}
                >
                  +
                </Button>
              )}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            showIndicators={false}
            selectedItem={0}
          >
            {education.map((education, index) => (
              <div className="flex flex-col gap-3">
                <Input
                  type="text"
                  placeholder="Degree"
                  value={education.degree}
                  onChange={(e) => handleInputChange(e, "degree", index)}
                  name="degree"
                />
                <Input
                  type="text"
                  placeholder="University"
                  value={education.university}
                  onChange={(e) => handleInputChange(e, "university", index)}
                  name="university"
                />
                <div className="flex justify-between gap-2">
                  <Input
                    type="text"
                    placeholder="From"
                    value={education.from}
                    onChange={(e) => handleInputChange(e, "from", index)}
                    name="from"
                  />
                  <Input
                    type="text"
                    placeholder="To"
                    value={education.to}
                    onChange={(e) => handleInputChange(e, "to", index)}
                    name="to"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </CardContent>
      </Card>

  );
};

export default Education;
