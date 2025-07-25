import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface FeederLineHighFeature {
  id: string;
  type: "Feature";
  properties: FeederLineInterface;
  geometry: string;
}

export interface FeederLineFeatureCollection {
  type: "FeatureCollection";
  features: FeederLineHighFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface FeederLineFeature {
  type: string;
  id: string;
  geometry: FeederLineGeometry;
  geometry_name: string;
  properties: FeederLineProperties;
}

export interface FeederLineGeometry {
  type: string;
  coordinates: number[];
}

export interface FeederLineProperties extends Omit<BaseData, "id"> {
  name: string;
  code: string;
  statut: string;
  length_km: number;
  start_point: string;
  end_point: string;
  commissioning_date: Date;
  remark: string;
}

export interface FeederLineInterface extends BaseData {
  name: string;
  code: string;
  statut: string;
  length_km: number;
  start_point: string;
  end_point: string;
  commissioning_date: string;
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

export const FL_STATUT = ["actif", "inactif", "suspendu"];

export type FeederLineCreation = Omit<FeederLineInterface, "id">;

export interface FeederLineInterfaceWithPagination extends BasePagination {
  results: FeederLineInterface[];
}
