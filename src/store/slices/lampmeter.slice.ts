import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LampmeterSliceInterface {
  layerUrl: string;
  CQL_FILTER: string;
}
const initialState: LampmeterSliceInterface = {
  layerUrl: "",
  CQL_FILTER: "",
};

const lampmeterSlice = createSlice({
  name: "lampmeter",
  initialState,
  reducers: {
    setLampmeterLayerUrl: (state, action: PayloadAction<string>) => {
      state = { ...state, layerUrl: action.payload };
      return state;
    },
    setLampmeterLayerData: (
      state,
      action: PayloadAction<LampmeterSliceInterface>
    ) => {
      state = { ...action.payload };
      return state;
    },
  },
});

export const { setLampmeterLayerUrl, setLampmeterLayerData } = lampmeterSlice.actions;
export default lampmeterSlice.reducer;
