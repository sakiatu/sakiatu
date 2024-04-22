'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const projects = [
  { name: 'Attendance Basic', stack: 'Android, Java, SQLite' },
  { name: 'Attendance with PDF & Excel Sheet', stack: 'Flutter, GetX, Firebase, SyncFusion' },
  { name: 'Study Management System', stack: 'Flutter, GetX, GraphQL, Material 3' },
  { name: 'Location Tracker', stack: 'Android, Java, Google Location API' },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div id="projects" className="bg-violet-100">
      <div
        className={cn(
          'grid grid-rows-[auto_1fr] grid-cols-1 lg:grid-cols-[auto_1fr] gap-y-16 gap-x-8',
          'mx-auto uppercase py-16 px-8',
          'min-h-[calc(100vh-80px)] lg:w-[1000px] xl:w-[1240px]'
        )}
        style={{
          gridTemplateAreas: '"header header" "projects project"',
        }}
      >
        <Header />

        <ProjectList selectedProject={selectedProject} selectProject={setSelectedProject} />

        <Project {...projects[selectedProject]} />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="font-black text-4xl" style={{ gridArea: 'header' }}>
      Follows <span className="text-violet-600">Best Practices</span> in Projects
    </div>
  );
}

function ProjectList({
  selectedProject,
  selectProject,
}: {
  selectedProject: number;
  selectProject: Function;
}) {
  return (
    <div style={{ gridArea: 'projects' }} className="overflow-auto space-y-4">
      {projects.map((proj, i) => (
        <div key={proj.name} className={'shadow-sm w-full'}>
          <Button
            variant={'secondary'}
            className={cn(
              'p-8 rounded-xl w-full justify-start',
              selectedProject === i ? 'bg-violet-200 hover:bg-violet-300' : ''
            )}
            onClick={() => selectProject(i)}
          >
            <div className="text-sm font-medium">{proj.name}</div>
          </Button>
        </div>
      ))}
    </div>
  );
}

function Project(props: { name: string; stack: string }) {
  return (
    <div style={{ gridArea: 'project' }}>
      <div className="max-w-lg rounded-2xl bg-violet-50 mx-auto p-4 shadow-xl">
        <div className="min-h-60 bg-gray-200 rounded-2xl w-full mb-4"></div>

        <div className="flex justify-between items-center">
          <div className="p-2 space-y-2">
            <div className="font-black text-gray-700">{props.name}</div>
            <div className="text-sm text-gray-500 normal-case">{props.stack}</div>
          </div>

          <Button>Download</Button>
        </div>
      </div>
    </div>
  );
}
