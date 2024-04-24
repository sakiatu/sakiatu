'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { signal, useComputed } from '@preact/signals-react';
import { useSignals } from '@preact/signals-react/runtime';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type ActiveSection = 'home' | 'skills' | 'projects' | 'youtube' | 'contact';

const activeSection = signal<ActiveSection>('home');

export default function Navbar() {
  useSignals();

  const router = useRouter();

  function upadateNav(section: ActiveSection) {
    activeSection.value = section;
    router.replace('#' + section, { scroll: false });
  }

  useEffect(() => {
    const home = document.querySelector('#home');
    const skills = document.querySelector('#skills');
    const projects = document.querySelector('#projects');
    const youtube = document.querySelector('#youtube');
    const contact = document.querySelector('#contacts');

    document.addEventListener('scroll', () => {
      [home, skills, projects, youtube, contact].forEach((ha) => {
        if (!ha) return;

        const currentUrl = window.location.href;

        if (ha.id === currentUrl.replace('#', '')) {
          return;
        }

        const rect = ha.getBoundingClientRect();
        if (rect.top > -5 && rect.top < 150) {
          upadateNav(ha.id as ActiveSection);
        }
      });
    });
  });

  const commonStyles = 'container sticky top-0 bg-white/85 backdrop-blur-sm h-16 z-50';
  return (
    <>
      <nav
        className={cn(
          commonStyles,
          'sm:hidden grid grid-cols-3 grid-flow-col items-center border-b'
        )}
      >
        <div />

        <SmallDeviceNav />
      </nav>
      <nav
        className={cn(
          commonStyles,
          'hidden size-full top-4 p-4 my-4 sm:block w-[calc(100%-64px)]',
          'border border-gray-200 rounded-full shadow-md'
        )}
      >
        <LargeDeviceNav />
      </nav>
    </>
  );
}

function LargeDeviceNav() {
  return (
    <div className={cn('flex gap-6 size-full items-center justify-center')}>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#youtube">Youtube</NavLink>
      <NavLink href="#contacts">Contact</NavLink>
    </div>
  );
}

function SmallDeviceNav() {
  const DialogCloseLink = (props: { href: string; children: React.ReactNode }) => {
    const { href, children } = props;

    return (
      <NavLink href={href}>
        <DialogClose asChild>
          <div>{children}</div>
        </DialogClose>
      </NavLink>
    );
  };

  return (
    <>
      <div className="text-center uppercase">{activeSection.value}</div>

      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger>
            <Button size={'icon'} variant={'ghost'}>
              <Menu />
            </Button>
          </DialogTrigger>
          <DialogContent className="text-center">
            <DialogHeader>
              <DialogTitle>Sections</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col w-fit gap-4 mx-auto">
              <DialogCloseLink href="#home">Home</DialogCloseLink>
              <DialogCloseLink href="#skills">Skills</DialogCloseLink>
              <DialogCloseLink href="#projects">Projects</DialogCloseLink>
              <DialogCloseLink href="#youtube">Youtube</DialogCloseLink>
              <DialogCloseLink href="#contacts">Contact</DialogCloseLink>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

function NavLink(props: { href: string; children: React.ReactNode }) {
  const { href, children } = props;

  const active = useComputed(() => activeSection.value === href.replace('#', ''));

  return (
    <button
      onClick={() => {
        const el = document.querySelector(href);
        if (!el) return;

        window.scrollTo({
          top: el.getBoundingClientRect().top - document.body.getBoundingClientRect().top,
          behavior: 'smooth',
        });
      }}
      className={cn(
        'cursor-pointer py-1 text-center uppercase text-sm sm:text-base',
        active.value ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'
      )}
    >
      {children}
    </button>
  );
}
