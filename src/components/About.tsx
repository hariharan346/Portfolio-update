import { GraduationCap, MapPin, Calendar, Cpu, Code2, Wrench } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">01. ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Know Who <span className="text-gradient">I Am</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 card-elevated">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Cpu className="w-5 h-5" />
                </span>
                ECE Foundation
              </h3>
              <p className="text-secondary-foreground leading-relaxed">
                As an Electronics and Communication Engineering student at Sri Shakthi Institute of Engineering and Technology, 
                I've built a strong foundation in hardware systems. I've worked on drone projects and been an active member 
                of the Robotics Club, where we built a 6-axis robot. My contribution was designing custom PCB layouts 
                and development boards similar to Nucleo boards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 card-elevated">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Code2 className="w-5 h-5" />
                </span>
                Software Journey
              </h3>
              <p className="text-secondary-foreground leading-relaxed">
                Transitioning into IT, I've developed full-stack applications including TechHub (an e-commerce platform) 
                and a restaurant ordering system using Django. I completed an internship at Altruisty in MERN development 
                and collaborated with seniors on frontend projects. I'm proficient in React, Django, and modern web technologies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 card-elevated">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Wrench className="w-5 h-5" />
                </span>
                Current Focus
              </h3>
              <p className="text-secondary-foreground leading-relaxed">
                I'm currently pursuing IT training, focusing on full-stack web development, backend engineering, 
                and API design. I'm also exploring mobile app development with Flutter and continuously 
                improving my problem-solving skills through platforms like LeetCode.
              </p>
            </div>
          </div>

          {/* Right Column - Stats & Education */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="p-8 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h4 className="font-semibold text-lg">BE - Electronics & Communication</h4>
                  <p className="text-muted-foreground">Sri Shakthi Institute of Engineering and Technology</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="flex items-center gap-1 text-primary">
                      <Calendar className="w-4 h-4" />
                      2023 - 2027
                    </span>
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-primary font-mono">
                      CGPA: 8.01
                    </span>
                  </div>
                </div>

                <div className="relative pl-6 border-l-2 border-border">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-2 border-primary/50" />
                  <h4 className="font-semibold text-lg">Higher Secondary (HSC)</h4>
                  <p className="text-muted-foreground">APT Dorairaj Hr Sec School</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="px-2 py-1 rounded-md bg-primary/10 text-primary font-mono">
                      81.5%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 text-center card-elevated group hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">5+</div>
                <p className="text-muted-foreground text-sm">Projects Built</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 text-center card-elevated group hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">8+</div>
                <p className="text-muted-foreground text-sm">Technologies</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 text-center card-elevated group hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">6+</div>
                <p className="text-muted-foreground text-sm">Certifications</p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-card border border-border/50 text-center card-elevated group hover:border-primary/30 transition-all duration-300">
                <div className="text-4xl font-bold text-gradient-accent mb-2 group-hover:scale-110 transition-transform">1</div>
                <p className="text-muted-foreground text-sm">Internship</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
