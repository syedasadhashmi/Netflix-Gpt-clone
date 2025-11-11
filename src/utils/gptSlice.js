import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptShow: false,
    gptMovieNames: null,
    gptMoviesTMDBResult: null,
  },
  reducers: {
    toggleGptView: (state) => {
      state.isGptShow = !state.isGptShow;
    },
    addMovieNames: (state, action) => {
      state.gptMovieNames = action.payload;
    },
    addGptMoviesTMDBResult: (state, action) => {
      state.gptMoviesTMDBResult = action.payload;
    },
  },
});

export const { toggleGptView, addMovieNames, addGptMoviesTMDBResult } =
  gptSlice.actions;
export default gptSlice.reducer;
