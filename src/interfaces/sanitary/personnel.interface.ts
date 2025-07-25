import { BasePagination } from "../base.interface";

export interface BaseInterface {
  code: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface PersonnalInterface extends BaseInterface {
  description: string;
  personnel_type: string;
}

export type PersonnelCreation = Omit<PersonnalInterface, "id">;

export interface PersonnelInterfaceWithPagination extends BasePagination {
  results: PersonnalInterface[];
}
