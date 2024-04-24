import videos from '@/data/videos';
import { YOUTUBE_LINK } from '@/lib/consts';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function SectionYoutube() {
  return (
    <div className="min-h-screen flex bg-orange-100">
      <div id="youtube" className={cn('container space-y-20 py-20 sm:py-32 uppercase')}>
        <Header />

        <YoutubeFeed />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="title-big">
      Content Creator at <br className="hidden lg:block" />
      <Link
        href={YOUTUBE_LINK}
        target="_blank"
        className="inline-block border-b-2 border-black text-orange-400 hover:text-orange-500/85 hover:border-b-4 transition-[border]"
      >
        Bee Coder
      </Link>
    </div>
  );
}

function YoutubeFeed() {
  return (
    <div className="grid grid-cols-1 grid-rows-none sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-12">
      {videos.map((video, i) => (
        <iframe
          src={video.src + ';controls=0'}
          className="sm:first:col-span-2 lg:first:row-span-2 w-full h-full rounded-lg"
          style={{ aspectRatio: '16/9' }}
          key={i}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
}
