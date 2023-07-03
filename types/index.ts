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
    education: EducationType[]
    experience: ExperienceType[];
    skills: SkillType[];
  };
  export type EducationType = {
     degree: string;
     university: string;
     from: string;
     to: string;
   };
   
  export type ExperienceType = {
     title: string;
     company: string;
     from: string;
     to: string;
     description: string;
   };
   
 export  type SkillType = {
     skill: string;
     key: number;
   };
   
  