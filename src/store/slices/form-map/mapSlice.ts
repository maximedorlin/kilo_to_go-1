import { QuaterSubdivisionStreet } from "@/interfaces/administrative.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MapState {
  geoJSON: string | "";
  geomType: Array<"Point" | "LineString" | "Polygon"> | null;
  subdivisionAndQuater: QuaterSubdivisionStreet | null;
  quaterSubdivisionLoading: boolean;
  isInitial: boolean;
}

const initialState: MapState = {
  geoJSON: "",
  geomType: null,
  isInitial: false,
  subdivisionAndQuater: null,
  quaterSubdivisionLoading: false,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setGeoJSON: (state, action: PayloadAction<string | "">) => {
      state.geoJSON = action.payload;
    },
    clearGeoJSON: (state) => {
      state.geoJSON = "";
    },

    setSubdivisionAndQuater: (
      state,
      action: PayloadAction<QuaterSubdivisionStreet | null>
    ) => {
      state.subdivisionAndQuater = action.payload;
      return state;
    },
    setQuaterSubdivisionLoading: (state, action: PayloadAction<boolean>) => {
      state.quaterSubdivisionLoading = action.payload;
      return state;
    },
    setGeomType: (
      state,
      action: PayloadAction<Array<"Point" | "LineString" | "Polygon"> | null>
    ) => {
      state.geomType = action.payload;
    },
    setIsInitial: (state, action: PayloadAction<boolean>) => {
      state.isInitial = action.payload;
    },
  },
});

export const {
  setGeoJSON,
  clearGeoJSON,
  setGeomType,
  setIsInitial,
  setSubdivisionAndQuater,
  setQuaterSubdivisionLoading,
} = mapSlice.actions;
export default mapSlice.reducer;
