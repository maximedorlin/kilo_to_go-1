// import { BasePagination } from "@/interfaces/base.interface";

export interface BaseInterface {
  id: string;
  code: string;
  created_at: string;
  updated_at: string;
}

export enum RoadSectionPavementType {
  terre = "terre",
  bitume = "bitume",
}

export enum RoadSectionCategoryType {
  principal = "principal",
  residential = "residential",
}

export enum RoadSectionNumberLanesType {
  V1 = "1V",
  V2 = "2V",
}

export enum RoadSectionConformityStateType {
  compliant = "compliant",
  partially_compliant = "partially_compliant",
  non_compliant = "non_compliant",
  dangerous = "dangerous",
}

export interface RoadSectionInterface extends BaseInterface {
  pavement: RoadSectionPavementType;
  category: RoadSectionCategoryType;
  number_lanes: RoadSectionNumberLanesType;
  conformity_state: RoadSectionConformityStateType;
  length?: number;
  ZInitial_A?: number;
  ZFinal_AV?: number;
  Larg_Chaus?: number;
  Long_AV?: number;
  clerue?: number;
  LENGTH?: number;
  geom: string | GeoJSON.Geometry | null;
  street: string; // optional
  quater: string; // optional
  subdivision: string; // optional
  street_id?: string; // optional
  quater_id?: string; // optional
  subdivision_id?: string; // optional
  subdivision_name?: string; // optional
  quarter_name?: string; // optional
}

export interface RoadSectionFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: RoadSectionInterface;
}

export interface RoadSectionFeatureCollection {
  type: "FeatureCollection";
  features: RoadSectionFeature[];
  totalFeatures: number;
}

export interface RoadSectionStatisticsInterface {
  total: number;
  pavement: Record<RoadSectionPavementType, number>;
  category: Record<RoadSectionCategoryType, number>;
  number_lanes: Record<RoadSectionNumberLanesType, number>;
  conformity_state: Record<RoadSectionConformityStateType, number>;
  // byStreet: {};
  // byQuater: {};
  bySubdivision: Record<string, number>;
}

export const RoadSectionPavementList = ["terre", "bitume"] as const;

export const RoadSectionCategoryList = ["principal", "residential"] as const;

export const RoadSectionNumberLanesList = ["1V", "2V"] as const;

export const RoadSectionConformityStateList = [
  "compliant",
  "partially_compliant",
  "non_compliant",
  "dangerous",
] as const;
