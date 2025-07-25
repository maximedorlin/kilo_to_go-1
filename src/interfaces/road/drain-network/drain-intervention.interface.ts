import { BasePagination } from "@/interfaces/base.interface";
import { BaseInterface } from "./drain.interface";

export enum DrainInterventionStatustype {
  pending = "pending",
  running = "running",
  finished = "finished",
}

export interface DrainInterventionInterface extends BaseInterface {
  drain_needs: string;
  previsional_startDate: string;
  previsional_duration: number;
  real_startDate?: string;
  real_duration?: number;
  sig_intervention_status: DrainInterventionStatustype;
  quater_id?: string; // optional
  subdivision_id?: string; // optional
}

export interface DrainInterventionFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: DrainInterventionInterface;
}

export interface DrainInterventionFeatureCollection {
  type: "FeatureCollection";
  features: DrainInterventionFeature[];
  totalFeatures: number;
}


export interface DrainInterventionInterfaceWithPagination
  extends BasePagination {
  results: DrainInterventionInterface[];
}

export interface DrainNeedsInterfaceWithPagination extends BasePagination {
  results: DrainInterventionInterface[];
}

export interface DrainInterventionStatisticsInterface {
  total: number;
  sig_intervention_status: Record<DrainInterventionStatustype, number>;
}

export const DrainInterventionStatusList = ["pending", "running", "finished"];
