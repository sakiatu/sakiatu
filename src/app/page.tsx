import Navbar from '@/components/Navbar';
import githubIcon from '@/assets/github.svg';
import facebookIcon from '@/assets/facebook.svg';
import youtubeIcon from '@/assets/youtube.svg';
import mailIcon from '@/assets/mail.svg';
import sakibTransparent from '@/assets/sakib.png';
import Image from 'next/image';
import Link from 'next/link';
import { FACEBOOK_LINK, GITHUB_LINK, GMAIL, YOUTUBE_LINK } from '@/lib/consts';
import BgText from '@/components/BgText';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className="grid grid-rows-[auto_1fr] min-h-screen flex-col">
      <Navbar activePage="home" />

      <HomeContent />
    </main>
  );
}

function HomeContent() {
  return (
    <div className="uppercase lg:pt-16">
      <div
        className={cn(
          'grid grid-rows-[calc(100vh-80px)_auto] mx-auto h-full',
          'lg:grid-rows-1 lg:grid-cols-[1fr_auto]',
          'lg:w-[1000px]',
          'xl:w-[1240px]'
        )}
      >
        <div className="relative overflow-x-hidden lg:overflow-x-visible">
          <BgText className="top-30 -left-20">Sakib</BgText>
          <BgText className="bottom-20 left-30">Ahmed</BgText>
          <Image
            priority
            src={sakibTransparent}
            alt="sakib"
            fill
            className="object-contain object-bottom xl:object-contain"
          />
        </div>
        <div className="flex flex-col bg-violet-200 items-center py-32 lg:bg-transparent lg:py-0 lg:items-end lg:justify-end lg:pb-40 xl:justify-normal xl:pb-0 gap-16">
          <NavLinks />

          <Intro />

          <Stats />

          <ContactButtons />
        </div>
      </div>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="hidden xl:flex flex-col gap-4 text-2xl text-right mb-8">
      <div>Skills</div>
      <div>Projects</div>
      <div>Youtube</div>
      <div>Contact</div>
    </div>
  );
}

function Intro() {
  return (
    <div className="space-y-4 lg:text-right">
      <div className="text-5xl xl:text-7xl font-black">Sakib Ahmed</div>
      <div style={{ paintOrder: 'stroke' }}>
        <svg
          className="h-[46px] w-[365px] xl:h-[78px] xl:w-[604px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x={0}
            y="70%"
            stroke="black"
            fill="white"
            strokeWidth={6}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-4xl xl:text-6xl"
          >
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
    <div className="flex gap-8 items-center">
      <Link href={GITHUB_LINK} target="_blank">
        <Image src={githubIcon} alt="github icon" width={40} height={40} />
      </Link>
      <Link href={FACEBOOK_LINK} target="_blank">
        <Image src={facebookIcon} alt="github icon" width={40} height={40} />
      </Link>
      <Link href={YOUTUBE_LINK} target="_blank">
        <Image src={youtubeIcon} alt="github icon" width={48} height={33} />
      </Link>
      <Link href={'mailto://' + GMAIL} target="_blank">
        <Image src={mailIcon} alt="github icon" width={40} height={30} />
      </Link>
    </div>
  );
}
