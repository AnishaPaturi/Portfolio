import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  Briefcase,
  User,
  MessageSquare,
  Award,
  Code,
  Smartphone,
  ShieldCheck,
  Code2,
  Calendar,
  X,
  Trophy,
} from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import profileImage from "../../assets/profile.png";

export default function PortfolioThree() {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Custom cursor variables
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 22, stiffness: 400 });
  const springY = useSpring(cursorY, { damping: 22, stiffness: 400 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".interactive-card")
      ) {
        setCursorHovered(true);
      } else {
        setCursorHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Intersection Observer for scroll highlighting
  useEffect(() => {
    const sections = [
      "about",
      "skills",
      "experience",
      "projects",
      "achievements",
      "certifications",
      "github-activity",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ===================== DATA ===================== */

  const projects = [
    {
      title: "HomeVerse (Work in Progress)",
      description: "An AI-powered interior design platform currently under development that transforms ordinary room photos into fully customizable 3D living spaces using computer vision, generative AI, and interactive design tools. The system performs object detection and segmentation on uploaded images, generates design variants, and renders editable 3D workspaces.",
      tech: ["Next.js", "Three.js", "FastAPI", "PostgreSQL", "React Three Fiber", "AI"],
      link: "https://github.com/AnishaPaturi/HomeVerse",
      year: "2026",
      category: "Full Stack",
      featured: true,
    },
    {
      title: "AI CareerOS (CareerPilot-AI)",
      description: "A unified AI career preparation and placement ecosystem integrating placement management, resume analysis, mock interview simulation, DSA roadmap planning, and document RAG search into a single platform.",
      tech: ["Spring Boot", "FastAPI", "React", "MySQL", "ChromaDB", "LangChain", "Microservices"],
      link: "https://github.com/AnishaPaturi/CareerPilot-AI",
      liveLink: "https://career-pilot-ai-delta.vercel.app",
      year: "2026",
      category: "Full Stack",
      featured: true,
    },
    {
      title: "ResumeIQ",
      description: "A multi-agent AI resume analyzer that scans resumes, calculates an ATS compatibility score, performs skill gap analysis against job target criteria, and generates personalized roadmap recommendations.",
      tech: ["React", "TypeScript", "FastAPI", "Python", "MongoDB", "OpenRouter", "AI Agents"],
      link: "https://github.com/AnishaPaturi/ResumeIQ",
      year: "2026",
      category: "Full Stack",
      featured: false,
    },
    {
      title: "SentinelX",
      description: "A desktop-based network security and vulnerability assessment platform capable of multithreaded port scanning, banner grabbing, host discovery, and real-time packet capture/protocol analysis using Pcap4J.",
      tech: ["Java", "Swing", "Socket Programming", "Pcap4J", "Networking", "Multithreading"],
      link: "https://github.com/AnishaPaturi/SentinelX",
      liveLink: "https://sentinel-x-beta-pink.vercel.app/",
      year: "2026",
      category: "Java",
      featured: true,
    },
    {
      title: "DocuMind – AI PDF Chatbot",
      description: "An enterprise-grade Retrieval-Augmented Generation (RAG) platform that enables users to upload PDF documents and interact with them through intelligent, context-aware conversations.",
      tech: ["Next.js", "FastAPI", "LangChain", "ChromaDB", "SQLite", "OpenRouter", "RAG"],
      link: "https://github.com/AnishaPaturi/AI-pdf-chatbot",
      liveLink: "https://ai-pdf-chatbot-weld.vercel.app",
      year: "2026",
      category: "TypeScript",
      featured: false,
    },
    {
      title: "AI-Interview",
      description: "Premium AI Interview Platform UI with professional motion design and AI-driven interview analysis.",
      tech: ["TypeScript", "Next.js", "Framer Motion", "AI"],
      link: "https://github.com/AnishaPaturi/AI-Interview",
      year: "2026",
      category: "TypeScript",
      featured: false,
    },
    {
      title: "FactForge",
      description: "An AI-powered fact and claim verification platform designed to combat misinformation by automatically analyzing text, extracting verifiable claims, and retrieving supporting evidence.",
      tech: ["React", "FastAPI", "SQLite", "OpenRouter", "Tavily", "AI", "NLP"],
      link: "https://github.com/AnishaPaturi/FactForge",
      liveLink: "https://fact-forge.vercel.app",
      year: "2026",
      category: "Full Stack",
      featured: false,
    },
    {
      title: "Ctrl+S of Shame",
      description: "Ctrl+S of Shame is a fun and lightweight VS Code extension designed to encourage better coding habits by adding a humorous consequence to saving or debugging code with compilation errors.",
      tech: ["TypeScript", "VS Code Extension API", "Node.js"],
      link: "https://github.com/AnishaPaturi/CtrlSofShame",
      year: "2026",
      category: "TypeScript",
      featured: false,
    },
    {
      title: "VizTalk – Conversational BI Dashboard",
      description: "An AI-powered conversational business intelligence dashboard enabling users to generate interactive data visualizations and run queries on SQL databases using natural language.",
      tech: ["Streamlit", "FastAPI", "SQLite", "Plotly", "OpenRouter", "DeepSeek", "AI"],
      link: "https://github.com/AnishaPaturi/VizTalk",
      year: "2025",
      category: "Python",
      featured: false,
    },
    {
      title: "Secret Santa",
      description: "A real-time web application that modernizes gift exchanges by enabling users to create groups, invite participants through QR codes or links, and instantly assign recipients.",
      tech: ["Next.js", "React", "Firebase", "Tailwind CSS", "Framer Motion"],
      link: "https://github.com/AnishaPaturi/Secret-Santa-",
      liveLink: "https://secret-santa-theta-nine.vercel.app/",
      year: "2024",
      category: "Full Stack",
      featured: false,
    },
    {
      title: "Mood-Angles",
      description: "An AI mental health and telepsychiatry platform combining intelligent mood tracking, machine learning diagnostics, Retrieval-Augmented Generation (RAG) assistance, and secure conferencing.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Python", "LangChain", "RAG"],
      link: "https://github.com/AnishaPaturi/Mood-Angles",
      liveLink: "https://mood-angles.vercel.app",
      year: "2024",
      category: "Full Stack",
      featured: true,
    },
    {
      title: "SafeStreet",
      description: "An AI-powered road damage detection and municipal maintenance platform combining a mobile application for reporting with a central dashboard for repair dispatching.",
      tech: ["React Native", "React", "Node.js", "Express", "Python Flask", "MongoDB", "Gemini AI"],
      link: "https://github.com/AnishaPaturi/SafeStreet-final",
      year: "2024",
      category: "Full Stack",
      featured: false,
    },
    {
      title: "College-Connect",
      description: "A campus management platform centralizing student pre-orders, event registration, lost & found logs, and student discussion forums.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/AnishaPaturi/College-Connect",
      liveLink: "https://college-connect-iota.vercel.app",
      year: "2024",
      category: "Full Stack",
      featured: false,
    },
    {
      title: "Talent Match",
      description: "A networking and project collaboration platform designed to connect students, professionals, and innovators based on skills and project requirements.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
      link: "https://github.com/AnishaPaturi/Talent-Match",
      liveLink: "https://talent-match-sandy-omega.vercel.app/",
      year: "2024",
      category: "Full Stack",
      featured: false,
    },
    {
      title: "AutoDeck",
      description: "A Python automation utility that streamlines the organization of image collections and automatically generates professional presentation decks.",
      tech: ["Python", "python-pptx", "Pillow", "Automation"],
      link: "https://github.com/AnishaPaturi/AutoDeck",
      year: "2024",
      category: "Python",
      featured: false,
    },
    {
      title: "GradeSync",
      description: "A student grade management and academic analytics database supporting multiple storage backends, search indexing, and class performance reporting.",
      tech: ["Python", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/AnishaPaturi/GradeSync",
      year: "2024",
      category: "Python",
      featured: false,
    },
    {
      title: "PythonLonden",
      description: "Modernization of a campaign manager from PHP Symfony to Python, optimizing campaign dispatch systems, response tracking, and data visualization dashboards.",
      tech: ["Python", "Campaign Management"],
      link: "https://github.com/AnishaPaturi/PythonLonden",
      year: "2024",
      category: "Python",
      featured: false,
    },
    {
      title: "AI-Powered Lie Detector App (Work in Progress)",
      description: "A mobile application utilizing computer vision (MediaPipe) and voice analysis (Librosa) to analyze cues for deception in real time.",
      tech: ["React Native", "Expo", "FastAPI", "Express.js", "MongoDB Atlas", "MediaPipe", "Librosa"],
      link: "https://github.com/AnishaPaturi/LieDetectorGame",
      year: "2024",
      category: "React Native",
      featured: false,
    },
    {
      title: "Attendance Tracker",
      description: "System for tracking and managing student attendance records with real-time updates.",
      tech: ["TypeScript"],
      link: "https://github.com/AnishaPaturi/attendance-tracker",
      year: "2024",
      category: "TypeScript",
      featured: false,
    },
    {
      title: "CodeSleuth – Human vs AI Code Detector",
      description: "An AI code detector analyzing source code syntax patterns to determine whether code was human-written or model-generated.",
      tech: ["Python", "OpenAI GPT", "AI", "Code Analysis"],
      link: "https://github.com/AnishaPaturi/AuthenCode",
      year: "2023",
      category: "Python",
      featured: false,
    },
    {
      title: "AI Code Reviewer – Reflective Edition",
      description: "An agentic AI command-line application that demonstrates multi-step reasoning by reviewing code, reflecting on its own feedback, and generating refined suggestions.",
      tech: ["Python", "OpenAI API", "Agentic AI", "CLI"],
      link: "https://github.com/AnishaPaturi/CodeChecker",
      year: "2023",
      category: "Python",
      featured: false,
    },
    {
      title: "FeedForward",
      description: "An AI feedback analysis platform designed to help product teams aggregate, classify, and prioritize customer feedback using NLP.",
      tech: ["React", "Python", "MongoDB", "NLP"],
      link: "https://github.com/AnishaPaturi/FeedForward",
      year: "2023",
      category: "React",
      featured: false,
    },
    {
      title: "SafeStreet Web",
      description: "Web companion for SafeStreet featuring visual interactive mapping and WebSocket updates.",
      tech: ["React", "Google Maps API", "WebSockets"],
      link: "https://github.com/AnishaPaturi/SafeStreetWeb",
      year: "2023",
      category: "React",
      featured: false,
    },
    {
      title: "BlueDrive Rover",
      description: "A Bluetooth-controlled robotic vehicle integrating Arduino, HC-05 module, and DC motor drivers for real-time wireless movement.",
      tech: ["Arduino", "C++", "HC-05 Bluetooth", "IoT", "Embedded Systems", "Motor Control"],
      link: "https://github.com/AnishaPaturi/BlueDrive-Rover",
      year: "2023",
      category: "Hardware",
      featured: false,
    },
    {
      title: "WeatherApp",
      description: "A responsive web application providing real-time weather information and forecasts using OpenWeather API and browser geolocation services.",
      tech: ["HTML", "CSS", "JavaScript", "OpenWeather API", "Geolocation"],
      link: "https://github.com/AnishaPaturi/WeatherApp",
      liveLink: "https://weather-app-two-olive-86.vercel.app/",
      year: "2022",
      category: "JavaScript",
      featured: false,
    },
    {
      title: "Amazon Clone",
      description: "A modern responsive front-end e-commerce interface replicating the core catalog browsing and shopping cart experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/AnishaPaturi/Amazon-Clone",
      liveLink: "https://amazon-clone-silk-six-95.vercel.app/",
      year: "2022",
      category: "JavaScript",
      featured: false,
    },
    {
      title: "Just Do It.",
      description: "A clean modern to-do list application with smooth transition effects and state management entirely in vanilla JS.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      link: "https://github.com/AnishaPaturi/To-Do",
      liveLink: "https://to-do-phi-kohl.vercel.app/",
      year: "2022",
      category: "JavaScript",
      featured: false,
    },
    {
      title: "IgniteJEE (Work in Progress)",
      description: "An AI-powered learning platform under development to help JEE Main candidates study using customized roadmap suggestions.",
      tech: ["React", "Tailwind CSS", "Firebase", "Node.js", "MongoDB", "AI"],
      link: "https://github.com/AnishaPaturi/IgniteJEE",
      year: "2024",
      category: "React",
      featured: false,
    },
    {
      title: "Murder Mystery Web Platform (Work in Progress)",
      description: "An interactive detective investigation platform featuring suspect profiling, case files, drag-and-drop evidence boards, and case solver mechanics.",
      tech: ["React", "Vite", "Tailwind CSS", "shadcn/ui"],
      link: "https://github.com/AnishaPaturi/Murder_Mystery_Web_Platform",
      year: "2026",
      category: "React",
      featured: false,
    },
    {
      title: "AI Procurement Verification Agent",
      description: "A multi-agent AI invoice auditor checking prices, taxes, and vendor details against POs using LangGraph, LangChain, and OpenAI.",
      tech: ["Python", "FastAPI", "LangChain", "LangGraph", "OpenAI"],
      link: "https://github.com/AnishaPaturi/Invoice_Agent",
      year: "2026",
      category: "Python",
      featured: false,
    },
    {
      title: "CineMatch AI – Movie Recommendation Platform",
      description: "An AI movie discovery engine recommending media using TF-IDF cosine similarity. Integrates IMDb database and Docker packaging.",
      tech: ["React Native", "React", "FastAPI", "Node.js", "MongoDB", "Docker"],
      link: "https://github.com/AnishaPaturi/movie-recommendation-platform",
      liveLink: "https://movie-recommendation-platform-nine.vercel.app/",
      year: "2025",
      category: "React Native",
      featured: false,
    }
  ];

  const engagement = [
    "3rd place in an Agentic AI Hackathon, 2025",
    "Participated in a Product Space Hackathon, 2025",
    "Worked as Volunteer in NMDC Hyderabad Marathon, 2024",
    "Worked as Volunteer for DBMS Workshop in KMIT, 2024",
    "Attended a workshop at IITH for Gen AI course",
    "Participated in VJIT Hackathon, 2023",
  ];

  const skillsData = [
    // Front End
    { name: "HTML5", category: "Front End", level: 95, icon: "html" },
    { name: "CSS3", category: "Front End", level: 90, icon: "css" },
    { name: "JavaScript (ES6+)", category: "Front End", level: 92, icon: "js" },
    { name: "React.js", category: "Front End", level: 90, icon: "react" },
    { name: "Bootstrap", category: "Front End", level: 85, icon: "bootstrap" },
    { name: "Responsive Web Design", category: "Front End", level: 88, icon: "default" },
    
    // Programming Languages
    { name: "C", category: "Programming Languages", level: 78, icon: "cpp" },
    { name: "C++", category: "Programming Languages", level: 82, icon: "cpp" },
    { name: "Java", category: "Programming Languages", level: 90, icon: "java" },
    { name: "Python", category: "Programming Languages", level: 95, icon: "python" },
    { name: "JavaScript", category: "Programming Languages", level: 92, icon: "js" },
    { name: "SQL", category: "Programming Languages", level: 85, icon: "mysql" },
    
    // Back End
    { name: "Node.js", category: "Back End", level: 88, icon: "node" },
    { name: "Express.js", category: "Back End", level: 85, icon: "express" },
    { name: "Spring Boot (Basics)", category: "Back End", level: 80, icon: "springboot" },
    { name: "REST APIs", category: "Back End", level: 90, icon: "backend" },
    { name: "MVC Architecture", category: "Back End", level: 85, icon: "backend" },
    { name: "Authentication & Authorization (JWT Basics)", category: "Back End", level: 84, icon: "shield" },
    { name: "API Versioning", category: "Back End", level: 80, icon: "backend" },
    
    // Databases
    { name: "MySQL", category: "Databases", level: 85, icon: "mysql" },
    { name: "MongoDB", category: "Databases", level: 82, icon: "mongodb" },
    { name: "Redis (Basics)", category: "Databases", level: 80, icon: "redis" },
    
    // AI/ML
    { name: "Machine Learning", category: "AI/ML", level: 88, icon: "brain" },
    { name: "Deep Learning", category: "AI/ML", level: 85, icon: "brain" },
    { name: "Generative AI (GenAI)", category: "AI/ML", level: 90, icon: "brain" },
    { name: "TensorFlow", category: "AI/ML", level: 82, icon: "brain" },
    { name: "PyTorch", category: "AI/ML", level: 84, icon: "brain" },
    { name: "Keras", category: "AI/ML", level: 80, icon: "brain" },
    { name: "Hugging Face Transformers", category: "AI/ML", level: 84, icon: "brain" },
    { name: "Vision Transformer (ViT)", category: "AI/ML", level: 82, icon: "brain" },
    { name: "Streamlit", category: "AI/ML", level: 85, icon: "streamlit" },
    { name: "Prompt Engineering", category: "AI/ML", level: 88, icon: "brain" },
    
    // Agentic AI
    { name: "LangChain", category: "Agentic AI", level: 88, icon: "langchain" },
    { name: "LangGraph", category: "Agentic AI", level: 85, icon: "langchain" },
    { name: "LangSmith", category: "Agentic AI", level: 80, icon: "langchain" },
    { name: "Retrieval-Augmented Generation (RAG)", category: "Agentic AI", level: 86, icon: "langchain" },
    { name: "AI Agents", category: "Agentic AI", level: 85, icon: "langchain" },
    { name: "Vector Databases (FAISS, ChromaDB)", category: "Agentic AI", level: 84, icon: "langchain" },
    { name: "Model Context Protocol (MCP)", category: "Agentic AI", level: 82, icon: "langchain" },
    
    // Cloud & DevOps
    { name: "AWS (EC2, S3, IAM Basics)", category: "Cloud & DevOps", level: 80, icon: "aws" },
    { name: "Docker", category: "Cloud & DevOps", level: 85, icon: "docker" },
    { name: "Kubernetes (Basics)", category: "Cloud & DevOps", level: 75, icon: "kubernetes" },
    { name: "Maven", category: "Cloud & DevOps", level: 82, icon: "maven" },
    { name: "Jenkins", category: "Cloud & DevOps", level: 78, icon: "jenkins" },
    { name: "GitHub Actions", category: "Cloud & DevOps", level: 82, icon: "github" },
    { name: "CI/CD", category: "Cloud & DevOps", level: 80, icon: "default" },
    
    // Computer Science Fundamentals
    { name: "Data Structures & Algorithms (DSA)", category: "Computer Science Fundamentals", level: 90, icon: "dsa" },
    { name: "Algorithm Analysis", category: "Computer Science Fundamentals", level: 88, icon: "dsa" },
    { name: "Problem Solving", category: "Computer Science Fundamentals", level: 92, icon: "dsa" },
    { name: "Competitive Programming", category: "Computer Science Fundamentals", level: 85, icon: "dsa" },
    { name: "Object-Oriented Programming (OOP)", category: "Computer Science Fundamentals", level: 88, icon: "dsa" },
    { name: "Operating Systems", category: "Computer Science Fundamentals", level: 82, icon: "dsa" },
    { name: "Database Management Systems (DBMS)", category: "Computer Science Fundamentals", level: 85, icon: "dsa" },
    { name: "Computer Networks", category: "Computer Science Fundamentals", level: 80, icon: "dsa" },
    { name: "Software Engineering", category: "Computer Science Fundamentals", level: 84, icon: "dsa" },
    { name: "System Design (Basics)", category: "Computer Science Fundamentals", level: 80, icon: "dsa" },
    { name: "Design Patterns (Basics)", category: "Computer Science Fundamentals", level: 78, icon: "dsa" },
    { name: "Cyber Security", category: "Computer Science Fundamentals", level: 75, icon: "shield" },
    
    // Backend Concepts
    { name: "RESTful API Design", category: "Backend Concepts", level: 90, icon: "backend" },
    { name: "Pagination", category: "Backend Concepts", level: 88, icon: "backend" },
    { name: "Authentication & Authorization", category: "Backend Concepts", level: 86, icon: "shield" },
    { name: "Sessions & Cookies", category: "Backend Concepts", level: 82, icon: "backend" },
    { name: "Idempotency", category: "Backend Concepts", level: 85, icon: "backend" },
    { name: "Caching (Redis Basics)", category: "Backend Concepts", level: 84, icon: "backend" },
    { name: "Rate Limiting", category: "Backend Concepts", level: 82, icon: "backend" },
    { name: "RabbitMQ", category: "Backend Concepts", level: 80, icon: "backend" },
    { name: "Prometheus", category: "Backend Concepts", level: 78, icon: "backend" },
    { name: "Logging & Monitoring", category: "Backend Concepts", level: 80, icon: "backend" },
    { name: "Environment Variables", category: "Backend Concepts", level: 90, icon: "backend" },
    { name: "Exception Handling", category: "Backend Concepts", level: 88, icon: "backend" },
    
    // Tools & Platforms
    { name: "Git", category: "Tools & Platforms", level: 92, icon: "git" },
    { name: "GitHub", category: "Tools & Platforms", level: 94, icon: "github" },
    { name: "Postman", category: "Tools & Platforms", level: 88, icon: "backend" },
    { name: "Jupyter Notebook", category: "Tools & Platforms", level: 88, icon: "jupyter" },
    { name: "VS Code", category: "Tools & Platforms", level: 90, icon: "default" },
    { name: "IntelliJ IDEA", category: "Tools & Platforms", level: 85, icon: "default" },
  ];

  const experience = [
    {
      role: "Software Development Intern",
      company: "ODT",
      period: "April 2025 - June 2025",
      description:
        "Transformed PHP Symfony 1-based Londen's Campaign Manager into Python to enhance maintainability and performance. Worked on dashboards for mailed campaigns, response tracking, and data visualization.",
    },
    {
      role: "Software Development Intern",
      company: "IBaseIT",
      period: "May 2024 - June 2024",
      description:
        "Developed GradeSync, a student grade management and analytics system. Implemented responsive web dashboards and supported multiple storage backends including flat files, JSON documents, and MySQL databases.",
    },
  ];

  const accomplishments = [
    {
      name: "1st Position at GeeksForGeeks Intra-College Hackathon",
      description: "Secured first place in the 2026 GeeksForGeeks hackathon competition.",
    },
    {
      name: "3rd place in an Agentic AI Hackathon, 2025",
      description: "Secured podium finish developing collaborative LLM agents under strict timelines.",
    },
    {
      name: "Product Space Hackathon Participant",
      description: "Designed product prototypes with micro-interactions and pitch documentation.",
    },
  ];

  const certifications = [
    {
      name: "HackerRank SQL (Advanced) Skill Certification",
      description: "Passed the HackerRank skill certification test for advanced SQL queries (Earned: 10 Apr, 2026 | ID: 53EA5621369E).",
    },
    {
      name: "Claude Code Course – Anthropic",
      description: "Certified; applied LLMs for autonomous coding agent design, debugging workflows, and advanced prompt architecture.",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      description: "Completed 22.5-hour training on AWS core infrastructure, VPC configurations, identity management, and serverless compute models.",
    },
  ];

  const categories = ["all", "React", "Full Stack", "Python", "TypeScript", "JavaScript", "Java", "Hardware"];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  // Sort projects descending by year (timeline order)
  const sortedProjects = [...filteredProjects].sort((a, b) => Number(b.year) - Number(a.year));

  // Split sorted projects into Featured and Remaining catalog
  const featuredProjects = sortedProjects.filter(p => p.featured);
  const remainingProjects = sortedProjects.filter(p => !p.featured);

  // Group skills by category for organized display
  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData>);

  /* ===================== LOGO RENDERER ===================== */

  const renderSkillLogo = (iconName: string) => {
    switch (iconName) {
      case "react":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#149eca] fill-none stroke-current" strokeWidth="2.5">
            <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(30 50 50)" />
            <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(90 50 50)" />
            <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(150 50 50)" />
            <circle cx="50" cy="50" r="4.5" fill="currentColor" />
          </svg>
        );
      case "html":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#E34F26] fill-none stroke-current" strokeWidth="2.5">
            <path d="M20 15 L80 15 L73 75 L50 85 L27 75 Z" />
            <path d="M50 25 L70 25 L68 45 L50 45 L50 55 L65 55 L63 68 L50 73 L50 85" strokeWidth="1.5" />
          </svg>
        );
      case "css":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#1572B6] fill-none stroke-current" strokeWidth="2.5">
            <path d="M20 15 L80 15 L73 75 L50 85 L27 75 Z" />
            <path d="M50 25 L30 25 L32 45 L50 45 L50 55 L35 55 L37 68 L50 73 L50 85" strokeWidth="1.5" />
          </svg>
        );
      case "js":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#d1b000] fill-none stroke-current" strokeWidth="2.5">
            <rect x="15" y="15" width="70" height="70" rx="8" />
            <text x="58" y="72" fontSize="36" fontFamily="Outfit, sans-serif" fontWeight="bold" fill="currentColor" textAnchor="middle">JS</text>
          </svg>
        );
      case "ts":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#3178C6] fill-none stroke-current" strokeWidth="2.5">
            <rect x="15" y="15" width="70" height="70" rx="8" />
            <text x="58" y="72" fontSize="36" fontFamily="Outfit, sans-serif" fontWeight="bold" fill="currentColor" textAnchor="middle">TS</text>
          </svg>
        );
      case "python":
        return (
          <svg viewBox="0 0 100 100" className="size-10 fill-none stroke-current" strokeWidth="2.5">
            <path d="M50 10 C35 10 30 18 30 28 L30 38 L50 38 L50 42 L24 42 C16 42 10 48 10 60 C10 72 18 78 28 78 L38 78 L38 72 C38 60 48 50 60 50 L72 50 L72 40 C72 24 64 10 50 10 Z" stroke="#3776AB" />
            <path d="M50 90 C65 90 70 82 70 72 L70 62 L50 62 L50 58 L76 58 C84 58 90 52 90 40 C90 28 82 22 72 22 L62 22 L62 28 C62 40 52 50 40 50 L28 50 L28 60 C28 76 36 90 50 90 Z" stroke="#a48b11" />
          </svg>
        );
      case "java":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#E76F51] fill-none stroke-current" strokeWidth="2.5">
            <path d="M30 85 C30 85 40 92 55 85 C70 78 65 70 65 70" />
            <path d="M35 75 C35 75 45 82 60 75 C75 68 70 60 70 60" />
            <path d="M45 60 C40 50 45 40 55 35 C65 30 75 25 70 15" />
            <path d="M55 60 C50 50 55 42 62 38 C70 34 78 30 75 20" />
          </svg>
        );
      case "cpp":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#00599C] fill-none stroke-current" strokeWidth="2.5">
            <circle cx="50" cy="50" r="35" />
            <text x="50" y="58" fontSize="28" fontFamily="Outfit, sans-serif" fontWeight="bold" fill="currentColor" textAnchor="middle">C++</text>
          </svg>
        );
      case "mongodb":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#47A248] fill-none stroke-current" strokeWidth="2.5">
            <path d="M50 10 C30 35 30 70 50 90 C70 70 70 35 50 10 Z" />
            <path d="M50 10 L50 90" />
          </svg>
        );
      case "mysql":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#00758F] fill-none stroke-current" strokeWidth="2.5">
            <ellipse cx="50" cy="30" rx="30" ry="10" />
            <path d="M20 30 L20 50 C20 60 50 60 50 50 L50 30" />
            <path d="M80 30 L80 50 C80 60 50 60 50 50 L50 30" />
            <path d="M20 50 L20 70 C20 80 50 80 50 70" />
          </svg>
        );
      case "express":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-slate-800 fill-none stroke-current" strokeWidth="2.5">
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="36" fontFamily="Outfit, sans-serif" fontWeight="bold" fill="currentColor">ex</text>
            <circle cx="50" cy="50" r="42" />
          </svg>
        );
      case "node":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#339933] fill-none stroke-current" strokeWidth="2.5">
            <path d="M50 15 L80 32 L80 68 L50 85 L20 68 L20 32 Z" />
            <circle cx="50" cy="50" r="10" />
          </svg>
        );
      case "springboot":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#6DB33F] fill-none stroke-current" strokeWidth="2.5">
            <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" />
            <path d="M50 25 C35 40 35 60 50 75 C65 60 65 40 50 25 Z" />
          </svg>
        );
      case "bootstrap":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#7952B3] fill-none stroke-current" strokeWidth="2.5">
            <rect x="15" y="15" width="70" height="70" rx="15" />
            <text x="50" y="62" fontSize="42" fontFamily="Outfit, sans-serif" fontWeight="bold" fill="currentColor" textAnchor="middle">B</text>
          </svg>
        );
      case "langchain":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#FF5A5F] fill-none stroke-current" strokeWidth="2.5">
            <circle cx="40" cy="40" r="20" />
            <circle cx="60" cy="60" r="20" />
            <line x1="40" y1="40" x2="60" y2="60" strokeWidth="4" />
          </svg>
        );
      case "brain":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#EC4899] fill-none stroke-current" strokeWidth="2.5">
            <path d="M50 20 C35 20 25 30 25 45 C25 60 40 65 50 80 C60 65 75 60 75 45 C75 30 65 20 50 20 Z" />
            <path d="M50 20 L50 80" strokeWidth="1.5" />
            <path d="M35 45 Q50 40 65 45" strokeWidth="1.5" />
          </svg>
        );
      case "streamlit":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#FF4B4B] fill-none stroke-current" strokeWidth="2.5">
            <polygon points="50,15 85,75 15,75" />
            <circle cx="50" cy="55" r="10" />
          </svg>
        );
      case "git":
        return (
          <svg viewBox="0 0 24 24" className="size-10 text-[#F05032] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="12" cy="6" r="3" />
            <path d="M6 9a9 9 0 0 0 9 9" />
            <path d="M12 9v6" />
          </svg>
        );
      case "github":
        return (
          <svg viewBox="0 0 24 24" className="size-10 text-slate-800 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        );
      case "aws":
        return (
          <svg viewBox="0 0 24 24" className="size-10 text-[#FF9900] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      case "docker":
        return (
          <svg viewBox="0 0 24 24" className="size-10 text-[#2496ED] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10.5V13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2.5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM6 6h4v2.5H6zM14 6h4v2.5H14z" />
          </svg>
        );
      case "kubernetes":
        return (
          <svg viewBox="0 0 24 24" className="size-10 text-[#326CE5] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l8.5 5v10L12 22l-8.5-5V7z" />
            <path d="M12 6v12M7.5 12h9" />
          </svg>
        );
      case "jupyter":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#F37626] fill-none stroke-current" strokeWidth="2.5">
            <ellipse cx="50" cy="35" rx="30" ry="10" />
            <ellipse cx="50" cy="65" rx="30" ry="10" />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
          </svg>
        );
      case "dsa":
        return (
          <svg viewBox="0 0 24 24" className="size-10 text-indigo-650 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="9" rx="1" />
            <rect x="14" y="3" width="7" height="5" rx="1" />
            <rect x="14" y="12" width="7" height="9" rx="1" />
            <rect x="3" y="16" width="7" height="5" rx="1" />
            <path d="M7 7h7M10 18h4" />
          </svg>
        );
      case "maven":
        return (
          <svg viewBox="0 0 24 24" className="size-10 text-[#C71A36] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        );
      case "jenkins":
        return (
          <svg viewBox="0 0 24 24" className="size-10 text-[#D24939] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        );
      case "backend":
        return (
          <svg viewBox="0 0 24 24" className="size-10 text-slate-700 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
          </svg>
        );
      case "shield":
        return <ShieldCheck className="size-10 text-emerald-600" />;
      case "redis":
        return (
          <svg viewBox="0 0 100 100" className="size-10 text-[#D82C20] fill-none stroke-current" strokeWidth="2.5">
            <path d="M50 15 L80 30 L80 50 L50 65 L20 50 L20 30 Z" />
            <path d="M50 35 L80 50 L80 70 L50 85 L20 70 L20 50 Z" />
            <path d="M50 55 L80 70 L80 85 L50 95 L20 85 L20 70" />
          </svg>
        );
      default:
        return <Code className="size-10 text-purple-600" />;
    }
  };

  /* ===================== RENDER CALENDAR ===================== */

  const renderGitCalendar = () => {
    const weeks = [];
    const seedRandom = (str: string) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return () => {
        const x = Math.sin(hash++) * 10000;
        return x - Math.floor(x);
      };
    };
    const random = seedRandom("anisha_paturi_contributions");

    for (let w = 0; w < 53; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const val = random();
        let level = 0;
        if (val > 0.85) level = 4;
        else if (val > 0.7) level = 3;
        else if (val > 0.5) level = 2;
        else if (val > 0.25) level = 1;

        if (w > 35 && val > 0.4) {
          level = Math.min(level + 1, 4);
        }

        days.push(level);
      }
      weeks.push(days);
    }

    const getColorClass = (level: number) => {
      switch (level) {
        case 1:
          return "bg-[#c6e48b] border-[#b0d87a]";
        case 2:
          return "bg-[#7bc96f] border-[#6eb762]";
        case 3:
          return "bg-[#239a3b] border-[#1d8731]";
        case 4:
          return "bg-[#196127] border-[#144f1f]";
        default:
          return "bg-[#ebedf0] border-[#dcdfe4]";
      }
    };

    return (
      <div className="flex flex-col items-center p-6 bg-white border border-slate-200/60 rounded-3xl shadow-sm">
        <div className="w-full flex items-center mb-6">
          <div className="flex items-center gap-3">
            <Calendar className="size-5 text-purple-600" />
            <h3 className="text-lg font-bold text-slate-800 tracking-wide font-display">Contributions Graph</h3>
          </div>
        </div>
        <div className="overflow-x-auto w-full flex justify-center py-2 max-w-full">
          <div className="grid grid-flow-col gap-[3px] select-none min-w-[700px]">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="grid grid-rows-7 gap-[3px]">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className={`size-[10px] rounded-[2px] border transition-all duration-300 hover:scale-125 hover:z-10 ${getColorClass(
                      level
                    )}`}
                    title={`Day: ${dIdx + 1}, Week: ${wIdx + 1}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-between mt-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>840 contributions in the last year</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <span>Less</span>
            <div className="size-[10px] rounded-[2px] bg-[#ebedf0] border-[#dcdfe4]" />
            <div className="size-[10px] rounded-[2px] bg-[#c6e48b] border-[#b0d87a]" />
            <div className="size-[10px] rounded-[2px] bg-[#7bc96f] border-[#6eb762]" />
            <div className="size-[10px] rounded-[2px] bg-[#239a3b] border-[#1d8731]" />
            <div className="size-[10px] rounded-[2px] bg-[#196127] border-[#144f1f]" />
            <span>More</span>
          </div>
        </div>
      </div>
    );
  };

  const navItems = [
    ["about", "About Me"],
    ["skills", "Skills"],
    ["experience", "Experience"],
    ["projects", "Projects"],
    ["achievements", "Achievements"],
    ["certifications", "Certifications"],
    ["github-activity", "GitHub"],
    ["contact", "Contact"],
  ];

  return (
    <div className="size-full flex flex-col text-slate-800 relative min-h-screen overflow-hidden bg-[#f4f3f9] selection:bg-purple-500/20 font-sans">
      
      {/* Signature Morphing Cursor (No generic tutorial ring: simple dot that morphs into wayfinding pill) */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center font-sans font-bold uppercase tracking-widest shadow-sm select-none text-white border border-purple-500/10"
          style={{
            x: springX,
            y: springY,
            width: cursorHovered && cursorText ? "auto" : (cursorHovered ? 14 : 8),
            height: cursorHovered && cursorText ? "auto" : (cursorHovered ? 14 : 8),
            borderRadius: "9999px",
            backgroundColor: "#7c3aed",
            padding: cursorHovered && cursorText ? "6px 14px" : "0px",
            fontSize: "9px",
            transform: cursorHovered && cursorText ? "translate(-20px, -20px)" : "translate(12px, 12px)",
          }}
        >
          {cursorHovered && cursorText}
        </motion.div>
      )}

      {/* Page Background: Faint Static Dot-Grid Pattern + Faint Static Hero Blurs Only */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#f4f3f9] bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:24px_24px]">
        {/* Faint static color blurs behind the hero section only */}
        <div className="absolute top-[-10%] right-[-5%] w-[45%] h-[45%] rounded-full bg-rose-200/25 blur-[120px]" />
        <div className="absolute top-[10%] left-[-15%] w-[45%] h-[45%] rounded-full bg-purple-200/20 blur-[130px]" />
      </div>

      {/* ================= FLOATING TOP NAVIGATION HEADER (Light Theme version of 7.png) ================= */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/70 backdrop-blur-2xl border border-slate-200/60 rounded-full px-6 py-3 shadow-sm flex items-center justify-between transition-all duration-300">
        
        {/* Brand Logo Symbol + Text */}
        <button 
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-2.5 text-slate-800 font-extrabold cursor-pointer tracking-wider hover:opacity-85 transition-opacity"
        >
          {/* Simple dark logo mimicking the header symbol in 1.png */}
          <div className="size-6 bg-slate-900 rounded-full flex items-center justify-center text-white text-[11px] font-black tracking-tighter">
            E
          </div>
          <span className="text-xs font-black tracking-widest uppercase font-sans">ANISHA PATURI</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map(([section, label]) => {
            const isActive = activeSection === section;
            return (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer relative py-1 ${
                  isActive ? "text-purple-600 font-extrabold" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {label}
                {isActive && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-purple-600 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full border border-slate-200/40 cursor-pointer transition-colors"
        >
          <Menu className="size-4" />
        </button>
      </header>

      {/* Mobile Fullscreen Glassmorphic Overlay Menu (Light theme) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8 lg:hidden text-slate-900"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-full text-slate-800 cursor-pointer transition-colors"
            >
              <X className="size-6" />
            </button>
            <nav className="flex flex-col gap-6 text-center">
              {navItems.map(([section, label]) => {
                const isActive = activeSection === section;
                return (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-2xl font-black uppercase tracking-widest transition-colors cursor-pointer ${
                      isActive ? "text-purple-600" : "text-slate-500"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MAIN SCROLL CONTENT ================= */}
      <main
        className="relative z-10 min-h-screen w-full overflow-y-auto transition-all duration-500
        max-w-7xl mx-auto px-6 md:px-16 pt-36 pb-20"
      >

        {/* 1. ABOUT ME SECTION (COMBINED HERO & ABOUT ME) */}
        <section id="about" className="scroll-mt-24 pt-8 mb-20">
          <div className="max-w-6xl mx-auto">
            
            {/* Bold typographic headline that anchors the hero section */}
            <h1 className="text-4.5xl sm:text-5.5xl lg:text-6.5xl font-extrabold text-slate-900 tracking-tight font-display mb-14 leading-[1.1] max-w-5xl">
              Building high-performance software at the intersection of engineering and AI.
            </h1>

            {/* Opportunities Specific Badge */}
            <div className="flex justify-start mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase"
              >
                <span className="size-2 rounded-full bg-blue-600 animate-pulse" />
                Open to Grad Roles & SDE Internships
              </motion.div>
            </div>

            {/* Row 1: Profile Graphic Node Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center mb-16 relative">
              
              {/* Left Column: Hello & Roles */}
              <div className="lg:col-span-4 space-y-12 text-left">
                <div>
                  <h4 className="text-6xl font-extrabold text-slate-900 mb-4 font-display">Hello,</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal max-w-sm">
                    Delivering efficient, scalable solutions to transform your tech vision into reality.
                  </p>
                </div>

                {/* Roles with connecting lines */}
                <div className="space-y-6 max-w-sm">
                  {[
                    ["Full Stack Developer", "web"],
                    ["AI/ML Engineer", "ai"],
                    ["Agentic AI Developer", "agents"]
                  ].map(([role, key], idx) => (
                    <div key={idx} className="flex items-center justify-between group">
                      <span className="text-sm font-bold text-slate-600 group-hover:text-purple-600 transition-colors uppercase tracking-widest">{role}</span>
                      <div className="flex-1 mx-4 h-[1px] bg-slate-200 relative hidden sm:block">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 size-2 rounded-full bg-slate-300 group-hover:bg-purple-600 group-hover:scale-125 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Center Column: Portrait Container */}
              <div className="lg:col-span-4 flex justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-300/10 to-blue-300/10 rounded-full blur-3xl -z-10" />
                <div className="relative size-64 sm:size-80 rounded-[40px] border border-slate-200 overflow-hidden shadow-sm bg-white p-3">
                  <img
                    src={profileImage}
                    alt="Anisha Paturi"
                    className="w-full h-full object-cover rounded-[32px] border border-slate-100"
                  />
                </div>
              </div>

              {/* Right Column: Name & Connect Nodes */}
              <div className="lg:col-span-4 space-y-10 lg:text-right flex flex-col lg:items-end">
                <div>
                  {/* Clean standalone name layout (Filler "I am" removed) */}
                  <h5 className="text-5.5xl font-black bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 bg-clip-text text-transparent leading-tight font-display">
                    Anisha Paturi
                  </h5>
                </div>

                {/* Connecting Social Icons */}
                <div className="flex flex-col gap-4 lg:items-end w-full sm:w-auto">
                  <div 
                    className="flex items-center gap-4 bg-white border border-slate-200/80 hover:border-purple-500/30 rounded-xl px-6 py-3.5 shadow-sm hover:shadow-md transition-all cursor-pointer w-full sm:w-fit group interactive-card justify-center lg:justify-end"
                    onClick={() => window.open("https://github.com/AnishaPaturi", "_blank")}
                    onMouseEnter={() => setCursorText("Open")}
                    onMouseLeave={() => setCursorText("")}
                  >
                    <Github className="size-5 text-slate-500 group-hover:text-slate-900 transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 group-hover:text-slate-900 transition-colors">GitHub</span>
                  </div>
                  <div 
                    className="flex items-center gap-4 bg-white border border-slate-200/80 hover:border-blue-500/30 rounded-xl px-6 py-3.5 shadow-sm hover:shadow-md transition-all cursor-pointer w-full sm:w-fit group interactive-card justify-center lg:justify-end"
                    onClick={() => window.open("https://www.linkedin.com/in/anisha-paturi-8b885a2b5", "_blank")}
                    onMouseEnter={() => setCursorText("Open")}
                    onMouseLeave={() => setCursorText("")}
                  >
                    <Linkedin className="size-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 group-hover:text-blue-600 transition-colors">LinkedIn</span>
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap gap-3 w-full justify-center lg:justify-end pt-2">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="px-6 py-3 bg-slate-955 hover:bg-purple-700 text-white rounded-xl shadow-sm transition-all text-xs font-bold uppercase tracking-wider active:scale-95 cursor-pointer interactive-card"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm rounded-xl transition-all text-xs font-bold uppercase tracking-wider active:scale-95 cursor-pointer interactive-card"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
              
            </div>

            {/* Row 2: About Me Card Description */}
            <div className="bg-white/80 border border-slate-200/60 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden mb-12 backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[50px] pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left Column of Card */}
                <div className="lg:col-span-7 space-y-6">
                  <h4 className="text-3xl font-bold text-slate-900 tracking-tight font-display">About Me</h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-normal font-sans">
                    I'm a fourth-year Computer Science Engineering student at <span className="text-purple-600 font-bold">KMIT, Hyderabad</span> (CGPA: 8.6) passionate about building high-performance software that combines strong engineering principles with modern AI.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    My interests lie in backend development, full-stack engineering, distributed systems, and AI-driven applications. I enjoy solving complex problems, optimizing systems for scale, and turning ideas into reliable, production-ready products using Java, Spring Boot, React, Next.js, FastAPI, Python, and SQL/NoSQL databases.
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal">
                    I'm always learning, building, and pushing my skills through challenging projects, with the goal of creating technology that makes a meaningful impact.
                  </p>
                  
                  <div className="pt-4 flex flex-wrap gap-4">
                    <a
                      href="./Resume/Anisha%20Paturi.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Anisha_Paturi_Resume.pdf"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-purple-500/30 hover:border-purple-600 rounded-xl text-purple-700 font-bold text-xs tracking-wider uppercase shadow-sm hover:shadow-purple-500/10 hover:bg-purple-50/30 transition-all duration-300 active:scale-95 cursor-pointer interactive-card"
                      onMouseEnter={() => setCursorText("PDF")}
                      onMouseLeave={() => setCursorText("")}
                    >
                      <span>Download CV</span>
                      <svg viewBox="0 0 24 24" className="size-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right Column of Card: Services/Capabilities */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Card Item 1 */}
                  <div className="flex gap-4 p-6 bg-slate-50/50 border border-slate-200/80 rounded-3xl items-start hover:border-purple-300 hover:bg-white transition-all duration-300 group shadow-sm">
                    <div className="p-3.5 bg-slate-100 border border-slate-200 text-slate-800 rounded-xl shadow-sm shrink-0">
                      <Code className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="font-bold text-slate-850 group-hover:text-purple-600 transition-colors text-sm">Full-Stack Development</h5>
                        <button onClick={() => scrollToSection("projects")} className="p-1.5 bg-white hover:bg-purple-600 hover:text-white rounded-xl border border-slate-200 text-slate-600 transition-colors cursor-pointer">
                          <ExternalLink className="size-3.5" />
                        </button>
                      </div>
                      <p className="text-slate-500 text-xs mt-2 leading-relaxed font-normal">
                        Build responsive, high-performance web and mobile apps using React, Next.js, Node.js, Spring Boot, and React Native.
                      </p>
                    </div>
                  </div>

                  {/* Card Item 2 */}
                  <div className="flex gap-4 p-6 bg-slate-50/50 border border-slate-200/80 rounded-3xl items-start hover:border-purple-300 hover:bg-white transition-all duration-300 group shadow-sm">
                    <div className="p-3.5 bg-slate-100 border border-slate-200 text-slate-800 rounded-xl shadow-sm shrink-0">
                      <Code2 className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="font-bold text-slate-850 group-hover:text-purple-600 transition-colors text-sm">AI & Agentic Systems</h5>
                        <button onClick={() => scrollToSection("projects")} className="p-1.5 bg-white hover:bg-purple-600 hover:text-white rounded-xl border border-slate-200 text-slate-600 transition-colors cursor-pointer">
                          <ExternalLink className="size-3.5" />
                        </button>
                      </div>
                      <p className="text-slate-500 text-xs mt-2 leading-relaxed font-normal">
                        Architect LLM agents, vector databases, RAG search pipelines, semantic parses, and custom multi-agent environments.
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Row 3: Stats Box (Solid slate colors for contrast instead of gradients) */}
            <div className="w-full bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm backdrop-blur-md">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                {/* Stat 1 */}
                <div className="flex flex-col items-center p-2">
                  <span className="text-4xl md:text-5xl font-black text-slate-900">
                    4 Months
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-3">
                    Experience
                  </span>
                </div>
                {/* Stat 2 */}
                <div className="flex flex-col items-center p-2 border-t sm:border-t-0 sm:border-x border-slate-100">
                  <span className="text-4xl md:text-5xl font-black text-slate-900">
                    42
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-3">
                    Projects Completed
                  </span>
                </div>
                {/* Stat 3 */}
                <div className="flex flex-col items-center p-2 border-t sm:border-t-0 border-slate-100">
                  <span className="text-4xl md:text-5xl font-black text-slate-900">
                    840
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mt-3">
                    Git Contributions
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. SKILLS SECTION (Light Theme - Eyebrow removed, Grouped by category subheadings) */}
        <section id="skills" className="scroll-mt-24 pt-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight font-display">Technologies I Work With</h3>
            <p className="text-slate-500 font-normal mb-12 text-lg">My language competencies, frameworks, and databases visualized by experience</p>

            {/* Categorized list layouts to break the massive wall of boxes */}
            <div className="space-y-12">
              {Object.entries(skillsByCategory).map(([category, list]) => (
                <div key={category} className="space-y-5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-sans border-b border-slate-200/60 pb-2.5">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {list.map((skill) => (
                      <div
                        key={skill.name}
                        className="relative w-[45%] sm:w-[170px] bg-white border border-slate-200/60 rounded-3xl p-5 flex flex-col items-center hover:border-purple-500/30 hover:bg-slate-50/50 hover:shadow-lg transition-all duration-300 group interactive-card shadow-sm"
                      >
                        {/* Skill Icon */}
                        <div className="mb-3 text-slate-655 group-hover:scale-110 transition-all duration-300">
                          {renderSkillLogo(skill.icon)}
                        </div>
                        {/* Skill Name */}
                        <h5 className="text-slate-800 font-bold text-sm tracking-tight text-center">{skill.name}</h5>
                        
                        {/* Experience Bar (Solid purple track) */}
                        <div className="w-full bg-slate-100 h-[4px] rounded-full mt-4 overflow-hidden">
                          <motion.div
                            className="h-full bg-purple-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.0, delay: 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. EXPERIENCE SECTION (Chronological eyebrow - Big breath space-y-36 after this) */}
        <section id="experience" className="scroll-mt-24 pt-8 mb-36">
          <div className="max-w-3xl">
            <h2 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 font-sans">2024 — Present</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight font-display">Experience</h3>
            
            <div className="space-y-10 relative pl-4 border-l border-slate-200">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white border border-slate-200/60 rounded-3xl p-8 hover:border-purple-300 transition-colors shadow-sm overflow-hidden group interactive-card"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-600 rounded-full" />
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold mb-1 text-slate-800 group-hover:text-purple-600 transition-colors">{exp.role}</h4>
                        <p className="text-blue-600 text-lg font-semibold">{exp.company}</p>
                      </div>
                      <span className="px-4 py-2 bg-blue-50 border border-blue-200 text-xs text-blue-750 font-mono font-semibold rounded-xl">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-slate-500 leading-relaxed font-normal text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PROJECTS SECTION (Featured projects scale hierarchy + remaining catalog grid, with staggered reveals) */}
        <section id="projects" className="scroll-mt-24 pt-8 mb-36">
          <div className="max-w-6xl">
            <div className="flex flex-wrap items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 font-sans">2022 — 2026</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-display">Featured Projects</h3>
                <p className="text-slate-500 font-normal text-md mt-2">A selective display of engineered tools, libraries, and applications</p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 bg-slate-100 p-2 rounded-xl border border-slate-200/60 backdrop-blur-md">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                      selectedCategory === category
                        ? "bg-purple-100 text-purple-700 border border-purple-200"
                        : "text-slate-500 hover:text-slate-900 border border-transparent"
                    }`}
                  >
                    {category === "all" ? "All Projects" : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Hierarchical layout: Featured Projects display as larger visual cards */}
            <div className="space-y-16">
              {featuredProjects.length > 0 && (
                <div className="space-y-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-sans">Core Innovations</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {featuredProjects.map((project, idx) => {
                      const spanClass = "lg:col-span-6";
                      return (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          key={project.title}
                          className={`${spanClass} group relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-purple-400 hover:shadow-md transition-all duration-500 flex flex-col justify-between interactive-card`}
                          onMouseEnter={() => setCursorText("View")}
                          onMouseLeave={() => setCursorText("")}
                        >
                          {/* Visual mockup banner */}
                          <div className="h-56 w-full relative overflow-hidden bg-gradient-to-br from-purple-50/50 via-slate-50 to-blue-50/30 border-b border-slate-150 flex items-center justify-center">
                            <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
                            
                            <div className="relative z-10 text-center p-8 pointer-events-none">
                              <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-[10px] font-mono mb-3">
                                Featured
                              </div>
                              <h4 className="text-2xl font-bold text-slate-800 font-display">
                                {project.title}
                              </h4>
                            </div>

                            <a
                              href={project.liveLink || project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute top-6 right-6 p-3 bg-white hover:bg-purple-600 text-slate-655 hover:text-white border border-slate-200 hover:border-purple-600 rounded-xl shadow-sm transition-all duration-300 z-20 hover:scale-110 cursor-pointer"
                            >
                              <ExternalLink className="size-5" />
                            </a>
                          </div>

                          {/* Body details */}
                          <div className="p-8 flex flex-col flex-grow justify-between">
                            <div>
                              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                                {project.description}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                              {project.tech.slice(0, 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1.5 bg-slate-100 border border-slate-200/60 rounded-xl text-[11px] font-mono text-purple-600 font-bold uppercase"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.tech.length > 4 && (
                                <span className="px-3 py-1.5 bg-purple-50 border border-purple-200/60 rounded-xl text-[11px] font-mono text-purple-700 font-bold uppercase">
                                  +{project.tech.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Remaining catalogue: Rendered in a clean, compact catalog grid (lower visual weight, with staggered reveal) */}
              {remainingProjects.length > 0 && (
                <div className="space-y-8 pt-8">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-sans">Project Catalogue</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {remainingProjects.map((project, idx) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        key={project.title}
                        className="group relative bg-white/80 border border-slate-200/60 rounded-3xl p-6 flex flex-col justify-between hover:border-purple-300 hover:shadow-md transition-all duration-300 interactive-card"
                        onMouseEnter={() => setCursorText("Open")}
                        onMouseLeave={() => setCursorText("")}
                      >
                        <div>
                          <div className="flex items-center justify-end mb-3">
                            
                            <a
                              href={project.liveLink || project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 bg-slate-50 hover:bg-purple-600 text-slate-500 hover:text-white border border-slate-200 hover:border-purple-600 rounded-xl transition-colors cursor-pointer"
                            >
                              <ExternalLink className="size-3.5" />
                            </a>
                          </div>

                          <h5 className="text-md font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors">
                            {project.title}
                          </h5>
                          <p className="text-slate-500 text-xs font-normal leading-relaxed mb-4 line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {project.tech.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-slate-50 border border-slate-200/40 rounded-xl text-[11px] font-mono text-slate-655 uppercase"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="px-2 py-0.5 bg-purple-50 border border-purple-200/40 rounded-xl text-[11px] font-mono text-purple-700 uppercase">
                              +{project.tech.length - 4} more
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Designed empty state when filteredProjects is empty */}
              {filteredProjects.length === 0 && (
                <div className="w-full text-center py-16 bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm">
                  <p className="text-slate-400 font-sans text-sm">No projects found in the "{selectedCategory}" category.</p>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* 5. ACHIEVEMENTS SECTION (Simplified to clean list layout instead of cards) */}
        <section id="achievements" className="scroll-mt-24 pt-8 mb-20">
          <div className="max-w-4xl">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight font-display">Achievements</h3>
            
            {/* Minimalist vertical list */}
            <div className="border-t border-slate-200 divide-y divide-slate-200 mb-12">
              {accomplishments.map((item, index) => (
                <div
                  key={index}
                  className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <Trophy className="size-4" />
                    </div>
                    <h4 className="text-md font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-slate-500 text-xs font-normal max-w-md sm:text-right">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Extra Engagement List (Simplified list) */}
            <div className="pt-4 border-t border-slate-200">
              <h4 className="text-lg font-bold text-slate-800 mb-6 font-display">Hackathons & Extra Engagement</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
                {engagement.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 py-1.5">
                    <div className="size-1.5 rounded-full bg-purple-500 shrink-0" />
                    <p className="text-slate-650 text-xs font-normal">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. CERTIFICATIONS SECTION (Simplified list, breathing gap mb-28) */}
        <section id="certifications" className="scroll-mt-24 pt-8 mb-28">
          <div className="max-w-4xl">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight font-display">Certifications</h3>

            {/* Minimalist vertical list */}
            <div className="border-t border-slate-200 divide-y divide-slate-200">
              {certifications.map((item, index) => (
                <div
                  key={index}
                  className="py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="size-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="size-4.5" />
                    </div>
                    <div>
                      <h4 className="text-md font-bold text-slate-800 group-hover:text-purple-600 transition-colors leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-slate-500 text-xs font-normal mt-1 leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <span className="px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-[9px] font-bold tracking-widest uppercase text-blue-700 rounded-xl whitespace-nowrap self-start sm:self-center">
                    Verified Certification
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. GITHUB ACTIVITY SECTION (Breaks with mb-36 before Contact) */}
        <section id="github-activity" className="scroll-mt-24 pt-8 mb-36">
          <div className="max-w-4xl">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight font-display">GitHub Activity</h3>
            {renderGitCalendar()}
          </div>
        </section>

        {/* 8. CONTACT SECTION (Light theme 2.png styled) */}
        <section id="contact" className="scroll-mt-24 pt-8 pb-12">
          <div className="max-w-4xl flex flex-col items-center">
            
            <div className="flex flex-col items-center mt-6 w-full">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-10 text-center font-display">Contact me</h3>
              
              <div className="inline-flex flex-wrap items-center justify-center gap-8 md:gap-14 px-10 py-8 bg-white border border-slate-200/80 rounded-3xl shadow-xl max-w-full">
                  {/* Mail */}
                <a
                  href="mailto:paturi.anisha@gmail.com"
                  className="flex flex-col items-center gap-3 group interactive-card"
                  onMouseEnter={() => setCursorText("Mail")}
                  onMouseLeave={() => setCursorText("")}
                >
                  <div className="p-4 bg-blue-50 border border-blue-200 text-blue-600 rounded-xl group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                    <Mail className="size-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 group-hover:text-purple-600 transition-colors">Gmail</span>
                </a>
                
                {/* Phone */}
                <a
                  href="tel:+919876543210"
                  className="flex flex-col items-center gap-3 group interactive-card"
                  onMouseEnter={() => setCursorText("Call")}
                  onMouseLeave={() => setCursorText("")}
                >
                  <div className="p-4 bg-blue-50 border border-blue-200 text-blue-600 rounded-xl group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                    <Smartphone className="size-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 group-hover:text-purple-600 transition-colors">Phone</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/anisha-paturi-8b885a2b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group interactive-card"
                  onMouseEnter={() => setCursorText("Open")}
                  onMouseLeave={() => setCursorText("")}
                >
                  <div className="p-4 bg-blue-50 border border-blue-200 text-blue-600 rounded-xl group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                    <Linkedin className="size-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 group-hover:text-purple-600 transition-colors">LinkedIn</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/AnishaPaturi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group interactive-card"
                  onMouseEnter={() => setCursorText("Open")}
                  onMouseLeave={() => setCursorText("")}
                >
                  <div className="p-4 bg-blue-50 border border-blue-200 text-blue-600 rounded-xl group-hover:bg-purple-50 group-hover:text-purple-600 group-hover:scale-110 group-hover:shadow-sm transition-all duration-300">
                    <Github className="size-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 group-hover:text-purple-600 transition-colors">GitHub</span>
                </a>
                
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="w-full text-center text-slate-400 text-xs py-8 border-t border-slate-200">
          <p>© {new Date().getFullYear()} Anisha Paturi. Built with React, Vite & Motion.</p>
        </footer>

      </main>
    </div>
  );
}
