// import { BasePagination } from "@/interfaces/base.interface";

export interface BaseInterface {
  id: string;
  code: string;
  created_at: string;
  updated_at: string;
}

export enum DrainType {
  gutter = "gutter",
  rainy = "rainy",
  natural = "natural",
}

export enum DrainDegradationType {
  natural = "natural",
  low = "low",
  concrete_ok = "concrete_ok",
  partial = "partial",
}

export enum DrainStatusType {
  good = "good",
  degrading = "degrading",
  intervention = "intervention",
}

export enum DrainMaterialType {
  natural = "natural",
  concrete = "concrete",
  masonry = "masonry",
}

export enum DrainHabitationType {
  less_5m = "less_5m",
  more_5m = "more_5m",
  edge = "edge",
}

export enum DrainColorType {
  cloudy = "cloudy",
  clear = "clear",
  very_cloudy = "very_cloudy",
}

export interface DrainInterface extends BaseInterface {
  type: DrainType;
  length: number;
  modeled: boolean;
  status: DrainStatusType;
  degradate: DrainDegradationType;
  materials: DrainMaterialType;
  comment: string;
  habitation: DrainHabitationType;
  color: DrainColorType;
  height: GLfloat;
  shape_curve: string;
  upstream_node: string;
  shape: string;
  l_radier: GLfloat;
  depth: GLfloat;
  works: string;
  watershed: string;
  weather: string;
  nature: string;
  phe_m: GLfloat;
  speed_ms: GLfloat;
  sediment_clogging: string;
  dec_clogging: string;
  eu_reject: string;
  reject_type: string;
  drainage: string;
  downstream_node?: string;
  geom: string | GeoJSON.Geometry | null;
  street?: string | null; // optional
  quater?: string | null; // optional
  subdivision?: string | null; // optiona
}

export interface DrainFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: DrainInterface;
}

export interface DrainFeatureCollection {
  type: "FeatureCollection";
  features: DrainFeature[];
  totalFeatures: number;
}

export interface DrainFilterInterface {
  code: string;
  type: DrainType;
  length: number;
  modeled: boolean;
  status: DrainStatusType;
  degradate: DrainDegradationType;
  materials: DrainMaterialType;
  comment: string;
  habitation: DrainHabitationType;
  color: DrainColorType;
  // geom: string;
  created_at: string;
  updated_at: string;
  street: string | null; // optional
  subdivision: string | null; // optional
  quater: string | null;
  quater_id: string | null;
  subdivision_id: string | null;
}

export interface DrainStatisticsInterface {
  total: number;
  type: Record<DrainType, number>;
  materials: Record<DrainMaterialType, number>;
  habitation: Record<DrainHabitationType, number>;
  degradate: Record<DrainDegradationType, number>;
  status: Record<DrainStatusType, number>;
  color: Record<DrainColorType, number>;
  street: Record<string, number>;
  byquater: Record<string, number>;
  bysubdivision: Record<string, number>;
}

export const DrainTypeList = ["gutter", "rainy", "natural"] as const;

export const DrainDegradationList = [
  "natural",
  "low",
  "concrete_ok",
  "partial",
] as const;

export const DrainStatusList = ["good", "degrading", "intervention"] as const;

export const DrainMaterialList = ["natural", "concrete", "masonry"] as const;

export const DrainHabitationList = ["less_5m", "more_5m", "edge"] as const;

export const DrainColorList = ["cloudy", "clear", "very_cloudy"] as const;
