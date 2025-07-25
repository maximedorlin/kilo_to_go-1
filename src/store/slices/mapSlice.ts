import { createSlice } from "@reduxjs/toolkit";

interface themeState {
  navOpen: boolean;
  navExpend: boolean;
  count: number;
}

const initialState: themeState = {
  navOpen: true,
  navExpend: false,
  count: 0,
};

export const MapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    updateMap: (state) => {
      state.count = state.count + 1;
      return state;
    },
    toogleNavExpend: (state) => {
      state.navExpend = !state.navExpend;
      return state;
    },
  },
});

export const { toogleNavExpend, updateMap } = MapSlice.actions;

export default MapSlice.reducer;
