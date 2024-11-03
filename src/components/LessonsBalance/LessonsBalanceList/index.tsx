import styles from './lessons-balance-list.module.scss'
import { FC, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface LessonsBalanceItem {
  subjectName: string
  paidLessonsCount: number
}

interface LessonsBalanceListProps {
  lessonsBalance: LessonsBalanceItem[]
}

const LessonsBalanceList: FC<LessonsBalanceListProps> = ({ lessonsBalance }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const tPath = 'components.lessons-balance.list'
  const listRef = useRef<HTMLDivElement>(null)
  const scrollThumbRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)

  const handleWheel = (e: WheelEvent) => {
    if (listRef.current) {
      e.preventDefault()
      listRef.current.scrollTop += e.deltaY
      updateScrollThumbPosition()
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartY(e.clientY)
    setScrollTop(listRef.current?.scrollTop || 0)
  }

  const handleListMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartY(e.clientY)
    setScrollTop(listRef.current?.scrollTop || 0)
    e.preventDefault()
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && listRef.current) {
      const deltaY = e.clientY - startY
      const scrollHeight = listRef.current.scrollHeight - listRef.current.clientHeight
      const maxScrollTop = listRef.current.scrollHeight - listRef.current.clientHeight
      const scrollDelta = (deltaY / listRef.current.clientHeight) * scrollHeight
      
      listRef.current.scrollTop = Math.min(scrollTop + scrollDelta, maxScrollTop)
      updateScrollThumbPosition()
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const updateScrollThumbPosition = () => {
    if (listRef.current && scrollThumbRef.current) {
      const scrollHeight = listRef.current.scrollHeight - listRef.current.clientHeight
      const thumbHeight = scrollThumbRef.current.clientHeight
  
      const maxThumbTop = scrollThumbRef.current.parentElement!.clientHeight - thumbHeight
  
      let thumbTop = (listRef.current.scrollTop / scrollHeight) * maxThumbTop
      thumbTop = Math.max(0, Math.min(thumbTop, maxThumbTop))
  
      scrollThumbRef.current.style.transform = `translateY(${thumbTop}px)`
    }
  }

  useEffect(() => {
    if (listRef.current && scrollThumbRef.current) {
      const visibleRatio = listRef.current.clientHeight / listRef.current.scrollHeight
      const thumbHeight = Math.max(visibleRatio * listRef.current.clientHeight, 20)
      scrollThumbRef.current.style.height = `${thumbHeight}px`
      updateScrollThumbPosition()
    }
  }, [lessonsBalance])

  useEffect(() => {
    const listElem = listRef.current

    if (listElem) {
      listElem.addEventListener('wheel', handleWheel, { passive: false })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      if (listElem) {
        listElem.removeEventListener('wheel', handleWheel)
      }
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, startY, scrollTop])

  return (
    <div className={styles['lessons-balance-list']}>
      <div className={styles['content']}>
        <div
          ref={listRef}
          className={styles['list']}
          onMouseDown={handleListMouseDown}
        >
          {lessonsBalance.map(({ subjectName, paidLessonsCount }, index) => (
            <>
              <div
                key={index}
                className={styles['list-item']}
              >
                <span className={styles['text']}>
                  {subjectName
                    .split(' ')
                    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
                    .join(' ')}
                </span>
                <div className={styles['counter']}>
                  <span className={styles['counter-text']}>{paidLessonsCount}</span>
                </div>
              </div>
              {((lessonsBalance.length-1) !== index) && (
                <div className={styles['separator']}></div>
              )}
            </>
          ))}
        </div>
        <button
          className={styles['button']}
          onClick={() => navigate('/schedule')}
        >
          { t(`${tPath}.btn-text`) }
        </button>
      </div>
      <div className={styles['scroll']}>
        <div
          ref={scrollThumbRef}
          className={styles['scroll-thumb']}
          onMouseDown={handleMouseDown}
        ></div>
      </div>
    </div>
  )
}

export { LessonsBalanceList }