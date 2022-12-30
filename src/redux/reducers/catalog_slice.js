import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catalog: [],
  filteredCatalog: [],
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCatalog(state, action) {
      state.catalog = action.payload;
    },
    setFilteredCatalog(state, action) {
      state.filteredCatalog = action.payload;
    },
  },
});

export default catalogSlice.reducer;
export const { setCatalog, setFilteredCatalog } = catalogSlice.actions;
