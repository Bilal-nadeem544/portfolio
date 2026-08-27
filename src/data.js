export const general = {
  name: "Bilal Nadeem",
  role: "Full Stack Web Developer",
  heroKicker: "Hello, my name is",
  heroText:
    "I build modern, responsive and practical web applications with clean interfaces and reliable backends.",
  aboutTitle: "From ideas to working software",
  aboutText:
    "I'm a 4th-semester BS IT student at Superior University, currently working as a Full Stack Web Developer at Ingenious Concepts in Lahore. My path started with HTML and CSS, expanded into JavaScript and React, and now covers backend work with Node.js, Express, Prisma, and MySQL — building real production systems, not just tutorial projects.",
  contactText: "Open to full-stack roles and freelance projects.",
  footerText: "© 2026 Bilal Nadeem. All rights reserved.",
};

export const skills = [
  { id: "s1", category: "Frontend Engineering", items: ["React.js", "Vite", "Tailwind CSS"] },
  { id: "s2", category: "Backend Systems", items: ["Node.js", "Express", "REST API design"] },
  { id: "s3", category: "Database & ORM", items: ["MySQL", "Prisma ORM", "Schema design"] },
  { id: "s4", category: "Auth & Security", items: ["JWT", "Refresh tokens", "Role-based access"] },
  { id: "s5", category: "AI / Computer Vision", items: ["OpenCV", "MediaPipe", "TensorFlow"] },
  { id: "s6", category: "Tooling & Deployment", items: ["Git", "Docker", "Render", "Vercel"] },
];

export const projects = [
  {
    id: "p1",
    title: "Business Management System",
    featured: true,
    description:
      "A suite of four independent apps — CRM, HRM, Finance, and Invoicing — unified under a centralized database and a single business-management experience.",
    tech: ["React", "Node.js", "Express", "Prisma", "PostgreSQL"],
    live: "https://business-management-system-ten.vercel.app/",
    github: "https://github.com/Bilal-nadeem544",
  },
  {
    id: "p2",
    title: "StockPilot",
    featured: false,
    description:
      "Full-stack inventory management system with JWT authentication, analytics dashboard and a custom responsive UI.",
    tech: ["React", "Vite", "Tailwind", "Node.js", "Prisma", "MySQL"],
    live: "https://inventory-managenent-system-eight.vercel.app/",
    github: "https://github.com/Bilal-nadeem544",
  },
  {
    id: "p3",
    title: "Jarvis Voice Assistant",
    featured: false,
    description: "A Python + Flask AI voice assistant for voice commands and task automation.",
    tech: ["Python", "Flask", "Groq AI"],
    live: "https://jarvis-assistant-0s9k.onrender.com/",
    github: "https://github.com/Bilal-nadeem544",
  },
  {
    id: "p4",
    title: "Emotion AI Detector",
    featured: false,
    description:
      "A Django web app that detects facial emotion in real time using computer vision and deep learning.",
    tech: ["Django", "OpenCV", "MediaPipe", "TensorFlow"],
    live: "https://emotion-ai-detector-1.onrender.com/",
    github: "https://github.com/Bilal-nadeem544",
  },
  {
    id: "p5",
    title: "AI Code Efficiency Debugger",
    featured: false,
    description:
      "A Flask + ML application that classifies code efficiency using machine-learning techniques and supports multiple languages.",
    tech: ["Flask", "Python", "Scikit-learn"],
    live: "https://ai-code-debugger-i869.onrender.com/",
    github: "https://github.com/Bilal-nadeem544",
  },
  {
    id: "p6",
    title: "Task Manager",
    featured: false,
    description:
      "A full-stack task management app with React, Express and MySQL persistence, deployed end-to-end.",
    tech: ["React", "Vite", "Node.js", "Express", "MySQL"],
    live: "#",
    github: "https://github.com/Bilal-nadeem544",
  },
];

export const experience = [
  {
    id: "e1",
    role: "Full Stack Web Developer",
    org: "Ingenious Concepts",
    meta: "Lahore, Pakistan · 8 Months",
    description:
      "Building and maintaining full-stack production modules with React, Node.js/Express, Prisma and MySQL — including JWT auth flows and role-based access control.",
  },
  {
    id: "e2",
    role: "Lead Generation & Data Scraping",
    org: "Ingenious Concepts",
    meta: "Lahore, Pakistan",
    description: "Worked on lead generation and data extraction workflows for internal business modules.",
  },
  {
    id: "e3",
    role: "Lead Generation & Data Scraping",
    org: "StratiGiant",
    meta: "Remote",
    description:
      "Managed end-to-end lead generation using LinkedIn, Apollo and Google Maps, and maintained CRM databases.",
  },
];

export const contactLinks = [
  { id: "c1", label: "Email Me", url: "mailto:bilalnadeem2005seo@gmail.com", icon: "mail" },
  { id: "c2", label: "Call Me", url: "tel:+923342122010", icon: "phone" },
  { id: "c3", label: "GitHub", url: "https://github.com/Bilal-nadeem544", icon: "github" },
  {
    id: "c4",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/bilal-nadeem-b427b5320/",
    icon: "linkedin",
  },
];
