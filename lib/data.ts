import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const experiencesData = [
  {
    title: "Full Stack Engineer Intern",
    location: "Verbalyze Technologies",
    description:
      "Working on scalable, responsive full-stack web applications. Responsibilities include frontend development, database design, and implementing secure, maintainable systems.",
    icon: React.createElement(FaReact),
    date: "Jul 2025 – Present",
  },
  {
    title: "Freelance Web Developer",
    location: "AIIMS Rishikesh",
    description:
      "Built an event portal with registration, automated receipts, and Razorpay integration. Managed data with MongoDB to support 3,000+ users.",
    icon: React.createElement(FaReact),
    date: "Aug 2024 – Oct 2024",
  },
  {
    title: "Backend Developer Intern",
    location: "Shree Enterprises",
    description:
      "Developed a secure backend using Firebase with role-based access and real-time data sync. Integrated Razorpay and enabled reporting through Google Sheets API.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 – Aug 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Event Portal",
    description:
      "Developed a scalable event management portal with automated registration, payment integration (Razorpay), and real-time receipt mailing. Designed for 3,000+ participants with a focus on seamless UX and data integrity.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    imageUrl: corpcommentImg, // Replace with actual image import
  },
  {
    title: "Campus Recruitment Portal",
    description:
      "Built a portal for managing students and companies with admin authentication. Includes job/internship listings and full CRUD functionality with MySQL backend.",
    tags: ["React.js", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    imageUrl: rmtdevImg, // Replace with actual image import
  },
  {
    title: "Plant Disease Detection",
    description:
      "Deployed a CNN model using the Plant Village dataset to classify plant diseases with 96% accuracy, reducing crop loss by 50%. Includes image preprocessing and Flask API.",
    tags: ["Python", "Flask", "PyTorch", "CNN", "Deep Learning"],
    imageUrl:wordanalyticsImg,  // Replace with actual image import
  },
] as const;

export const skillsData = [
  // Programming Languages
  "C++",
  "JavaScript",
  "TypeScript",
  "Java",
  "Python",

  // Web Technologies
  "HTML",
  "CSS",
  "JSON",
  "RESTful APIs",
  "Responsive Design",

  // Frontend
  "React",
  "Next.js",
  "Redux",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "React Router",
  "Context API",

  // Backend
  "Node.js",
  "Express.js",
  "Authentication (JWT, OAuth)",

  // Databases
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Firebase",


  // GraphQL
  "GraphQL",
  

  // DevOps & Tools
  "Git",
  "GitHub",
  "Docker",
  "Postman",
  "AWS",

  // Software Engineering
  "Testing",
  "Debugging",
  "Problem Solving",
  "SDLC",
  "Agile Methodologies",
  "CORS",
  "Security Best Practices"
] as const;
