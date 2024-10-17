import styles from './ad-banner.module.scss'
import { FC } from 'react'

interface AdBannerProps {}

const AdBanner: FC<AdBannerProps> = () => {
  return (
    <>
      <div className={styles['ad-banner']}>AdBanner</div>
    </>
  )
}

export { AdBanner }