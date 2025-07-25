import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface GreenSpaceHighFeature {
  id: string;
  type: "Feature";
  properties: GreenSpaceInterface;
  geometry: string;
}

export interface GreenSpaceFeatureCollection {
  type: "FeatureCollection";
  features: GreenSpaceHighFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface GreenSpaceFeature {
  type: string;
  id: string;
  geometry: GreenSpaceGeometry;
  geometry_name: string;
  properties: GreenSpaceProperties;
}

export interface GreenSpaceGeometry {
  type: string;
  coordinates: number[];
}

export interface GreenSpaceProperties extends Omit<BaseData, "id"> {
  name: string;
  code: string;
  type: string;
  description: string;
  statut: string;
  area: number;
  quater_id: any;
  subdivision_id: any;
}

export interface GreenSpaceInterface extends BaseData {
  name: string;
  code: string;
  description: string;
  type: string;
  statut: string;
  area: number;
  quater: string;
  quarter_name:string;
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

export const GS_STATUT = ["libre", "occupe", "en_conflit"];
export const GS_TYPE = ["residentiel", "industriel", "agricole", "commercial"];

export type GreenSpaceCreation = Omit<GreenSpaceInterface, "id">;

export interface GreenSpaceInterfaceWithPagination extends BasePagination {
  results: GreenSpaceInterface[];
}
