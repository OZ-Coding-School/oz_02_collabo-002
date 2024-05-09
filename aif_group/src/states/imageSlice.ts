import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'ref',
  initialState: [{ imageUrl: '', imageName: '' }],
  reducers: {
    setImgFileUrl: (state, action) => {
      state.push(action.payload);
    },
    deleteImgFile: (state, { payload: imageName }) => {
      state = state.filter(image => image.imageName !== imageName);
    },
  },
});

export const { setImgFileUrl, deleteImgFile } = imageSlice.actions;
export default imageSlice.reducer;
