import { createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

const emailSlice = createSlice({
  name: 'email',
  initialState: initialState,
  reducers: {
    setUserEmail: (state, { payload: email }) => {
      state = email;
    },
  },
});

export const { setUserEmail } = emailSlice.actions;
export default emailSlice.reducer;
