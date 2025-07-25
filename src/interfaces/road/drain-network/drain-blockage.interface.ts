// import { BasePagination } from "@/interfaces/base.interface";

import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface BaseInterface {
  id: string;
  code: string;
  created_at: string;
  updated_at: string;
}

export enum DrainBlockageType {
  natural = "natural",
  low_degradation = "low_degradation",
  good_concrete = "good_concrete",
  partial_degradation = "partial_degradation",
}

export enum DrainBlockageOriginType {
  user = "user",
  responsible = "responsible",
}

export enum DrainBlockageStatusType {
  identified = "identified",
  pending = "pending",
  resolved = "resolved",
}

export interface DrainBlockageInterface extends BaseInterface {
  type: DrainBlockageType;
  origin: DrainBlockageOriginType;
  status: DrainBlockageStatusType;
  picture?: string | File | null;
  location: string;
  description: string;
  drain: string;
  quater_id?: string; // optional
  subdivision_id?: string; // optional
}

export interface DrainBlockageFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: DrainBlockageInterface;
}

export interface DrainBlockageFeatureCollection {
  type: "FeatureCollection";
  features: DrainBlockageFeature[];
  totalFeatures: number;
}

export interface DrainBlockageInterfaceWithPagination extends BasePagination {
  results: DrainBlockageInterface[];
}

export interface DrainBlockageFilterInterface extends BaseData {
  code: string;
  type: DrainBlockageType;
  origin: DrainBlockageOriginType;
  status: DrainBlockageStatusType;
  picture?: string | File | null;
  location: string;
  description: string;
  street: string | null; // optional
  subdivision: string | null; // optional
  quater: string | null;
  quater_id: string | null;
  subdivision_id: string | null;
}

export interface DrainBlockageStatisticsInterface {
  total: number;
  type: Record<DrainBlockageType, number>;
  origin: Record<DrainBlockageOriginType, number>;
  status: Record<DrainBlockageStatusType, number>;
  // street: Record<string, number>;
  // quater: Record<string, number>;
  // subdivision: Record<string, number>;
}

export const DrainBlockageTypeList = [
  "natural",
  "low_degradation",
  "good_concrete",
  "partial_degradation",
] as const;

export const DrainBlockageOriginList = ["user", "responsible"] as const;

export const DrainBlockageStatusList = [
  "identified",
  "pending",
  "resolved",
] as const;
