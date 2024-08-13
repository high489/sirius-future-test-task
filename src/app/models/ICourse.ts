import { ILesson } from './ILesson';
import { IRegisteredUser } from './IRegisteredUser';

export interface ICourse {
  id: number
  subjectId: number
  instructor: string
  courseStartDate: string | Date
  courseEndDate: string | Date
  totalLessons?: number
  lessonsList: ILesson[]
  registeredUsers?: IRegisteredUser[]
}