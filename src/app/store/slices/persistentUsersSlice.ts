import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '@app/models'
import { SchedulerMetaData } from './schedulerSlice'

interface PersistentUser {
  user: IUser
  metaData: {
    schedulerMetaData: SchedulerMetaData
  }
}

interface PersistentUsersState {
  persistentUsers: PersistentUser[]
}

const initialState: PersistentUsersState = {
  persistentUsers: localStorage.getItem('persistentUsers')
    ? JSON.parse(localStorage.getItem('persistentUsers')!)
    : [],
}

export const persistentUsersSlice = createSlice({
  name: 'persistentUsers',
  initialState,
  reducers: {
    addPersistentUser: (
      state,
      action: PayloadAction<{ user: IUser; metaData?: { schedulerMetaData: SchedulerMetaData } }>
    ) => {
      const {
        user,
        metaData = {
          schedulerMetaData: { selectedYear: 0, selectedMonth: 0, selectedSubjectKey: '' }
        }
      } = action.payload
      
      const existingUser = state.persistentUsers.find(pu => pu.user.id === user.id)

      if (!existingUser) {
        const newUser: PersistentUser = { user, metaData }

        state.persistentUsers.push(newUser)

        localStorage.setItem('persistentUsers', JSON.stringify(state.persistentUsers))
      }
    },
    updatePersistentUserMetaDataById: (
      state,
      action: PayloadAction<{
        userId: number
        metaData: {
          schedulerMetaData?: SchedulerMetaData
        }
      }>
    ) => {
      const { userId, metaData } = action.payload

      const userIndex = state.persistentUsers.findIndex(
        (entry) => entry.user.id === userId
      )
    
      if (userIndex !== -1) {
        state.persistentUsers[userIndex].metaData = {
          ...state.persistentUsers[userIndex].metaData,
          ...metaData,
        }
    
        localStorage.setItem('persistentUsers', JSON.stringify(state.persistentUsers))
      }
    },
  },
})

export const {
  addPersistentUser,
  updatePersistentUserMetaDataById,
} = persistentUsersSlice.actions
export default persistentUsersSlice.reducer