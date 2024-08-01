export interface ILesson {
  id: number
  courseId: number
  lessonStartDate: string | Date
  lessonEndDate: string | Date
  isPaid: boolean
  isCanceled: boolean
}