'use client';

import { cn } from '@/lib/utils';
import projects from '@/data/projects';
import { Button } from '@/components/ui/button';
import { useSignals } from '@preact/signals-react/runtime';
import { signal, useSignal } from '@preact/signals-react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import CarouselDots from '@/components/CarouselDots';
import { useEffect, useState } from 'react';
import { DownloadCloudIcon } from 'lucide-react';

const selectedProject = signal(0);

export default function SectionProjects() {
  useSignals();

  return (
    <div className="min-h-screen flex">
      <div
        id="projects"
        className={cn(
          'container px-0 grid grid-rows-[auto_1fr] gap-x-12 gap-y-4 grid-cols-2 mx-auto py-20 sm:py-32 uppercase'
        )}
      >
        <Header />

        {/* For small screens */}
        <ProjectCarousel />

        {/* For large screens */}
        <div className="hidden lg:contents">
          <ProjectList />

          <div className="justify-self-center self-center w-full pr-12">
            <ProjectItem {...projects[selectedProject.value]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="title-big col-span-2 px-8">
      Follows <span className="text-violet-600">Best Practices</span> in Projects
    </div>
  );
}

function ProjectList() {
  return (
    <div className="max-w-lg col-span-1 self-center pl-8 space-y-4 overflow-y-auto">
      {projects.map((proj, i) => (
        <div key={proj.name} className={'shadow-sm w-full'}>
          <Button
            variant={'secondary'}
            className={cn(
              'p-8 rounded-xl w-full justify-start',
              selectedProject.value === i ? 'bg-violet-200 hover:bg-violet-300' : ''
            )}
            onClick={() => (selectedProject.value = i)}
          >
            <div className="text-sm font-medium">{proj.name}</div>
          </Button>
        </div>
      ))}
    </div>
  );
}

function ProjectCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const current = useSignal(0);
  const count = useSignal(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    count.value = api.scrollSnapList().length;
    current.value = api.selectedScrollSnap() + 1;

    api.on('select', () => {
      current.value = api.selectedScrollSnap() + 1;
    });
  });

  return (
    <div className="self-center col-span-2 lg:hidden">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {projects.map((project, i) => (
            <CarouselItem key={i}>
              <div className="p-8 pb-4 h-full">
                <ProjectItem {...project} className="h-full mx-auto" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <CarouselDots count={count.value} current={current.value} />
    </div>
  );
}

function ProjectItem(props: { name: string; stack: string; className?: string }) {
  return (
    <div className={cn('p-4 max-w-lg bg-violet-50 border rounded-2xl shadow-lg', props.className)}>
      <div className="w-full aspect-video bg-gray-200 rounded-2xl mb-4"></div>

      <div className="flex gap-2 justify-between lg:items-center py-2">
        <div className="px-2 space-y-2">
          <div className="font-black text-gray-700 line-clamp-2">{props.name}</div>
          <div className="text-sm text-gray-500 normal-case line-clamp-2">{props.stack}</div>
        </div>

        <Button className="space-x-2">
          <DownloadCloudIcon size={20} />
          <span className="hidden lg:inline-block">Download</span>
        </Button>
      </div>
    </div>
  );
}
