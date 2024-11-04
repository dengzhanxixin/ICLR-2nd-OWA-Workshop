import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Overview',
      href: getPermalink('/#Overview'),
    },
    // {
    //   text: 'Call for Papers',
    //   href: getPermalink('/#Call-For-Papers'),
    // },
    {
      text: 'People',
      href: getPermalink('/#Organizers'),
    },
    {
      text:'Speakers',
      href:getPermalink('/#Speakers')
    },
    {
      text:'Committee',
      href:getPermalink('/#Steering-Committee')
    },
    { 
      text:'Q&A',
      href:getPermalink('/#Q&A')
    }
    // {
    //   text: 'Challenges',
    //   href: getPermalink('/#Challenges'),
    // },
    // {
    //   text: 'People',
    //   href: getPermalink('/#Organizers'),
    // },
    // {
    //   text:'Challenge',
    //   href:'https://chenyi99.github.io/ego_plan_challenge/'
    // }
    // {
    //   text: 'Steering Committee',
    //   href: getPermalink('/#Steering-Committee'),
    // },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: '#' },
  ],
};
