import { Award, Trophy, Users } from "lucide-react";

const certifications = [
  {
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    type: "certification",
  },
  {
    title: "IBM Web Developer",
    issuer: "NSDC / Skill India",
    type: "certification",
  },
  {
    title: "Java & Python Programming",
    issuer: "GeeksforGeeks",
    type: "certification",
  },
  {
    title: "TCS iON Career Edge",
    issuer: "Tata Consultancy Services",
    type: "certification",
  },
];

const achievements = [
  {
    title: "Core Team Member",
    description: "Smart India Hackathon",
    type: "achievement",
  },
  {
    title: "Hackathon Coordinator",
    description: "CODEMENT 24",
    type: "achievement",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and active participation in the tech community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Award className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className={`bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-delay-${Math.min(index + 1, 4)}`}
                >
                  <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Trophy className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className={`bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-delay-${Math.min(index + 1, 4)}`}
                >
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-accent mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
