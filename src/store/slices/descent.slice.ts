import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DescentSliceInterface {
  layerUrl: string;
  CQL_FILTER: string;
}
const initialState: DescentSliceInterface = {
  layerUrl: "",
  CQL_FILTER: "",
};

const descentSlice = createSlice({
  name: "decent",
  initialState,
  reducers: {
    setDecentLayerUrl: (state, action: PayloadAction<string>) => {
      state = { ...state, layerUrl: action.payload };
      return state;
    },
    setDecentLayerData: (
      state,
      action: PayloadAction<DescentSliceInterface>
    ) => {
      state = { ...action.payload };
      return state;
    },
  },
});

export const { setDecentLayerUrl, setDecentLayerData } = descentSlice.actions;
export default descentSlice.reducer;
