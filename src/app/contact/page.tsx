import BgText from '@/components/BgText';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import githubIcon from '@/assets/github.svg';
import facebookIcon from '@/assets/facebook.svg';
import youtubeIcon from '@/assets/youtube.svg';
import mailIcon from '@/assets/mail.svg';
import { FACEBOOK_LINK, GITHUB_LINK, GMAIL, YOUTUBE_LINK } from '@/lib/consts';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

type Contact = {
  icon: any;
  name: string;
  link: string;
};

const contacts: Contact[] = [
  { icon: githubIcon, name: 'Github', link: GITHUB_LINK },
  { icon: facebookIcon, name: 'Facebook', link: FACEBOOK_LINK },
  { icon: youtubeIcon, name: 'Youtube', link: YOUTUBE_LINK },
  { icon: mailIcon, name: 'Mail', link: GMAIL },
];

export default function ContactPage() {
  return (
    <main className="grid grid-rows-[auto_1fr] min-h-screen flex-col">
      <Navbar activePage="contact" />

      <PageContent />
    </main>
  );
}

function PageContent() {
  return (
    <div className="relative overflow-hidden pt-10">
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
      className="flex gap-12 items-center px-8 py-10 bg-white/50 hover:bg-gray-100/50 backdrop-blur border drop-shadow-md rounded-xl"
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
