import { YOUTUBE_LINK } from '@/lib/consts';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const youtubeVideos = [
  { src: 'https://www.youtube.com/embed/oyA7pCXdTOc?si=lBdGdgozDTpLgwZl' },
  { src: 'https://www.youtube.com/embed/qd5YZRPeJXU?si=otiBnWyMS8zlbjZE' },
  { src: 'https://www.youtube.com/embed/vp58EDJJ3uc?si=GVtUIU9oA_DRdc7Q' },
  { src: 'https://www.youtube.com/embed/tUV-RCC_CWQ?si=SZecfFDfUhKP3-Fk' },
  { src: 'https://www.youtube.com/embed/V24Pa0tANWk?si=URmxUfPNHX38Vmvz' },
  { src: 'https://www.youtube.com/embed/MpYfvcm0BIM?si=5DUsr5p7raE73qRC' },
];

export default function YoutubeSection() {
  return (
    <div id="youtube" className="bg-black text-white">
      <div
        className={cn(
          'grid grid-rows-[auto_1fr] gap-y-16 gap-x-8',
          'mx-auto uppercase py-16 px-8',
          'min-h-[calc(100vh-80px)] lg:w-[1000px] xl:w-[1240px]'
        )}
      >
        <Header />

        <YoutubeFeed />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="font-black text-4xl">
      Content Creator at{' '}
      <Link
        href={YOUTUBE_LINK}
        target="_blank"
        className="border-b-2 border-white text-orange-400 hover:text-orange-500 hover:border-b-4 transition-all"
      >
        Bee Coder
      </Link>
    </div>
  );
}

function YoutubeFeed() {
  return (
    <div className="grid grid-cols-3 gap-16">
      {youtubeVideos.map((video, i) => (
        <iframe
          src={video.src + ';controls=0'}
          className="w-full h-full rounded-lg"
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
