import { TbBolt, TbMoon } from 'react-icons/tb'
import { PiDevicesBold, PiMagicWand } from 'react-icons/pi'
import { Image } from '@nextui-org/react'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa6'

export const featuresData = [
    {
        id:1,
        heading:'Themeable',
        icon:<Image src='/svgs/magicwand.svg' alt=''/>,
        desc:'Provides a plugin to customize default themes, you can change all semantic tokens or create an entire new theme.',
    },
    {
        id:2,
        heading:'Fast',
        icon:<Image src='/svgs/bolt.svg' alt=''/>,
        desc:'Built on top of Tailwind CSS, which means no runtime styles, and no unnecessary classes in your bundle.',
    },
    {
        id:3,
        heading:'Light & Dark UI',
        icon:<Image src='/svgs/crescent.svg' alt=''/>,
        desc:'Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.',
    },
    {
        id:4,
        heading:'Unique DX',
        icon:<Image src='/svgs/devices.svg' alt=''/>,
        desc:'NextUI is fully-typed to minimize the learning curve, and provide the best possible developer experience.',
    },
]

export const accessibilityBulletPoint = [
    {
        id:1,
        point:'Keyboard navigation',
        icon: <Image src='/svgs/bullet_register.svg' alt=''/>,
    },
    {
        id:2,
        point:'Managed focus',
        icon: <Image src='/svgs/bullet_cursor.svg' alt=''/>,
    },
    {
        id:3,
        point:'Collision aware',
        icon: <Image src='/svgs/bullet_copy.svg' alt=''/>,
    },
    {
        id:4,
        point:'Alignment control',
        icon: <Image src='/svgs/bullet_align.svg' alt=''/>,
    },
    {
        id:5,
        point:'Screen reader support',
        icon: <Image src='/svgs/bullet_eye.svg' alt=''/>,
    },
    {
        id:6,
        point:'Typehead support',
        icon: <Image src='/svgs/bullet_typehead.svg' alt=''/>,
    },
]

export const extendedFeaturesData = [
    {
        id:1,
        heading:'React server components',
        desc:'',
        icon: <Image src="/svgs/extended_server.svg" alt="" />,
    },
    {
        id:2,
        heading:'Accessible components',
        desc:'NextUI components follow the WAI-ARIA guidelines, provide keyboard support and sensible focus management',
        icon: <Image src="/svgs/extended_accesible.svg" alt="" />,
    },
    {
        id:3,
        heading:'Focus interactions',
        desc:'Focus ring will appear only when user navigates with keyboard or screen reader.',
        icon: <Image src="/svgs/extended_focus.svg" alt="" />,
    },
    {
        id:4,
        heading:'Multiple packages',
        desc:'NextUI is divided into multiple packages, so you can install only the components you need.',
        icon: <Image src="/svgs/extended_packages.svg" alt="" />,
    },
    {
        id:5,
        heading:'Typescript based',
        desc:'Build type safe applications, NextUI has a fully typed API to minimize learning curve, and help you build applications.',
        icon: <Image src="/svgs/extended_typescript.svg" alt="" />,
    },
    {
        id:6,
        heading:'Override components tags',
        desc:'A polymorphic `as` prop is included in all NextUI components.',
        icon: <Image src="/svgs/extended_tags.svg" alt="" />,
    },
    {
        id:7,
        heading:'No runtime styles',
        desc:'NextUI is based on Tailwind CSS, it means that there are no runtime styles, and no unnecessary classes in your bundle.',
        icon: <Image src="/svgs/bolt.svg" alt="" />,
    },
    {
        id:8,
        heading:'Beautifully designed',
        desc:'NextUI components are unique and are not tied to any visual trend or design rule, which makes us unique and of course your projects as well.',
        icon: <Image src="/svgs/magicwand.svg" alt="" />,
    },
]

export const communityData = [
    {
        id:1,
        handle: 'Twitter',
        desc: 'For announcements, tips and general information.',
        icon: <FaTwitter className="text-2xl text-[#00acee]"/>,
    },
    {
        id:2,
        handle: 'Discord',
        desc: 'To get involved in the community, ask questions and share tips.',
        icon: <FaDiscord className="text-2xl text-[#7289da]"/>,
    },
    {
        id:3,
        handle: 'Github',
        desc: 'To report bugs, request features and contribute to the project.',
        icon: <FaGithub className="text-2xl text-[#ffffff]"/>,
    },
]