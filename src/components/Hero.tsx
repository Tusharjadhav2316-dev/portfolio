import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "../assets/profile.png";


export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen gradient-hero flex items-center pt-20 lg:pt-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                Open to Internship Opportunities
              </span>
            </div>
            
            <h1 className="animate-fade-in-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">Tushar Jadhav</span>
            </h1>
            
            <p className="animate-fade-in-delay-2 text-xl sm:text-2xl text-muted-foreground font-medium mb-6">
              Full-Stack Developer | AI-Driven Web & Mobile Applications
            </p>
            
            <p className="animate-fade-in-delay-3 text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              I'm a Computer Science Engineering student (Class of 2027) who builds modern
              web applications, AI-powered tools, and Android apps from web platforms.
              I focus on creating real-world, scalable solutions with clean UI and solid logic.
            </p>
            
            <div className="animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gradient-bg text-accent-foreground font-semibold shadow-accent hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="font-semibold border-2"
                asChild
              >
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative animate-fade-in">
              {/* Decorative Ring */}
              <div className="absolute -inset-4 rounded-full gradient-bg opacity-20 blur-2xl" />
              <div className="absolute -inset-2 rounded-full border-2 border-accent/30" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-lg">
                <img
                  src={profileImage}
                  alt="Tushar Jadhav - Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 bg-card rounded-xl px-4 py-2 shadow-card border border-border">
                <p className="text-sm font-semibold text-foreground">CSE '27</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
