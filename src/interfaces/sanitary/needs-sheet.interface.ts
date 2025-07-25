import { BasePagination } from "../base.interface";
import { InterventionInterface } from "../public-lighting/corrective-maintenance/intervention.interface";
import { ConsumablesInterface } from "./consumables.interface";
import { InfrastructuresInterface } from "./infrastructures.interface";
import { PersonnalInterface } from "./personnel.interface";

export interface BaseInterface {
  code: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface NeedsSheetInterface extends BaseInterface {
  consummables: string | ConsumablesInterface;
  quantity: number;

  personnel: string | PersonnalInterface;

  intervention: string | InterventionInterface;

  infrastructure: string | InfrastructuresInterface;
}

export type NeedsSheetCreation = Omit<NeedsSheetInterface, "id">;

export interface NeedsSheetInterfaceWithPagination extends BasePagination {
  results: NeedsSheetInterface[];
}
