import { createSlice } from '@reduxjs/toolkit'



export const ImageSlice = createSlice({
  name: 'Image',
  initialState:{
    data:[],
  },
  reducers: {
   ImageData:(state,action)=>{
state.data=action.payload
   }


  },
})


export const { ImageData } = ImageSlice.actions

export default ImageSlice.reducer;