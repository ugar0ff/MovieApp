import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export type LanguageOption = 'system' | 'en' | 'hi'

type SettingsState = {
  language: LanguageOption
}

const initialState: SettingsState = {
  language: 'system',
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<LanguageOption>) {
      state.language = action.payload
    },
  },
})

export const { setLanguage } = settingsSlice.actions
export default settingsSlice.reducer
