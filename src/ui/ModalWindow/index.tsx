import styles from './modal-window.module.scss'
import { FC } from 'react'

import CloseIcon from './assets/close-icon.svg?react'

interface ModalWindowProps {
  className?: string
  showModal: boolean
  setShowModal: (newValue: boolean) => void
  children?: any
}

const ModalWindow: FC<ModalWindowProps> = ({
  className, showModal, setShowModal, children,
}) => {
  return (
    <>
      {showModal && (
        <div 
          className={`${styles['modal-window']} ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          <CloseIcon
            className={`${styles['close-icon']}`}
            onClick={() => setShowModal(false)}
          />
          {children}
        </div>
      )}
    </>
  )
}

export { ModalWindow }