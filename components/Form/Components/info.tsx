import React from "react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import type { InfoData } from "@/types";
import { Textarea } from "@/components/ui/textarea";

type InfoProps = {
  info: InfoData;
  onChange: (name: string, value: string) => void;
};

const Info = ({ info, onChange }: InfoProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const { name, value } = event.target;
    onChange(name as keyof InfoData, value);
  };

  return (
    <div className="w-full items-center flex justify-center md:justify-start p-5">
      <Card className="md:w-[30%] w-[90%] h-[300px]">
        <CardHeader>
          <CardTitle>Info</CardTitle>
        </CardHeader>
        <div className="gap-1 flex flex-col">
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between gap-3">
                <Input
                  type="text"
                  placeholder="First Name"
                  value={info.firstName}
                  onChange={handleInputChange}
                  name="firstName"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={info.lastName}
                  onChange={handleInputChange}
                  name="lastName"
                  id="lastName"
                />
              </div>
              <Input
                type="text"
                placeholder="professional Title"
                value={info.profession}
                onChange={handleInputChange}
                name="profession"
              />
              <Textarea
                className="h-[100px] resize-none"
                placeholder="Profile"
                value={info.profile}
                onChange={(e) => onChange("profile", e.target.value)}
                name="profile"
              />
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Info;
