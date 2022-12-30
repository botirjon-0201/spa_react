import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reciepe: [],
  showReciepe: false,
};

export const reciepeSlice = createSlice({
  name: "reciepe",
  initialState,
  reducers: {
    setReciepe(state, action) {
      state.reciepe = action.payload;
    },
    setShowReciepe(state) {
      state.showReciepe = !state.showReciepe;
    },
  },
});

export default reciepeSlice.reducer;
export const { setReciepe, setShowReciepe } = reciepeSlice.actions;
