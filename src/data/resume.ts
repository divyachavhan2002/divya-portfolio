// ✏️ Edit this file to update all portfolio content — no other file needs changing.

import type {
  PersonalInfo,
  AboutData,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  ProjectItem,
  CertificationItem,
  LanguageItem,
  StatsItem,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Divya Chavhan",
  title: "Full Stack Developer",
  tagline: "Building performant, modern web applications with React & Next.js",
  email: "divyachavhan234@gmail.com",
  phone: "+91 9356025183",
  location: "Pune, Maharashtra",
  linkedin: "https://linkedin.com/in/divyachavhan-8a91b7315",
  github: "https://github.com/divyachavhan2002",
  resumePdf: "/resume/Divya_Chavhan_Resume.pdf",
  avatar: "/images/avatar.jpg",
  availableForWork: true,
};

export const about: AboutData = {
  bio: `I am a Computer Science graduate with hands-on internship experience as a Web Developer, specializing in frontend and full stack development. Proficient in JavaScript, TypeScript, ReactJS, Next.js, Node.js, and RESTful APIs. Experienced with Firebase, Supabase, MongoDB, and Google Authentication from delivering a production SaaS video learning platform. Familiar with Azure Functions, unit testing using JEST, Agile/Scrum workflows, and Git version control. Seeking to contribute to SaaS product development with a focus on performance-oriented, maintainable UI code and effective team collaboration.`,
  highlights: [
    "Full Stack Developer specializing in React & Next.js",
    "Delivered production SaaS platform during internship",
    "Passionate about performance-oriented, maintainable UI code",
    "Experienced with Agile/Scrum, code reviews, and team collaboration",
  ],
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", level: 100 },
      { name: "CSS3", level: 100 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "ReactJS", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "React Hooks", level: 90 },
      { name: "Context API", level: 85 },
      { name: "Responsive Design", level: 100 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "RESTful APIs", level: 100 },
      { name: "Java", level: 80 },
      { name: "Core Java", level: 80 },
      { name: "Hibernate", level: 75 },
      { name: "Spring Boot", level: 78 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "Supabase", level: 82 },
      { name: "Firebase Firestore", level: 85 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Azure Functions", level: 72 },
      { name: "Azure App Services", level: 65 },
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD practices", level: 70 },
    ],
  },
  {
    category: "Testing & Auth",
    items: [
      { name: "JEST (unit testing)", level: 75 },
      { name: "Google Firebase Auth", level: 88 },
      { name: "YouTube Player API", level: 80 },
      { name: "REST API Integration", level: 87 },
    ],
  },
  {
    category: "Practices",
    items: [
      { name: "Agile / Scrum", level: 100 },
      { name: "SOLID Principles", level: 78 },
      { name: "Code Reviews", level: 82 },
      { name: "Technical Docs", level: 100 },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Creazione Software",
    duration: "Sep 2025 – Feb 2026",
    location: "Pune, Maharashtra",
    type: "Internship",
    achievements: [
      "Developed a full-featured Video Learning Platform (SaaS) using Next.js and ReactJS with end-to-end feature ownership.",
      "Integrated Google Firebase Authentication for secure user login and session management; built a personalized user dashboard for course registration, progress tracking, and learning resumption.",
      "Embedded YouTube Player API within the React application to stream course videos in-app, managing playback state and course-completion tracking.",
      "Implemented CRUD operations for course data management using Supabase and Firebase Firestore.",
      "Built responsive, cross-browser compatible UI components following established design standards and web performance techniques.",
      "Participated in code reviews, maintained technical documentation, and followed Git branching and merge workflows.",
    ],
    tech: ["Next.js", "ReactJS", "Firebase", "Supabase", "YouTube API", "TypeScript"],
  },
];

export const education: EducationItem[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "Rani Laxmibai College, Parola",
    location: "Maharashtra",
    duration: "Jun 2021 – Jul 2024",
    cgpa: "8.99 / 10",
    coursework: [
      "Data Structures and Algorithms",
      "Web Development",
      "Database Management Systems",
      "Software Engineering",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "LearnHub — Video Learning Platform",
    description:
      "A SaaS e-learning platform with user authentication, course registration, a personalized dashboard, and in-app video streaming using YouTube Player API. Implemented full CRUD operations for course management with Supabase and Firebase Firestore; maintained responsive and cross-browser compatible UI throughout.",
    tech: ["Next.js", "ReactJS", "Supabase", "Firebase", "Google Auth", "YouTube Player API", "JavaScript"],
    image: "/images/video_learning_hub.png",
    github: "https://github.com/divyachavhan2002/video-learning-app",
    demo: "https://learnhub-online-courses.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "TaskFlow — Todo List App",
    description:
      "A clean, feature-rich Todo List app with priority levels (High/Medium/Low), due dates, inline editing, search & filter, progress tracking, dark mode, and undo/redo support. All data persists in localStorage with toast notifications for every action. Fully responsive across devices.",
    tech: ["React.js", "CSS3", "localStorage", "Responsive Design"],
    image: "/images/To_Do_App.png",
    github: "https://github.com/divyachavhan2002/todo-list-app",
    demo: "https://todo-list-app-taskflow.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "A modern, fully responsive personal portfolio built with Next.js 16 App Router, featuring dark/light theme toggle, animated particle background, scroll-triggered animations with Framer Motion, animated counters, clickable stat cards, and WhatsApp integration. Fully static SSG output deployed on Vercel.",
    tech: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "CSS Modules", "Vercel"],
    image: "/images/divya_portfilo.png",
    github: "https://github.com/divyachavhan2002/divya-portfolio",
    demo: "https://divya-dev-portfolio.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "Serverless Backend Feature",
    description:
      "Built a serverless backend feature using Azure Functions integrated with a React frontend, practicing cloud-hosted application architecture and end-to-end feature delivery.",
    tech: ["Azure Functions", "Node.js", "REST API", "ReactJS"],
    github: "https://github.com/divyachavhan2002",
    demo: "",
    featured: false,
  },
];

export const certifications: CertificationItem[] = [
  {
    id: 1,
    title: "Full Stack Web Developer Certification",
    issuer: "Giri's TECH HUB Pvt. Ltd., Pune",
    duration: "Jun 2024 – Jun 2025",
    description:
      "Completed hands-on training in Java, Core Java, Hibernate, Spring Boot, JavaScript, TypeScript, ReactJS (Hooks, Context API), Node.js, Express.js, REST APIs, MongoDB, and Azure Functions. Wrote unit tests using JEST, practiced Agile/Scrum workflows, and applied secure coding and web performance optimization techniques.",
    skills: ["Java", "Core Java", "Hibernate", "Spring Boot", "JavaScript", "TypeScript", "ReactJS", "Node.js", "Express.js", "REST APIs", "MongoDB", "Azure Functions", "JEST"],
  },
];

// ── Languages ────────────────────────────────────────────────────────────────
export const languages: LanguageItem[] = [
  { name: "English", proficiency: "Professional", level: 85 },
  { name: "Hindi", proficiency: "Fluent", level: 95 },
  { name: "Marathi", proficiency: "Native", level: 100 },
];

// ── Stats (used in animated counters) ────────────────────────────────────────
export const stats: StatsItem[] = [
  { label: "Projects Built", value: 4, suffix: "+", href: "#projects" },
  { label: "Months Experience", value: 6, suffix: "+", href: "#experience" },
  { label: "Technologies", value: 20, suffix: "+", href: "#skills" },
  { label: "CGPA Score", value: 8.99, suffix: " A+", href: "#education" },
];
