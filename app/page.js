import AboutSection from "./components/homepage/about";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      {/* <Skills /> */}
      <Education />
      {/* <ContactSection /> */}
    </>
  );
}
