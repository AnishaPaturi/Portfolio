import { Github, Linkedin, Mail, ExternalLink, Code2, Laptop, Smartphone } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function PortfolioTwo() {
  const projects = [
    {
      title: "Secret Santa",
      description: "A fun application to organize Secret Santa gift exchanges",
      category: "Web App",
      icon: Laptop,
      link: "https://github.com/AnishaPaturi/Secret-Santa-",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Mood Angles",
      description: "Mood tracking application with angular perspectives",
      category: "Mobile",
      icon: Smartphone,
      link: "https://github.com/AnishaPaturi/Mood-Angles",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "AuthenCode",
      description: "Secure authentication system with modern encryption",
      category: "Security",
      icon: Code2,
      link: "https://github.com/AnishaPaturi/AuthenCode",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "CodeChecker",
      description: "Automated code review and quality checking tool",
      category: "Dev Tool",
      icon: Code2,
      link: "https://github.com/AnishaPaturi/CodeChecker",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "FeedForward",
      description: "Community platform for sharing feedback and insights",
      category: "Web App",
      icon: Laptop,
      link: "https://github.com/AnishaPaturi/FeedForward",
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "AutoDeck",
      description: "AI-powered automated presentation generator",
      category: "AI Tool",
      icon: Code2,
      link: "https://github.com/AnishaPaturi/AutoDeck",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "SafeStreet App",
      description: "Safety application for navigating urban environments",
      category: "Mobile",
      icon: Smartphone,
      link: "https://github.com/AnishaPaturi/SafeStreetApplication",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "GradeSync",
      description: "Student grade management and sync platform",
      category: "Web App",
      icon: Laptop,
      link: "https://github.com/AnishaPaturi/GradeSync",
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Talent Match",
      description: "Platform connecting talent with opportunities",
      category: "Web App",
      icon: Laptop,
      link: "https://github.com/AnishaPaturi/Talent-Match",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "Python", "Angular",
    "Firebase", "MongoDB", "AWS", "Docker", "Git"
  ];

  return (
    <div className="size-full overflow-auto bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm mb-6">
                👋 Hello, I'm
              </div>
              <h1 className="text-5xl mb-4">Anisha Paturi</h1>
              <p className="text-xl text-gray-600 mb-6">
                Full Stack Developer passionate about building impactful applications
              </p>
              <div className="flex items-center gap-4 mb-8">
                <a
                  href="https://github.com/AnishaPaturi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Linkedin className="size-5" />
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="p-2 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Mail className="size-5" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 5).map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <div className="size-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-6xl">
                  AP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl mb-4">Projects</h2>
            <p className="text-gray-600">
              A showcase of my recent work across web, mobile, and AI applications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden border hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <Icon className="size-12 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-xs text-gray-500 mb-1 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl">{project.title}</h3>
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <ExternalLink className="size-4" />
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills & Contact */}
      <section className="py-20 px-6 bg-white border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-8">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-6 py-3 bg-gray-50 border rounded-lg hover:bg-gray-100 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="border-t pt-16">
            <h2 className="text-3xl mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Open to new opportunities and collaborations
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
