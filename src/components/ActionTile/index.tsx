import styles from './action-tile.module.scss'
import { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Homework from './assets/homework.svg?react'
import Reports from './assets/reports.svg?react'

interface ActionTileTypeByIcon {
  icon: ReactNode
  title: string
  route: string
  backgroundColor: string
}

interface ActionTileProps {
  icon: ReactNode | string
  title?: string
  route?: string
  backgroundColor?: string
}

const ActionTile: FC<ActionTileProps> = ({
  icon, title, route, backgroundColor
}) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const tPath = 'components.action-tile'

  const iconDataMap: { [key: string]: ActionTileTypeByIcon } = {
    homework: {
      icon: <Homework />,
      title: t(`${tPath}.homework-title`),
      route: '/homework',
      backgroundColor: '#D8ECFF',
    },
    instructors_reports: {
      icon: <Reports />,
      title: t(`${tPath}.instructors-reports-title`),
      route: '/instructors_reports',
      backgroundColor: '#E8CBFF',
    },
  }

  const getIconData = (iconKey: string): ActionTileTypeByIcon => {
    return iconDataMap[iconKey] || {
      icon: <span>❓</span>,
      title: 'Unknown',
      route: '/unknown',
      backgroundColor: '#e0e0e0',
    }
  }

  const {
    icon: defaultIcon = <span>❓</span>,
    title: defaultTitle = 'Unknown',
    route: defaultRoute = '/unknown',
    backgroundColor: defaultBgColor = '#e0e0e0',
  }: Partial<ActionTileTypeByIcon> = typeof icon === 'string' ? getIconData(icon) : {}
  
  return (
    <>
      <div
        style={{ backgroundColor: backgroundColor || defaultBgColor || '#e0e0e0' }}
        className={`${styles['action-tile']}`}
      >
        <div className={styles['action-tile-title']}>{title || defaultTitle}</div>
        <div
          className={styles['action-tile-icon']}
          onClick={() => navigate(route || defaultRoute || '/')}
        >
          {typeof icon === 'string' ? defaultIcon : icon}
        </div>
      </div>
    </>
  )
}

export { ActionTile }