// import { Filter, Sort } from "@/interfaces/base.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GeoTablePagination {
  pageIndex: number;
  pageSize: number;
}
const initialState: GeoTablePagination = {
  pageIndex: 0,
  pageSize: 10,
};

const GeoTableSlice = createSlice({
  name: "geoTable",
  initialState,
  reducers: {
    setGeoTablePagination: (
      state,
      action: PayloadAction<GeoTablePagination>
    ) => {
      state = { ...action.payload };
      return state;
    },
  },
});

export const { setGeoTablePagination } = GeoTableSlice.actions;
export default GeoTableSlice.reducer;
