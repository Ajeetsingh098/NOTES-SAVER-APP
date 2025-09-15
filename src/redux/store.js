import { configureStore } from '@reduxjs/toolkit'
import PasteReducer from './Pasteslice'
// import store from './redux/store'

export const store = configureStore({
  reducer: {
    Paste: PasteReducer 
  },
})