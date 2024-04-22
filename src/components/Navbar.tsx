'use client';

import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type NavbarProps = {
  activeSection: 'home' | 'skills' | 'projects' | 'youtube' | 'contact';
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<NavbarProps['activeSection']>('home');

  const router = useRouter();

  function upadateNav(section: NavbarProps['activeSection']) {
    setActiveSection(section);
    router.replace('#' + section, { scroll: false });
  }

  useEffect(() => {
    const home = document.querySelector('#home');
    const skills = document.querySelector('#skills');
    const projects = document.querySelector('#projects');
    const youtube = document.querySelector('#youtube');
    const contact = document.querySelector('#contact');

    document.addEventListener('scroll', (e) => {
      [home, skills, projects, youtube, contact].forEach((ha) => {
        if (!ha) return;

        const currentUrl = window.location.href;

        if (ha.id === currentUrl.split('#')[1]) {
          return;
        }

        const rect = ha.getBoundingClientRect();
        if (rect.top > 0 && rect.top < 150) {
          upadateNav(ha.id as NavbarProps['activeSection']);
        }
      });
    });
  });

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-white/60 backdrop-blur flex justify-center items-center border-b border-gray-300">
      <nav className="flex gap-6">
        <NavLink href="#home" active={activeSection === 'home'}>
          Home
        </NavLink>
        <NavLink href="#skills" active={activeSection === 'skills'}>
          Skills
        </NavLink>
        <NavLink href="#projects" active={activeSection === 'projects'}>
          Projects
        </NavLink>
        <NavLink href="#youtube" active={activeSection === 'youtube'}>
          Youtube
        </NavLink>
        <NavLink href="#contact" active={activeSection === 'contact'}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

function NavLink(props: { href: string; active?: boolean; children: React.ReactNode }) {
  const { href, active, children } = props;

  return (
    <button
      onClick={() => {
        const el = document.querySelector(href);
        if (!el) return;

        window.scrollTo({
          top: el.getBoundingClientRect().top - 80 - document.body.getBoundingClientRect().top,
          behavior: 'smooth',
        });
      }}
      className={cn(
        'cursor-pointer py-1 text-center uppercase text-sm sm:text-base',
        active ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'
      )}
    >
      {children}
    </button>
  );
}
