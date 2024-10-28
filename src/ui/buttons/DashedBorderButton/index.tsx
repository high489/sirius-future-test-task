import styles from './dashed-border-button.module.scss'
import { FC } from 'react'

interface DashedBorderButtonProps {
  buttonText: string
  onClick?: () => void
  width?: string
  height?: string
  padding?: string
  margin?: string
  backgroundColor?: string
  borderRadius?: string
  roundedCornersSVG?: string
  color?: string
  fontSize?: string
  fontWeight?: string
  lineHeight?: string
  stroke?: string;
  strokeWidth?: string;
  strokeDasharray?: string;
}

const DashedBorderButton: FC<DashedBorderButtonProps> = ({ 
  buttonText,
  onClick,
  width,
  height,
  padding,
  margin,
  backgroundColor,
  borderRadius,
  roundedCornersSVG,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  stroke,
  strokeWidth,
  strokeDasharray,
 }) => {
  return (
    <button
      className={styles['dashed-border-button']}
      style={{ 
        width,
        height,
        padding,
        margin,
        backgroundColor,
        borderRadius,
        color,
        fontSize,
        fontWeight,
        lineHeight,
      }}
      onClick={onClick}
    >
      <svg className={styles['border']} xmlns="http://www.w3.org/2000/svg">
        <rect 
          className={styles['border-rect']}
          style={{
            stroke,
            strokeWidth,
            strokeDasharray,
          }}
          rx={roundedCornersSVG}
          ry={roundedCornersSVG}
        />
      </svg>
      <span className={styles['text']}>{buttonText}</span>
    </button>
  )
}

export { DashedBorderButton }