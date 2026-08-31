import shiftBanner from '../assets/WM_ShiftBound.png';
import shiftArt from '../assets/shift.png';
import bycle from '../assets/bycle.png';
import bycleHover from '../assets/BycleHover.png';
import mokshlogo from '../assets/mokshlogo.png';
import mokshenv from '../assets/mokshenv.png';
import yekshi from '../assets/Yekshi.png';
import yekshiHover from '../assets/YekshiHover.png';
import coffinAvatar from '../assets/coffin.jpg';
import arjunAvatar from '../assets/arjun.png';
import amjithAvatar from '../assets/amjith.png';
import flyfoxAvatar from '../assets/flyfox.jpg';
import annMaryAvatar from '../assets/Ann Mary.jpeg';

export const studioNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Games', href: '#games' },
  { name: 'Projects', href: '#projects' },
  { name: 'Studio', href: '#studio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const gamesData = [
  {
    id: 'shift-bounds',
    title: 'SHIFT BOUNDS',
    type: 'IN-HOUSE',
    typeLabel: 'THRIGON INTERACTIVES · IN-HOUSE IP',
    status: 'IN DEVELOPMENT',
    platform: 'PC',
    tagline: 'Leap across charming landscapes and use playful magic to uncover tiny mysteries...',
    description: 'Shift Bounds is an original PC game currently being developed by Thrigon Interactives. Leap across charming landscapes and use playful magic to uncover tiny mysteries.',
    tags: ["Platformer", "Sci-fi", "Adventure", "Slice of Life"],
    details: [
      'Original Thrigon Intellectual Property',
      'Engineered specifically for PC hardware',
      'Focus on immersive atmospheric world building',
      'In active production by the core Thrigon team'
    ],
    image: shiftBanner,
    altImage: shiftArt,
    isFeatured: true,
    isClient: false,
  },
  {
    id: 'stride',
    title: 'STRIDE',
    type: 'CLIENT PROJECT',
    typeLabel: 'THRIGON INTERACTIVES · CLIENT PROJECT',
    status: 'IN DEVELOPMENT',
    platform: 'PC',
    tagline: 'A client game development project built with technical precision.',
    description: 'A game development project currently being developed by Thrigon Interactives for a client. We bring full technical execution, gameplay craftsmanship, and interactive engineering.',
    tags: ["Client Project", "PC Game Dev", "Interactive Systems", "Engineering"],
    details: [
      'Dedicated client game development pipeline',
      'Tailored interactive engine architecture',
      'High-performance mechanics and environmental design',
      'Collaborative production workflow under strict quality bars'
    ],
    image: null,
    altImage: null,
    isFeatured: false,
    isClient: true,
  },
  {
    id: 'moksh',
    title: 'MOKSH: THE LAST HOPE',
    type: 'IN-HOUSE',
    typeLabel: 'THRIGON INTERACTIVES · IN-HOUSE IP',
    status: 'COMING SOON',
    platform: 'PC',
    tagline: 'Survive as a lab intern in a zombie-infested land inspired by India...',
    description: 'Survive as a lab intern in a zombie-infested land inspired by India. Unravel mysteries and fight for hope in a story-rich survival adventure.',
    tags: ["Adventure", "Exploration", "Story-Rich", "Survival"],
    details: [
      'Zombie survival narrative set in Indian landscapes',
      'Lab intern survival & resource mechanics',
      'Story-rich exploration designed for PC'
    ],
    image: mokshlogo,
    altImage: mokshenv,
    isFeatured: false,
    isClient: false,
  },
  {
    id: 'bicycle-life',
    title: 'BICYCLE LIFE: ORU CYCLE KADHA',
    type: 'IN-HOUSE',
    typeLabel: 'THRIGON INTERACTIVES · IN-HOUSE IP',
    status: 'COMING SOON',
    platform: 'PC',
    tagline: 'Race through misty 90s mornings and lively streets as a witty paperboy...',
    description: 'Race through misty 90s mornings and lively streets as a witty paperboy in this nostalgic open-world arcade experience.',
    tags: ["Open-World", "Casual", "Arcade", "Slice of Life"],
    details: [
      'Nostalgic 90s open-world atmosphere',
      'Witty paperboy delivery & navigation mechanics',
      'Custom PC interactive environment'
    ],
    image: bycle,
    altImage: bycleHover,
    isFeatured: false,
    isClient: false,
  },
  {
    id: 'yakshi-nights',
    title: 'YAKSHI NIGHTS',
    type: 'IN-HOUSE',
    typeLabel: 'THRIGON INTERACTIVES · IN-HOUSE IP',
    status: 'CONCEPT',
    platform: 'PC',
    tagline: 'Unravel the dark secrets of a haunted Kerala-inspired tharavadu as a modern priest...',
    description: 'Unravel the dark secrets of a haunted Kerala-inspired tharavadu as a modern priest in this creepy horror puzzle adventure.',
    tags: ["Puzzle", "Horror", "Open-World RPG"],
    details: [
      'Kerala-inspired folklore and tharavadu atmosphere',
      'Modern priest narrative & puzzle mechanics',
      'Conceptual dark RPG design'
    ],
    image: yekshi,
    altImage: yekshiHover,
    isFeatured: false,
    isClient: false,
  }
];

