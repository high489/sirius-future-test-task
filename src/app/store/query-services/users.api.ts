import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '@app/models'

import MikeAva from '@app/assets/images/mike.jpg'
import AnnaAva from '@app/assets/images/anna.jpg'
import WarlockAva from '@app/assets/images/warlock.png'
import HunterAva from '@app/assets/images/hunter.png'

const initialState: IUser[] = [
  {
    id: 1,
    name: 'Михаил',
    email: 'mike123@mail.com',
    username: 'mike',
    password: 'mike123',
    avatar: MikeAva,
  },
  {
    id: 2,
    name: 'Анна',
    email: 'anna321@mail.com',
    username: 'anna',
    password: 'anna321',
    avatar: AnnaAva,
  },
  {
    id: 3,
    name: 'Warlok',
    email: 'w',
    username: 'w',
    password: 'w',
    avatar: WarlockAva,
  },
  {
    id: 4,
    name: 'Hunter',
    email: 'h',
    username: 'h',
    password: 'h',
    avatar: HunterAva,
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