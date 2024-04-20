import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavbarProps = {
  activePage: 'home' | 'skills' | 'projects' | 'youtube' | 'contact';
};

export default function Navbar({ activePage }: NavbarProps) {
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-white/60 backdrop-blur flex justify-center items-center border-b border-gray-300">
      <nav className="flex gap-6">
        <NavLink href="/" active={activePage === 'home'}>
          Home
        </NavLink>
        <NavLink href="/skills" active={activePage === 'skills'}>
          Skills
        </NavLink>
        <NavLink active={activePage === 'projects'}>Projects</NavLink>
        <NavLink active={activePage === 'youtube'}>Youtube</NavLink>
        <NavLink href="/contact" active={activePage === 'contact'}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

function NavLink(props: { href?: string; active?: boolean; children: React.ReactNode }) {
  const { href, active, children } = props;

  return (
    <Link
      href={href || ''}
      prefetch
      className={cn(
        'cursor-pointer py-1 text-center uppercase text-sm sm:text-base',
        active ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'
      )}
    >
      {children}
    </Link>
  );
}
