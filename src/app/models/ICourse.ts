import { ILesson } from "./ILesson";

export interface Course {
  id: number;
  name: string;
  instructor: string;
  totalLessons: number;
  registeredUsers: { userId: string, userName: string }[];
  lessonsList: ILesson[];
}