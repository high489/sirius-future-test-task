import {
  HomeView,
  ScheduleView,
  NotFoundView,
 } from '@/views'

import HomeIcon from '@app/assets/icons/navbar-icons/home-icon.svg?react'
import ScheduleIcon from '@app/assets/icons/navbar-icons/schedule-icon.svg?react'
import PaymentIcon from '@app/assets/icons/navbar-icons/payment-icon.svg?react'
import AchievementsIcon from '@app/assets/icons/navbar-icons/achievements-icon.svg?react'
import ExercisersIcon from '@app/assets/icons/navbar-icons/exercisers-icon.svg?react'
import LibraryIcon from '@app/assets/icons/navbar-icons/library-icon.svg?react'
import CallSettingsIcon from '@app/assets/icons/navbar-icons/call-settings-icon.svg?react'
import SettingsIcon from '@app/assets/icons/navbar-icons/settings-icon.svg?react'
import QuestionsIcon from '@app/assets/icons/navbar-icons/questions-icon.svg?react'

import { RouteItem } from '@/app/models'

const routes: RouteItem[] = [
  {
    index: true,
    path: '/',
    element: <HomeView />,
    icon: <HomeIcon />,
    text: {
      en: 'Home',
      ru: 'Главная',
    },
  },
  {
    index: false,
    path: '/schedule',
    element: <ScheduleView />,
    icon: <ScheduleIcon />,
    text: {
      en: 'Schedule',
      ru: 'Расписание',
    },
  },
  {
    index: false,
    path: '/payment',
    icon: <PaymentIcon />,
    text: {
      en: 'Payment',
      ru: 'Оплата',
    },
  },
  {
    index: false,
    path: '/achievements',
    icon: <AchievementsIcon />,
    text: {
      en: 'Achievements',
      ru: 'Достижения',
    },
  },
  {
    index: false,
    path: '/exercisers',
    icon: <ExercisersIcon />,
    text: {
      en: 'Exercisers',
      ru: 'Тренажеры',
    },
  },
  {
    index: false,
    path: '/library',
    icon: <LibraryIcon />,
    text: {
      en: 'Library',
      ru: 'Библиотека',
    },
  },
  {
    index: false,
    path: '/call_settings',
    icon: <CallSettingsIcon />,
    text: {
      en: 'Call Settings',
      ru: 'Проверка связи',
    },
  },
  {
    index: false,
    path: '/settings',
    icon: <SettingsIcon />,
    text: {
      en: 'Settings',
      ru: 'Настройки',
    },
  },
  {
    index: false,
    path: '/questions',
    icon: <QuestionsIcon />,
    text: {
      en: 'Questions',
      ru: 'Вопросы',
    },
  },
  {
    index: false,
    path: '*',
    element: <NotFoundView />,
  },
]

export { routes }