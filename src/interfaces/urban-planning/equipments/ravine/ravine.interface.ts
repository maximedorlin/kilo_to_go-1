import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface RavineHighFeature {
  id: string;
  type: "Feature";
  properties: RavineInterface;
  geometry: string;
}

export interface RavineFeatureCollection {
  type: "FeatureCollection";
  features: RavineHighFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface RavineFeature {
  type: string;
  id: string;
  geometry: RavineGeometry;
  geometry_name: string;
  properties: RavineProperties;
}

export interface RavineGeometry {
  type: string;
  coordinates: number[];
}

export interface RavineProperties extends Omit<BaseData, "id"> {
  name: string;
  code: string;
  description: string;
  statut: string;
  quater_id: any;
  length_m: number;
  subdivision_id: any;
}

export interface RavineInterface extends BaseData {
  name: string;
  code: string;
  description: string;
  statut: string;
  length_m: number;
  quater: string;
  quarter_name: string;
  subdivision: string;
  subdivision_name: string;
  geom: string;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  name: string;
}

export const RAVINE_STATUT = ["active", "inactive", "stabilized", "dangerous", "under_monitoring"];

export type RavineCreation = Omit<RavineInterface, "id">;

export interface RavineInterfaceWithPagination extends BasePagination {
  results: RavineInterface[];
}
