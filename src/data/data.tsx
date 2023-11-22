import {
  FaHouse,
  FaSuitcase,
  FaCubes,
  FaRegUser,
  FaRegEnvelope,
} from 'react-icons/fa6';

type NavItemType = {
  id: number;
  // title: string;
  icon: JSX.Element;
  to: string;
};

type NavbarType = {
  logo: {
    title: string;
  };
  nav: NavItemType[];
};

type LanguageType = {
  label: string;
  code: string;
};

export const dataNavbar = (navItem: number): NavbarType => ({
  logo: {
    title: '',
  },
  nav: [
    {
      id: 1,
      // title: '',
      icon: (
        <FaHouse
          className={navItem === 1 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
        />
      ),
      to: '/',
    },
    {
      id: 2,

      icon: (
        <FaRegUser
          className={navItem === 5 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
        />
      ),
      to: '/miPerfil',
    },
    {
      id: 3,
      // title: '',
      icon: (
        <FaSuitcase
          className={navItem === 2 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
        />
      ),
      to: '/experiencia',
    },
    {
      id: 4,
      // title: '',
      icon: (
        <FaCubes
          className={navItem === 3 ? 'text-app-primary w-5 h-5' : 'w-5 h-5'}
        />
      ),
      to: '/habilidades',
    },

    {
      id: 5,
      // title: '',
      icon: (
        <FaRegEnvelope
          className={navItem === 6 ? 'text-app-primary w-5 h-5 ' : 'w-5 h-5'}
        />
      ),
      to: '/contact',
    },
  ],
});

export const languageData = (): LanguageType[] => [
  { label: 'English', code: 'en' },
  { label: 'Spanish', code: 'es' },
];
