import { ICourse } from "./ICourse";

export interface ISubject {
  id: number
  name: string
  coursesList: ICourse[]
}