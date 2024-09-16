import { configureStore } from "@reduxjs/toolkit";
import theme from './slices/themeSlice'

export const store = configureStore({
    reducer: {
      Theme: theme
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store