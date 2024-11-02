import { useState } from 'react'

export const useDate = () => {
  const [ date ] = useState(new Date('2024-08-14T12:55:00Z')) // static date for demonstration
  return date
}