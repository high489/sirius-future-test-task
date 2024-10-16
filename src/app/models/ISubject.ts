import { ICourse } from "./ICourse";

export interface ISubject {
  id: number
  name: { [key: string]: string }
  coursesList: ICourse[]
}