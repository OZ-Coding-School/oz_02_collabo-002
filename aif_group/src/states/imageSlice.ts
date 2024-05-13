import { ImageInfo } from '@/types/designSelectBoxType';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ImageInfo[] = [];

const imageSlice = createSlice({
  name: 'ref',
  initialState: initialState,
  reducers: {
    setImgFileUrl: (state, action) => {
      state.push(action.payload);
    },
    deleteImgFile: (state, { payload: img_id }) => {
      return state.filter(image => image.img_id !== img_id);
    },
    resetImgFile: () => {
      return initialState;
    },
  },
});

export const { setImgFileUrl, deleteImgFile, resetImgFile } = imageSlice.actions;
export default imageSlice.reducer;
