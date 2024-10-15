import styles from './referral.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import GiftBox from '@app/assets/images/gift-box.svg?react'

const Referral: FC = () => {
  const { t } = useTranslation()
  const tPath = 'components.referral'
  return (
    <>
      <div className={`${styles['referral']}`}>
        <h5 className={`${styles['referral-title']}`}>{ t(`${tPath}.title`) }</h5>
        <div className={`${styles['referral-text']}`}>{ t(`${tPath}.text`) }</div>
        <button className={`${styles['referral-btn']}`}>{ t(`${tPath}.btn-text`) }</button>
        <GiftBox className={`${styles['referral-gift-box']}`} />
      </div>
    </>
  )
}

export { Referral }