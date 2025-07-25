import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface HydrantHighFeature {
  id: string;
  type: "Feature";
  properties: HydrantInterface;
  geometry: string;
}

export interface HydrantFeatureCollection {
  type: "FeatureCollection";
  features: HydrantHighFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface HydrantFeature {
  type: string;
  id: string;
  geometry: HydrantGeometry;
  geometry_name: string;
  properties: HydrantProperties;
}

export interface HydrantGeometry {
  type: string;
  coordinates: number[];
}

export interface HydrantProperties extends Omit<BaseData, "id"> {
  name: string;
  code: string;
  type: string;
  remark: string;
  quater_id: any;
  subdivision_id: any;
  installation_date: string;
}

export interface HydrantInterface extends BaseData {
  name: string;
  code: string;
  type: string;
  remark: string;
  quater: string;
  quarter_name: string;
  subdivision: string;
  subdivision_name: string;
  installation_date: string;
  geom: string;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  name: string;
}

export const HYDRANT_TYPE = ["electrique", "hydraulique", "informatique", "BI", "PI","autre"];

export type HydrantCreation = Omit<HydrantInterface, "id">;

export interface HydrantInterfaceWithPagination extends BasePagination {
  results: HydrantInterface[];
}