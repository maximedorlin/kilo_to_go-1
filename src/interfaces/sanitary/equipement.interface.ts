import { BasePagination } from "../base.interface";

export interface BaseInterface {
  code: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface EquipementInterface extends BaseInterface {
  [x: string]: any;
  equipment_name: string;
  equipment_quantity: number;
  equipment_description: string;
  equipment_type: string;
  health_establishment?: string;
}

export type EquipementCreation = Omit<EquipementInterface, "id">;

export interface EquipementInterfaceWithPagination extends BasePagination {
  results: EquipementInterface[];
}
