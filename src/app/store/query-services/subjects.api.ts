import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISubject, Option } from '@/app/models'
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
  }),
})

export const { 
  useGetSubjectsQuery, 
  useGetSubjectsKeysQuery, 
  useGetSubjectByKeyQuery } = subjectsApi