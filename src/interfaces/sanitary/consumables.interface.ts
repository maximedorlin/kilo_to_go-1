import { BasePagination } from "../base.interface";

export interface BaseInterface {
  code: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface ConsumablesInterface extends BaseInterface {
  consumable_name: string;
  consumable_type: string;
  consumable_quantity: number;
}

export type ConsumablesCreation = Omit<ConsumablesInterface, "id">;

export interface ConsumablesInterfaceWithPagination extends BasePagination {
  results: ConsumablesInterface[];
}
