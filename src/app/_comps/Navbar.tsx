import { cn } from '@/lib/utils';

export default function Navbar() {
  return (
    <div className="w-full h-14 flex justify-center items-center border border-b border-gray-300">
      <nav className="flex gap-4">
        <NavLink active>Home</NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Youtube</NavLink>
        <NavLink>Contact</NavLink>
      </nav>
    </div>
  );
}

function NavLink(props: { href?: string; active?: boolean; children: React.ReactNode }) {
  const { href, active, children } = props;

  return (
    <div
      className={cn(
        'cursor-pointer py-1 w-20 text-center uppercase',
        active ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'
      )}
    >
      {children}
    </div>
  );
}
