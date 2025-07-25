import { BasePagination } from "../base.interface";
import { BaseInterface } from "./establishments.interface";
import { HealthAreaFeatureCollection } from "./healt-area.interface";

export interface HealthDistrictInterface extends BaseInterface {
  [x: string]: any;
  district_name: string;
  health_areas: HealthAreaFeatureCollection;
  geom: string | GeoJSON.Geometry | null;
}

export type HealthDistrictCreation = Omit<HealthDistrictInterface, "id">;

export interface HealthDistrictInterfaceWithPagination extends BasePagination {
  results: HealthDistrictInterface[];
}

export interface HealthDistrictFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: HealthDistrictInterface;
}

export interface HealthDistrictFeatureCollection {
  type: "FeatureCollection";
  features: HealthDistrictFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}
