import {configureStore} from '@reduxjs/toolkit'
import themeSlicer from './themeSlicer'

const store = configureStore({
    reducer : {
        theme : themeSlicer
    }
})

export default store