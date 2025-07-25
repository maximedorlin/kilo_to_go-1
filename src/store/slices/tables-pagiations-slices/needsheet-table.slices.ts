import { Filter, Sort } from "@/interfaces/base.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NeedSheetPagination {
  pageIndex: number;
  pageSize: number;
  filters: Filter[];
  sorting: Sort[];
}
const initialState: NeedSheetPagination = {
  pageIndex: 0,
  pageSize: 10,
  filters: [],
  sorting: [],
};

const NeesheetTableSlice = createSlice({
  name: "needSheetTable",
  initialState,
  reducers: {
    setNeedSheetPagination: (
      state,
      action: PayloadAction<NeedSheetPagination>
    ) => {
      state = { ...action.payload };
      return state;
    },
  },
});

export const { setNeedSheetPagination } = NeesheetTableSlice.actions;
export default NeesheetTableSlice.reducer;
