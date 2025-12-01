import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hariharan B R | Software Engineer & ECE Student</title>
        <meta 
          name="description" 
          content="Portfolio of Hariharan B R - Software Engineer, Full-Stack Developer, and ECE Student. Specializing in React, Django, and embedded systems." 
        />
        <meta name="keywords" content="Hariharan, Software Engineer, Full Stack Developer, ECE, React, Django, Portfolio" />
        <meta property="og:title" content="Hariharan B R | Software Engineer & ECE Student" />
        <meta property="og:description" content="Portfolio showcasing projects in web development and electronics engineering." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
