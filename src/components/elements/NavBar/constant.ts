import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
  },
  {
    path: '/medicine',
    name: 'Medicine',
    icon: BeakerIcon,
  },
  {
    path: '/forum',
    name: 'Forum',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    path: '/blog',
    name: 'Blog',
    icon: NewspaperIcon,
  },
  {
    path: '/faq',
    name: 'FAQ',
    icon: QuestionMarkCircleIcon,
  },
]
