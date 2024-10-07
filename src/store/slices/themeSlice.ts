import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";


export interface ThemeState {

    headerBackground: string,
    color: string,
    bodyBackground: string;
    slideBackground: string;
    blureSlide: string;

}

const initialState: ThemeState = {
    headerBackground: '#f2d13e',
    color: 'black',
    bodyBackground: 'white',
    slideBackground: 'gray',
    blureSlide: '100%'
}


export const ThemeSlice = createSlice({
    name: 'Theme',
    initialState,
    reducers: {
        changeTheme: state => {
            if(state.bodyBackground === 'white'){
                state.headerBackground = '#333745'
                state.bodyBackground = 'rgb(28, 31, 42)'
                state.color = 'white'
                state.slideBackground = 'rgb(28, 31, 42)'
                state.blureSlide = '50%'
            }else {
                state.headerBackground = '#f2d13e'
                state.bodyBackground = 'white'
                state.color = 'black'
                state.slideBackground = 'gray'
                state.blureSlide = '100%'
            }
        }
    }
})

export const { changeTheme } = ThemeSlice.actions
export const selectTheme = (state: RootState) => state.Theme;
export default ThemeSlice.reducer