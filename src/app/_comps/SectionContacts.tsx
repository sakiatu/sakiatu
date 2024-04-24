import contacts, { Contact } from '@/data/contacts';
import { cn } from '@/lib/utils';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SectionContacts() {
  return (
    <div className="min-h-screen flex">
      <div id="contacts" className={cn('container space-y-20 py-20 sm:py-32 uppercase')}>
        <Header />

        <ContactList />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="title-big text-center">
      Contact Me <span className="text-violet-500">Here</span>
    </div>
  );
}

function ContactList() {
  return (
    <div className="max-w-[540px] mx-auto grid grid-cols-2 sm:grid-cols-1 gap-8">
      {contacts.map((contact, i) => (
        <ContactItem key={i} {...contact} />
      ))}
    </div>
  );
}

function ContactItem({ icon, name, link }: Contact) {
  return (
    <Link
      href={link}
      target="_blank"
      className={cn(
        'flex flex-col gap-6 py-8 h-full items-center bg-white/50 hover:bg-gray-100/50 border drop-shadow-md rounded-xl',
        'sm:px-8 sm:py-10 sm:gap-12 sm:flex-row'
      )}
    >
      <Image src={icon} width={40} height={40} alt="list-item" />

      <div className="space-y-1">
        <div className="sm:text-lg font-medium">{name}</div>
        <div className="flex gap-1 items-center">
          <div className="hidden sm:block text-sm text-gray-500 normal-case">{link}</div>
        </div>
      </div>

      <div className="grow hidden sm:block">
        <ExternalLinkIcon size={20} className="ml-auto" />
      </div>
    </Link>
  );
}
