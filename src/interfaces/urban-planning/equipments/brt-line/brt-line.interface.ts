import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface BrtLineHighFeature {
  id: string;
  type: "Feature";
  properties: BrtLineInterface;
  geometry: string;
}

export interface BrtLineFeatureCollection {
  type: "FeatureCollection";
  features: BrtLineHighFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface BrtLineFeature {
  type: string;
  id: string;
  geometry: BrtLineGeometry;
  geometry_name: string;
  properties: BrtLineProperties;
}

export interface BrtLineGeometry {
  type: string;
  coordinates: number[];
}

export interface BrtLineProperties extends Omit<BaseData, "id"> {
  name: string;
  code: string;
  statut: string;
  length_km: number;
  itinerary: string;
  commissioning_date: string;
  station_count: number;
  remark: string;
}

export interface BrtLineInterface extends BaseData {
  name: string;
  code: string;
  statut: string;
  length_km: number;
  itinerary: string;
  commissioning_date: string;
  station_count: number;
  remark: string;
  geom: string;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  name: string;
}

export const BRT_STATUT = [
  "planned",
  "under_construction",
  "operational",
  "suspended",
  "decommissioned",
  "maintenance",
];

export type BrtLineCreation = Omit<BrtLineInterface, "id">;

export interface BrtLineInterfaceWithPagination extends BasePagination {
  results: BrtLineInterface[];
}
