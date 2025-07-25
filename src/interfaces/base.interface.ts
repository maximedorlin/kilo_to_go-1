export interface BasePagination {
  count: number;
  next: string;
  previous: string;
}
export interface BaseData {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface Sort {
    id: string;
    desc: boolean;
  }
export interface Filter {
    id: string;
    value: any;
  }
export interface GetDatasArgs {
    pageIndex: number;
    pageSize: number;
    sorting?: Sort[] ;
    filters?: Filter[];
    manualFilter?: string
  }