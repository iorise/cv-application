import React from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { CVData } from "@/types";
import { Textarea } from "@/components/ui/textarea";

type InfoProps = {
  info: CVData["info"];
  onChange: (name: string, value: string, section: "info") => void;
};

const Info = ({ info, onChange }: InfoProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const { name, value } = event.target;
    onChange(name as keyof CVData, value, "info");
  };

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Info</CardTitle>
      </CardHeader>
      <div className="gap-1 flex flex-col">
        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between gap-2">
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
              onChange={(e) => onChange("profile", e.target.value, "info")}
              name="profile"
            />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default Info;
