import { BasePagination } from "../base.interface";
import { EquipementInterface } from "./equipement.interface";
import { HealthAreaInterface } from "./healt-area.interface";
import { HealthDistrictInterface } from "./healt-district.interface";
import { PersonnalInterface } from "./personnel.interface";
// import { PersonnelInterface } from "./personnel.interface";
import {
  // StatisticsDiseaseFeatureCollection,
  StatisticsDiseaseInterface,
} from "./statistics-disease.interface";

export interface BaseInterface {
  code: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface EquipementSanitaire {
  id: string;
  code: string;
  installation_date: string;
}

export interface SanitaryEstablishmentInterface extends BaseInterface {
  id: string;
  code: string;
  health_establishment_name: string;
  // date_creation: string;
  categorie:
    | "Pharmacie"
    | "Formation sanitaire"
    
  type: "private" | "public";
  state: "functional" | "non_functional";
  health_area: HealthAreaInterface;
  health_district: HealthDistrictInterface;
  diseases: StatisticsDiseaseInterface[];
  equipments: EquipementInterface[];
  personnels: PersonnalInterface[];
  geom: string | GeoJSON.Geometry | null;
  quater: string | undefined;
  subdivision: string | undefined;
  quater_id?: string;
  subdivision_id?: string;
}
export interface SanitaryEstablishmentFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string | null;
  properties: SanitaryEstablishmentInterface;
}

export interface SanitaryEstablishmentFeatureCollection {
  type: "FeatureCollection";
  features: SanitaryEstablishmentFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export type SanitaryEstablishmentCreation = Omit<
  SanitaryEstablishmentInterface,
  "id"
>;

export interface SanitaryEstablishmentInterfaceWithPagination
  extends BasePagination {
  results: SanitaryEstablishmentInterface[];
}

export const CATEGORIE = [
    "Pharmacie",
    "Formation sanitaire"
];
export const TYPR_ETABLISHMENT = ["public", "private"];
export const STATETYPR_ETABLISHMENT = ["functional", "non_functional"];
