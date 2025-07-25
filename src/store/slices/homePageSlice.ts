import { createSlice } from "@reduxjs/toolkit";

interface HomePageState {
  value: boolean;
}

const initialState: HomePageState = {
  value: false,
};

const HomePageSlice = createSlice({
  name: "isHomePage",
  initialState,
  reducers: {
    setIsHomeTrue: (state) => {
      state.value = true; // Directly mutating the state
    },
    setIsHomeFalse: (state) => {
      state.value = false; // Directly mutating the state
    },
  },
});

export const { setIsHomeTrue, setIsHomeFalse } = HomePageSlice.actions;
export default HomePageSlice.reducer;
