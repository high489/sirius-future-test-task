import styles from './modal-window.module.scss'
import { FC, useEffect, useRef } from 'react'

import CloseIcon from './assets/close-icon.svg?react'

interface ModalWindowProps {
  showModal: boolean
  setShowModal: (newValue: boolean) => void
  className?: string
  children?: any
  callerElementRef?: React.RefObject<HTMLDivElement>
}

const ModalWindow: FC<ModalWindowProps> = ({
  className, showModal, setShowModal, children, callerElementRef,
}) => {
  const modalWindowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalWindowRef.current && callerElementRef?.current) {
        if (!modalWindowRef.current.contains(event.target as Node) && 
        !callerElementRef.current.contains(event.target as Node))
          setShowModal(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <>
      {showModal && (
        <>
          <div 
            className={`${styles['modal-window']} ${className}`}
            onClick={(e) => e.stopPropagation()}
            ref={modalWindowRef}
          >
            <CloseIcon
              className={`${styles['close-icon']}`}
              onClick={() => setShowModal(false)}
            />
            {children}
          </div>
        </>
      )}
    </>
  )
}

export { ModalWindow }