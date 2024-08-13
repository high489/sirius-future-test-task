import { ISubject } from '@/app/models'

export type SubjectsMockData = {
  [key: string]: ISubject;
}

export const subjectsMockData: SubjectsMockData = {
  mental_arithmetic: {
    id: 1,
    name: 'Ментальная арифметика',
    coursesList: [
      {
        id: 1,
        subjectId: 1,
        instructor: 'Белкина Инна',
        courseStartDate: '2024-03-01T00:00:00Z',
        courseEndDate: '2024-04-30T23:59:00Z',
        lessonsList: [
          {id: 1, courseId: 1, lessonStartDate: '2024-03-01T13:00:00Z', lessonEndDate: '2024-03-01T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 2, courseId: 1, lessonStartDate: '2024-03-01T14:00:00Z', lessonEndDate: '2024-03-01T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 3, courseId: 1, lessonStartDate: '2024-03-04T13:00:00Z', lessonEndDate: '2024-03-04T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 4, courseId: 1, lessonStartDate: '2024-03-05T13:00:00Z', lessonEndDate: '2024-03-05T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 5, courseId: 1, lessonStartDate: '2024-03-05T14:00:00Z', lessonEndDate: '2024-03-05T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 6, courseId: 1, lessonStartDate: '2024-03-07T13:00:00Z', lessonEndDate: '2024-03-07T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 7, courseId: 1, lessonStartDate: '2024-03-08T13:00:00Z', lessonEndDate: '2024-03-08T14:00:00Z', isPaid: true, isCanceled: true}, // пятница (праздник)
          {id: 8, courseId: 1, lessonStartDate: '2024-03-08T14:00:00Z', lessonEndDate: '2024-03-08T15:00:00Z', isPaid: false, isCanceled: true}, // пятница (праздник)
          {id: 9, courseId: 1, lessonStartDate: '2024-03-11T13:00:00Z', lessonEndDate: '2024-03-11T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 10, courseId: 1, lessonStartDate: '2024-03-12T13:00:00Z', lessonEndDate: '2024-03-12T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 11, courseId: 1, lessonStartDate: '2024-03-12T14:00:00Z', lessonEndDate: '2024-03-12T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 12, courseId: 1, lessonStartDate: '2024-03-14T13:00:00Z', lessonEndDate: '2024-03-14T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 13, courseId: 1, lessonStartDate: '2024-03-15T13:00:00Z', lessonEndDate: '2024-03-15T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 14, courseId: 1, lessonStartDate: '2024-03-15T14:00:00Z', lessonEndDate: '2024-03-15T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 15, courseId: 1, lessonStartDate: '2024-03-18T13:00:00Z', lessonEndDate: '2024-03-18T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 16, courseId: 1, lessonStartDate: '2024-03-19T13:00:00Z', lessonEndDate: '2024-03-19T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 17, courseId: 1, lessonStartDate: '2024-03-19T14:00:00Z', lessonEndDate: '2024-03-19T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 18, courseId: 1, lessonStartDate: '2024-03-21T13:00:00Z', lessonEndDate: '2024-03-21T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 19, courseId: 1, lessonStartDate: '2024-03-22T13:00:00Z', lessonEndDate: '2024-03-22T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 20, courseId: 1, lessonStartDate: '2024-03-22T14:00:00Z', lessonEndDate: '2024-03-22T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 21, courseId: 1, lessonStartDate: '2024-03-25T13:00:00Z', lessonEndDate: '2024-03-25T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 22, courseId: 1, lessonStartDate: '2024-03-26T13:00:00Z', lessonEndDate: '2024-03-26T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 23, courseId: 1, lessonStartDate: '2024-03-26T14:00:00Z', lessonEndDate: '2024-03-26T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 24, courseId: 1, lessonStartDate: '2024-03-28T13:00:00Z', lessonEndDate: '2024-03-28T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 25, courseId: 1, lessonStartDate: '2024-03-29T13:00:00Z', lessonEndDate: '2024-03-29T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 26, courseId: 1, lessonStartDate: '2024-03-29T14:00:00Z', lessonEndDate: '2024-03-29T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 27, courseId: 1, lessonStartDate: '2024-04-01T13:00:00Z', lessonEndDate: '2024-04-01T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 28, courseId: 1, lessonStartDate: '2024-04-02T13:00:00Z', lessonEndDate: '2024-04-02T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 29, courseId: 1, lessonStartDate: '2024-04-02T14:00:00Z', lessonEndDate: '2024-04-02T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 30, courseId: 1, lessonStartDate: '2024-04-04T13:00:00Z', lessonEndDate: '2024-04-04T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 31, courseId: 1, lessonStartDate: '2024-04-05T13:00:00Z', lessonEndDate: '2024-04-05T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 32, courseId: 1, lessonStartDate: '2024-04-05T14:00:00Z', lessonEndDate: '2024-04-05T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 33, courseId: 1, lessonStartDate: '2024-04-08T13:00:00Z', lessonEndDate: '2024-04-08T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 34, courseId: 1, lessonStartDate: '2024-04-09T13:00:00Z', lessonEndDate: '2024-04-09T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 35, courseId: 1, lessonStartDate: '2024-04-09T14:00:00Z', lessonEndDate: '2024-04-09T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 36, courseId: 1, lessonStartDate: '2024-04-11T13:00:00Z', lessonEndDate: '2024-04-11T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 37, courseId: 1, lessonStartDate: '2024-04-12T13:00:00Z', lessonEndDate: '2024-04-12T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 38, courseId: 1, lessonStartDate: '2024-04-12T14:00:00Z', lessonEndDate: '2024-04-12T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 39, courseId: 1, lessonStartDate: '2024-04-15T13:00:00Z', lessonEndDate: '2024-04-15T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 40, courseId: 1, lessonStartDate: '2024-04-16T13:00:00Z', lessonEndDate: '2024-04-16T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 41, courseId: 1, lessonStartDate: '2024-04-16T14:00:00Z', lessonEndDate: '2024-04-16T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 42, courseId: 1, lessonStartDate: '2024-04-18T13:00:00Z', lessonEndDate: '2024-04-18T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 43, courseId: 1, lessonStartDate: '2024-04-19T13:00:00Z', lessonEndDate: '2024-04-19T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 44, courseId: 1, lessonStartDate: '2024-04-19T14:00:00Z', lessonEndDate: '2024-04-19T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 45, courseId: 1, lessonStartDate: '2024-04-22T13:00:00Z', lessonEndDate: '2024-04-22T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 46, courseId: 1, lessonStartDate: '2024-04-23T13:00:00Z', lessonEndDate: '2024-04-23T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 47, courseId: 1, lessonStartDate: '2024-04-23T14:00:00Z', lessonEndDate: '2024-04-23T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 48, courseId: 1, lessonStartDate: '2024-04-25T13:00:00Z', lessonEndDate: '2024-04-25T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 49, courseId: 1, lessonStartDate: '2024-04-26T13:00:00Z', lessonEndDate: '2024-04-26T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 50, courseId: 1, lessonStartDate: '2024-04-26T14:00:00Z', lessonEndDate: '2024-04-26T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 51, courseId: 1, lessonStartDate: '2024-04-29T13:00:00Z', lessonEndDate: '2024-04-29T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 52, courseId: 1, lessonStartDate: '2024-04-30T13:00:00Z', lessonEndDate: '2024-04-30T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 53, courseId: 1, lessonStartDate: '2024-04-30T14:00:00Z', lessonEndDate: '2024-04-30T15:00:00Z', isPaid: false, isCanceled: false} // вторник
        ],
      },
      {
        id: 2,
        subjectId: 1,
        instructor: 'Белкина Инна',
        courseStartDate: '2024-05-01T00:00:00Z',
        courseEndDate: '2024-06-30T23:59:00Z',
        lessonsList: [
          {id: 1, courseId: 2, lessonStartDate: '2024-05-02T13:00:00Z', lessonEndDate: '2024-05-02T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 2, courseId: 2, lessonStartDate: '2024-05-03T13:00:00Z', lessonEndDate: '2024-05-03T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 3, courseId: 2, lessonStartDate: '2024-05-03T14:00:00Z', lessonEndDate: '2024-05-03T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 4, courseId: 2, lessonStartDate: '2024-05-06T13:00:00Z', lessonEndDate: '2024-05-06T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 5, courseId: 2, lessonStartDate: '2024-05-07T13:00:00Z', lessonEndDate: '2024-05-07T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 6, courseId: 2, lessonStartDate: '2024-05-07T14:00:00Z', lessonEndDate: '2024-05-07T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 7, courseId: 2, lessonStartDate: '2024-05-09T13:00:00Z', lessonEndDate: '2024-05-09T14:00:00Z', isPaid: true, isCanceled: true}, // четверг (праздник)
          {id: 8, courseId: 2, lessonStartDate: '2024-05-10T13:00:00Z', lessonEndDate: '2024-05-10T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 9, courseId: 2, lessonStartDate: '2024-05-10T14:00:00Z', lessonEndDate: '2024-05-10T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 10, courseId: 2, lessonStartDate: '2024-05-13T13:00:00Z', lessonEndDate: '2024-05-13T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 11, courseId: 2, lessonStartDate: '2024-05-14T13:00:00Z', lessonEndDate: '2024-05-14T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 12, courseId: 2, lessonStartDate: '2024-05-14T14:00:00Z', lessonEndDate: '2024-05-14T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 13, courseId: 2, lessonStartDate: '2024-05-16T13:00:00Z', lessonEndDate: '2024-05-16T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 14, courseId: 2, lessonStartDate: '2024-05-17T13:00:00Z', lessonEndDate: '2024-05-17T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 15, courseId: 2, lessonStartDate: '2024-05-17T14:00:00Z', lessonEndDate: '2024-05-17T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 16, courseId: 2, lessonStartDate: '2024-05-20T13:00:00Z', lessonEndDate: '2024-05-20T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 17, courseId: 2, lessonStartDate: '2024-05-21T13:00:00Z', lessonEndDate: '2024-05-21T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 18, courseId: 2, lessonStartDate: '2024-05-21T14:00:00Z', lessonEndDate: '2024-05-21T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 19, courseId: 2, lessonStartDate: '2024-05-23T13:00:00Z', lessonEndDate: '2024-05-23T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 20, courseId: 2, lessonStartDate: '2024-05-24T13:00:00Z', lessonEndDate: '2024-05-24T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 21, courseId: 2, lessonStartDate: '2024-05-24T14:00:00Z', lessonEndDate: '2024-05-24T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 22, courseId: 2, lessonStartDate: '2024-05-27T13:00:00Z', lessonEndDate: '2024-05-27T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 23, courseId: 2, lessonStartDate: '2024-05-28T13:00:00Z', lessonEndDate: '2024-05-28T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 24, courseId: 2, lessonStartDate: '2024-05-28T14:00:00Z', lessonEndDate: '2024-05-28T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 25, courseId: 2, lessonStartDate: '2024-05-30T13:00:00Z', lessonEndDate: '2024-05-30T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 26, courseId: 2, lessonStartDate: '2024-05-31T13:00:00Z', lessonEndDate: '2024-05-31T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 27, courseId: 2, lessonStartDate: '2024-05-31T14:00:00Z', lessonEndDate: '2024-05-31T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 28, courseId: 2, lessonStartDate: '2024-06-03T13:00:00Z', lessonEndDate: '2024-06-03T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 29, courseId: 2, lessonStartDate: '2024-06-04T13:00:00Z', lessonEndDate: '2024-06-04T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 30, courseId: 2, lessonStartDate: '2024-06-04T14:00:00Z', lessonEndDate: '2024-06-04T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 31, courseId: 2, lessonStartDate: '2024-06-06T13:00:00Z', lessonEndDate: '2024-06-06T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 32, courseId: 2, lessonStartDate: '2024-06-07T13:00:00Z', lessonEndDate: '2024-06-07T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 33, courseId: 2, lessonStartDate: '2024-06-07T14:00:00Z', lessonEndDate: '2024-06-07T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 34, courseId: 2, lessonStartDate: '2024-06-10T13:00:00Z', lessonEndDate: '2024-06-10T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 35, courseId: 2, lessonStartDate: '2024-06-11T13:00:00Z', lessonEndDate: '2024-06-11T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 36, courseId: 2, lessonStartDate: '2024-06-11T14:00:00Z', lessonEndDate: '2024-06-11T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 37, courseId: 2, lessonStartDate: '2024-06-13T13:00:00Z', lessonEndDate: '2024-06-12T14:00:00Z', isPaid: true, isCanceled: true}, // четверг (праздник)
          {id: 38, courseId: 2, lessonStartDate: '2024-06-14T13:00:00Z', lessonEndDate: '2024-06-14T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 39, courseId: 2, lessonStartDate: '2024-06-14T14:00:00Z', lessonEndDate: '2024-06-14T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 40, courseId: 2, lessonStartDate: '2024-06-17T13:00:00Z', lessonEndDate: '2024-06-17T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 41, courseId: 2, lessonStartDate: '2024-06-18T13:00:00Z', lessonEndDate: '2024-06-18T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 42, courseId: 2, lessonStartDate: '2024-06-18T14:00:00Z', lessonEndDate: '2024-06-18T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 43, courseId: 2, lessonStartDate: '2024-06-20T13:00:00Z', lessonEndDate: '2024-06-20T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 44, courseId: 2, lessonStartDate: '2024-06-21T13:00:00Z', lessonEndDate: '2024-06-21T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 45, courseId: 2, lessonStartDate: '2024-06-21T14:00:00Z', lessonEndDate: '2024-06-21T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 46, courseId: 2, lessonStartDate: '2024-06-24T13:00:00Z', lessonEndDate: '2024-06-24T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 47, courseId: 2, lessonStartDate: '2024-06-25T13:00:00Z', lessonEndDate: '2024-06-25T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 48, courseId: 2, lessonStartDate: '2024-06-25T14:00:00Z', lessonEndDate: '2024-06-25T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 49, courseId: 2, lessonStartDate: '2024-06-27T13:00:00Z', lessonEndDate: '2024-06-27T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 50, courseId: 2, lessonStartDate: '2024-06-28T13:00:00Z', lessonEndDate: '2024-06-28T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 51, courseId: 2, lessonStartDate: '2024-06-28T14:00:00Z', lessonEndDate: '2024-06-28T15:00:00Z', isPaid: false, isCanceled: false} // пятница
        ],
        registeredUsers: [
          {id: 1, name: 'Михаил', email: 'mike123@mail.com'},
        ],
      },
      {
        id: 3,
        subjectId: 1,
        instructor: 'Белкина Инна',
        courseStartDate: '2024-07-01T00:00:00Z',
        courseEndDate: '2024-08-31T23:59:00Z',
        lessonsList: [
          {id: 1, courseId: 3, lessonStartDate: '2024-07-01T13:00:00Z', lessonEndDate: '2024-07-01T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 2, courseId: 3, lessonStartDate: '2024-07-02T13:00:00Z', lessonEndDate: '2024-07-02T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 3, courseId: 3, lessonStartDate: '2024-07-02T14:00:00Z', lessonEndDate: '2024-07-02T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 4, courseId: 3, lessonStartDate: '2024-07-04T13:00:00Z', lessonEndDate: '2024-07-04T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 5, courseId: 3, lessonStartDate: '2024-07-05T13:00:00Z', lessonEndDate: '2024-07-05T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 6, courseId: 3, lessonStartDate: '2024-07-05T14:00:00Z', lessonEndDate: '2024-07-05T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 7, courseId: 3, lessonStartDate: '2024-07-08T13:00:00Z', lessonEndDate: '2024-07-08T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 8, courseId: 3, lessonStartDate: '2024-07-09T13:00:00Z', lessonEndDate: '2024-07-09T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 9, courseId: 3, lessonStartDate: '2024-07-09T14:00:00Z', lessonEndDate: '2024-07-09T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 10, courseId: 3, lessonStartDate: '2024-07-11T13:00:00Z', lessonEndDate: '2024-07-11T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 11, courseId: 3, lessonStartDate: '2024-07-12T13:00:00Z', lessonEndDate: '2024-07-12T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 12, courseId: 3, lessonStartDate: '2024-07-12T14:00:00Z', lessonEndDate: '2024-07-12T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 13, courseId: 3, lessonStartDate: '2024-07-15T13:00:00Z', lessonEndDate: '2024-07-15T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 14, courseId: 3, lessonStartDate: '2024-07-16T13:00:00Z', lessonEndDate: '2024-07-16T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 15, courseId: 3, lessonStartDate: '2024-07-16T14:00:00Z', lessonEndDate: '2024-07-16T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 16, courseId: 3, lessonStartDate: '2024-07-18T13:00:00Z', lessonEndDate: '2024-07-18T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 17, courseId: 3, lessonStartDate: '2024-07-19T13:00:00Z', lessonEndDate: '2024-07-19T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 18, courseId: 3, lessonStartDate: '2024-07-19T14:00:00Z', lessonEndDate: '2024-07-19T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 19, courseId: 3, lessonStartDate: '2024-07-22T13:00:00Z', lessonEndDate: '2024-07-22T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 20, courseId: 3, lessonStartDate: '2024-07-23T13:00:00Z', lessonEndDate: '2024-07-23T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 21, courseId: 3, lessonStartDate: '2024-07-23T14:00:00Z', lessonEndDate: '2024-07-23T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 22, courseId: 3, lessonStartDate: '2024-07-25T13:00:00Z', lessonEndDate: '2024-07-25T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 23, courseId: 3, lessonStartDate: '2024-07-26T13:00:00Z', lessonEndDate: '2024-07-26T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 24, courseId: 3, lessonStartDate: '2024-07-26T14:00:00Z', lessonEndDate: '2024-07-26T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 25, courseId: 3, lessonStartDate: '2024-07-29T13:00:00Z', lessonEndDate: '2024-07-29T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 26, courseId: 3, lessonStartDate: '2024-07-30T13:00:00Z', lessonEndDate: '2024-07-30T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 27, courseId: 3, lessonStartDate: '2024-07-30T14:00:00Z', lessonEndDate: '2024-07-30T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 28, courseId: 3, lessonStartDate: '2024-08-01T13:00:00Z', lessonEndDate: '2024-08-01T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 29, courseId: 3, lessonStartDate: '2024-08-02T13:00:00Z', lessonEndDate: '2024-08-02T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 30, courseId: 3, lessonStartDate: '2024-08-02T14:00:00Z', lessonEndDate: '2024-08-02T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 31, courseId: 3, lessonStartDate: '2024-08-05T13:00:00Z', lessonEndDate: '2024-08-05T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 32, courseId: 3, lessonStartDate: '2024-08-06T13:00:00Z', lessonEndDate: '2024-08-06T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 33, courseId: 3, lessonStartDate: '2024-08-06T14:00:00Z', lessonEndDate: '2024-08-06T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 34, courseId: 3, lessonStartDate: '2024-08-08T13:00:00Z', lessonEndDate: '2024-08-08T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 35, courseId: 3, lessonStartDate: '2024-08-09T13:00:00Z', lessonEndDate: '2024-08-09T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 36, courseId: 3, lessonStartDate: '2024-08-09T14:00:00Z', lessonEndDate: '2024-08-09T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 37, courseId: 3, lessonStartDate: '2024-08-12T13:00:00Z', lessonEndDate: '2024-08-12T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 38, courseId: 3, lessonStartDate: '2024-08-13T13:00:00Z', lessonEndDate: '2024-08-13T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 39, courseId: 3, lessonStartDate: '2024-08-13T14:00:00Z', lessonEndDate: '2024-08-13T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 40, courseId: 3, lessonStartDate: '2024-08-15T13:00:00Z', lessonEndDate: '2024-08-15T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 41, courseId: 3, lessonStartDate: '2024-08-16T13:00:00Z', lessonEndDate: '2024-08-16T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 42, courseId: 3, lessonStartDate: '2024-08-16T14:00:00Z', lessonEndDate: '2024-08-16T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 43, courseId: 3, lessonStartDate: '2024-08-19T13:00:00Z', lessonEndDate: '2024-08-19T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 44, courseId: 3, lessonStartDate: '2024-08-20T13:00:00Z', lessonEndDate: '2024-08-20T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 45, courseId: 3, lessonStartDate: '2024-08-20T14:00:00Z', lessonEndDate: '2024-08-20T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 46, courseId: 3, lessonStartDate: '2024-08-22T13:00:00Z', lessonEndDate: '2024-08-22T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 47, courseId: 3, lessonStartDate: '2024-08-23T13:00:00Z', lessonEndDate: '2024-08-23T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 48, courseId: 3, lessonStartDate: '2024-08-23T14:00:00Z', lessonEndDate: '2024-08-23T15:00:00Z', isPaid: false, isCanceled: false}, // пятница
          {id: 49, courseId: 3, lessonStartDate: '2024-08-26T13:00:00Z', lessonEndDate: '2024-08-26T14:00:00Z', isPaid: true, isCanceled: false}, // понедельник
          {id: 50, courseId: 3, lessonStartDate: '2024-08-27T13:00:00Z', lessonEndDate: '2024-08-27T14:00:00Z', isPaid: true, isCanceled: false}, // вторник
          {id: 51, courseId: 3, lessonStartDate: '2024-08-27T14:00:00Z', lessonEndDate: '2024-08-27T15:00:00Z', isPaid: false, isCanceled: false}, // вторник
          {id: 52, courseId: 3, lessonStartDate: '2024-08-29T13:00:00Z', lessonEndDate: '2024-08-29T14:00:00Z', isPaid: true, isCanceled: false}, // четверг
          {id: 53, courseId: 3, lessonStartDate: '2024-08-30T13:00:00Z', lessonEndDate: '2024-08-30T14:00:00Z', isPaid: true, isCanceled: false}, // пятница
          {id: 54, courseId: 3, lessonStartDate: '2024-08-30T14:00:00Z', lessonEndDate: '2024-08-30T15:00:00Z', isPaid: false, isCanceled: false} // пятница
        ],
        registeredUsers: [
          {id: 1, name: 'Михаил', email: 'mike123@mail.com'},
        ],
      },
    ],
  },
  programming: {
    id: 2,
    name: 'Программирование',
    coursesList: [
      {
        id: 1,
        subjectId: 2,
        instructor: 'Иван Иванов',
        courseStartDate: '2024-03-01T00:00:00Z',
        courseEndDate: '2024-05-31T23:59:00Z',
        lessonsList: [
          {id: 1, courseId: 1, lessonStartDate: '2024-03-01T16:00:00Z', lessonEndDate: '2024-03-01T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 2, courseId: 1, lessonStartDate: '2024-03-01T16:45:00Z', lessonEndDate: '2024-03-01T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 3, courseId: 1, lessonStartDate: '2024-03-04T13:00:00Z', lessonEndDate: '2024-03-04T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 4, courseId: 1, lessonStartDate: '2024-03-04T13:45:00Z', lessonEndDate: '2024-03-04T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 5, courseId: 1, lessonStartDate: '2024-03-06T13:00:00Z', lessonEndDate: '2024-03-06T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 6, courseId: 1, lessonStartDate: '2024-03-06T13:45:00Z', lessonEndDate: '2024-03-06T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 7, courseId: 1, lessonStartDate: '2024-03-08T16:00:00Z', lessonEndDate: '2024-03-08T16:45:00Z', isPaid: true, isCanceled: true},
          {id: 8, courseId: 1, lessonStartDate: '2024-03-08T16:45:00Z', lessonEndDate: '2024-03-08T17:30:00Z', isPaid: true, isCanceled: true},
          {id: 9, courseId: 1, lessonStartDate: '2024-03-11T13:00:00Z', lessonEndDate: '2024-03-11T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 10, courseId: 1, lessonStartDate: '2024-03-11T13:45:00Z', lessonEndDate: '2024-03-11T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 11, courseId: 1, lessonStartDate: '2024-03-13T13:00:00Z', lessonEndDate: '2024-03-13T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 12, courseId: 1, lessonStartDate: '2024-03-13T13:45:00Z', lessonEndDate: '2024-03-13T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 13, courseId: 1, lessonStartDate: '2024-03-15T16:00:00Z', lessonEndDate: '2024-03-15T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 14, courseId: 1, lessonStartDate: '2024-03-15T16:45:00Z', lessonEndDate: '2024-03-15T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 15, courseId: 1, lessonStartDate: '2024-03-18T13:00:00Z', lessonEndDate: '2024-03-18T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 16, courseId: 1, lessonStartDate: '2024-03-18T13:45:00Z', lessonEndDate: '2024-03-18T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 17, courseId: 1, lessonStartDate: '2024-03-20T13:00:00Z', lessonEndDate: '2024-03-20T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 18, courseId: 1, lessonStartDate: '2024-03-20T13:45:00Z', lessonEndDate: '2024-03-20T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 19, courseId: 1, lessonStartDate: '2024-03-22T16:00:00Z', lessonEndDate: '2024-03-22T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 20, courseId: 1, lessonStartDate: '2024-03-22T16:45:00Z', lessonEndDate: '2024-03-22T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 21, courseId: 1, lessonStartDate: '2024-03-25T13:00:00Z', lessonEndDate: '2024-03-25T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 22, courseId: 1, lessonStartDate: '2024-03-25T13:45:00Z', lessonEndDate: '2024-03-25T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 23, courseId: 1, lessonStartDate: '2024-03-27T13:00:00Z', lessonEndDate: '2024-03-27T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 24, courseId: 1, lessonStartDate: '2024-03-27T13:45:00Z', lessonEndDate: '2024-03-27T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 25, courseId: 1, lessonStartDate: '2024-03-29T16:00:00Z', lessonEndDate: '2024-03-29T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 26, courseId: 1, lessonStartDate: '2024-03-29T16:45:00Z', lessonEndDate: '2024-03-29T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 27, courseId: 1, lessonStartDate: '2024-04-01T13:00:00Z', lessonEndDate: '2024-04-01T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 28, courseId: 1, lessonStartDate: '2024-04-01T13:45:00Z', lessonEndDate: '2024-04-01T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 29, courseId: 1, lessonStartDate: '2024-04-03T13:00:00Z', lessonEndDate: '2024-04-03T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 30, courseId: 1, lessonStartDate: '2024-04-03T13:45:00Z', lessonEndDate: '2024-04-03T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 31, courseId: 1, lessonStartDate: '2024-04-05T16:00:00Z', lessonEndDate: '2024-04-05T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 32, courseId: 1, lessonStartDate: '2024-04-05T16:45:00Z', lessonEndDate: '2024-04-05T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 33, courseId: 1, lessonStartDate: '2024-04-08T13:00:00Z', lessonEndDate: '2024-04-08T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 34, courseId: 1, lessonStartDate: '2024-04-08T13:45:00Z', lessonEndDate: '2024-04-08T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 35, courseId: 1, lessonStartDate: '2024-04-10T13:00:00Z', lessonEndDate: '2024-04-10T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 36, courseId: 1, lessonStartDate: '2024-04-10T13:45:00Z', lessonEndDate: '2024-04-10T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 37, courseId: 1, lessonStartDate: '2024-04-12T16:00:00Z', lessonEndDate: '2024-04-12T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 38, courseId: 1, lessonStartDate: '2024-04-12T16:45:00Z', lessonEndDate: '2024-04-12T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 39, courseId: 1, lessonStartDate: '2024-04-15T13:00:00Z', lessonEndDate: '2024-04-15T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 40, courseId: 1, lessonStartDate: '2024-04-15T13:45:00Z', lessonEndDate: '2024-04-15T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 41, courseId: 1, lessonStartDate: '2024-04-17T13:00:00Z', lessonEndDate: '2024-04-17T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 42, courseId: 1, lessonStartDate: '2024-04-17T13:45:00Z', lessonEndDate: '2024-04-17T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 43, courseId: 1, lessonStartDate: '2024-04-19T16:00:00Z', lessonEndDate: '2024-04-19T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 44, courseId: 1, lessonStartDate: '2024-04-19T16:45:00Z', lessonEndDate: '2024-04-19T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 45, courseId: 1, lessonStartDate: '2024-04-22T13:00:00Z', lessonEndDate: '2024-04-22T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 46, courseId: 1, lessonStartDate: '2024-04-22T13:45:00Z', lessonEndDate: '2024-04-22T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 47, courseId: 1, lessonStartDate: '2024-04-24T13:00:00Z', lessonEndDate: '2024-04-24T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 48, courseId: 1, lessonStartDate: '2024-04-24T13:45:00Z', lessonEndDate: '2024-04-24T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 49, courseId: 1, lessonStartDate: '2024-04-26T16:00:00Z', lessonEndDate: '2024-04-26T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 50, courseId: 1, lessonStartDate: '2024-04-26T16:45:00Z', lessonEndDate: '2024-04-26T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 51, courseId: 1, lessonStartDate: '2024-04-29T13:00:00Z', lessonEndDate: '2024-04-29T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 52, courseId: 1, lessonStartDate: '2024-04-29T13:45:00Z', lessonEndDate: '2024-04-29T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 53, courseId: 1, lessonStartDate: '2024-05-01T13:00:00Z', lessonEndDate: '2024-05-01T13:45:00Z', isPaid: true, isCanceled: true},
          {id: 54, courseId: 1, lessonStartDate: '2024-05-01T13:45:00Z', lessonEndDate: '2024-05-01T14:30:00Z', isPaid: true, isCanceled: true},
          {id: 55, courseId: 1, lessonStartDate: '2024-05-03T16:00:00Z', lessonEndDate: '2024-05-03T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 56, courseId: 1, lessonStartDate: '2024-05-03T16:45:00Z', lessonEndDate: '2024-05-03T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 57, courseId: 1, lessonStartDate: '2024-05-06T13:00:00Z', lessonEndDate: '2024-05-06T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 58, courseId: 1, lessonStartDate: '2024-05-06T13:45:00Z', lessonEndDate: '2024-05-06T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 59, courseId: 1, lessonStartDate: '2024-05-08T13:00:00Z', lessonEndDate: '2024-05-08T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 60, courseId: 1, lessonStartDate: '2024-05-08T13:45:00Z', lessonEndDate: '2024-05-08T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 61, courseId: 1, lessonStartDate: '2024-05-10T16:00:00Z', lessonEndDate: '2024-05-10T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 62, courseId: 1, lessonStartDate: '2024-05-10T16:45:00Z', lessonEndDate: '2024-05-10T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 63, courseId: 1, lessonStartDate: '2024-05-13T13:00:00Z', lessonEndDate: '2024-05-13T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 64, courseId: 1, lessonStartDate: '2024-05-13T13:45:00Z', lessonEndDate: '2024-05-13T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 65, courseId: 1, lessonStartDate: '2024-05-15T13:00:00Z', lessonEndDate: '2024-05-15T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 66, courseId: 1, lessonStartDate: '2024-05-15T13:45:00Z', lessonEndDate: '2024-05-15T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 67, courseId: 1, lessonStartDate: '2024-05-17T16:00:00Z', lessonEndDate: '2024-05-17T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 68, courseId: 1, lessonStartDate: '2024-05-17T16:45:00Z', lessonEndDate: '2024-05-17T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 69, courseId: 1, lessonStartDate: '2024-05-20T13:00:00Z', lessonEndDate: '2024-05-20T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 70, courseId: 1, lessonStartDate: '2024-05-20T13:45:00Z', lessonEndDate: '2024-05-20T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 71, courseId: 1, lessonStartDate: '2024-05-22T13:00:00Z', lessonEndDate: '2024-05-22T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 72, courseId: 1, lessonStartDate: '2024-05-22T13:45:00Z', lessonEndDate: '2024-05-22T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 73, courseId: 1, lessonStartDate: '2024-05-24T16:00:00Z', lessonEndDate: '2024-05-24T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 74, courseId: 1, lessonStartDate: '2024-05-24T16:45:00Z', lessonEndDate: '2024-05-24T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 75, courseId: 1, lessonStartDate: '2024-05-27T13:00:00Z', lessonEndDate: '2024-05-27T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 76, courseId: 1, lessonStartDate: '2024-05-27T13:45:00Z', lessonEndDate: '2024-05-27T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 77, courseId: 1, lessonStartDate: '2024-05-29T13:00:00Z', lessonEndDate: '2024-05-29T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 78, courseId: 1, lessonStartDate: '2024-05-29T13:45:00Z', lessonEndDate: '2024-05-29T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 79, courseId: 1, lessonStartDate: '2024-05-31T16:00:00Z', lessonEndDate: '2024-05-31T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 80, courseId: 1, lessonStartDate: '2024-05-31T16:45:00Z', lessonEndDate: '2024-05-31T17:30:00Z', isPaid: true, isCanceled: false},
        ],
        registeredUsers: [
          {id: 1, name: 'Михаил', email: 'mike123@mail.com'},
        ],
      },
      {
        id: 2,
        subjectId: 2,
        instructor: 'Алексей Комаров',
        courseStartDate: '2024-06-01T00:00:00Z',
        courseEndDate: '2024-08-31T23:59:00Z',
        lessonsList: [
          {id: 1, courseId: 2, lessonStartDate: '2024-06-03T13:00:00Z', lessonEndDate: '2024-06-03T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 2, courseId: 2, lessonStartDate: '2024-06-03T13:45:00Z', lessonEndDate: '2024-06-03T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 3, courseId: 2, lessonStartDate: '2024-06-05T13:00:00Z', lessonEndDate: '2024-06-05T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 4, courseId: 2, lessonStartDate: '2024-06-05T13:45:00Z', lessonEndDate: '2024-06-05T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 5, courseId: 2, lessonStartDate: '2024-06-07T16:00:00Z', lessonEndDate: '2024-06-07T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 6, courseId: 2, lessonStartDate: '2024-06-07T16:45:00Z', lessonEndDate: '2024-06-07T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 7, courseId: 2, lessonStartDate: '2024-06-10T13:00:00Z', lessonEndDate: '2024-06-10T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 8, courseId: 2, lessonStartDate: '2024-06-10T13:45:00Z', lessonEndDate: '2024-06-10T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 9, courseId: 2, lessonStartDate: '2024-06-12T13:00:00Z', lessonEndDate: '2024-06-12T13:45:00Z', isPaid: true, isCanceled: true},
          {id: 10, courseId: 2, lessonStartDate: '2024-06-12T13:45:00Z', lessonEndDate: '2024-06-12T14:30:00Z', isPaid: true, isCanceled: true},
          {id: 11, courseId: 2, lessonStartDate: '2024-06-14T16:00:00Z', lessonEndDate: '2024-06-14T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 12, courseId: 2, lessonStartDate: '2024-06-14T16:45:00Z', lessonEndDate: '2024-06-14T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 13, courseId: 2, lessonStartDate: '2024-06-17T13:00:00Z', lessonEndDate: '2024-06-17T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 14, courseId: 2, lessonStartDate: '2024-06-17T13:45:00Z', lessonEndDate: '2024-06-17T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 15, courseId: 2, lessonStartDate: '2024-06-19T13:00:00Z', lessonEndDate: '2024-06-19T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 16, courseId: 2, lessonStartDate: '2024-06-19T13:45:00Z', lessonEndDate: '2024-06-19T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 17, courseId: 2, lessonStartDate: '2024-06-21T16:00:00Z', lessonEndDate: '2024-06-21T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 18, courseId: 2, lessonStartDate: '2024-06-21T16:45:00Z', lessonEndDate: '2024-06-21T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 19, courseId: 2, lessonStartDate: '2024-06-24T13:00:00Z', lessonEndDate: '2024-06-24T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 20, courseId: 2, lessonStartDate: '2024-06-24T13:45:00Z', lessonEndDate: '2024-06-24T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 21, courseId: 2, lessonStartDate: '2024-06-26T13:00:00Z', lessonEndDate: '2024-06-26T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 22, courseId: 2, lessonStartDate: '2024-06-26T13:45:00Z', lessonEndDate: '2024-06-26T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 23, courseId: 2, lessonStartDate: '2024-06-28T16:00:00Z', lessonEndDate: '2024-06-28T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 24, courseId: 2, lessonStartDate: '2024-06-28T16:45:00Z', lessonEndDate: '2024-06-28T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 25, courseId: 2, lessonStartDate: '2024-07-01T13:00:00Z', lessonEndDate: '2024-07-01T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 26, courseId: 2, lessonStartDate: '2024-07-01T13:45:00Z', lessonEndDate: '2024-07-01T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 27, courseId: 2, lessonStartDate: '2024-07-03T13:00:00Z', lessonEndDate: '2024-07-03T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 28, courseId: 2, lessonStartDate: '2024-07-03T13:45:00Z', lessonEndDate: '2024-07-03T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 29, courseId: 2, lessonStartDate: '2024-07-05T16:00:00Z', lessonEndDate: '2024-07-05T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 30, courseId: 2, lessonStartDate: '2024-07-05T16:45:00Z', lessonEndDate: '2024-07-05T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 31, courseId: 2, lessonStartDate: '2024-07-08T13:00:00Z', lessonEndDate: '2024-07-08T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 32, courseId: 2, lessonStartDate: '2024-07-08T13:45:00Z', lessonEndDate: '2024-07-08T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 33, courseId: 2, lessonStartDate: '2024-07-10T13:00:00Z', lessonEndDate: '2024-07-10T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 34, courseId: 2, lessonStartDate: '2024-07-10T13:45:00Z', lessonEndDate: '2024-07-10T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 35, courseId: 2, lessonStartDate: '2024-07-12T16:00:00Z', lessonEndDate: '2024-07-12T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 36, courseId: 2, lessonStartDate: '2024-07-12T16:45:00Z', lessonEndDate: '2024-07-12T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 37, courseId: 2, lessonStartDate: '2024-07-15T13:00:00Z', lessonEndDate: '2024-07-15T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 38, courseId: 2, lessonStartDate: '2024-07-15T13:45:00Z', lessonEndDate: '2024-07-15T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 39, courseId: 2, lessonStartDate: '2024-07-17T13:00:00Z', lessonEndDate: '2024-07-17T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 40, courseId: 2, lessonStartDate: '2024-07-17T13:45:00Z', lessonEndDate: '2024-07-17T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 41, courseId: 2, lessonStartDate: '2024-07-19T16:00:00Z', lessonEndDate: '2024-07-19T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 42, courseId: 2, lessonStartDate: '2024-07-19T16:45:00Z', lessonEndDate: '2024-07-19T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 43, courseId: 2, lessonStartDate: '2024-07-22T13:00:00Z', lessonEndDate: '2024-07-22T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 44, courseId: 2, lessonStartDate: '2024-07-22T13:45:00Z', lessonEndDate: '2024-07-22T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 45, courseId: 2, lessonStartDate: '2024-07-24T13:00:00Z', lessonEndDate: '2024-07-24T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 46, courseId: 2, lessonStartDate: '2024-07-24T13:45:00Z', lessonEndDate: '2024-07-24T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 47, courseId: 2, lessonStartDate: '2024-07-26T16:00:00Z', lessonEndDate: '2024-07-26T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 48, courseId: 2, lessonStartDate: '2024-07-26T16:45:00Z', lessonEndDate: '2024-07-26T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 49, courseId: 2, lessonStartDate: '2024-07-29T13:00:00Z', lessonEndDate: '2024-07-29T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 50, courseId: 2, lessonStartDate: '2024-07-29T13:45:00Z', lessonEndDate: '2024-07-29T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 51, courseId: 2, lessonStartDate: '2024-07-31T13:00:00Z', lessonEndDate: '2024-07-31T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 52, courseId: 2, lessonStartDate: '2024-07-31T13:45:00Z', lessonEndDate: '2024-07-31T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 53, courseId: 2, lessonStartDate: '2024-08-02T16:00:00Z', lessonEndDate: '2024-08-02T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 54, courseId: 2, lessonStartDate: '2024-08-02T16:45:00Z', lessonEndDate: '2024-08-02T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 55, courseId: 2, lessonStartDate: '2024-08-05T13:00:00Z', lessonEndDate: '2024-08-05T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 56, courseId: 2, lessonStartDate: '2024-08-05T13:45:00Z', lessonEndDate: '2024-08-05T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 57, courseId: 2, lessonStartDate: '2024-08-07T13:00:00Z', lessonEndDate: '2024-08-07T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 58, courseId: 2, lessonStartDate: '2024-08-07T13:45:00Z', lessonEndDate: '2024-08-07T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 59, courseId: 2, lessonStartDate: '2024-08-09T16:00:00Z', lessonEndDate: '2024-08-09T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 60, courseId: 2, lessonStartDate: '2024-08-09T16:45:00Z', lessonEndDate: '2024-08-09T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 61, courseId: 2, lessonStartDate: '2024-08-12T13:00:00Z', lessonEndDate: '2024-08-12T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 62, courseId: 2, lessonStartDate: '2024-08-12T13:45:00Z', lessonEndDate: '2024-08-12T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 63, courseId: 2, lessonStartDate: '2024-08-14T13:00:00Z', lessonEndDate: '2024-08-14T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 64, courseId: 2, lessonStartDate: '2024-08-14T13:45:00Z', lessonEndDate: '2024-08-14T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 65, courseId: 2, lessonStartDate: '2024-08-16T16:00:00Z', lessonEndDate: '2024-08-16T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 66, courseId: 2, lessonStartDate: '2024-08-16T16:45:00Z', lessonEndDate: '2024-08-16T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 67, courseId: 2, lessonStartDate: '2024-08-19T13:00:00Z', lessonEndDate: '2024-08-19T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 68, courseId: 2, lessonStartDate: '2024-08-19T13:45:00Z', lessonEndDate: '2024-08-19T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 69, courseId: 2, lessonStartDate: '2024-08-21T13:00:00Z', lessonEndDate: '2024-08-21T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 70, courseId: 2, lessonStartDate: '2024-08-21T13:45:00Z', lessonEndDate: '2024-08-21T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 71, courseId: 2, lessonStartDate: '2024-08-23T16:00:00Z', lessonEndDate: '2024-08-23T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 72, courseId: 2, lessonStartDate: '2024-08-23T16:45:00Z', lessonEndDate: '2024-08-23T17:30:00Z', isPaid: true, isCanceled: false},
          {id: 73, courseId: 2, lessonStartDate: '2024-08-26T13:00:00Z', lessonEndDate: '2024-08-26T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 74, courseId: 2, lessonStartDate: '2024-08-26T13:45:00Z', lessonEndDate: '2024-08-26T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 75, courseId: 2, lessonStartDate: '2024-08-28T13:00:00Z', lessonEndDate: '2024-08-28T13:45:00Z', isPaid: true, isCanceled: false},
          {id: 76, courseId: 2, lessonStartDate: '2024-08-28T13:45:00Z', lessonEndDate: '2024-08-28T14:30:00Z', isPaid: true, isCanceled: false},
          {id: 77, courseId: 2, lessonStartDate: '2024-08-30T16:00:00Z', lessonEndDate: '2024-08-30T16:45:00Z', isPaid: true, isCanceled: false},
          {id: 78, courseId: 2, lessonStartDate: '2024-08-30T16:45:00Z', lessonEndDate: '2024-08-30T17:30:00Z', isPaid: true, isCanceled: false},
        ],
        registeredUsers: [
          {id: 1, name: 'Михаил', email: 'mike123@mail.com'},
          {id: 2, name: 'Анна', email: 'anna321@mail.com'},
        ],
      },
    ],
  },
  speed_reading: {
    id: 3,
    name: 'Скорочтение',
    coursesList: [
      {
        id: 1,
        subjectId: 3,
        instructor: 'Мария Петрова',
        courseStartDate: '2024-03-01T00:00:00Z',
        courseEndDate: '2024-03-31T23:59:00Z',
        lessonsList: [
          {id: 1, courseId: 1, lessonStartDate: '2024-03-02T15:00:00Z', lessonEndDate: '2024-03-02T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 2, courseId: 1, lessonStartDate: '2024-03-02T15:30:00Z', lessonEndDate: '2024-03-02T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 3, courseId: 1, lessonStartDate: '2024-03-03T15:00:00Z', lessonEndDate: '2024-03-03T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 4, courseId: 1, lessonStartDate: '2024-03-03T15:30:00Z', lessonEndDate: '2024-03-03T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 5, courseId: 1, lessonStartDate: '2024-03-09T15:00:00Z', lessonEndDate: '2024-03-09T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 6, courseId: 1, lessonStartDate: '2024-03-09T15:30:00Z', lessonEndDate: '2024-03-09T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 7, courseId: 1, lessonStartDate: '2024-03-10T15:00:00Z', lessonEndDate: '2024-03-10T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 8, courseId: 1, lessonStartDate: '2024-03-10T15:30:00Z', lessonEndDate: '2024-03-10T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 9, courseId: 1, lessonStartDate: '2024-03-16T15:00:00Z', lessonEndDate: '2024-03-16T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 10, courseId: 1, lessonStartDate: '2024-03-16T15:30:00Z', lessonEndDate: '2024-03-16T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 11, courseId: 1, lessonStartDate: '2024-03-17T15:00:00Z', lessonEndDate: '2024-03-17T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 12, courseId: 1, lessonStartDate: '2024-03-17T15:30:00Z', lessonEndDate: '2024-03-17T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 13, courseId: 1, lessonStartDate: '2024-03-23T15:00:00Z', lessonEndDate: '2024-03-23T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 14, courseId: 1, lessonStartDate: '2024-03-23T15:30:00Z', lessonEndDate: '2024-03-23T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 15, courseId: 1, lessonStartDate: '2024-03-24T15:00:00Z', lessonEndDate: '2024-03-24T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 16, courseId: 1, lessonStartDate: '2024-03-24T15:30:00Z', lessonEndDate: '2024-03-24T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 17, courseId: 1, lessonStartDate: '2024-03-30T15:00:00Z', lessonEndDate: '2024-03-30T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 18, courseId: 1, lessonStartDate: '2024-03-30T15:30:00Z', lessonEndDate: '2024-03-30T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 19, courseId: 1, lessonStartDate: '2024-03-31T15:00:00Z', lessonEndDate: '2024-03-31T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 20, courseId: 1, lessonStartDate: '2024-03-31T15:30:00Z', lessonEndDate: '2024-03-31T16:00:00Z', isPaid: false, isCanceled: false},
        ],
      },
      {
        id: 2,
        subjectId: 3,
        instructor: 'Евгений Захаров',
        courseStartDate: '2024-04-01T00:00:00Z',
        courseEndDate: '2024-04-30T23:59:00Z',
        lessonsList: [
          {id: 1, courseId: 2, lessonStartDate: '2024-04-06T15:00:00Z', lessonEndDate: '2024-04-06T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 2, courseId: 2, lessonStartDate: '2024-04-06T15:30:00Z', lessonEndDate: '2024-04-06T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 3, courseId: 2, lessonStartDate: '2024-04-07T15:00:00Z', lessonEndDate: '2024-04-07T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 4, courseId: 2, lessonStartDate: '2024-04-07T15:30:00Z', lessonEndDate: '2024-04-07T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 5, courseId: 2, lessonStartDate: '2024-04-13T15:00:00Z', lessonEndDate: '2024-04-13T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 6, courseId: 2, lessonStartDate: '2024-04-13T15:30:00Z', lessonEndDate: '2024-04-13T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 7, courseId: 2, lessonStartDate: '2024-04-14T15:00:00Z', lessonEndDate: '2024-04-14T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 8, courseId: 2, lessonStartDate: '2024-04-14T15:30:00Z', lessonEndDate: '2024-04-14T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 9, courseId: 2, lessonStartDate: '2024-04-20T15:00:00Z', lessonEndDate: '2024-04-20T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 10, courseId: 2, lessonStartDate: '2024-04-20T15:30:00Z', lessonEndDate: '2024-04-20T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 11, courseId: 2, lessonStartDate: '2024-04-21T15:00:00Z', lessonEndDate: '2024-04-21T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 12, courseId: 2, lessonStartDate: '2024-04-21T15:30:00Z', lessonEndDate: '2024-04-21T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 13, courseId: 2, lessonStartDate: '2024-04-27T15:00:00Z', lessonEndDate: '2024-04-27T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 14, courseId: 2, lessonStartDate: '2024-04-27T15:30:00Z', lessonEndDate: '2024-04-27T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 15, courseId: 2, lessonStartDate: '2024-04-28T15:00:00Z', lessonEndDate: '2024-04-28T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 16, courseId: 2, lessonStartDate: '2024-04-28T15:30:00Z', lessonEndDate: '2024-04-28T16:00:00Z', isPaid: false, isCanceled: false},
        ],
      },
      {
        id: 3,
        subjectId: 3,
        instructor: 'Мария Петрова',
        courseStartDate: '2024-05-01T00:00:00Z',
        courseEndDate: '2024-05-31T23:59:00Z',
        lessonsList: [
          {id: 1, courseId: 3, lessonStartDate: '2024-05-04T15:00:00Z', lessonEndDate: '2024-05-04T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 2, courseId: 3, lessonStartDate: '2024-05-04T15:30:00Z', lessonEndDate: '2024-05-04T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 3, courseId: 3, lessonStartDate: '2024-05-05T15:00:00Z', lessonEndDate: '2024-05-05T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 4, courseId: 3, lessonStartDate: '2024-05-05T15:30:00Z', lessonEndDate: '2024-05-05T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 5, courseId: 3, lessonStartDate: '2024-05-11T15:00:00Z', lessonEndDate: '2024-05-11T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 6, courseId: 3, lessonStartDate: '2024-05-11T15:30:00Z', lessonEndDate: '2024-05-11T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 7, courseId: 3, lessonStartDate: '2024-05-12T15:00:00Z', lessonEndDate: '2024-05-12T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 8, courseId: 3, lessonStartDate: '2024-05-12T15:30:00Z', lessonEndDate: '2024-05-12T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 9, courseId: 3, lessonStartDate: '2024-05-18T15:00:00Z', lessonEndDate: '2024-05-18T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 10, courseId: 3, lessonStartDate: '2024-05-18T15:30:00Z', lessonEndDate: '2024-05-18T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 11, courseId: 3, lessonStartDate: '2024-05-19T15:00:00Z', lessonEndDate: '2024-05-19T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 12, courseId: 3, lessonStartDate: '2024-05-19T15:30:00Z', lessonEndDate: '2024-05-19T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 13, courseId: 3, lessonStartDate: '2024-05-25T15:00:00Z', lessonEndDate: '2024-05-25T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 14, courseId: 3, lessonStartDate: '2024-05-25T15:30:00Z', lessonEndDate: '2024-05-25T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 15, courseId: 3, lessonStartDate: '2024-05-26T15:00:00Z', lessonEndDate: '2024-05-26T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 16, courseId: 3, lessonStartDate: '2024-05-26T15:30:00Z', lessonEndDate: '2024-05-26T16:00:00Z', isPaid: false, isCanceled: false},
        ],
        registeredUsers: [
          {id: 1, name: 'Михаил', email: 'mike123@mail.com'},
        ],
      },
      {
        id: 4,
        subjectId: 3,
        instructor: 'Евгений Захаров',
        courseStartDate: '2024-06-01T00:00:00Z',
        courseEndDate: '2024-06-30T23:59:00Z',
        lessonsList: [
          {id: 1, courseId: 4, lessonStartDate: '2024-06-01T15:00:00Z', lessonEndDate: '2024-06-01T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 2, courseId: 4, lessonStartDate: '2024-06-01T15:30:00Z', lessonEndDate: '2024-06-01T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 3, courseId: 4, lessonStartDate: '2024-06-02T15:00:00Z', lessonEndDate: '2024-06-02T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 4, courseId: 4, lessonStartDate: '2024-06-02T15:30:00Z', lessonEndDate: '2024-06-02T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 5, courseId: 4, lessonStartDate: '2024-06-08T15:00:00Z', lessonEndDate: '2024-06-08T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 6, courseId: 4, lessonStartDate: '2024-06-08T15:30:00Z', lessonEndDate: '2024-06-08T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 7, courseId: 4, lessonStartDate: '2024-06-09T15:00:00Z', lessonEndDate: '2024-06-09T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 8, courseId: 4, lessonStartDate: '2024-06-09T15:30:00Z', lessonEndDate: '2024-06-09T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 9, courseId: 4, lessonStartDate: '2024-06-15T15:00:00Z', lessonEndDate: '2024-06-15T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 10, courseId: 4, lessonStartDate: '2024-06-15T15:30:00Z', lessonEndDate: '2024-06-15T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 11, courseId: 4, lessonStartDate: '2024-06-16T15:00:00Z', lessonEndDate: '2024-06-16T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 12, courseId: 4, lessonStartDate: '2024-06-16T15:30:00Z', lessonEndDate: '2024-06-16T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 13, courseId: 4, lessonStartDate: '2024-06-22T15:00:00Z', lessonEndDate: '2024-06-22T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 14, courseId: 4, lessonStartDate: '2024-06-22T15:30:00Z', lessonEndDate: '2024-06-22T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 15, courseId: 4, lessonStartDate: '2024-06-23T15:00:00Z', lessonEndDate: '2024-06-23T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 16, courseId: 4, lessonStartDate: '2024-06-23T15:30:00Z', lessonEndDate: '2024-06-23T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 17, courseId: 4, lessonStartDate: '2024-06-29T15:00:00Z', lessonEndDate: '2024-06-29T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 18, courseId: 4, lessonStartDate: '2024-06-29T15:30:00Z', lessonEndDate: '2024-06-29T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 19, courseId: 4, lessonStartDate: '2024-06-30T15:00:00Z', lessonEndDate: '2024-06-30T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 20, courseId: 4, lessonStartDate: '2024-06-30T15:30:00Z', lessonEndDate: '2024-06-30T16:00:00Z', isPaid: false, isCanceled: false},
        ],
        registeredUsers: [
          {id: 1, name: 'Михаил', email: 'mike123@mail.com'},
        ],
      },
      {
        id: 5,
        subjectId: 3,
        instructor: 'Мария Петрова',
        courseStartDate: '2024-07-01T00:00:00Z',
        courseEndDate: '2024-07-31T23:59:00Z',
        lessonsList: [
          {id: 1, courseId: 5, lessonStartDate: '2024-07-06T15:00:00Z', lessonEndDate: '2024-07-06T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 2, courseId: 5, lessonStartDate: '2024-07-06T15:30:00Z', lessonEndDate: '2024-07-06T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 3, courseId: 5, lessonStartDate: '2024-07-07T15:00:00Z', lessonEndDate: '2024-07-07T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 4, courseId: 5, lessonStartDate: '2024-07-07T15:30:00Z', lessonEndDate: '2024-07-07T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 5, courseId: 5, lessonStartDate: '2024-07-13T15:00:00Z', lessonEndDate: '2024-07-13T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 6, courseId: 5, lessonStartDate: '2024-07-13T15:30:00Z', lessonEndDate: '2024-07-13T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 7, courseId: 5, lessonStartDate: '2024-07-14T15:00:00Z', lessonEndDate: '2024-07-14T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 8, courseId: 5, lessonStartDate: '2024-07-14T15:30:00Z', lessonEndDate: '2024-07-14T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 9, courseId: 5, lessonStartDate: '2024-07-20T15:00:00Z', lessonEndDate: '2024-07-20T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 10, courseId: 5, lessonStartDate: '2024-07-20T15:30:00Z', lessonEndDate: '2024-07-20T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 11, courseId: 5, lessonStartDate: '2024-07-21T15:00:00Z', lessonEndDate: '2024-07-21T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 12, courseId: 5, lessonStartDate: '2024-07-21T15:30:00Z', lessonEndDate: '2024-07-21T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 13, courseId: 5, lessonStartDate: '2024-07-27T15:00:00Z', lessonEndDate: '2024-07-27T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 14, courseId: 5, lessonStartDate: '2024-07-27T15:30:00Z', lessonEndDate: '2024-07-27T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 15, courseId: 5, lessonStartDate: '2024-07-28T15:00:00Z', lessonEndDate: '2024-07-28T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 16, courseId: 5, lessonStartDate: '2024-07-28T15:30:00Z', lessonEndDate: '2024-07-28T16:00:00Z', isPaid: false, isCanceled: false},
        ],
        registeredUsers: [
          {id: 2, name: 'Анна', email: 'anna321@mail.com'},
        ],
      },
      {
        id: 6,
        subjectId: 3,
        instructor: 'Евгений Захаров',
        courseStartDate: '2024-08-01T00:00:00Z',
        courseEndDate: '2024-08-31T23:59:00Z',
        lessonsList: [
          {id: 1, courseId: 6, lessonStartDate: '2024-08-03T15:00:00Z', lessonEndDate: '2024-08-03T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 2, courseId: 6, lessonStartDate: '2024-08-03T15:30:00Z', lessonEndDate: '2024-08-03T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 3, courseId: 6, lessonStartDate: '2024-08-04T15:00:00Z', lessonEndDate: '2024-08-04T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 4, courseId: 6, lessonStartDate: '2024-08-04T15:30:00Z', lessonEndDate: '2024-08-04T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 5, courseId: 6, lessonStartDate: '2024-08-10T15:00:00Z', lessonEndDate: '2024-08-10T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 6, courseId: 6, lessonStartDate: '2024-08-10T15:30:00Z', lessonEndDate: '2024-08-10T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 7, courseId: 6, lessonStartDate: '2024-08-11T15:00:00Z', lessonEndDate: '2024-08-11T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 8, courseId: 6, lessonStartDate: '2024-08-11T15:30:00Z', lessonEndDate: '2024-08-11T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 9, courseId: 6, lessonStartDate: '2024-08-17T15:00:00Z', lessonEndDate: '2024-08-17T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 10, courseId: 6, lessonStartDate: '2024-08-17T15:30:00Z', lessonEndDate: '2024-08-17T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 11, courseId: 6, lessonStartDate: '2024-08-18T15:00:00Z', lessonEndDate: '2024-08-18T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 12, courseId: 6, lessonStartDate: '2024-08-18T15:30:00Z', lessonEndDate: '2024-08-18T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 13, courseId: 6, lessonStartDate: '2024-08-24T15:00:00Z', lessonEndDate: '2024-08-24T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 14, courseId: 6, lessonStartDate: '2024-08-24T15:30:00Z', lessonEndDate: '2024-08-24T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 15, courseId: 6, lessonStartDate: '2024-08-25T15:00:00Z', lessonEndDate: '2024-08-25T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 16, courseId: 6, lessonStartDate: '2024-08-25T15:30:00Z', lessonEndDate: '2024-08-25T16:00:00Z', isPaid: false, isCanceled: false},
          {id: 17, courseId: 6, lessonStartDate: '2024-08-31T15:00:00Z', lessonEndDate: '2024-08-31T15:30:00Z', isPaid: true, isCanceled: false},
          {id: 18, courseId: 6, lessonStartDate: '2024-08-31T15:30:00Z', lessonEndDate: '2024-08-31T16:00:00Z', isPaid: false, isCanceled: false},
        ],
        registeredUsers: [
          {id: 2, name: 'Анна', email: 'anna321@mail.com'},
        ],
      },
    ],
  }
}