import { ImageInfo } from '@/types/designSelectBoxType';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ImageInfo[] = [];

const imageFileSlice = createSlice({
  name: 'imageFile',
  initialState: initialState,
  reducers: {
    setDownloadFileUrl: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setDownloadFileUrl } = imageFileSlice.actions;
export default imageFileSlice.reducer;
