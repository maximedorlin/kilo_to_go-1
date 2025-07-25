import { Filter, Sort } from "@/interfaces/base.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AllTablePagination {
  pageIndex: number;
  pageSize: number;
  filters: Filter[];
  sorting: Sort[];
}
type TablePagination = Record<string, AllTablePagination>;

const initalSingleState: AllTablePagination = {
  pageIndex: 0,
  pageSize: 10,
  filters: [],
  sorting: [],
};
const initialState: TablePagination = {
  interventionTable: initalSingleState,
  observationsheetTable: initalSingleState,
  streetLightTable: initalSingleState,
  diagnosticsheetTable: initalSingleState,
};

interface actionPayload {
  key: keyof typeof initialState;
  realPayload: AllTablePagination;
}

const AllTableSlice = createSlice({
  name: "AllTableSlice",
  initialState,
  reducers: {
    setTablePaginationState: (state, action: PayloadAction<actionPayload>) => {
      state = { ...state, [action.payload.key]: action.payload.realPayload };
      return state;
    },
  },
});

export const { setTablePaginationState } = AllTableSlice.actions;
export default AllTableSlice.reducer;
