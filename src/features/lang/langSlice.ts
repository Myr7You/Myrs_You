import { createSlice } from '@reduxjs/toolkit';

export interface langState {
  value: boolean
}

const initialState: langState = {
  value: false
};


export const langSlice = createSlice({
  name: 'lang',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    switchLang: (state,action) => {
      state.value = action.payload
    },
  },
});

export const { switchLang } = langSlice.actions;
export default langSlice.reducer;