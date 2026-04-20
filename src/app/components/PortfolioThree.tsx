import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Home,
  Briefcase,
  User,
  MessageSquare,
  Menu,
  Award,
  Code,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import profileImage from "../../assets/profile.png";

export default function PortfolioThree() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Auto-collapse sidebar on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  }, []);

  /* ===================== DATA ===================== */
  
  const projects = [
    {
      title: "AI-pdf-chatbot",
      description: "AI-powered PDF chatbot for intelligent document interaction and query handling.",
      tech: ["TypeScript", "AI"],
      link: "https://github.com/AnishaPaturi/AI-pdf-chatbot",
      year: "2026",
      category: "TypeScript",
    },
    {
      title: "AI-Interview",
      description: "Premium AI Interview Platform UI with professional motion design and AI-driven interview analysis.",
      tech: ["TypeScript", "Next.js", "Framer Motion", "AI"],
      link: "https://github.com/AnishaPaturi/AI-Interview",
      year: "2026",
      category: "TypeScript",
    },
    {
      title: "FactForge",
      description: "Full-stack AI-driven platform for misinformation detection with NLP claim extraction.",
      tech: ["React", "Node.js", "Python", "NLP", "Transformers", "Recharts"],
      link: "https://github.com/AnishaPaturi/FactForge",
      liveLink: "https://fact-forge.vercel.app",
      year: "2026",
      category: "Full Stack",
    },
    {
      title: "IPL-Predictor-2026",
      description: "Full-stack IPL 2026 winner prediction using ML and historical data.",
      tech: ["React", "Python", "FastAPI", "Machine Learning"],
      link: "https://github.com/AnishaPaturi/IPL-Predictor-2026",
      liveLink: "https://ipl-predictor-2026-nu.vercel.app",
      year: "2026",
      category: "Full Stack",
    },
    {
      title: "Ctrl+S of Shame",
      description: "VS Code extension detecting errors on file save using VS Code Diagnostics API.",
      tech: ["TypeScript", "VS Code Extension API", "Node.js"],
      link: "https://github.com/AnishaPaturi/CtrlSofShame",
      year: "2026",
      category: "TypeScript",
    },
    {
      title: "Movie Recommendation Platform",
      description: "AI-powered movie recommendation system with collaborative filtering.",
      tech: ["JavaScript", "AI"],
      link: "https://github.com/AnishaPaturi/movie-recommendation-platform",
      year: "2026",
      category: "JavaScript",
    },
    {
      title: "VizTalk",
      description: "Conversational data analytics platform transforming voice/text to insights and charts.",
      tech: ["Python", "Streamlit", "Whisper", "FFmpeg", "OpenRouter", "DeepSeek"],
      link: "https://github.com/AnishaPaturi/VizTalk",
      year: "2025",
      category: "Python",
    },
    {
      title: "AlgoMentor Agentic DSA Planner",
      description: "AI-driven personal DSA coach for problem-solving journeys and progress tracking.",
      tech: ["Python", "AI", "Streamlit"],
      link: "https://github.com/AnishaPaturi/AlgoMentor-Agentic-DSA-Planner",
      year: "2025",
      category: "Python",
    },
    {
      title: "ResumeIQ",
      description: "AI-powered resume scanner with ATS scoring and skill gap analysis.",
      tech: ["JavaScript", "React", "AI"],
      link: "https://github.com/AnishaPaturi/ResumeIQ",
      year: "2025",
      category: "Full Stack",
    },
    {
      title: "Secret Santa",
      description: "Real-time Secret Santa app with QR code joining and festive UI animations.",
      tech: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      link: "https://github.com/AnishaPaturi/Secret-Santa-",
      liveLink: "https://secret-santa-theta-nine.vercel.app/",
      year: "2024",
      category: "Full Stack",
    },
    {
      title: "Mood Angles",
      description: "AI-driven mental wellness app for mood tracking and psychiatrist connections.",
      tech: ["React", "Python", "Agentic AI", "MongoDB", "Express.js", "Node.js"],
      link: "https://github.com/AnishaPaturi/Mood-Angles",
      year: "2024",
      category: "Full Stack",
    },
    {
      title: "SafeStreet",
      description: "AI-powered platform for road damage detection via mobile and web interfaces.",
      tech: ["React", "Transformers", "MongoDB", "Node.js", "Express.js"],
      link: "https://github.com/AnishaPaturi/SafeStreetApplication",
      year: "2024",
      category: "Full Stack",
    },
    {
      title: "College Connect",
      description: "Campus life platform with events, announcements, and study resources.",
      tech: ["JavaScript", "MongoDB", "Express.js", "Node.js"],
      link: "https://github.com/AnishaPaturi/College-Connect",
      year: "2024",
      category: "Full Stack",
    },
    {
      title: "Talent Match",
      description: "Platform connecting users with skilled individuals for problem-solving.",
      tech: ["JavaScript", "MongoDB", "Express.js", "Node.js"],
      link: "https://github.com/AnishaPaturi/Talent-Match",
      year: "2024",
      category: "Full Stack",
    },
    {
      title: "AutoDeck",
      description: "AI-powered presentation generator creating slide decks from text input.",
      tech: ["Python", "OpenAI", "Flask", "AI"],
      link: "https://github.com/AnishaPaturi/AutoDeck",
      year: "2024",
      category: "Python",
    },
    {
      title: "GradeSync",
      description: "Student grade management system using Python, PHP, and SQL.",
      tech: ["Python", "PHP", "MySQL", "HTML", "CSS"],
      link: "https://github.com/AnishaPaturi/GradeSync",
      year: "2024",
      category: "Python",
    },
    {
      title: "PythonLonden",
      description: "PHP Symfony to Python transformation for Campaign Manager.",
      tech: ["Python", "Campaign Management"],
      link: "https://github.com/AnishaPaturi/PythonLonden",
      year: "2024",
      category: "Python",
    },
    {
      title: "LinkUp",
      description: "Networking and connection platform for professionals.",
      tech: ["JavaScript"],
      link: "https://github.com/AnishaPaturi/LinkUp",
      year: "2024",
      category: "JavaScript",
    },
    {
      title: "Lie Detector Game",
      description: "Interactive game testing honesty detection capabilities.",
      tech: ["Java"],
      link: "https://github.com/AnishaPaturi/LieDetectorGame",
      year: "2024",
      category: "Java",
    },
    {
      title: "Attendance Tracker",
      description: "System for tracking and managing attendance records.",
      tech: ["TypeScript"],
      link: "https://github.com/AnishaPaturi/attendance-tracker",
      year: "2024",
      category: "TypeScript",
    },
    {
      title: "AuthenCode",
      description: "Secure authentication system with JWT and bcrypt.",
      tech: ["Node.js", "JWT", "bcrypt", "Security"],
      link: "https://github.com/AnishaPaturi/AuthenCode",
      year: "2023",
      category: "Node.js",
    },
    {
      title: "CodeChecker",
      description: "Automated code review and quality checking tool.",
      tech: ["Python", "Static Analysis", "CI/CD"],
      link: "https://github.com/AnishaPaturi/CodeChecker",
      year: "2023",
      category: "Python",
    },
    {
      title: "FeedForward",
      description: "Community-driven feedback platform with real-time updates.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      link: "https://github.com/AnishaPaturi/FeedForward",
      year: "2023",
      category: "React",
    },
    {
      title: "SafeStreet Web",
      description: "Web companion with mapping and real-time WebSocket updates.",
      tech: ["React", "Google Maps API", "WebSockets"],
      link: "https://github.com/AnishaPaturi/SafeStreetWeb",
      year: "2023",
      category: "React",
    },
    {
      title: "BlueDrive Rover",
      description: "Autonomous rover with Raspberry Pi, IoT, and computer vision.",
      tech: ["Python", "Raspberry Pi", "IoT", "Computer Vision"],
      link: "https://github.com/AnishaPaturi/BlueDrive-Rover",
      year: "2023",
      category: "Python",
    },
    {
      title: "Field Antimicrobial Usage App",
      description: "Mobile app for tracking antimicrobial usage in agriculture.",
      tech: ["React Native", "Firebase", "Data Analytics"],
      link: "https://github.com/AnishaPaturi/Field-Antimicrobial-Usage-App",
      year: "2023",
      category: "React Native",
    },
    // {
    //   title: "AWS Certified Cloud Practitioner Notes",
    //   description: "Notes compiled from AWS E-Learning lessons.",
    //   tech: ["AWS", "Cloud"],
    //   link: "https://github.com/AnishaPaturi/AWS-Certified-Cloud-Practitioner-Notes",
    //   year: "2023",
    //   category: "AWS",
    // },
    {
      title: "Weather App",
      description: "Real-time weather app with forecasts and location-based alerts.",
      tech: ["React", "Weather API", "Geolocation"],
      link: "https://github.com/AnishaPaturi/WeatherApp",
      year: "2022",
      category: "React",
    },
    {
      title: "Amazon Clone",
      description: "E-commerce clone with Redux, Firebase, and Stripe.",
      tech: ["React", "Redux", "Firebase", "Stripe"],
      link: "https://github.com/AnishaPaturi/Amazon-Clone",
      year: "2022",
      category: "React",
    },
    {
      title: "IgniteJEE",
      description: "Java EE learning and practice platform.",
      tech: ["Java"],
      link: "https://github.com/AnishaPaturi/IgniteJEE",
      year: "2024",
      category: "Java",
    },
    {
      title: "Interview Prep",
      description: "Platform for interview preparation and practice.",
      tech: ["Java"],
      link: "https://github.com/AnishaPaturi/Interview-Prep",
      year: "2024",
      category: "Java",
    },
  ];

  const engagement = [
    "3rd place in an Agentic AI Hackathon, 2025",
    "Participated in a Product Space Hackathon, 2025",
    "Worked as Volunteer in NMDC Hyderabad Marathon, 2024",
    "Worked as Volunteer for DBMS Workshop in KMIT, 2024",
    "Attended a workshop at IITH for Gen AI course",
    "Participated in VJIT Hackathon, 2023",
  ];

  const skills = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "Python", "Flask", "FastAPI"],
    "Databases": ["MySQL", "MongoDB", "Firebase"],
    "Programming": ["C", "C++", "Java", "Python", "TypeScript"],
    "AI/ML": ["Machine Learning", "Deep Learning", "Transformers", "GenAI", "Streamlit", "Agentic AI"],
    "Tools & Cloud": ["Git", "AWS", "Docker", "VS Code", "Raspberry Pi"],
    "Libraries": ["Framer Motion", "Redux", "Bootstrap", "SpringBoot", "LangChain", "LangGraph", "Recharts"],
  };

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
        "Developed GradeSync, a student grade management system using Python, PHP, and SQL. Streamlined managing student data and class averages through a web-based interface. Received Letter of Recommendation from Director of Software Engineering for outstanding performance, teamwork, and quick learning.",
      link: "https://github.com/AnishaPaturi/GradeSync",
      tech: ["Python", "PHP", "MySQL", "HTML", "CSS"],
      recommendation: "Received Letter of Recommendation from Director of Software Engineering for outstanding performance, teamwork, and quick learning.",
    },
  ];

  const education = {
    degree: "BTech in Computer Science Engineering",
    college: "KMIT, Hyderabad",
    period: "2023 - 2027",
    cgpa: "8.6 CGPA",
  };

  const accomplishments = [
    {
      name: "1st Position at GeeksForGeeks Intra-College Hackathon",
      description: "Secured first place in the 2026 GeeksForGeeks hackathon competition.",
    },
    {
      name: "HackerRank SQL (Advanced) Skill Certification",
      description: "Passed the HackerRank skill certification test for advanced SQL (Earned: 10 Apr, 2026 | ID: 53EA5621369E).",
    },
    {
      name: "Claude Code Course – Anthropic",
      description: "Certified; applied LLMs for coding, debugging, and prompt engineering.",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      description: "Completed 22.5-hour training on AWS fundamentals, including cloud architecture, core services, security, and pricing.",
    },
  ];

  const categories = ["all", "React", "Full Stack", "Python", "TypeScript", "JavaScript", "Java", "React Native", "Node.js", "AWS"];
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  /* ===================== UI ===================== */

  return (
    <div className="size-full flex text-white relative min-h-screen overflow-hidden bg-[#050505] selection:bg-purple-500/30">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`w-72 bg-black/40 backdrop-blur-2xl border-r border-white/5 flex flex-col fixed h-full z-50
        transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 shadow-2xl shadow-purple-900/10`}
      >
        <div className="p-8 border-b border-white/5 flex flex-col items-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={profileImage}
            alt="Anisha Paturi"
            className="size-24 rounded-2xl object-cover mb-5 border border-white/10 shadow-lg shadow-purple-500/20"
          />
          <h2 className="text-xl font-semibold tracking-wide bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Anisha Paturi</h2>
          <p className="text-xs text-purple-300/60 mt-1.5 font-medium tracking-widest uppercase">Full Stack Developer</p>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {[
            ["home", Home],
            ["projects", Briefcase],
            ["skills", Code],
            ["experience", Briefcase],
            ["accomplishments", Award],
            ["about", User],
            ["contact", MessageSquare],
          ].map(([section, Icon]) => {
            const isActive = activeSection === section;
            return (
              <button
                key={section as string}
                onClick={() => {
                  setActiveSection(section as string);
                  if (window.innerWidth < 768) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/5 rounded-xl border border-purple-500/20"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  />
                )}
                {/* @ts-ignore */}
                <Icon className={`size-5 relative z-10 transition-transform duration-300 ${isActive ? "scale-110 text-purple-400" : "group-hover:scale-110"}`} />
                <span className="capitalize relative z-10 font-medium tracking-wide">{section}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-8 border-t border-white/5">
          <div className="flex items-center justify-center gap-6">
            <motion.a whileHover={{ scale: 1.2, color: "#c084fc" }} href="https://github.com/AnishaPaturi" target="_blank" rel="noreferrer" className="text-gray-400 transition-colors">
              <Github className="size-5" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#60a5fa" }} href="https://www.linkedin.com/in/anisha-paturi-8b885a2b5" target="_blank" rel="noreferrer" className="text-gray-400 transition-colors">
              <Linkedin className="size-5" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#f472b6" }} href="mailto:paturi.anisha@gmail.com" className="text-gray-400 transition-colors">
              <Mail className="size-5" />
            </motion.a>
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main
        className="relative z-10 min-h-screen w-full overflow-auto transition-all duration-500 
        px-6 md:px-16 md:pl-80 pt-20 md:pt-16 pb-20"
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white shadow-lg"
        >
          <Menu className="size-5" />
        </button>

        <AnimatePresence mode="wait">
          {/* Home Section */}
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}
              className="min-h-[80vh] flex items-center justify-center lg:justify-start"
            >
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-8"
                >
                  <span className="size-2 rounded-full bg-purple-400 animate-pulse" />
                  Available for new opportunities
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter"
                >
                  Hi, I'm <br className="md:hidden" />
                  <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent filter drop-shadow-md">
                    Anisha.
                  </span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                  className="text-2xl text-gray-300 mb-8 font-light tracking-wide"
                >
                  Full Stack & AI-Driven Developer
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                  className="text-gray-400 mb-12 text-lg leading-relaxed font-light max-w-2xl"
                >
                  Passionate Computer Science Engineering student at KMIT (CGPA 8.6) with hands-on experience in full-stack and AI-driven development. Dedicated to building scalable, intelligent solutions that create real-world impact.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4 mb-16"
                >
                  <button
                    onClick={() => setActiveSection("projects")}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all font-medium tracking-wide border border-white/10"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => setActiveSection("contact")}
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 rounded-xl transition-all font-medium tracking-wide"
                  >
                    Get In Touch
                  </button>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-3 text-sm font-medium"
                >
                  {["MERN Stack", "Python", "Java", "AI/ML", "Agentic AI"].map((tech) => (
                    <span key={tech} className="px-5 py-2.5 bg-black/40 backdrop-blur-sm border border-white/5 rounded-xl text-purple-200/70 shadow-inner shadow-white/5">
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Projects Section */}
          {activeSection === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl font-bold mb-4 tracking-tight">Projects.</h1>
              <p className="text-gray-400 font-light mb-12 text-lg">A collection of my recent work</p>
              
              <div className="flex flex-wrap items-center gap-3 mb-10 bg-white/5 p-2 rounded-2xl w-fit border border-white/5 backdrop-blur-md">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category 
                      ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" 
                      : "text-gray-400 hover:text-white border border-transparent"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}
                      key={project.title}
                      className="group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/40 hover:bg-white/5 transition-all duration-500 overflow-hidden shadow-2xl shadow-black/50"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors tracking-tight">{project.title}</h3>
                            <span className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-purple-200/50">{project.year}</span>
                          </div>
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href={project.liveLink || project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 hover:bg-purple-500 hover:text-white border border-white/10 hover:border-purple-400 rounded-xl transition-all duration-300 shadow-lg"
                          >
                            <ExternalLink className="size-5" />
                          </motion.a>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light min-h-[4rem]">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs font-medium text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl font-bold mb-4 tracking-tight">Skills.</h1>
              <p className="text-gray-400 font-light mb-12 text-lg">Technical expertise and technologies</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-colors"
                  >
                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                        <Code className="size-4 text-purple-400" />
                      </div>
                      {category}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-br from-purple-900/30 to-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8">
                <h2 className="text-xl font-semibold mb-6">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-medium text-purple-300">AWS Certified Cloud Practitioner</h3>
                    <p className="text-gray-400 text-sm">22.5-hour training on AWS fundamentals</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-medium text-purple-300">HackerRank SQL (Advanced)</h3>
                    <p className="text-gray-400 text-sm">Skill certification for advanced SQL</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-medium text-purple-300">Claude Code Course</h3>
                    <p className="text-gray-400 text-sm">Anthropic certified for LLMs in coding</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl font-bold mb-4 tracking-tight">Experience.</h1>
              <p className="text-gray-400 font-light mb-12 text-lg">Professional journey and internships</p>
              
              <div className="space-y-8 max-w-3xl">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/40 transition-colors overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    <div className="pl-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1 text-white">{exp.role}</h3>
                          <p className="text-blue-400 text-lg font-medium">{exp.company}</p>
                        </div>
                        <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-xl text-sm text-blue-300">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-400 leading-relaxed font-light mb-4">{exp.description}</p>
                      {exp.tech && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.tech.map((t, i) => (
                            <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-300">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                      {exp.recommendation && (
                        <div className="flex items-center gap-2 text-green-400 text-sm mb-3">
                          <Award className="size-4" />
                          <span>{exp.recommendation}</span>
                        </div>
                      )}
                      {exp.link && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-xl text-sm text-purple-300 hover:bg-purple-500/20 transition-colors"
                        >
                          <ExternalLink className="size-4" />
                          View Project
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Accomplishments Section */}
          {activeSection === "accomplishments" && (
            <motion.div
              key="accomplishments"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl font-bold mb-4 tracking-tight">Accomplishments.</h1>
              <p className="text-gray-400 font-light mb-12 text-lg">Achievements and recognitions</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                {accomplishments.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-fuchsia-500/40 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-500/30 flex items-center justify-center shrink-0">
                        <span className="text-fuchsia-400 text-2xl font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-gray-200 group-hover:text-fuchsia-300 transition-colors">{item.name}</h3>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Hackathons & Events</h2>
                <div className="space-y-4 max-w-3xl">
                  {engagement.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                      <div className="size-2 bg-gradient-to-br from-fuchsia-400 to-purple-600 rounded-full mt-2 shrink-0" />
                      <p className="text-gray-300 font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* About Section */}
          {activeSection === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl font-bold mb-4 tracking-tight">About Me.</h1>
              <p className="text-gray-400 font-light mb-12 text-lg">My journey and experience</p>
              
              <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-16">
                  {/* Background */}
                  <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                        <User className="size-4 text-purple-400" />
                      </div>
                      Background
                    </h2>
                    <p className="text-gray-400 leading-relaxed font-light mb-4">
                      Passionate Computer Science Engineering student at KMIT (CGPA 8.6) with hands-on experience in full-stack and AI-driven development. Skilled in the MERN stack, Java, and Python, with internship experience at IBaseIT and ODT.
                    </p>
                    <p className="text-gray-400 leading-relaxed font-light">
                      Dedicated to building scalable, intelligent solutions that create real-world impact. I enjoy working across the entire stack, from designing intuitive user interfaces to architecting robust backend systems.
                    </p>
                  </div>

                  {/* Education */}
                  <div>
                    <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                        <User className="size-4 text-purple-400" />
                      </div>
                      Education
                    </h2>
                    <div className="bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 relative overflow-hidden">
                      <h3 className="text-lg font-medium">{education.degree}</h3>
                      <p className="text-purple-300 text-sm mt-2 mb-4">{education.college} <br/> {education.period}</p>
                      <div className="inline-block px-4 py-2 bg-white/10 rounded-xl text-sm font-mono border border-white/10">
                        {education.cgpa}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Contact Section */}
          {activeSection === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
              className="min-h-[80vh] flex items-center justify-center lg:justify-start"
            >
              <div className="max-w-2xl w-full">
                <h1 className="text-5xl font-bold mb-4 tracking-tight">Get In Touch.</h1>
                <p className="text-gray-400 mb-12 text-lg font-light">
                  I'm always interested in hearing about new projects and opportunities.
                </p>
                <div className="grid gap-6">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="mailto:paturi.anisha@gmail.com"
                    className="flex items-center gap-6 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-purple-500/50 hover:bg-white/5 transition-all group"
                  >
                    <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-2xl group-hover:bg-purple-500/20 transition-colors">
                      <Mail className="size-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">Email directly</h3>
                      <p className="text-gray-400 text-sm font-light">paturi.anisha@gmail.com</p>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://github.com/AnishaPaturi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-gray-500/50 hover:bg-white/5 transition-all group"
                  >
                    <div className="p-4 bg-gray-500/10 border border-gray-500/20 rounded-2xl group-hover:bg-gray-500/20 transition-colors">
                      <Github className="size-6 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">View code</h3>
                      <p className="text-gray-400 text-sm font-light">@AnishaPaturi</p>
                    </div>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://www.linkedin.com/in/anisha-paturi-8b885a2b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl hover:border-blue-500/50 hover:bg-white/5 transition-all group"
                  >
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl group-hover:bg-blue-500/20 transition-colors">
                      <Linkedin className="size-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">Connect professionally</h3>
                      <p className="text-gray-400 text-sm font-light">Connect with me on LinkedIn</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
