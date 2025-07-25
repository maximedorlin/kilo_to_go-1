import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface ObservationHighFeature {
  id: string;
  type: "Feature";
  properties: ObservationInterface;
  geometry: string;
}

export interface ObservationFeatureCollection {
  type: "FeatureCollection";
  features: ObservationHighFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface ObservationFeature {
  type: string;
  id: string;
  geometry: ObservationGeometry;
  geometry_name: string;
  properties: ObservationProperties;
}

export interface ObservationGeometry {
  type: string;
  coordinates: number[];
}

export interface ObservationProperties extends Omit<BaseData, "id"> {
  code: string;
  description: string;
  intervention_type: string;
  need_level: string;
  picture: any;
  dropdown_program: any;
  needs: any;
}

export interface ObservationInterface extends BaseData {
  code: string;
  description: string;
  intervention_type: string;
  need_level: string;
  picture: any;
  dropdown_program: any;
  needs: any;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  name: string;
}

export const OBS_TYPE = ["infrastructure", "consumable", "personnel", "equipment"];
export const OBS_LEVEL = ["minor", "major", "critical"];

export type ObservationCreation = Omit<ObservationInterface, "id">;

export interface ObservationInterfaceWithPagination extends BasePagination {
  results: ObservationInterface[];
}
