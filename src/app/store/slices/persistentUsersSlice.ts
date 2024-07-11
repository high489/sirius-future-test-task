import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '@app/models'

interface PersistentUsersState {
  users: IUser[] | null
}

const initialState: PersistentUsersState = {
  users: []
}

export const persistentUsersSlice = createSlice({
  name: 'persistentUsers',
  initialState,
  reducers: {
    rememberUser: (state, action: PayloadAction<IUser>) => {
      if (!state.users?.find(u => u.id === action.payload.id)){
        state.users?.push(action.payload)
      }
    }
  }
})

export const { rememberUser } = persistentUsersSlice.actions
export default persistentUsersSlice.reducer