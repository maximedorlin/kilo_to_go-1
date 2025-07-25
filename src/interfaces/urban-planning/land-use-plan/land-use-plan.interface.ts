import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface LandUsePlanHighFeature {
  id: string;
  type: "Feature";
  properties: LandUsePlanInterface;
  geometry: string;
}

export interface LandUsePlanFeatureCollection {
  type: "FeatureCollection";
  features: LandUsePlanHighFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface LandUsePlanFeature {
  type: string;
  id: string;
  geometry: LandUsePlanGeometry;
  geometry_name: string;
  properties: LandUsePlanProperties;
}

export interface LandUsePlanGeometry {
  type: string;
  coordinates: number[];
}

export interface LandUsePlanProperties extends Omit<BaseData, "id"> {
  name: string;
  zone: string;
}

export interface LandUsePlanInterface extends BaseData {
  name: string;
  zone: string;
  geom: string;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  name: string;
}

export type LandUsePlanCreation = Omit<LandUsePlanInterface, "id">;

export interface LandUsePlanInterfaceWithPagination extends BasePagination {
  results: LandUsePlanInterface[];
}
