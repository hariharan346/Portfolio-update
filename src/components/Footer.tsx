import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/hariharan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/hariharan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://leetcode.com/hariharan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href="mailto:brhariharan19@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Credit */}
          <p className="text-sm text-muted-foreground text-center font-mono">
            Designed & Built by{" "}
            <span className="text-primary">Hariharan B R</span>
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-destructive fill-destructive" /> © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
