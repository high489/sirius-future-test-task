import { ILesson } from "./ILesson";

export interface ICourse {
  id: number
  subjectId: number
  instructor: string
  startDate: string | Date
  endDate: string | Date
  totalLessons: number
  lessonsList: ILesson[]
  //registeredUsers: { userId: string, userName: string }[]
}