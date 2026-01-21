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
} from "lucide-react";
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

  /* ===================== DATA (UNCHANGED) ===================== */
  
  const projects = [
    {
      title: "Secret Santa",
      description: "A full-stack, real-time Secret Santa web application that allows users to create private groups, join via QR code or shared link, add participants live, and receive gift assignments privately on their own devices. The app supports both single-device pass-the-phone mode and multi-device real-time group mode with admin-controlled game start, festive UI, animations, snow effects, sound effects, and confetti.",
      tech: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      link: "https://github.com/AnishaPaturi/Secret-Santa-",
      year: "2024",
      category: "Full Stack",
    },
    {
      title: "Mood Angles",
      description: "A comprehensive AI-driven mental wellness application designed to help users track their moods, manage wellness, and connect with psychiatrists. Built with modern web technologies and Agentic AI for a seamless user experience.",
      tech: ["React", "Python", "Agentic AI", "MongoDB", "Express.js", "Node.js"],
      link: "https://github.com/AnishaPaturi/Mood-Angles",
      year: "2024",
      category: "Full Stack",
    },
    {
      title: "SafeStreet",
      description: "An AI-powered platform that detects, reports, and manages road damage via mobile and web interfaces. Users can capture images of potholes/cracks, auto-classify severity, send reports, and authorities get a dashboard to track & act on road safety issues.",
      tech: ["React", "Transformers", "MongoDB", "Node.js", "Express.js"],
      link: "https://github.com/AnishaPaturi/SafeStreetApplication",
      year: "2024",
      category: "Full Stack",
    },
    {
      title: "College Connect",
      description: "A web platform that unifies campus life by offering students access to events, announcements, study resources, and forums in one place. It streamlines college communication, giving admins tools to manage content while students stay plugged into academic and social updates.",
      tech: ["JavaScript", "MongoDB", "Express.js", "Node.js"],
      link: "https://github.com/AnishaPaturi/College-Connect",
      year: "2024",
      category: "Full Stack",
    },
    {
      title: "Talent Match",
      description: "A platform where users post problems or skill-based queries, and the system matches them with knowledgeable individuals. If someone accepts, they collaborate on a shared interface to solve the issue together.",
      tech: ["JavaScript", "MongoDB", "Express.js", "Node.js"],
      link: "https://github.com/AnishaPaturi/Talent-Match",
      year: "2024",
      category: "Full Stack",
    },
    {
      title: "GradeSync",
      description: "A student grade management system that uses Python, PHP, and SQL to add, display, and calculate student grades efficiently. It streamlines managing student data and class averages through a web-based interface. Built during IBaseIT internship.",
      tech: ["Python", "PHP", "MySQL", "HTML", "CSS"],
      link: "https://github.com/AnishaPaturi/GradeSync",
      year: "2024",
      category: "Python",
    },
    {
      title: "PythonLonden",
      description: "A project that transforms the PHP Symfony 1-based Londen's Campaign Manager into Python, aiming to enhance maintainability and performance. The original system offers dashboards for mailed campaigns, response tracking, and data visualization. Built during ODT internship.",
      tech: ["Python", "Campaign Management"],
      link: "https://github.com/AnishaPaturi/PythonLonden",
      year: "2024",
      category: "Python",
    },
    {
      title: "AuthenCode",
      description: "Secure authentication system implementing modern encryption standards and best security practices with JWT token-based authentication and bcrypt password hashing.",
      tech: ["Node.js", "JWT", "bcrypt", "Security"],
      link: "https://github.com/AnishaPaturi/AuthenCode",
      year: "2023",
      category: "Node.js",
    },
    {
      title: "CodeChecker",
      description: "Automated code review and quality checking tool that helps developers maintain code standards and best practices through static analysis and continuous integration.",
      tech: ["Python", "Static Analysis", "CI/CD"],
      link: "https://github.com/AnishaPaturi/CodeChecker",
      year: "2023",
      category: "Python",
    },
    {
      title: "Field Antimicrobial Usage App",
      description: "Mobile application for tracking and managing antimicrobial usage in agricultural field settings with data analytics capabilities for monitoring and reporting.",
      tech: ["React Native", "Firebase", "Data Analytics"],
      link: "https://github.com/AnishaPaturi/Field-Antimicrobial-Usage-App",
      year: "2023",
      category: "React Native",
    },
    {
      title: "FeedForward",
      description: "Community-driven feedback platform enabling constructive peer reviews and collaborative improvement with real-time updates and user engagement features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      link: "https://github.com/AnishaPaturi/FeedForward",
      year: "2023",
      category: "React",
    },
    {
      title: "AutoDeck",
      description: "AI-powered presentation generator that creates professional slide decks from simple text input using OpenAI's language models and Flask backend.",
      tech: ["Python", "OpenAI", "Flask", "AI"],
      link: "https://github.com/AnishaPaturi/AutoDeck",
      year: "2024",
      category: "Python",
    },
    {
      title: "Weather App",
      description: "Real-time weather application with detailed forecasts, interactive maps, and location-based alerts powered by weather APIs and geolocation services.",
      tech: ["React", "Weather API", "Geolocation"],
      link: "https://github.com/AnishaPaturi/WeatherApp",
      year: "2022",
      category: "React",
    },
    {
      title: "Amazon Clone",
      description: "Full-featured e-commerce platform replicating Amazon's core functionality including shopping cart, payment processing with Stripe, checkout flow, and user authentication with Redux state management.",
      tech: ["React", "Redux", "Firebase", "Stripe"],
      link: "https://github.com/AnishaPaturi/Amazon-Clone",
      year: "2022",
      category: "React",
    },
    {
      title: "To-Do",
      description: "Clean and intuitive task management application with priority sorting, deadline tracking, and local storage persistence for managing daily tasks efficiently.",
      tech: ["React", "Local Storage", "CSS"],
      link: "https://github.com/AnishaPaturi/To-Do",
      year: "2022",
      category: "React",
    },
    {
      title: "SafeStreet Web",
      description: "Web companion application to SafeStreet mobile app with enhanced mapping capabilities, real-time updates via WebSockets, and comprehensive community safety features.",
      tech: ["React", "Google Maps API", "WebSockets"],
      link: "https://github.com/AnishaPaturi/SafeStreetWeb",
      year: "2023",
      category: "React",
    },
    {
      title: "BlueDrive Rover",
      description: "Autonomous rover project with remote control capabilities and sensor integration for navigation using Raspberry Pi, Python programming, IoT sensors, and computer vision for obstacle detection.",
      tech: ["Python", "Raspberry Pi", "IoT", "Computer Vision"],
      link: "https://github.com/AnishaPaturi/BlueDrive-Rover",
      year: "2023",
      category: "Python",
    },
  ];

  const engagement = [
    "Participated in VJIT Hackathon, 2023",
    "Attended a workshop at IITH for Gen AI course",
    "Worked as Volunteer for DBMS Workshop in KMIT, 2024",
    "Worked as Volunteer in NMDC Hyderabad Marathon, 2024",
    "Participated in a Product Space Hackathon, 2025",
  ];

  const skills = {
    "Front End": ["HTML", "CSS", "JavaScript", "React"],
    "Middle Tier": ["C", "Java", "Python", "C++"],
    "Back End": ["MySQL", "MongoDB", "Express.js", "Node.js"],
    Frameworks: ["Bootstrap", "SpringBoot"],
    "AI/ML": ["Machine Learning", "Deep Learning", "Transformers", "GenAI", "Streamlit"],
    "Agentic AI": ["LangChain", "LangGraph"],
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
        "Developed GradeSync, a student grade management system using Python, PHP, and SQL. Streamlined managing student data and class averages through a web-based interface.",
    },
  ];

  const education = {
    degree: "BTech in Computer Science Engineering",
    college: "KMIT, Hyderabad",
    period: "2023 - 2027",
    cgpa: "8.6 CGPA",
  };


  const categories = ["all", "React", "Full Stack", "Python", "React Native", "Node.js"];
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  /* ===================== UI ===================== */

  return (
    <div className="size-full flex bg-[#0a0a0a] text-white">
      {/* ================= SIDEBAR ================= */}
      <aside
        className={`w-64 bg-[#111] border-r border-gray-800 flex flex-col fixed h-full z-50
        transform transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-6 border-b border-gray-800">
          <img
            src={profileImage}
            alt="Anisha Paturi"
            className="size-16 rounded-lg object-cover mb-3"
          />
          <h2 className="text-lg">Anisha Paturi</h2>
          <p className="text-sm text-gray-400">Full Stack Developer</p>
        </div>

        <nav className="flex-1 p-4">
          {[
            ["home", Home],
            ["projects", Briefcase],
            ["about", User],
            ["contact", MessageSquare],
          ].map(([section, Icon]) => (
            <button
              key={section}
              onClick={() => {
                setActiveSection(section);
                if (window.innerWidth < 768) setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeSection === section
                  ? "bg-purple-500/20 text-purple-400"
                  : "hover:bg-gray-800"
              }`}
            >
              <Icon className="size-4" />
              <span className="capitalize">{section}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center justify-center gap-3">
            <a href="https://github.com/AnishaPaturi" target="_blank">
              <Github className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/anisha-paturi-8b885a2b5"
              target="_blank"
            >
              <Linkedin className="size-4" />
            </a>
            <a href="mailto:paturi.anisha@gmail.com">
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main
        className="min-h-screen w-full overflow-auto bg-[#0a0a0a] transition-all duration-300
        px-6 md:px-12 md:pl-64"
      >
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#111] border border-gray-800 rounded-lg"
        >
          <Menu className="size-5" />
        </button>

        {/* Main Content */}
      
        {/* Home Section */}
        {activeSection === "home" && (
          <div className="min-h-screen flex items-center justify-center px-12">
            <div className="max-w-3xl">
              <h1 className="text-6xl mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Hi, I'm Anisha Paturi
              </h1>
              <p className="text-2xl text-gray-300 mb-8">
                Full Stack & AI-Driven Developer
              </p>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Passionate Computer Science Engineering student at KMIT (CGPA 8.6) with hands-on experience in full-stack and AI-driven development. Skilled in the MERN stack, Java, and Python, with internship experience at IBaseIT and ODT. Dedicated to building scalable, intelligent solutions that create real-world impact.
              </p>
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveSection("projects")}
                  className="px-6 py-3 bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  View My Work
                </button>
                <button
                  onClick={() => setActiveSection("contact")}
                  className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get In Touch
                </button>
              </div>
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-4 py-2 bg-[#111] border border-gray-800 rounded-lg">MERN Stack</span>
                <span className="px-4 py-2 bg-[#111] border border-gray-800 rounded-lg">Python</span>
                <span className="px-4 py-2 bg-[#111] border border-gray-800 rounded-lg">Java</span>
                <span className="px-4 py-2 bg-[#111] border border-gray-800 rounded-lg">AI/ML</span>
                <span className="px-4 py-2 bg-[#111] border border-gray-800 rounded-lg">GenAI</span>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className="min-h-screen p-12 bg-[#0a0a0a]">
            <h1 className="text-4xl mb-3">Projects</h1>
            <p className="text-gray-400 mb-12">A collection of my recent work</p>
            <div className="flex items-center mb-6">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCategory === category ? "bg-purple-500/20 text-purple-400" : "hover:bg-gray-800"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#111] border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl mb-1">{project.title}</h3>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* About Section */}
        {activeSection === "about" && (
            <div className="min-h-screen p-12 bg-[#0a0a0a]">
            <h1 className="text-4xl mb-3">About Me</h1>
            <p className="text-gray-400 mb-12">My journey and experience</p>
            <div className="max-w-3xl">
              <div className="mb-12">
                <h2 className="text-2xl mb-4">Background</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Passionate Computer Science Engineering student at KMIT (CGPA 8.6) with hands-on experience in full-stack and AI-driven development. Skilled in the MERN stack, Java, and Python, with internship experience at IBaseIT and ODT.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Dedicated to building scalable, intelligent solutions that create real-world impact. I enjoy working across the entire stack, from designing intuitive user interfaces to architecting robust backend systems. My projects span web applications, mobile apps, and AI-powered tools.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl mb-6">Education</h2>
                <div className="border-l-2 border-purple-500 pl-6">
                  <h3 className="text-xl mb-1">{education.degree}</h3>
                  <p className="text-purple-400 text-sm mb-2">{education.college} · {education.period}</p>
                  <p className="text-gray-400 text-sm">Current CGPA: {education.cgpa}</p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl mb-6">Experience</h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-purple-500 pl-6">
                      <h3 className="text-xl mb-1">{exp.role}</h3>
                      <p className="text-purple-400 text-sm mb-2">{exp.company} · {exp.period}</p>
                      <p className="text-gray-400 text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl mb-6">Core Skills</h2>
                <div className="space-y-6">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-lg text-purple-400 mb-3">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-[#111] border border-gray-800 rounded-lg text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl mb-6">College Engagement</h2>
                <div className="space-y-3">
                  {engagement.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="size-2 bg-purple-500 rounded-full mt-2" />
                      <p className="text-gray-400 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <div className="min-h-screen flex items-center justify-center px-12">
            <div className="max-w-2xl w-full">
              <h1 className="text-4xl mb-3">Get In Touch</h1>
              <p className="text-gray-400 mb-12">
                I'm always interested in hearing about new projects and opportunities
              </p>
              <div className="space-y-6">
                <a
                  href="mailto:paturi.anisha@gmail.com"
                  className="flex items-center gap-4 p-6 bg-[#111] border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all group"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <Mail className="size-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Email</h3>
                    <p className="text-gray-400 text-sm">paturi.anisha@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://github.com/AnishaPaturi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-[#111] border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all group"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <Github className="size-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">GitHub</h3>
                    <p className="text-gray-400 text-sm">@AnishaPaturi</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/anisha-paturi-8b885a2b5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-[#111] border border-gray-800 rounded-xl hover:border-purple-500/50 transition-all group"
                >
                  <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <Linkedin className="size-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">LinkedIn</h3>
                    <p className="text-gray-400 text-sm">Connect with me</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
