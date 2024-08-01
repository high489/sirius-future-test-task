import { ILesson } from "./ILesson";

export interface ICourse {
  id: number
  subjectId: number
  instructor: string
  courseStartDate: string | Date
  courseEndDate: string | Date
  totalLessons?: number
  lessonsList: ILesson[]
  //registeredUsers: { userId: string, userName: string }[]
}