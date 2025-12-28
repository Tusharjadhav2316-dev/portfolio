import { ExternalLink, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import habitTrackerImg from "../assets/project-habit-tracker.png";
import resumeBuilderImg from "../assets/project-resume-builder.png";
import jarvisImg from "../assets/project-jarvis.png";
import sportsTalentImg from "../assets/project-sports-talent.png";


const projects = [
  {
    title: "Habit Tracker Dashboard",
    description:
      "A habit tracking web application with analytics, streak tracking, and an Android APK built from the web version.",
    image: habitTrackerImg,
    tech: ["React", "JavaScript", "Tailwind CSS", "Charts"],
    links: {
      demo: "https://habit-tracker-dashboard-blond.vercel.app/",
      github: "https://github.com/Tusharjadhav2316-dev/Habit-Tracker-Dashboard",
      apk: "/apk/habit-tracker.apk",
    },
  },
  {
    title: "AI Resume & Portfolio Builder",
    description:
      "An AI-powered Streamlit application using Google Gemini API to generate ATS-optimized resumes, cover letters, and portfolio content.",
    image: resumeBuilderImg,
    tech: ["Python", "Streamlit", "Google Gemini API"],
    links: {
      demo: "https://resume-builder-udmg.onrender.com",
      github: "https://github.com/Tusharjadhav2316-dev/Resume_Builder",
    },
  },
  {
    title: "Jarvis AI Assistant",
    description:
      "A voice-controlled AI assistant that automates system and web tasks using NLP and speech recognition.",
    image: jarvisImg,
    tech: ["Python", "NLP", "OpenAI API"],
    links: {
      github: "https://github.com/Rishika-108/MiniProject-I",
    },
  },
  {
    title: "AI-Powered Sports Talent Platform",
    description:
      "An AI-powered platform built during Smart India Hackathon to assess sports talent using motion analysis and AI models.",
    image: sportsTalentImg,
    tech: ["React", "JavaScript", "Node.js", "TensorFlow Lite", "PostgreSQL"],
    links: {
      demo: "https://sports-talent-platform.vercel.app/",
      github: "https://github.com/Tusharjadhav2316-dev/sports-talent-platform",
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of real-world projects showcasing my skills in web
            development, AI integration, and mobile app creation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-delay-${Math.min(
                index + 1,
                4
              )}`}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  {project.links.demo && (
                    <Button
                      size="sm"
                      className="gradient-bg text-accent-foreground"
                      asChild
                    >
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}

                  {project.links.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}

                  {project.links.apk && (
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.links.apk} download>
                        <Download className="mr-2 h-4 w-4" />
                        APK
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
