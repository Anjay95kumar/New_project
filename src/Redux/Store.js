import { configureStore } from '@reduxjs/toolkit'
import  ImageReducer  from './Slices'

export const store = configureStore({
  reducer: {
    imageData:ImageReducer
  },
})