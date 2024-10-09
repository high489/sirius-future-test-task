import styles from './chat-control.module.scss'
import { FC } from 'react'

import ChatIcon from '@app/assets/icons/chat-icon.svg?react'

interface ChatControlProps {
  number: number
}

const ChatControl: FC<ChatControlProps> = ({ number }) => {
  return (
    <>
      <div className={`${styles['chat-control']}`}>
        <ChatIcon className={`${styles['chat-icon']}`}/>
        <div 
          className={`${styles['notifications']}`}
          style={{ opacity: number > 0 ? 1 : 0 }}
        >
          <span className={styles.number}>{number}</span>
        </div>
      </div>
    </>
  )
}

export { ChatControl }