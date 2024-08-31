import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SelectedSubjectState {
  subjectKey: string
}

const initialState: SelectedSubjectState = {
  subjectKey: localStorage.getItem('selectedSubjectKey') || '',
}

export const selectedSubjectSlice = createSlice({
  name: 'selectedSubject',
  initialState,
  reducers: {
    setSelectedSubjectKey: (state, action: PayloadAction<string>) => {
      state.subjectKey = action.payload
      localStorage.setItem('selectedSubjectKey', action.payload)
    },
    clearSelectedSubjectKey: (state) => {
      state.subjectKey = ''
      localStorage.removeItem('selectedSubjectKey')
    },
  }
})

export const { setSelectedSubjectKey, clearSelectedSubjectKey } = selectedSubjectSlice.actions

export default selectedSubjectSlice.reducer