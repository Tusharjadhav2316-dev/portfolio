import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Tushar Jadhav | Full-Stack Developer & CS Student</title>
        <meta
          name="description"
          content="Tushar Jadhav is a Computer Science Engineering student (Class of 2027) specializing in full-stack development, AI-powered applications, and modern web technologies. Open to internship opportunities."
        />
        <meta
          name="keywords"
          content="Tushar Jadhav, Full-Stack Developer, React Developer, AI Developer, Web Developer, CS Student, Portfolio, Internship"
        />
        <meta name="author" content="Tushar Jadhav" />
        <link rel="canonical" href="https://tusharjadhav.dev" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Tushar Jadhav | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Computer Science Engineering student building modern web applications, AI-powered tools, and mobile apps."
        />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tushar Jadhav | Full-Stack Developer" />
        <meta
          name="twitter:description"
          content="CS student specializing in full-stack development and AI-powered applications."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
