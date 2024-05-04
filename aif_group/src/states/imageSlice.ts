import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'ref',
  initialState: [{ imageUrl: '', imageName: '' }],
  reducers: {
    setImgFileUrl: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setImgFileUrl } = imageSlice.actions;
export default imageSlice.reducer;
