export const profile = {
  name: "Sriram V",
  role: "Software Engineer",
  focus: "Computer Vision · Civic Tech · Agentic Systems",
  location: "Chennai, Tamil Nadu, India",
  email: "sriramv1227@gmail.com",
  phone: "+91 8015151191",
  links: {
    linkedin: "https://linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    leetcode: "https://leetcode.com/your-handle",
  },
  bio:
    "Final-year IT student who builds systems that watch, track, and respond — from a real-time passenger-safety detector deployed on railway footboards to an autonomous agent that chains its own tools. I like software that does something the moment you look away.",
};

export const education = {
  degree: "B.Tech in Information Technology",
  school: "KCG College of Technology, Chennai",
  period: "2022 — 2026",
};

export const experience = [
  {
    company: "Spiro Technologies Pvt. Ltd",
    role: "Software Engineering Intern",
    location: "Chennai, Tamil Nadu",
    period: "Jun 2024 — Jul 2024",
    status: "COMPLETED",
    log: [
      "Built a real-time railway footboard passenger-detection system with OpenCV to improve safety monitoring accuracy.",
      "Implemented and tuned image-processing pipelines for reliable detection under real-time constraints.",
      "Optimized SQL queries, cutting execution time by 30% and lifting backend throughput.",
      "Supported infrastructure serving 300+ users as part of an IoT-based railway automation rollout.",
    ],
  },
];

export const projects = [
  {
    id: "vaakuwatch",
    name: "Vaaku Watch",
    tagline: "Tamil Nadu manifesto tracking platform",
    status: "TRACKING",
    statusColor: "scan",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Recharts", "Vite"],
    description:
      "A civic-tech platform that tracks political party promises against outcomes, built with a dark, glassmorphic interface and an app-like feel.",
    points: [
      "Multi-route navigation with React Router and animated page transitions.",
      "Recharts dashboards visualizing promise fulfillment trends and category breakdowns.",
      "Apple/Linear-inspired design system built on a glassmorphism component layer.",
    ],
    link: "",
  },
  {
    id: "agentic-ai",
    name: "Agentic AI System",
    tagline: "Autonomous tool-calling agent",
    status: "AUTONOMOUS",
    statusColor: "amber",
    stack: ["Python", "FastAPI", "React", "LangChain", "Gemini API"],
    description:
      "An AI agent that plans and chains its own tools to resolve multi-step queries, backed by a modular FastAPI service layer.",
    points: [
      "LangChain + Gemini API agent capable of selecting and sequencing tools autonomously.",
      "Modular FastAPI endpoints with Pydantic models for time, weather, and calculation utilities.",
      "Responsive React + Vite frontend talking to the backend over CORS-configured async requests.",
    ],
    link: "",
  },
  {
    id: "webcast",
    name: "WebCast",
    tagline: "Real-time watch party platform",
    status: "LIVE",
    statusColor: "scan",
    stack: ["React", "Node.js", "Express.js", "WebRTC", "Socket.io"],
    description:
      "A synchronized streaming platform for watch parties, with peer-to-peer video and room-based playback sync.",
    points: [
      "Live peer-to-peer video communication via WebRTC.",
      "Socket.io rooms for synchronized playback control and real-time chat.",
      "Backend architected with Node.js/Express to support 100+ concurrent users.",
    ],
    link: "",
  },
];

export const skills = {
  Languages: ["Python", "Java", "JavaScript", "TypeScript"],
  Frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "FastAPI"],
  Databases: ["MongoDB", "MySQL", "Firebase"],
  Tools: ["Git", "Docker", "Linux", "Postman", "Vercel", "GitHub Actions"],
};

export const certifications = [
  { name: "Power BI Fundamentals", issuer: "Self-paced", year: "2025" },
  { name: "Cloud Computing", issuer: "NPTEL", year: "2024" },
  { name: "Network Security", issuer: "NPTEL", year: "2024" },
  { name: "Azure AI Essentials", issuer: "Microsoft", year: "2025" },
  { name: "Introduction to Modern AI", issuer: "Cisco", year: "2025" },
];
