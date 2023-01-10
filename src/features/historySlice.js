import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: {
    value: [],
  },
  reducers: {
    addToHistory(state, action) {
      state.value.push(action.payload);
    },
  },
});

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;
