import styles from './header-controls.module.scss'

import { ChatControl, UsersControl, LanguageSelector } from '@/components'

const HeaderControls = () => {

  return (
    <>
      <div className={`${styles['header-controls']}`}>
        <LanguageSelector />
        <ChatControl number={2} />
        <UsersControl />
      </div>
    </>
  )
}

export { HeaderControls }