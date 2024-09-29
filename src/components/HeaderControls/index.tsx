import styles from './header-controls.module.scss'

import { HeaderChatControl, HeaderUserControl, LanguageSelector } from '@/components'

const HeaderControls = () => {

  return (
    <>
      <div className={`${styles['header-controls']}`}>
        <LanguageSelector />
        <HeaderChatControl number={2} />
        <HeaderUserControl />
      </div>
    </>
  )
}

export { HeaderControls }