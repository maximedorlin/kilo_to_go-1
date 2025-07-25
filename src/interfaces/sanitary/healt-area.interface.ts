import { BasePagination } from "../base.interface";
import { SanitaryEstablishmentFeatureCollection } from "./establishments.interface";
import { HealthDistrictInterface } from "./healt-district.interface";

export interface BaseInterface {
  code: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface HealthAreaInterface extends BaseInterface {
  [x: string]: any;
  health_area_name: string;
  geom: string | GeoJSON.Geometry | null;
  health_area_district: HealthDistrictInterface | string;
  health_establishments: SanitaryEstablishmentFeatureCollection;
}

export interface HealthAreaFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: HealthAreaInterface;
}

export interface HealthAreaFeatureCollection {
  type: "FeatureCollection";
  features: HealthAreaFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export type HealthAreaCreation = Omit<HealthAreaInterface, "id">;

export interface HealthAreaInterfaceWithPagination extends BasePagination {
  results: HealthAreaInterface[];
}
