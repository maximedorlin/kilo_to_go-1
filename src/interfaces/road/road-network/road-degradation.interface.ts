// import { BasePagination } from "@/interfaces/base.interface";

import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface BaseInterface {
  id: string;
  code: string;
  created_at: string;
  updated_at: string;
}

export enum RoadDegradationType {
  cracks = "cracks",
  potholes = "potholes",
  ruts = "ruts",
  aggregate_detachment = "aggregate_detachment",
  gully_erosion = "gully_erosion",
  pavement_delamination = "pavement _elamination",
  settlements = "settlements",
}

export enum RoadDegradationDegreeType {
  minor = "minor",
  major = "major",
  critical = "critical",
}

export enum RoadDegradationOriginType {
  user = "user",
  responsible = "responsible",
}

export enum RoadDegradationStatusType {
  identified = "identified",
  pending = "pending",
  resolved = "resolved",
}

export interface RoadDegradationInterface extends BaseInterface {
  type: RoadDegradationType;
  degree: RoadDegradationDegreeType;
  origin: RoadDegradationOriginType;
  status: RoadDegradationStatusType;
  resolution_date: string | null;
  picture?: string | File | null;
  estimated_surface: GLfloat;
  location: string;
  description: string;
  geom: string | GeoJSON.Geometry | null;
  street?: string | null; // optional
  quater?: string | null; // optional
  subdivision?: string | null; // optional
}

export interface RoadDegradationFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: RoadDegradationInterface;
}

export interface RoadDegradationFeatureCollection {
  count: number;
  type: "FeatureCollection";
  features: RoadDegradationFeature[];
  totalFeatures: number;
}

export interface RoadDegradationInterfaceWithPagination extends BasePagination {
  results: RoadDegradationInterface[];
}

export interface RoadDegradationFilterInterface extends BaseData {
  code: string;
  type: RoadDegradationType;
  degree: RoadDegradationDegreeType;
  origin: RoadDegradationOriginType;
  status: RoadDegradationStatusType;
  resolution_date: string | null;
  picture?: string | File | null;
  estimated_surface: GLfloat;
  location: string;
  description: string;
  geom: string | GeoJSON.Geometry | null;
  street: string | null; // optional
  subdivision: string | null; // optional
  quater: string | null; // optional
  quater_id?: string ;
  subdivision_id?: string ;
}

export interface RoadDegradationStatisticsInterface {
  total: number;
  type: Record<RoadDegradationType, number>;
  degree: Record<RoadDegradationDegreeType, number>;
  origin: Record<RoadDegradationOriginType, number>;
  status: Record<RoadDegradationStatusType, number>;
  // street: Record<string, number>;
  quater: Record<string, number>;
  subdivision: Record<string, number>;
}

export const RoadDegradationTypeList = [
  "cracks",
  "potholes",
  "ruts",
  "aggregate_detachment",
  "gully_erosion",
  "pavement_delamination",
  "settlements",
] as const;

export const RoadDegradationDegreeList = [
  "minor",
  "major",
  "critical",
] as const;

export const RoadDegradationOriginList = ["user", "responsible"] as const;

export const RoadDegradationStatusList = [
  "identified",
  "pending",
  "resolved",
] as const;
