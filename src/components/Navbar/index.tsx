import styles from './navbar.module.scss'
import { FC } from 'react'

import { CustomLink } from '@/ui'
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
      <CustomLink
          to="/"
          icon={<HomeIcon />}
          text="Главная"
          isNavLink={true}
          customStyles={{
            link: styles['nav-link'],
            activeLink: styles['active-nav-link'],
            linkIcon: styles['nav-link-icon'],
            linkText: styles['nav-link-text']
          }}
        />
        <CustomLink
          to="/schedule"
          icon={<ScheduleIcon />}
          text="Расписание"
          isNavLink={true}
          customStyles={{
            link: styles['nav-link'],
            activeLink: styles['active-nav-link'],
            linkIcon: styles['nav-link-icon'],
            linkText: styles['nav-link-text']
          }}
        />
        <CustomLink
          to="/payment"
          icon={<PaymentIcon />}
          text='Оплата'
          isNavLink={true}
          customStyles={{
            link: styles['nav-link'],
            activeLink: styles['active-nav-link'],
            linkIcon: styles['nav-link-icon'],
            linkText: styles['nav-link-text']
          }}
        />
        <CustomLink
          to="/achievements"
          icon={<AchievementsIcon />}
          text='Достижения'
          isNavLink={true}
          customStyles={{
            link: styles['nav-link'],
            activeLink: styles['active-nav-link'],
            linkIcon: styles['nav-link-icon'],
            linkText: styles['nav-link-text']
          }}
        />
        <CustomLink
          to="/exercisers"
          icon={<ExercisersIcon />}
          text='Тренажеры'
          isNavLink={true}
          customStyles={{
            link: styles['nav-link'],
            activeLink: styles['active-nav-link'],
            linkIcon: styles['nav-link-icon'],
            linkText: styles['nav-link-text']
          }}
        />
        <CustomLink
          to="/library"
          icon={<LibraryIcon />}
          text='Библиотека'
          isNavLink={true}
          customStyles={{
            link: styles['nav-link'],
            activeLink: styles['active-nav-link'],
            linkIcon: styles['nav-link-icon'],
            linkText: styles['nav-link-text']
          }}
        />
        <CustomLink
          to="/commcheck"
          icon={<CommcheckIcon />}
          text='Проверка связи'
          isNavLink={true}
          customStyles={{
            link: styles['nav-link'],
            activeLink: styles['active-nav-link'],
            linkIcon: styles['nav-link-icon'],
            linkText: styles['nav-link-text']
          }}
        />
        <CustomLink
          to="/settings"
          icon={<SettingsIcon />}
          text='Настройки'
          isNavLink={true}
          customStyles={{
            link: styles['nav-link'],
            activeLink: styles['active-nav-link'],
            linkIcon: styles['nav-link-icon'],
            linkText: styles['nav-link-text']
          }}
        />
        <CustomLink
          to="/questions"
          icon={<QuestionsIcon />}
          text='Вопросы'
          isNavLink={true}
          customStyles={{
            link: styles['nav-link'],
            activeLink: styles['active-nav-link'],
            linkIcon: styles['nav-link-icon'],
            linkText: styles['nav-link-text']
          }}
        />
      </nav>
    </>
  )
}

export { Navbar }