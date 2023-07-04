import { SkillType } from "@/types";
import React from "react";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ExampleData } from "@/lib/utils/example-data";
import { Button } from "@/components/ui/button";
import { FaTrashAlt } from "react-icons/fa";

type SkillsProps = {
  itemSkill: SkillType[];
  addSkill: () => void;
  deleteSkill: (index: number) => void;
  handleSkillChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
};

const Skills = ({
  itemSkill,
  addSkill,
  handleSkillChange,
  deleteSkill,
}: SkillsProps) => {
  const skillsList = ExampleData.skills;
  return (
    <Card className="">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>Skills</CardTitle>
          <CardTitle>
            {itemSkill.length < 10 && (
              <Button onClick={addSkill} variant={"secondary"}>
                +
              </Button>
            )}
          </CardTitle>
        </div>
      </CardHeader>
      <div className="gap-1 flex flex-col overflow-y-scroll h-[200px] max-h-full">
        <CardContent>
          <div className="flex flex-col gap-2">
            {itemSkill.map((skill, index) => {
              const placeholder =
                index < skillsList.length ? skillsList[index].skill : "";
              return (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder={placeholder}
                    value={skill.skill}
                    onChange={(event) => handleSkillChange(event, index)}
                  />
                  <Button
                    variant={"destructive"}
                    onClick={() => deleteSkill(index)}
                  >
                    <FaTrashAlt />
                  </Button>
                </div>
              );
            })}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Skills;
