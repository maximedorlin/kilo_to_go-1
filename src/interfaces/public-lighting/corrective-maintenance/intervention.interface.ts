import { BasePagination } from "@/interfaces/base.interface";
import { BaseInterface } from "./claim.interface";
import { RoadInterventionStatustype } from "@/interfaces/road/road-network/road-intervention.interface";

export interface InterventionInterface extends BaseInterface {
  previsional_startDate: string;
  previsional_duration: number;
  real_startDate?: string;
  real_duration?: number;
  intervention_status: RoadInterventionStatustype;
  need_sheet: string;
  geom?: GeoJSON.Geometry | string;
}

export interface InterventionFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: InterventionInterface;
}

export interface InterventionFeatureCollection {
  type: "FeatureCollection";
  features: InterventionFeature[];
  totalFeatures: number;
  numberReturned: number;
}

export interface InterventionInterfaceWithPagination extends BasePagination {
  results: InterventionInterface[];
}
