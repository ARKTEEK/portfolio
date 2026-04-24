import type { Experience } from '$lib/types';

export const experiences: Experience[] = [
  {
    company: 'Ainera',
    role: 'Software Engineering Intern',
    period: 'September 2025 - November 2025',
    description: 'Focused on the end-to-end development and optimization of web applications tailored to specific client business requirements.',
    highlights: [
      'Developed responsive and user-centric web interfaces using modern frontend technologies to ensure a seamless user experience.',
      'Collaborated directly with clients to translate business needs into technical specifications and functional web features.',
      'Optimized existing web platforms for better performance, accessibility, and SEO rankings.',
    ],
    tags: ['JavaScript', '.NET', 'PHP', 'Wordpress'],
    website: 'https://ainera.lt',
  },
  {
    company: 'MB Timitis',
    role: 'Full-Stack Developer Intern',
    period: 'October 2024 - January 2025',
    description: 'Contributed to the full-cycle development of an IT service order management platform, bridging the gap between client requests and service delivery.',
    highlights: [
      'Engineered a robust Full-Stack architecture utilizing React with TypeScript for the frontend and Spring Boot (Java) for the backend.',
      'Designed and implemented secure RESTful APIs to facilitate seamless CRUD operations and data flow between the client and server.',
      'Architected relational database models to ensure data integrity and efficient querying for high-volume service requests.',
      'Operated within an Agile environment, utilizing Git for version control and participating in sprint planning and daily stand-ups.',
    ],
    tags: ['React', 'TypeScript', 'Spring Boot', 'Java', 'REST API', 'SQL', 'Agile'],
    website: 'https://timitis.lt',
  },
];
