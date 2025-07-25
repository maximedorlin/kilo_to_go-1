import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface WorkOfArtHighFeature {
  id: string;
  type: "Feature";
  properties: WorkOfArtInterface;
  geometry: string;
}

export interface WorkOfArtFeatureCollection {
  type: "FeatureCollection";
  features: WorkOfArtHighFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface WorkOfArtFeature {
  type: string;
  id: string;
  geometry: WorkOfArtGeometry;
  geometry_name: string;
  properties: WorkOfArtProperties;
}

export interface WorkOfArtGeometry {
  type: string;
  coordinates: number[];
}

export interface WorkOfArtProperties extends Omit<BaseData, "id"> {
  name: string;
  code: string;
  type: string;
  remark: string;
  quater_id: any;
  subdivision_id: any;
}

export interface WorkOfArtInterface extends BaseData {
  name: string;
  code: string;
  type: string;
  remark: string;
  category : string;
  pavement : string;
  length : string;
  width : string;
  altitude : string;
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

export const WOA_TYPE = ["public", "prive", "mixte"];

export type WorkOfArtCreation = Omit<WorkOfArtInterface, "id">;

export interface WorkOfArtInterfaceWithPagination extends BasePagination {
  results: WorkOfArtInterface[];
}