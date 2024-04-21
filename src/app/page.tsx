import Navbar from '@/components/Navbar';
import HeroSection from './_comps/HeroSection';
import SkillsSection from './_comps/SkillsSection';

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar activePage="home" />

      <HeroSection />

      <SkillsSection />
    </main>
  );
}
