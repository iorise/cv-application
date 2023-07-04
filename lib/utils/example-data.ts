import { CVData } from "@/types";

export const ExampleData: CVData = {
  info: {
    firstName: 'John',
    lastName: 'Doe',
    profession: 'Web Developer',
    profile: 'I am a skilled web developer with experience in front-end and back-end development.'
  },
  contact: {
    website: 'www.johndoe.com',
    email: 'john@example.com',
    address: '123 Main Street, City, Country',
    phone: '+1234567890'
  },
  education: [
    {
      degree: 'Bachelor of Science',
      university: 'University of XYZ',
      from: '2015',
      to: '2019'
    },
    {
      degree: 'Master of Science',
      university: 'University of ABC',
      from: '2020',
      to: '2022'
    },
    {
      degree: 'PhD in Computer Science',
      university: 'University of DEF',
      from: '2022',
      to: '2026'
    }
  ],
  experience: [
    {
      title: 'Full Stack Developer',
      company: 'ABC Company',
      from: '2019',
      to: '2021',
      description: 'Worked on various projects and contributed to both front-end and back-end development.'
    },
    {
      title: 'Front-end Developer',
      company: 'XYZ Company',
      from: '2021',
      to: '2022',
      description: 'Focused on front-end development using React and JavaScript.'
    },
    {
      title: 'Back-end Developer',
      company: 'DEF Company',
      from: '2022',
      to: '2023',
      description: 'Handled server-side development using Node.js and MongoDB.'
    }
  ],
  skills: [
    {
      skill: 'JavaScript',
      key: 0
    },
    {
      skill: 'React',
      key: 1
    },
    {
      skill: 'Node.js',
      key: 2
    },
    {
      skill: 'HTML',
      key: 3
    },
    {
      skill: 'CSS',
      key: 4
    },
    {
      skill: 'TypeScript',
      key: 5
    },
    {
      skill: 'Python',
      key: 6
    },
    {
      skill: 'Java',
      key: 7
    },
    {
      skill: 'C#',
      key: 8
    },
    {
      skill: 'SQL',
      key: 9
    }
  ]
};
