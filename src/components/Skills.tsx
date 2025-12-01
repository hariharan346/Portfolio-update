import { useState } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 75 },
      { name: "Dart", level: 70 },
    ],
  },
  {
    title: "Web Technologies",
    icon: "🌐",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Django", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQLite", level: 85 },
      { name: "PostgreSQL", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Vercel", level: 80 },
      { name: "Render", level: 75 },
    ],
  },
  {
    title: "Core Concepts",
    icon: "🧠",
    skills: [
      { name: "Data Structures", level: 80 },
      { name: "Algorithms", level: 75 },
      { name: "OOP", level: 85 },
      { name: "Problem Solving", level: 85 },
    ],
  },
  {
    title: "Hardware & ECE",
    icon: "⚡",
    skills: [
      { name: "PCB Design", level: 75 },
      { name: "Embedded Systems", level: 70 },
      { name: "Arduino/MCU", level: 80 },
      { name: "Circuit Design", level: 70 },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">02. SKILLS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50"
              }`}
            >
              <span>{category.icon}</span>
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-card border border-border/50 card-elevated">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-3xl">{skillCategories[activeCategory].icon}</span>
              {skillCategories[activeCategory].title}
            </h3>

            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Skills Grid (compact view) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            "Python", "JavaScript", "Java", "React", "Django", "Tailwind",
            "MySQL", "MongoDB", "Git", "Figma", "Flutter", "PostgreSQL"
          ].map((skill) => (
            <div
              key={skill}
              className="px-4 py-3 rounded-xl bg-secondary/30 border border-border/30 text-center font-mono text-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
