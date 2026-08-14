/**
 * Single source of truth for all portfolio content.
 * Edit values here — components read from this file.
 */
import expenseImg from "@/assets/project-expense.jpg";
import weatherImg from "@/assets/project-weather.jpg";
import authImg from "@/assets/project-auth.jpg";

export const profile = {
  name: "Prabhpreet Singh",
  monogram: "PS",
  role: "BCA Student | Software Developer | Backend & Full-Stack Developer",
  intro:
    "I'm a BCA student passionate about building scalable web applications, solving problems with DSA, and learning backend engineering, system design, and modern software development.",
  heroHeadline: "I build modern web applications and scalable backend systems.",
  heroSupport:
    "I'm a BCA student focused on backend development, full-stack engineering, DSA, and system design. I enjoy turning ideas into practical, scalable software.",
  resumeUrl: "/resume.pdf",
  email: "mostlyypositive@gmail.com",
  github: "https://github.com/iamPrabh123",
  linkedin: "https://www.linkedin.com/in/prabhpreet-singh-764726340",
  location: "New Delhi, India",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "BCA Student", value: "Year 2" },
  { label: "Projects Built", value: "8+" },
  { label: "DSA Problems Solved", value: "250+" },
  { label: "Technologies Learned", value: "15+" },
];

export const aboutParagraphs = [
  "I'm currently pursuing my BCA and continuously improving my problem-solving and software engineering skills. I work on practical projects to understand how frontend applications, backend services, APIs, databases, authentication, caching, and system architecture work together.",
  "My current focus is becoming a strong software developer by combining DSA fundamentals with real-world backend and full-stack development.",
];

export const interests = [
  "Backend Development",
  "Full-Stack Development",
  "Java & Spring Boot",
  "DSA",
  "System Design",
  "Databases",
  "Cloud & Distributed Systems",
];

export const skillGroups = [
  { title: "Languages", icon: "Code2", items: ["Java", "JavaScript", "Python", "SQL", "HTML", "CSS"] },
  { title: "Frontend", icon: "Layout", items: ["React", "JavaScript", "Tailwind CSS", "HTML/CSS"] },
  {
    title: "Backend",
    icon: "Server",
    items: ["Java", "Spring Boot", "Node.js", "Express.js", "REST APIs"],
  },
  { title: "Databases", icon: "Database", items: ["MongoDB", "MySQL", "PostgreSQL"] },
  {
    title: "Tools & Technologies",
    icon: "Wrench",
    items: ["Git", "GitHub", "Postman", "Redis", "Docker", "MongoDB Atlas"],
  },
  {
    title: "Concepts",
    icon: "Network",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "System Design",
      "REST Architecture",
      "Microservices",
    ],
  },
] as const;

export type Project = {
  name: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    name: "Smart Expense Splitter",
    description:
      "A full-stack expense splitting application that allows users to create groups, add expenses, split costs, and track balances between members.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: expenseImg,
    github: "https://github.com/prabhpreet",
    demo: "#",
  },
  {
    name: "Weather Application",
    description:
      "A responsive weather application that retrieves real-time weather information using a weather API and presents it through a clean user interface.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    image: weatherImg,
    github: "https://github.com/prabhpreet",
    demo: "#",
  },
  {
    name: "Authentication System",
    description:
      "A secure authentication system implementing user registration, login, password hashing, JWT authentication, protected routes, and authorization.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: authImg,
    github: "https://github.com/prabhpreet",
    demo: "#",
  },
];

export const experience = [
  {
    title: "Software Development Journey",
    subtitle: "Self-Directed Developer",
    period: "2024 — Present",
    description:
      "Building practical full-stack and backend projects while developing strong foundations in Java, DSA, databases, APIs, authentication, system design, and software engineering.",
    points: [
      "Personal projects: full-stack apps with authentication, REST APIs and databases",
      "Technical learning: Java, Spring Boot, system design and backend architecture",
      "Coding practice: consistent DSA problem solving and pattern-based practice",
      "Development milestones: from static pages to deployed full-stack applications",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Sri Guru Tegh Bahadur Institute of Management and Information Technology (SGTBIMIT)",
    note: "Affiliated with GGSIPU",
    period: "Ongoing",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Organization",
      "Software Engineering",
      "Web Development",
      "Python / Data Science",
    ],
  },
];

export const journey = [
  { title: "Started Programming", detail: "First lines of code, logic building and problem solving." },
  { title: "Built Web Projects", detail: "HTML, CSS and JavaScript projects with real interactions." },
  { title: "Learned Backend", detail: "Node.js, Express, REST APIs, MongoDB and authentication." },
  { title: "Started DSA", detail: "Arrays, strings, recursion, trees, graphs and complexity analysis." },
  { title: "Java & Spring Boot", detail: "OOP fundamentals and building structured backend services." },
  { title: "System Design", detail: "Caching, scaling, databases and service architecture basics." },
  { title: "Software Engineering", detail: "Clean code, Git workflows, testing and deployment." },
];

export const learning = [
  { name: "Java", level: "Building fluency" },
  { name: "Data Structures & Algorithms", level: "Daily practice" },
  { name: "Spring Boot", level: "In progress" },
  { name: "System Design", level: "Fundamentals" },
  { name: "SQL", level: "Comfortable, improving" },
  { name: "Backend Architecture", level: "Exploring" },
];

export const githubStats = [
  { label: "Public Repositories", value: "12" },
  { label: "Contributions (last year)", value: "400+" },
  { label: "Primary Language", value: "JavaScript" },
  { label: "Current Focus", value: "Java / Spring" },
];

export const githubRepos = [
  { name: "smart-expense-splitter", description: "Full-stack MERN expense splitting app", language: "JavaScript" },
  { name: "weather-app", description: "Real-time weather UI with a public API", language: "JavaScript" },
  { name: "auth-system", description: "JWT authentication with protected routes", language: "JavaScript" },
  { name: "dsa-practice", description: "Solutions and notes for DSA patterns", language: "Java" },
];
