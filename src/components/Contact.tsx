import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    label: "Email",
    value: "tushar.jadhav2316@gmail.com",
    href: "mailto:tushar.jadhav2316@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "Tusharjadhav2316-dev",
    href: "https://github.com/Tusharjadhav2316-dev",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "tushar-jadhav-2316tj",
    href: "https://www.linkedin.com/in/tushar-jadhav-2316tj/",
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Open to internship opportunities and real-world projects.
          </p>
          <p className="text-base text-muted-foreground mb-12">
            Feel free to reach out if you'd like to collaborate or just have a chat about technology!
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label !== "Email" ? "_blank" : undefined}
                rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
                className={`group bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-delay-${Math.min(index + 1, 4)}`}
              >
                <div className="flex flex-col items-center">
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-colors mb-4">
                    <contact.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{contact.label}</h3>
                  <p className="text-sm text-muted-foreground truncate max-w-full">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="gradient-bg text-accent-foreground font-semibold shadow-accent hover:opacity-90 transition-opacity"
            asChild
          >
            <a href="mailto:tushar.jadhav2316@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
