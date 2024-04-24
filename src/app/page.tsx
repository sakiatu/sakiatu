import Navbar from './_comps/Navbar';
import SectionContacts from './_comps/SectionContacts';
import SectionHome from './_comps/SectionHome';
import SectionProjects from './_comps/SectionProjects';
import SectionSkills from './_comps/SectionSkills';
import SectionYoutube from './_comps/SectionYoutube';

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <SectionHome />

      <SectionSkills />

      <SectionProjects />

      <SectionYoutube />

      <SectionContacts />
    </main>
  );
}
