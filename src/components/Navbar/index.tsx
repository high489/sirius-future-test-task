import styles from './navbar.module.scss'
import { FC } from 'react'

import { CustomNavLink } from '@/ui'
import HomeIcon from '@app/assets/icons/navbar-icons/home-icon.svg?react'
import ScheduleIcon from '@app/assets/icons/navbar-icons/schedule-icon.svg?react'
import PaymentIcon from '@app/assets/icons/navbar-icons/payment-icon.svg?react'
import AchievementsIcon from '@app/assets/icons/navbar-icons/achievements-icon.svg?react'
import ExercisersIcon from '@app/assets/icons/navbar-icons/exercisers-icon.svg?react'
import LibraryIcon from '@app/assets/icons/navbar-icons/library-icon.svg?react'
import CommcheckIcon from '@app/assets/icons/navbar-icons/commcheck-icon.svg?react'
import SettingsIcon from '@app/assets/icons/navbar-icons/settings-icon.svg?react'
import QuestionsIcon from '@app/assets/icons/navbar-icons/questions-icon.svg?react'

const Navbar: FC = () => {
  
  return (
    <>
      <nav className={styles.navbar}>
        <CustomNavLink
          to="/"
          icon={<HomeIcon />}
          text='Главная'
        />
        <CustomNavLink
          to="/schedule"
          icon={<ScheduleIcon />}
          text='Расписание'
        />
        <CustomNavLink
          to="/payment"
          icon={<PaymentIcon />}
          text='Оплата'
        />
        <CustomNavLink
          to="/achievements"
          icon={<AchievementsIcon />}
          text='Достижения'
        />
        <CustomNavLink
          to="/exercisers"
          icon={<ExercisersIcon />}
          text='Тренажеры'
        />
        <CustomNavLink
          to="/library"
          icon={<LibraryIcon />}
          text='Библиотека'
        />
        <CustomNavLink
          to="/commcheck"
          icon={<CommcheckIcon />}
          text='Проверка связи'
        />
        <CustomNavLink
          to="/settings"
          icon={<SettingsIcon />}
          text='Настройки'
        />
        <CustomNavLink
          to="/questions"
          icon={<QuestionsIcon />}
          text='Вопросы'
        />
      </nav>
    </>
  )
}

export { Navbar }