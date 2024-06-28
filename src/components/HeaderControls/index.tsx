import styles from './header-controls.module.scss'

import { HeaderChatControl, HeaderUserControl } from '@/components'

const HeaderControls = () => {

  return (
    <>
      <div className={`${styles['header-controls']}`}>
        <HeaderChatControl number={2} />
        <HeaderUserControl />
      </div>
    </>
  )
}

export { HeaderControls }