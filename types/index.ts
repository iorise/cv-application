export type CVData = {
    info: {
      firstName: string;
      lastName: string;
      profession: string;
      profile: string;
    };
    contact: {
      website: string;
      email: string;
      address: string;
      phone: string;
    };
    education: Education[];
    experience: Experience[];
    skills: Skill[];
  };
  
 export type Education = {
    degree: string;
    university: string;
    from: string;
    to: string;
  };
  
 export type Experience = {
    title: string;
    company: string;
    from: string;
    to: string;
    description: string;
  };
  
export  type Skill = {
    skill: string;
    key: number;
  };
  