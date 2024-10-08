import styles from './referral.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import GiftBox from '@app/assets/images/gift-box.svg?react'

const Referral: FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className={`${styles['referral']}`}>
        <h5 className={`${styles['referral-title']}`}>{ t('sidebar.referral.title') }</h5>
        <div className={`${styles['referral-text']}`}>{ t('sidebar.referral.text') }</div>
        <button className={`${styles['referral-btn']}`}>{ t('sidebar.referral.btn-text') }</button>
        <GiftBox className={`${styles['referral-gift-box']}`} />
      </div>
    </>
  )
}

export { Referral }