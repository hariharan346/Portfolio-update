import { Award, ExternalLink, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "OpenCV Bootcamp Certification",
    issuer: "University-Level Excellence Award",
    year: "2024",
    description: "Completed comprehensive bootcamp demonstrating strong skills in computer vision.",
    highlight: true,
  },
  {
    title: "Vision-Language Models Program",
    issuer: "Certified Program",
    year: "2024",
    description: "Completed certified program on Vision-Language Models, exploring AI and ML concepts.",
    highlight: false,
  },
  {
    title: "Python Essentials",
    issuer: "LinkedIn Learning",
    year: "2024",
    description: "Core Python programming, data structures, and building intelligent bots.",
    highlight: false,
  },
  {
    title: "Bharatiya Antariksh Hackathon",
    issuer: "National Level Certification",
    year: "2025",
    description: "Certified participant in national-level hackathon contributing advanced problem-solving solutions.",
    highlight: true,
  },
  {
    title: "Remote Sensing and GIS Training",
    issuer: "ISRO",
    year: "2024",
    description: "Successfully completed ISRO's training program covering satellite data and geospatial technologies.",
    highlight: true,
  },
  {
    title: "Pandas Course",
    issuer: "Kaggle",
    year: "2024",
    description: "Gained strong data analysis and data manipulation expertise through hands-on exercises.",
    highlight: false,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">05. ACHIEVEMENTS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Certifications & <span className="text-gradient">Awards</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                cert.highlight
                  ? "bg-gradient-card border-primary/30 shadow-lg shadow-primary/10"
                  : "bg-card border-border/50 hover:border-primary/30"
              }`}
            >
              {/* Highlight Badge */}
              {cert.highlight && (
                <div className="absolute -top-3 -right-3">
                  <div className="p-2 rounded-full bg-primary text-primary-foreground">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className={`w-5 h-5 mt-1 flex-shrink-0 ${
                  cert.highlight ? 'text-primary' : 'text-muted-foreground'
                }`} />
                <div>
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>

              <p className="text-secondary-foreground/70 text-sm leading-relaxed pl-8">
                {cert.description}
              </p>

              {/* Bottom accent */}
              <div className={`absolute inset-x-6 bottom-0 h-0.5 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                cert.highlight ? 'bg-gradient-primary' : 'bg-primary/50'
              }`} />
            </div>
          ))}
        </div>

        {/* Publication */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-card border border-accent/30 card-elevated text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Award className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Publication</h3>
            <p className="text-lg text-accent mb-2">CareHub</p>
            <p className="text-secondary-foreground/70">
              Published a paper on Li-Fi technology focusing on high-speed data transmission 
              using visible light communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