export const clientProjectsData = [
  {
    id: 'stride',
    title: 'STRIDE',
    type: 'CLIENT PROJECT',
    typeLabel: 'THRIGON INTERACTIVES · CLIENT PROJECT',
    status: 'IN DEVELOPMENT',
    platform: 'PC',
    tagline: 'A client game development project built with technical precision.',
    description: 'A game development project currently being developed by Thrigon Interactives for a client. We bring full technical execution, gameplay craftsmanship, and interactive engineering to realize the project vision.',
    details: [
      'Dedicated client game development pipeline',
      'Tailored interactive engine architecture',
      'High-performance mechanics and environmental design',
      'Collaborative production workflow under strict quality bars'
    ],
    image: null, // Uses abstract studio shader teaser presentation
    isFeatured: false,
    isClient: true,
  }
];

export const studioPrinciples = [
  {
    number: '01',
    title: 'IMAGINE',
    subtitle: 'THE CONCEPT',
    description: 'Start with an idea worth exploring. We identify core mechanics and atmospheric hooks that make a world feel distinct and intriguing.'
  },
  {
    number: '02',
    title: 'BUILD',
    subtitle: 'THE EXECUTION',
    description: 'Turn concepts into playable experiences. We engineer game logic, render environments, and refine systems with technical precision.'
  },
  {
    number: '03',
    title: 'EXPERIENCE',
    subtitle: 'THE IMPACT',
    description: 'Create something players can remember. We focus on meaningful player agency, memorable moments, and lasting creative vision.'
  }
];

export const devProcessStages = [
  {
    step: '01',
    title: 'CONCEPT',
    action: 'Find the idea.',
    description: 'Deconstruct mechanics, refine narrative seeds, and establish visual targets.'
  },
  {
    step: '02',
    title: 'PROTOTYPE',
    action: 'Make it playable.',
    description: 'Build greybox mechanics and test core game feel early.'
  },
  {
    step: '03',
    title: 'BUILD',
    action: 'Develop the experience.',
    description: 'Assemble high-fidelity assets, write game logic, and expand world geometry.'
  },
  {
    step: '04',
    title: 'REFINE',
    action: 'Playtest and improve.',
    description: 'Iterate on performance, balance difficulty, polish animations, and fix edge cases.'
  },
  {
    step: '05',
    title: 'RELEASE',
    action: 'Bring it to players.',
    description: 'Deploy PC production builds and support long-term player communities.'
  }
];

export const studioTeamMembers = [
  {
    name: 'Devan',
    alias: 'Coffin',
    role: 'Game Developer / Creative Director',
    avatar: coffinAvatar,
    avatarPosition: 'center 15%',
    socials: {
      twitter: 'https://x.com/_mr_coffin',
      linkedin: 'https://www.linkedin.com/in/-devan-m/'
    }
  },
  {
    name: 'Arjun',
    alias: 'WhiteWolf',
    role: 'Game Developer / Game Designer',
    avatar: arjunAvatar,
    avatarPosition: 'center 25%',
    socials: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/in/arjun-shanker-/'
    }
  },
  {
    name: 'Amjith',
    alias: 'JohnnyDan',
    role: '3D Artist / Texturing',
    avatar: amjithAvatar,
    avatarPosition: 'center 15%',
    socials: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/in/amjithkshine/'
    }
  },
  {
    name: 'Anand',
    alias: 'FlyFox',
    role: '3D Artist / Level Designer',
    avatar: flyfoxAvatar,
    avatarPosition: 'center 15%',
    socials: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://www.linkedin.com/in/anand-anil-369aa4209/'
    }
  }
  /*
  {
    name: 'Ann Mary',
    alias: null,
    role: 'Animator',
    avatar: annMaryAvatar,
    avatarPosition: '45% 75%',
    socials: {}
  }
  */
];

export const studioSocials = {
  twitter: 'https://x.com/ThrigonInter',
  instagram: 'https://www.instagram.com/thrigon_interactives/',
  youtube: 'https://youtube.com/@thrigoninteractives',
  discord: 'https://discord.gg/jZNjJ5mBYM',
  email: 'thrigoninteractives@gmail.com',
  duospireUrl: 'https://duospire.com'
};
