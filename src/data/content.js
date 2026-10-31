import {
  Blocks,
  Bot,
  Database,
  LayoutTemplate,
  Server,
  Wrench
} from "lucide-react";

/* ────────────────────────────────────────────────────────────
   PROFILE — edit your content in this one file.
   No academic, employment or certification detail is invented;
   unknown fields are explicit TODO placeholders.
   ──────────────────────────────────────────────────────────── */

export const PROFILE = {
  name: "Sourabh Chalke",
  firstName: "Sourabh",
  lastName: "Chalke",
  title: "React.js Frontend Developer",
  titles: [
    "React.js Frontend Developer",
    "MERN Stack Developer",
    "UI/UX Focused Engineer",
    "AI & LLM Integration Explorer"
  ],
  intro: "Computer Science postgraduate passionate about building modern, responsive and user-friendly web applications using React.js and the MERN stack. Exploring AI and LLM technologies to create intelligent web solutions.",
  email: "sourabhchalke2157@gmail.com",
  // TODO: replace with your real email address
  location: "Navi Mumbai, Maharashtra, India",
  github: "https://github.com/sourabhchalke",
  linkedin: "https://linkedin.com/in/sourabh-chalke/",
  resume: "/public/SourabhDeveloper_Resume.pdf",
  availability: "Open to Work"
};
export const SECTION_LIST = [
  { id: "home", label: "Home", index: "01" },
  { id: "about", label: "About", index: "02" },
  { id: "skills", label: "Skills", index: "03" },
  { id: "education", label: "Education", index: "04" },
  { id: "projects", label: "Projects", index: "05" },
  { id: "experience", label: "Experience", index: "06" },
  { id: "certifications", label: "Certifications", index: "07" },
  { id: "services", label: "Services", index: "08" },
  { id: "contact", label: "Contact", index: "09" }
];
export const NAV_LINKS = SECTION_LIST.filter(
  (s) => ["home", "about", "skills", "education", "projects", "experience", "contact"].includes(s.id)
);
export const SKILL_GROUPS = [
  {
    code: "FE",
    label: "Frontend",
    icon: LayoutTemplate,
    note: "Component architecture, state, semantic markup",
    skills: [
      { id: "FE-01", name: "HTML5" },
      { id: "FE-02", name: "CSS3" },
      { id: "FE-03", name: "JavaScript (ES6+)" },
      { id: "FE-04", name: "React.js" }
    ]
  },
  {
    code: "CSS",
    label: "CSS Frameworks",
    icon: Blocks,
    note: "Utility-first and component libraries",
    skills: [
      { id: "CS-01", name: "Bootstrap" },
      { id: "CS-02", name: "Tailwind CSS" }
    ]
  },
  {
    code: "BE",
    label: "Backend",
    icon: Server,
    note: "REST endpoints, middleware, auth flows",
    skills: [
      { id: "BE-01", name: "Node.js" },
      { id: "BE-02", name: "Express.js" }
    ]
  },
  {
    code: "DB",
    label: "Database",
    icon: Database,
    note: "Document and relational modelling",
    skills: [
      { id: "DB-01", name: "MongoDB" },
      { id: "DB-02", name: "MySQL" }
    ]
  },
  {
    code: "AI",
    label: "AI & LLM",
    icon: Bot,
    note: "Applied generative features inside real apps",
    skills: [
      { id: "AI-01", name: "Gemini API" },
      { id: "AI-02", name: "Prompt Engineering" },
      { id: "AI-03", name: "LLM Fundamentals" },
      { id: "AI-04", name: "AI Integration" }
    ]
  },
  {
    code: "TL",
    label: "Developer Tools",
    icon: Wrench,
    note: "Daily workflow and version control",
    skills: [
      { id: "TL-01", name: "Git" },
      { id: "TL-02", name: "GitHub" },
      { id: "TL-03", name: "Postman" },
      { id: "TL-04", name: "VS Code" }
    ]
  }
];
export const CONCEPTS = [
  "REST APIs",
  "JWT Authentication",
  "Responsive Web Design",
  "CRUD Operations",
  "API Integration"
];
export const EDUCATION = [
  {
    code: "ED-01",
    degree: "MSc Computer Science",
    institution: "[ S.G.M College, Karad ]",
    year: "[ 2023 – 2025 ]",
    score: "[ 7.82/10 / SGPA ]",
    todo: ["Institution", "University", "Passing year", "Percentage / SGPA"]
  },
  {
    code: "ED-02",
    degree: "Bachelor's Degree",
    institution: "[  SGM College, Karad ]",
    year: "[ 2019 – 2022 ]",
    score: "[  7.93/10 / CGPA ]",
    todo: ["Degree name", "College / university", "Passing year", "Percentage / CGPA"]
  },
  {
    code: "ED-03",
    degree: "HSC - Higher Secondary (Class 12)",
    institution: "[ SGM College, Karad ]",
    year: "[ 2017 - 2019 ]",
    score: "[ 60% ]",
    todo: ["Board", "School / college", "Passing year", "Percentage"]
  },
  {
    code: "ED-04",
    degree: "SSC - Secondary (Class 10)",
    institution: "[ L.J.P.English Medium School,Mandrul-Kole ]",
    year: "[ 2017 ]",
    score: "[ 72% ]",
    todo: ["Board", "School", "Passing year", "Percentage"]
  }
];
export const PROJECTS = [
  {
    code: "PRJ-01",
    name: "Job Portal Platform",
    status: "Live",
    blurb: "Full-stack recruitment platform with role-based auth.",
    overview: "A MERN job portal separating recruiter and candidate experiences behind JWT authentication. Recruiters manage listings end to end, candidates apply and track every application from one dashboard.",
    features: [
      "Recruiter and candidate authentication with role-based routing",
      "Recruiter dashboard for job management",
      "Job listing creation, editing and deletion",
      "Candidate job applications in one click",
      "Application status tracking for both sides"
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    demo: "https://job-portal-frontend-ten-coral.vercel.app/",
    repo: "https://github.com/sourabhchalke/JOB-PORTAL",
    image: "jobportal"
  },
  {
    code: "PRJ-02",
    name: "AI Content Assistant",
    status: "Live",
    blurb: "Gemini-powered writing tools for everyday work tasks.",
    overview: "A focused React and Express application that turns a short input into usable copy. Each tool is a dedicated route with its own prompt template, so results stay consistent instead of drifting.",
    features: [
      "AI email generation from a few key points",
      "Text summarisation for long documents",
      "Content rewriting with tone control",
      "Job description generation for open roles",
      "Interview question generation from a job description"
    ],
    stack: ["React.js", "Node.js", "Express.js", "Gemini API"],
    demo: "https://ai-developer-ivory.vercel.app/",
    repo: "https://github.com/sourabhchalke/AI-Developer/tree/main/LLM/ai-content-assistant",
    image: "ai"
  },
];
export const EXPERIENCE = [
  {
    code: "EX-01",
    period: "Ongoing",
    role: "Personal & Project Development",
    kind: "Self-directed",
    points: [
      "Built and deployed three full-stack applications end to end, from schema design to Vercel hosting.",
      "Practised the full MERN cycle: component structure, REST routes, MongoDB modelling and JWT auth.",
      "Write, debug and refactor code independently; read errors and documentation to reach fixes."
    ]
  },
  {
    code: "EX-02",
    period: "Available",
    role: "Internship / Fresher Role",
    kind: "Open to Work",
    points: [
      "Actively open to React.js frontend and MERN stack fresher opportunities.",
      "[ Add internship details here once completed ]",
      "[ Add open-source contributions or hackathon participation here ]"
    ]
  }
];
export const CERTIFICATIONS = [
  { code: "CT-01", name: "React.js Certification", issuer: "[ Issuer ]", year: "[ Year ]" },
  { code: "CT-02", name: "JavaScript Certification", issuer: "[ Issuer ]", year: "[ Year ]" },
  { code: "CT-03", name: "MERN Stack Course", issuer: "[ Issuer ]", year: "[ Year ]" },
  { code: "CT-04", name: "AI / LLM Fundamentals", issuer: "[ Issuer ]", year: "[ Year ]" },
  { code: "CT-05", name: "Technical Workshop", issuer: "[ Issuer ]", year: "[ Year ]" },
  { code: "CT-06", name: "Achievement / Award", issuer: "[ Issuer ]", year: "[ Year ]" }
];
export const SERVICES = [
  {
    code: "SV-01",
    title: "Responsive Website Development",
    body: "Layouts that hold up from a 320px phone to a wide desktop, built mobile-first with fluid type and no horizontal scroll."
  },
  {
    code: "SV-02",
    title: "React.js Frontend Development",
    body: "Reusable components, clean state management and maintainable file structure in modern React with ES6+."
  },
  {
    code: "SV-03",
    title: "REST API Integration",
    body: "Connecting frontends to REST endpoints with proper loading, error and empty states \u2014 tested in Postman first."
  },
  {
    code: "SV-04",
    title: "MERN Stack Applications",
    body: "Complete MongoDB, Express, React and Node applications with authentication, CRUD flows and deployment."
  },
  {
    code: "SV-05",
    title: "AI-Powered Feature Integration",
    body: "Adding Gemini-powered generation, summarisation and analysis to an existing product with structured prompting."
  },
  {
    code: "SV-06",
    title: "Website UI Improvement",
    body: "Auditing an existing interface for spacing, hierarchy, contrast and interaction states, then rebuilding it properly."
  }
];
