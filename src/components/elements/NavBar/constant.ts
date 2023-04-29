import {
  HomeIcon,
  ChatBubbleLeftRightIcon,
  BeakerIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline'

export const routes = [
  {
    path: '/',
    name: 'Home',
    icon: HomeIcon,
  },
  {
    path: '/',
    name: 'Medicine',
    icon: BeakerIcon,
  },
  {
    path: '/forum',
    name: 'Forum',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    path: '/',
    name: 'Blog',
    icon: NewspaperIcon,
  },
]
