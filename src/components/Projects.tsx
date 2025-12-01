import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, ShoppingCart, Utensils, Cpu, Code } from "lucide-react";

const projects = [
  {
    title: "TechHub",
    subtitle: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product listings, cart system, user authentication, and secure checkout. Features responsive design and admin panel for product management.",
    tech: ["Django", "HTML/CSS", "Bootstrap", "SQLite", "PostgreSQL"],
    icon: ShoppingCart,
    color: "primary",
    features: ["User Authentication", "Cart System", "Admin Dashboard", "Secure Checkout"],
    period: "Jul 2025 – Nov 2025",
  },
  {
    title: "G-P Restaurant",
    subtitle: "Food Ordering System",
    description: "Dynamic food ordering website enabling users to browse menus, add items to cart, and place orders online. Includes order tracking and admin dashboard.",
    tech: ["Django", "HTML/CSS", "Django ORM", "SQLite"],
    icon: Utensils,
    color: "accent",
    features: ["Menu Management", "Order Tracking", "Admin Dashboard", "Mobile-Friendly"],
    period: "2024",
  },
  {
    title: "6-Axis Robot",
    subtitle: "Robotics Club Project",
    description: "Contributed to building a 6-axis robot for the Robotics Club. Designed custom PCB layouts and development boards similar to Nucleo boards for the project.",
    tech: ["PCB Design", "Embedded Systems", "Microcontrollers", "C/C++"],
    icon: Cpu,
    color: "primary",
    features: ["Custom PCB Design", "Development Board", "Embedded Programming", "Team Collaboration"],
    period: "2023 - 2024",
  },
  {
    title: "Drone Project",
    subtitle: "ECE Initiative",
    description: "Worked on drone development as part of ECE coursework, gaining hands-on experience with hardware integration and control systems.",
    tech: ["Embedded Systems", "Sensors", "Flight Controllers", "Hardware Integration"],
    icon: Code,
    color: "accent",
    features: ["Hardware Integration", "Sensor Calibration", "Flight Control", "Team Project"],
    period: "2023",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">03. PROJECTS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-gradient-card border border-border/50 overflow-hidden card-elevated hover:border-primary/30 transition-all duration-500"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${project.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                    <project.icon className={`w-6 h-6 ${project.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
                </div>

                <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className={`text-sm font-mono ${project.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <div className="px-6 pb-4">
                <p className="text-secondary-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs font-mono px-3 py-1 rounded-full ${
                        project.color === 'primary' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-x-0 bottom-0 h-1 ${
                project.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/hariharan" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="glass" size="lg" className="group">
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
