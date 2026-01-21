import { Github, Linkedin, Mail, ExternalLink, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function PortfolioOne() {
  const projects = [
    {
      title: "Secret Santa",
      description: "A fun application to organize Secret Santa gift exchanges with friends and family",
      tech: ["React", "Node.js"],
      link: "https://github.com/AnishaPaturi/Secret-Santa-",
    },
    {
      title: "Mood Angles",
      description: "An innovative mood tracking application using angular perspectives",
      tech: ["Angular", "TypeScript"],
      link: "https://github.com/AnishaPaturi/Mood-Angles",
    },
    {
      title: "AuthenCode",
      description: "Secure authentication system with modern encryption standards",
      tech: ["Security", "Backend"],
      link: "https://github.com/AnishaPaturi/AuthenCode",
    },
    {
      title: "FeedForward",
      description: "Community platform for sharing feedback and insights",
      tech: ["React", "Firebase"],
      link: "https://github.com/AnishaPaturi/FeedForward",
    },
    {
      title: "AutoDeck",
      description: "Automated presentation generator using AI",
      tech: ["Python", "AI"],
      link: "https://github.com/AnishaPaturi/AutoDeck",
    },
    {
      title: "GradeSync",
      description: "Student grade management and synchronization platform",
      tech: ["Full Stack", "Database"],
      link: "https://github.com/AnishaPaturi/GradeSync",
    },
  ];

  return (
    <div className="size-full overflow-auto bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
              <div className="bg-white rounded-full p-2">
                <div className="size-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-5xl">
                  AP
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-6xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Anisha Paturi
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & Problem Solver
          </p>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            Passionate about creating innovative solutions that make a difference. 
            Experienced in building scalable applications with modern technologies.
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/AnishaPaturi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Github className="size-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Linkedin className="size-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Mail className="size-6" />
            </a>
          </div>
          <ArrowDown className="size-6 mx-auto animate-bounce text-gray-400" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development, 
            mobile applications, and innovative problem-solving
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="size-4" />
                  </a>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white rounded-full text-xs text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-100 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Let's Work Together</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
