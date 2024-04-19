import { cn } from '@/lib/utils';
import Navbar from './_comps/Navbar';
import { PropsWithChildren } from 'react';
import githubIcon from '@/assets/github.svg';
import facebookIcon from '@/assets/facebook.svg';
import youtubeIcon from '@/assets/youtube.svg';
import mailIcon from '@/assets/mail.svg';
import sakibTransparent from '@/assets/sakib.png';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <HomeContent />
    </main>
  );
}

function HomeContent() {
  return (
    <div className="relative overflow-hidden h-[calc(100vh-56px)] uppercase pt-16">
      <BgText className="top-10 -left-32">Sakib</BgText>
      <BgText className="bottom-1/4 -right-80">Ahmed</BgText>

      <div className="grid grid-cols-2 w-[1600px] mx-auto h-full">
        <div className="w-full h-full relative">
          <Image
            priority
            src={sakibTransparent}
            alt="sakib"
            fill
            className="w-full h-full object-cover grayscale scale-110"
          />
        </div>
        <div className="col-start-2 flex flex-col items-end gap-16">
          <NavLinks2 />

          <Intro />

          <Stats />

          <ContactButtons />
        </div>
      </div>
    </div>
  );
}

function BgText({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn('absolute font-bg tracking-[3rem] text-gray-200 select-none -z-10', className)}
      style={{ fontSize: '260px' }}
    >
      {children}
    </div>
  );
}

function NavLinks2() {
  return (
    <div className="flex flex-col gap-4 text-2xl text-right mb-8">
      <div>Skills</div>
      <div>Projects</div>
      <div>Youtube</div>
      <div>Contact</div>
    </div>
  );
}

function Intro() {
  return (
    <div className="space-y-4 text-right">
      <div className="text-7xl font-black">Sakib Ahmed</div>
      <div style={{ paintOrder: 'stroke' }}>
        <svg height="78" width="604" xmlns="http://www.w3.org/2000/svg">
          <text x={0} y={60} stroke="black" fill="white" strokeWidth={6} fontSize="60">
            Mobile Developer
          </text>
        </svg>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <div className="flex gap-10 font-black">
      <div className="flex items-center gap-2">
        <div className="text-4xl">4+</div>
        <div className="w-28 leading-tight">Years of Experience</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="text-4xl">10+</div>
        <div className="w-28 leading-tight">Projects Completed</div>
      </div>
    </div>
  );
}

function ContactButtons() {
  return (
    <div className="flex gap-4">
      <Image priority src={githubIcon} alt="github icon" width={40} height={40} />
      <Image priority src={facebookIcon} alt="github icon" width={40} height={40} />
      <Image priority src={youtubeIcon} alt="github icon" width={48} height={33} />
      <Image priority src={mailIcon} alt="github icon" width={40} height={30} />
    </div>
  );
}
