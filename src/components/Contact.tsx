import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Code2, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm">06. CONTACT</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll get back to you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-card border border-border/50 card-elevated text-center mb-12">
            <a href="mailto:brhariharan19@gmail.com">
              <Button variant="hero" size="xl" className="mb-8">
                <Mail className="w-5 h-5 mr-2" />
                Say Hello
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </a>
            
            <p className="text-muted-foreground font-mono">brhariharan19@gmail.com</p>
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="mailto:brhariharan19@gmail.com"
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium group-hover:text-primary transition-colors">Email</p>
              <p className="text-xs text-muted-foreground mt-1">brhariharan19</p>
            </a>

            <a
              href="tel:+919342150507"
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium group-hover:text-primary transition-colors">Phone</p>
              <p className="text-xs text-muted-foreground mt-1">+91 9342150507</p>
            </a>

            <a
              href="https://github.com/hariharan346"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium group-hover:text-primary transition-colors">GitHub</p>
              <p className="text-xs text-muted-foreground mt-1">View Projects</p>
            </a>

            <a
              href="https://www.linkedin.com/in/hariharan-b-r-a8415b28a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <p className="font-medium group-hover:text-primary transition-colors">LinkedIn</p>
              <p className="text-xs text-muted-foreground mt-1">Connect</p>
            </a>
          </div>

          {/* Additional Links */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://leetcode.com/hariharan"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
            >
              <Code2 className="w-5 h-5 text-primary" />
              <span className="font-medium">LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
