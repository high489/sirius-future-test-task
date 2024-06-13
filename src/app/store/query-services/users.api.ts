import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '@app/models/IUser'

const initialState: IUser[] = [
  {
    id: 1,
    name: 'Михаил',
    email: 'mike123@mail.com',
    username: 'mike',
    password: 'mike123',
  },
  {
    id: 2,
    name: 'Анна',
    email: 'anna321@mail.com',
    username: 'anna',
    password: 'anna321',
  },
]

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query<IUser[], void>({
      queryFn: () => ({ data: initialState }),
      providesTags: (result) => result
      ? [...result.map(({ id }: any) => ({ type: 'Users' as const, id })),
        { type: 'Users', id: 'LIST' },]
      : [{ type: 'Users', id: 'LIST' }],
    }),
  }),
})

export const { useGetUsersQuery } = usersApi