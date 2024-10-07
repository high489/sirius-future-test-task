import { ReactNode } from 'react'

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
import CommcheckIcon from '@app/assets/icons/navbar-icons/commcheck-icon.svg?react'
import SettingsIcon from '@app/assets/icons/navbar-icons/settings-icon.svg?react'
import QuestionsIcon from '@app/assets/icons/navbar-icons/questions-icon.svg?react'

export type RouteItem = {
  index: boolean
  path: string
  element?: ReactNode
  icon?: ReactNode
  text?: string
}

const routes: RouteItem[] = [
  {
    index: true,
    path: '/',
    element: <HomeView />,
    icon: <HomeIcon />,
    text: 'Главная',
  },
  {
    index: false,
    path: '/schedule',
    element: <ScheduleView />,
    icon: <ScheduleIcon />,
    text: 'Расписание',
  },
  {
    index: false,
    path: '/payment',
    icon: <PaymentIcon />,
    text: 'Оплата',
  },
  {
    index: false,
    path: '/achievements',
    icon: <AchievementsIcon />,
    text: 'Достижения',
  },
  {
    index: false,
    path: '/exercisers',
    icon: <ExercisersIcon />,
    text: 'Тренажеры',
  },
  {
    index: false,
    path: '/library',
    icon: <LibraryIcon />,
    text: 'Библиотека',
  },
  {
    index: false,
    path: '/commcheck',
    icon: <CommcheckIcon />,
    text: 'Проверка связи',
  },
  {
    index: false,
    path: '/settings',
    icon: <SettingsIcon />,
    text: 'Настройки',
  },
  {
    index: false,
    path: '/questions',
    icon: <QuestionsIcon />,
    text: 'Вопросы',
  },
  {
    index: false,
    path: '*',
    element: <NotFoundView />,
  },
]

export { routes }