import { configureStore } from "@reduxjs/toolkit";
import theme from './slices/themeSlice'
import ServerData from './slices/serverSlice'

export const store = configureStore({
    reducer: {
      Theme: theme,
      ServerData: ServerData
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store