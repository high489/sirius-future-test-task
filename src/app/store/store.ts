import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { usersApi } from './query-services/users.api'
import authReducer from './slices/authSlice'
import persistentUsersReducer from './slices/persistentUsersSlice'

const rootReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  auth: authReducer,
  persistentUsers: persistentUsersReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      usersApi.middleware,
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch