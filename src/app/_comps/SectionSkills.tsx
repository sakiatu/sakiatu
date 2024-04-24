'use client';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import githubIcon from '@/assets/github.svg';
import mobileDesign from '@/assets/mobile-design.png';
import { chunk } from 'remeda';
import skills, { Skill } from '@/data/skills';
import { StarIcon } from 'lucide-react';
import CarouselDots from '@/components/CarouselDots';

export default function SectionSkills() {
  return (
    <div className="min-h-screen flex bg-neutral-900 text-white">
      <div
        id="skills"
        className={cn(
          'container grid grid-rows-[auto_1fr] gap-y-4 grid-cols-2 mx-auto py-20 sm:py-32 uppercase'
        )}
      >
        <Header />

        <SkillsCarousel />

        <ImageFigure />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="title-big col-span-2">
      <span className="text-violet-400">Specializes</span> in Flutter & Android
    </div>
  );
}

function SkillsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const skillChunks = chunk(skills, 3);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="self-center grow col-span-2 lg:col-span-1 lg:pl-12">
      <Carousel setApi={setApi} className="lg:max-w-lg">
        <CarouselContent>
          {skillChunks.map((skills, i) => (
            <CarouselItem key={i} className="flex flex-col md:flex-row lg:flex-col gap-4">
              {skills.map((skill, j) => (
                // <div key={j}>
                <SkillItem key={j} {...skill} />
                // </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="dark hidden lg:contents lg:visible">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <CarouselDots count={count} current={current} />
    </div>
  );
}

function SkillItem({ name, expertise }: Skill) {
  return (
    <div
      className={cn(
        'flex flex-row gap-8 items-center px-5 py-7 bg-neutral-800 rounded-lg',
        'md:flex-col md:grow',
        'lg:flex-row lg:grow-0'
      )}
    >
      <Image src={githubIcon} width={40} height={40} alt="list-item" className="self-center" />

      <div className="space-y-1 self-start text-center md:self-auto">
        <div className="font-medium line-clamp-2">{name}</div>
        <div className="flex gap-2 items-center">
          <StarIcon size={16} fill="#DD8500" stroke="#DD8500" />
          <div className="text-[#DD8500] normal-case">{expertise}</div>
        </div>
      </div>
    </div>
  );
}

function ImageFigure() {
  return (
    <div className="relative hidden lg:block ml-12">
      <Image src={mobileDesign} alt="mobile wireframe" fill className="object-contain" />
    </div>
  );
}
