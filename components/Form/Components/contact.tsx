import React from "react";
import type { CVData } from "@/types";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type ContactProps = {
  contact: CVData["contact"];
  onChange: (name: string, value: string, section:"contact") => void;
};

const Contact = ({ contact, onChange }: ContactProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    const { name, value } = event.target;
    onChange(name as keyof CVData, value, "contact");
  };
  return (
    <div className="w-full items-center flex justify-center md:justify-start p-5">
      <Card className="md:w-[30%] w-[90%] h-[300px]">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
        </CardHeader>
        <div className="gap-1 flex flex-col">
          <CardContent>
            <div className="flex flex-col gap-3">
              <Input
                type="text"
                placeholder="Website"
                value={contact.website}
                onChange={handleInputChange}
                name="website"
              />
              <Input
                type="text"
                placeholder="Email"
                value={contact.email}
                onChange={handleInputChange}
                name="email"
              />
              <div className="flex justify-between gap-3">
                <Input
                  type="text"
                  placeholder="Address"
                  value={contact.address}
                  onChange={handleInputChange}
                  name="address"
                />
                <Input
                  type="text"
                  placeholder="Phone"
                  value={contact.phone}
                  onChange={handleInputChange}
                  name="phone"
                />
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
