import { BasePagination } from "../base.interface";

export interface BaseInterface {
  code: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface InfrastructuresInterface extends BaseInterface {
  infrastructure_name: string;
}

export type InfrastructuresCreation = Omit<InfrastructuresInterface, "id">;

export interface InfrastructuresInterfaceWithPagination extends BasePagination {
  results: InfrastructuresInterface[];
}
