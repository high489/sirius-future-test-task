import styles from './ad-banner.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import SfMascot from '@app/assets/images/sf-mascot.png'

interface AdBannerProps {}

const AdBanner: FC<AdBannerProps> = () => {
  const { t } = useTranslation()
  const tPath = 'components.ad-banner'
  return (
    <>
      <div className={styles['ad-banner']}>
        <h5 className={styles['ad-banner-title']}>{ t(`${tPath}.title`) }</h5>
        <div className={styles['ad-banner-text']}>{ t(`${tPath}.text`) }</div>
        <img className={styles['ad-banner-img']} src={SfMascot} alt="sf-mascot" />
      </div>
    </>
  )
}

export { AdBanner }