import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptShow: false,
  },
  reducers: {
    toggleGptView: (state) => {
      state.isGptShow = !state.isGptShow;
    },
  },
});

export const { toggleGptView } = gptSlice.actions;
export default gptSlice.reducer;
