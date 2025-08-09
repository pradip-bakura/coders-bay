import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import Experience from "@/components/Experience.jsx";
import Skills from "@/components/Skills.jsx";
import Projects from "@/components/Projects.jsx";
import Contact from "@/components/Contact.jsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
