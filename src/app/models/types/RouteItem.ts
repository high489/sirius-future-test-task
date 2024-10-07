import { ReactNode } from 'react'

type RouteItem = {
  index?: boolean
  path: string
  element?: ReactNode
  icon?: ReactNode
  text?: string
}

export type { RouteItem }