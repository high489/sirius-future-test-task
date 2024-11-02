import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { ILesson, ISubject, IUser, Option } from '@/app/models'
import { subjectsMockData } from './subjects-mock-data'

const initialState: { [key: string]: ISubject } = subjectsMockData

export const subjectsApi = createApi({
  reducerPath: 'subjectsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Subjects'],
  endpoints: (build) => ({
    getSubjects: build.query<ISubject[], void>({
      queryFn: () => ({ data: Object.values(initialState) }),
      providesTags: (result) => 
        result
          ? [...result.map(({ id }) => ({ type: 'Subjects' as const, id })), { type: 'Subjects', id: 'LIST' }]
          : [{ type: 'Subjects', id: 'LIST' }],
    }),

    getSubjectsKeys: build.query<Option[], void>({
      queryFn: () => {
        const keys = Object.keys(initialState).map(key => ({
          key,
          name: initialState[key].name
        }));
        return { data: keys }
      },
      providesTags: (result) =>
        result
          ? [...result.map(({ key }) => ({ type: 'Subjects' as const, id: key })), { type: 'Subjects', id: 'LIST' }]
          : [{ type: 'Subjects', id: 'LIST' }],
    }),

    getSubjectByKey: build.query<ISubject, string>({
      queryFn: (key) => {
        const subject = initialState[key]
        if (subject) {
          return { data: subject }
        } else {
          return { error: { status: 404, statusText: 'Not Found' } }
        }
      },
      providesTags: (_, __, key) => [{ type: 'Subjects', id: key }],
    }),

    getNearestPaidLesson: build.query<ILesson | null, { user: IUser | null; fromDate: string; subjectKey?: string }>({
      queryFn: ({ subjectKey, user, fromDate }) => {
        const parsedFromDate = new Date(fromDate)
        const subjects = subjectKey ? { [subjectKey]: initialState[subjectKey] } : initialState

        const paidLessons: ILesson[] = []
        for (const subject of Object.values(subjects)) {
          for (const course of subject.coursesList) {
            const isUserRegistered = course.registeredUsers?.some((registeredUser) =>
              registeredUser.email === user?.email)

            if (isUserRegistered) {
              const lessons = course.lessonsList.filter((lesson) =>
                lesson.isPaid && new Date(lesson.lessonStartDate).getTime() > parsedFromDate.getTime())
              paidLessons.push(...lessons)
            }
          }
        }

        paidLessons.sort((a, b) => 
          new Date(a.lessonStartDate).getTime() - new Date(b.lessonStartDate).getTime())
        const nearestLesson = paidLessons.length > 0 ? paidLessons[0] : null

        return { data: nearestLesson }
      },
      providesTags: (_, __, { subjectKey }) => [{ type: 'Subjects', id: subjectKey || 'ALL' }],
    }),

    getLessonsBalance: build.query<{ subjectName: string; paidLessonsCount: number }[], { user: IUser | null; fromDate: string; currentLanguage: string }>({
      queryFn: ({ user, fromDate, currentLanguage }) => {
        const parsedFromDate = new Date(fromDate)
        const lessonsBalance = Object.values(initialState).map((subject) => {
          // Получаем перевод на нужном языке или используем первый доступный
          const subjectName = subject.name[currentLanguage] || Object.values(subject.name)[0]
    
          const paidLessonsCount = subject.coursesList.reduce((count, course) => {
            const isUserRegistered = course.registeredUsers?.some(
              (registeredUser) => registeredUser.email === user?.email
            )
    
            if (isUserRegistered) {
              const lessonsAfterDate = course.lessonsList.filter(
                (lesson) =>
                  lesson.isPaid && new Date(lesson.lessonStartDate).getTime() > parsedFromDate.getTime()
              )
              return count + lessonsAfterDate.length
            }
            return count
          }, 0)
    
          return { subjectName, paidLessonsCount }
        })
    
        return { data: lessonsBalance }
      },
      providesTags: (_, __) => [{ type: 'Subjects', id: 'BALANCE' }],
    }),
  }),
})

export const { 
  useGetSubjectsQuery, 
  useGetSubjectsKeysQuery, 
  useGetSubjectByKeyQuery,
  useGetNearestPaidLessonQuery,
  useGetLessonsBalanceQuery,
} = subjectsApi