import { FormEvent, useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import Topbar from "./components/Topbar";
import {
  achievements,
  highlights,
  navItems,
  projects,
  skillGroups,
} from "./data/portfolio";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = () => setMenuOpen(false);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    window.setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="app-shell">
      <div className="app-shell__grid" aria-hidden="true" />
      <div className="app-shell__orb app-shell__orb--one" aria-hidden="true" />
      <div className="app-shell__orb app-shell__orb--two" aria-hidden="true" />

      <Topbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        navItems={navItems}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        onNavigate={handleNavigate}
      />

      <main>
        <HeroSection highlights={highlights} />
        <AboutSection />
        <SkillsSection skillGroups={skillGroups} />
        <ProjectsSection projects={projects} />
        <AchievementsSection achievements={achievements} />
        <ContactSection submitted={submitted} onSubmit={handleContactSubmit} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
