import styles from './sidebar-referral.module.scss'
import { FC } from 'react'

import GiftBox from '@app/assets/images/gift-box.svg?react'

const SidebarReferral: FC = () => {
  return (
    <>
      <div className={`${styles['sidebar-referral']}`}>
        <h5 className={`${styles['sidebar-referral-title']}`}>Учитесь бесплатно</h5>
        <div className={`${styles['sidebar-referral-text']}`}>{'Приводите друзей с детьми заниматься в Sirius Future\nи получайте подарки!'}</div>
        <button className={`${styles['sidebar-referral-btn']}`}>Узнать</button>
        <GiftBox className={`${styles['sidebar-referral-gift-box']}`} />
      </div>
    </>
  )
}

export { SidebarReferral }