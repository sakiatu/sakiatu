import githubIcon from '@/assets/github.svg';
import facebookIcon from '@/assets/facebook.svg';
import youtubeIcon from '@/assets/youtube.svg';
import mailIcon from '@/assets/mail.svg';
import { FACEBOOK_LINK, GITHUB_LINK, GMAIL, YOUTUBE_LINK } from '@/lib/consts';

export type Contact = {
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

export default contacts;
