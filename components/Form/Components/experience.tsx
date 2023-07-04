"use client";

import React from "react";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ExperienceType } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from "@/components/ui/button";

type ExperienceProps = {
  experience: ExperienceType[];
  addExperience: () => void;
  onChange: (
    name: string,
    value: string,
    section: "experience",
    index?: number,
    field?: keyof ExperienceType
  ) => void;
};

const Experience = ({
  experience,
  addExperience,
  onChange,
}: ExperienceProps) => {
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof ExperienceType,
    index: number
  ) => {
    const { value } = event.target;
    onChange(field, value, "experience", index, field);
  };

  return (

      <Card className="">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Experience</CardTitle>
            <CardTitle>
              {experience.length < 3 ? (
                <Button variant="secondary" onClick={addExperience}>
                  +
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  disabled={true}
                  onClick={addExperience}
                >
                  +
                </Button>
              )}
            </CardTitle>
          </div>
        </CardHeader>
        <div className="gap-1 flex flex-col">
          <CardContent>
            <Carousel
              showThumbs={false}
              showStatus={false}
              showArrows={true}
              showIndicators={false}
              selectedItem={0}
            >
              {experience.map((experience, index) => (
                <div className="flex flex-col gap-3 ">
                  <div className="flex justify-between gap-2">
                    <Input
                      type="text"
                      placeholder="Title"
                      value={experience.title}
                      onChange={(e) => handleInputChange(e, "title", index)}
                      name="title"
                    />
                    <Input
                      type="text"
                      placeholder="Company"
                      value={experience.company}
                      onChange={(e) => handleInputChange(e, "company", index)}
                      name="company"
                    />
                  </div>
                  <div className="flex justify-between">
                    <Input
                      type="text"
                      placeholder="From"
                      value={experience.from}
                      onChange={(e) => handleInputChange(e, "from", index)}
                      name="from"
                    />
                    <Input
                      type="text"
                      placeholder="To"
                      value={experience.to}
                      onChange={(e) => handleInputChange(e, "to", index)}
                      name="to"
                    />
                  </div>
                  <Textarea
                    className="h-[100px] resize-none"
                    placeholder="Description"
                    value={experience.description}
                    onChange={(e) => handleInputChange(e, "description", index)}
                    name="description"
                  />
                </div>
              ))}
            </Carousel>
          </CardContent>
        </div>
      </Card>

  );
};

export default Experience;
