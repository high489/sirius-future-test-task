import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '@app/models/IUser'

interface AuthState {
  user: IUser | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    signOut: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { signIn, signOut } = authSlice.actions
export default authSlice.reducer