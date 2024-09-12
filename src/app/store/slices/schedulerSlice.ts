import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SchedulerMetaData {
  selectedYear: number | null
  selectedMonth: number | null
  selectedSubjectKey: string
}

interface SchedulerState {
  schedulerMetaData: SchedulerMetaData
}

const initialState: SchedulerState = {
  schedulerMetaData: {
    selectedYear: null,
    selectedMonth: null,
    selectedSubjectKey: '',
  },
}

export const schedulerSlice = createSlice({
  name: 'scheduler',
  initialState,
  reducers: {
    setSchedulerYear: (state, action: PayloadAction<number>) => {
      state.schedulerMetaData.selectedYear = action.payload
    },
    setSchedulerMonth: (state, action: PayloadAction<number>) => {
      state.schedulerMetaData.selectedMonth = action.payload
    },
    setSelectedSubjectKey: (state, action: PayloadAction<string>) => {
      state.schedulerMetaData.selectedSubjectKey = action.payload
    },
    setSchedulerMetaData: (
      state, 
      action: PayloadAction<Partial<SchedulerMetaData>>
    ) => {
      state.schedulerMetaData.selectedYear = action.payload.selectedYear ?? state.schedulerMetaData.selectedYear
      state.schedulerMetaData.selectedMonth = action.payload.selectedMonth ?? state.schedulerMetaData.selectedMonth
      state.schedulerMetaData.selectedSubjectKey = action.payload.selectedSubjectKey ?? state.schedulerMetaData.selectedSubjectKey
    },
  },
})

export const {
  setSchedulerYear,
  setSchedulerMonth,
  setSelectedSubjectKey,
  setSchedulerMetaData,
} = schedulerSlice.actions
export default schedulerSlice.reducer