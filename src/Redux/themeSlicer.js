import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    headerbgColor : 'bg-gradient-to-r from-indigo-700 to-violet-500',
    textColor : 'text-black',
    mainbgColor : 'bg-white',

}

const themeSlicer = createSlice({
    name : 'theme',
    initialState,
    reducers : {
        darkTheme : (state) => {
            state.headerbgColor = "bg-black",
            state.textColor = 'text-white',
            state.mainbgColor = 'bg-gray-900'
        },
        lightTheme : (state) => {
            state.headerbgColor = "bg-gradient-to-r from-indigo-700 to-violet-500",
            state.textColor = 'text-black',
            state.mainbgColor = 'bg-white'
        }

    }
})

export const {darkTheme , lightTheme} = themeSlicer.actions
export default themeSlicer.reducer