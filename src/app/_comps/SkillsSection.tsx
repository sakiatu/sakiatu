'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import githubIcon from '@/assets/github.svg';
import mobileDesign from '@/assets/mobile-design.png';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { chunk } from 'remeda';

type Skill = {
  name: string;
  expertise: 'Expert' | 'Intermediate';
};

const skills: Skill[] = [
  { name: 'Flutter', expertise: 'Expert' },
  { name: 'OOP', expertise: 'Expert' },
  { name: 'Clean Architecture', expertise: 'Expert' },

  { name: 'Flutter', expertise: 'Expert' },
  { name: 'OOP', expertise: 'Expert' },
  { name: 'Clean Architecture', expertise: 'Expert' },
];

export default function SkillsSection() {
  return (
    <div className="bg-black" id="skills">
      <div
        className={cn(
          'grid grid-rows-[auto_1fr] grid-cols-1 lg:grid-cols-[auto_1fr] gap-y-16 lg:gap-x-8',
          'mx-auto uppercase text-gray-100 py-16 px-8',
          'min-h-[calc(100vh-80px)] lg:w-[1000px] xl:w-[1240px]'
        )}
        style={{
          gridTemplateAreas: '"header header" "skills image"',
        }}
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
    <div className="font-black text-4xl" style={{ gridArea: 'header' }}>
      Specialist in <span className="text-violet-400">Flutter</span> & Android
    </div>
  );
}

function SkillsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
    <div style={{ gridArea: 'skills' }} className="self-center">
      {/* For small devices
      <Carousel setApi={setApi} opts={{ slidesToScroll: 2 }} className="max-w-lg lg:hidden">
        <CarouselContent>
          {skills.map((skill, i) => (
            <CarouselItem key={i} className="basis-1/2">
              <SkillItem {...skill} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="dark hidden">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <div className="pt-6 flex items-center justify-center text-sm text-muted-foreground lg:hidden">
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn(
                'size-2 rounded-full mx-1',
                i + 1 === current ? 'bg-violet-500/80' : 'bg-neutral-600'
              )}
            />
          ))}
      </div> */}

      {/* For large devices */}
      <Carousel setApi={setApi} opts={{ slidesToScroll: 1 }} className="lg:max-w-lg">
        <CarouselContent>
          {chunk(skills, 3).map((skills, i) => (
            <CarouselItem key={i} className="space-y-4">
              {skills.map((skill, j) => (
                <div key={i}>
                  <SkillItem {...skill} />
                </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="dark hidden lg:contents lg:visible">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>

      <div className="flex pt-6 items-center justify-center text-sm text-muted-foreground">
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn(
                'size-2 rounded-full mx-1',
                i + 1 === current ? 'bg-violet-500/80' : 'bg-neutral-600'
              )}
            />
          ))}
      </div>
    </div>
  );
}

function SkillItem({ name, expertise }: Skill) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-8 items-center px-8 py-10 bg-neutral-800 rounded-lg flex-wrap h-full">
      <Image src={githubIcon} width={40} height={40} alt="list-item" className="self-center" />

      <div className="space-y-2 self-start lg:self-auto">
        <div className="text-lg font-medium line-clamp-2">{name}</div>
        <div className="flex gap-1 items-center -ml-1">
          <ExpertiseIcon />
          <div style={{ color: '#DD8500' }}>{expertise}</div>
        </div>
      </div>
    </div>
  );
}

function ExpertiseIcon() {
  return (
    <svg width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M9.675 13.7L10.55 10.85L8.25 9H11.1L12 6.2L12.9 9H15.75L13.425 10.85L14.3 13.7L12 11.925L9.675 13.7ZM6 23V15.275C5.36667 14.575 4.875 13.775 4.525 12.875C4.175 11.975 4 11.0167 4 10C4 7.76667 4.775 5.875 6.325 4.325C7.875 2.775 9.76667 2 12 2C14.2333 2 16.125 2.775 17.675 4.325C19.225 5.875 20 7.76667 20 10C20 11.0167 19.825 11.975 19.475 12.875C19.125 13.775 18.6333 14.575 18 15.275V23L12 21L6 23ZM12 16C13.6667 16 15.0833 15.4167 16.25 14.25C17.4167 13.0833 18 11.6667 18 10C18 8.33333 17.4167 6.91667 16.25 5.75C15.0833 4.58333 13.6667 4 12 4C10.3333 4 8.91667 4.58333 7.75 5.75C6.58333 6.91667 6 8.33333 6 10C6 11.6667 6.58333 13.0833 7.75 14.25C8.91667 15.4167 10.3333 16 12 16ZM8 20.025L12 19L16 20.025V16.925C15.4167 17.2583 14.7875 17.5208 14.1125 17.7125C13.4375 17.9042 12.7333 18 12 18C11.2667 18 10.5625 17.9042 9.8875 17.7125C9.2125 17.5208 8.58333 17.2583 8 16.925V20.025Z"
          fill="#DD8500"
        />
      </g>
    </svg>
  );
}

function ImageFigure() {
  return (
    <div className="h-[calc(100vh-120px-12rem)] relative" style={{ gridArea: 'image' }}>
      <Image src={mobileDesign} alt="github icon" fill className="object-contain object-right" />
    </div>
  );
}
