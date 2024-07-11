export interface ILesson {
  id: number
  courseId: number
  date: string | Date
  duration: number
  isCanceled: boolean
}