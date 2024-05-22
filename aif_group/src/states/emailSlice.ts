import { createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

const emailSlice = createSlice({
  name: 'email',
  initialState: initialState,
  reducers: {
    setEmail: (state, { payload: email }) => {
      state = email;
    },
  },
});

export const { setEmail } = emailSlice.actions;
export default emailSlice.reducer;
