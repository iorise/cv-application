import { CVData } from "@/types";
import React from "react";
import { Globe, LucideWholeWord, Mail, MapPin, Phone } from "lucide-react";

type ContactPrevProps = {
  contact: CVData["contact"];
};

const ContactPrev = ({ contact }: ContactPrevProps) => {
  return (
    <div className="contact flex flex-col gap-2 md:gap-3">
      <h1 className="md:text-base text-sm">CONTACT</h1>
      <div className="text-xxs md:text-xs flex flex-col gap-1 md:gap-2 font-light">
        <div className="flex gap-2 items-center">
          <Globe size={15} />
          <p>{contact.website}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Mail size={15} />
          <p>{contact.email}</p>
        </div>
        <div className="flex gap-2 items-center">
          <MapPin size={20} />
          <p>{contact.address}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Phone size={15} />
          <p>{contact.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPrev;
