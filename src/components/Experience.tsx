import { Briefcase, Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company: "Altruisty",
    period: "2024",
    type: "Internship",
    description: "Worked on MERN stack development, building full-stack web applications. Gained hands-on experience with MongoDB, Express.js, React, and Node.js.",
    highlights: [
      "Built responsive web applications using React",
      "Developed RESTful APIs with Node.js and Express",
      "Worked with MongoDB for database operations",
      "Collaborated with team on production projects",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Senior Collaboration Project",
    period: "2024",
    type: "Project",
    description: "Collaborated with passed-out seniors on a real-world project, taking responsibility for the frontend development using modern technologies.",
    highlights: [
      "Designed and implemented user interfaces",
      "Utilized Figma for design mockups",
      "Translated designs to functional code",
      "Followed best practices for clean code",
    ],
  },
  {
    title: "Robotics Club Member",
    company: "Sri Shakthi Institute",
    period: "2023 - Present",
    type: "Extracurricular",
    description: "Active member of the Robotics Club, contributing to various hardware projects including a 6-axis robot. Specialized in PCB design and embedded systems.",
    highlights: [
      "Designed custom PCB layouts",
      "Built development boards similar to Nucleo",
      "Worked on 6-axis robot project",
      "Drone development and testing",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">04. EXPERIENCE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow z-10" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-2xl bg-card border border-border/50 card-elevated hover:border-primary/30 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                        exp.type === 'Internship' 
                          ? 'bg-primary/10 text-primary' 
                          : exp.type === 'Project'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-secondary text-muted-foreground'
                      }`}>
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>

                    {/* Description */}
                    <p className="text-secondary-foreground/80 mb-4 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">▹</span>
                          <span className="text-secondary-foreground/70">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
