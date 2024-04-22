import Navbar from '@/components/Navbar';
import HeroSection from './_comps/HeroSection';
import SkillsSection from './_comps/SkillsSection';
import ProjectsSection from './_comps/ProjectsSection';
import YoutubeSection from './_comps/YoutubeSection';
import ContactSection from './_comps/ContactSection';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection />

      <SkillsSection />

      <ProjectsSection />

      <YoutubeSection />

      <ContactSection />
    </main>
  );
}
