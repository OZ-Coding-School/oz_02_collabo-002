import { createSlice } from '@reduxjs/toolkit';
interface EmailState {
  email: string | null;
}

const initialState: EmailState = {
  email: null,
};
const emailSlice = createSlice({
  name: 'email',
  initialState: initialState,
  reducers: {
    setUserEmail: (state, { payload: email }) => {
      state.email = email;
    },
  },
});

export const { setUserEmail } = emailSlice.actions;
export default emailSlice.reducer;
