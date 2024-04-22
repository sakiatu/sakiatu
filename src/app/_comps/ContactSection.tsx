import Image from 'next/image';
import githubIcon from '@/assets/github.svg';
import facebookIcon from '@/assets/facebook.svg';
import youtubeIcon from '@/assets/youtube.svg';
import mailIcon from '@/assets/mail.svg';
import { FACEBOOK_LINK, GITHUB_LINK, GMAIL, YOUTUBE_LINK } from '@/lib/consts';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

type Contact = {
  icon: any;
  name: string;
  link: string;
};

const contacts: Contact[] = [
  { icon: githubIcon, name: 'Github', link: GITHUB_LINK },
  { icon: facebookIcon, name: 'Facebook', link: FACEBOOK_LINK },
  { icon: youtubeIcon, name: 'Youtube', link: YOUTUBE_LINK },
  { icon: mailIcon, name: 'Mail', link: 'mailto://' + GMAIL },
];

export default function ContactSection() {
  return (
    <div
      id="contact"
      className={cn(
        'grid grid-rows-[auto_1fr] gap-y-16 gap-x-8',
        'mx-auto uppercase py-16 px-8',
        'min-h-[calc(100vh-80px)] lg:w-[1000px] xl:w-[1240px]'
      )}
    >
      <PageContent />
    </div>
  );
}

function PageContent() {
  return (
    <div className="relative overflow-hidden pt-10">
      <div className="font-black text-4xl mb-10 text-center">
        Contact Me <span className="text-violet-400">Here</span>
      </div>

      <div className="w-[540px] mx-auto space-y-4">
        {contacts.map((skill, i) => (
          <ContactItem key={i} {...skill} />
        ))}
      </div>
    </div>
  );
}

function ContactItem({ icon, name, link }: Contact) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex gap-12 items-center px-8 py-10 bg-white/50 hover:bg-gray-100/50 border drop-shadow-md rounded-xl"
    >
      <Image src={icon} width={40} height={40} alt="list-item" />

      <div className="space-y-1">
        <div className="text-lg font-medium">{name}</div>
        <div className="flex gap-1 items-center">
          <div className="text-sm text-gray-500">{link}</div>
        </div>
      </div>

      <div className="grow">
        <ExternalLink size={20} className="ml-auto" />
      </div>
    </Link>
  );
}
