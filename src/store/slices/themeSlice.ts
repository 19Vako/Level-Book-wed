import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";


export interface ThemeState {

    headerBackground: string,
    color: string,
    bodyBackground: string

}

const initialState: ThemeState = {
    headerBackground: 'gray',
    color: 'white',
    bodyBackground: 'white'
}


export const ThemeSlice = createSlice({
    name: 'Theme',
    initialState,
    reducers: {
        changeTheme: state => {
            if(state.bodyBackground === 'white'){
                state.headerBackground = '#313133'
                state.bodyBackground = 'rgb(28, 31, 42)'
                state.color = 'white'
            }else {
                state.headerBackground = '#313133'
                state.bodyBackground = 'rgb(28, 31, 42)'
                state.color = 'white'
            }
        }
    }
})

export const { changeTheme } = ThemeSlice.actions
export const selectTheme = (state: RootState) => state.Theme;
export default ThemeSlice.reducer