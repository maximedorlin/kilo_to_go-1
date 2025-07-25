import { BasePagination } from "@/interfaces/base.interface";
import { BaseInterface } from "./road-network.interface";

export enum RoadInterventionStatustype {
  pending = "pending",
  running = "running",
  finished = "finished",
}

export interface RoadInterventionInterface extends BaseInterface {
  road_needs: string;
  previsional_startDate: string;
  previsional_duration: number;
  real_startDate?: string;
  real_duration?: number;
  intervention_status: RoadInterventionStatustype;
  quater_id?: string; // optional
  subdivision_id?: string; // optional
  geom?: any;
}

export interface RoadInterventionFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry;
  properties: RoadInterventionInterface;
}

export interface RoadInterventionFeatureCollection {
  count: number;
  type: "FeatureCollection";
  features: RoadInterventionFeature[];
  totalFeatures: number;
}

export interface RoadInterventionInterfaceWithPagination
  extends BasePagination {
  results: RoadInterventionInterface[];
}

export interface RoadInterventionInterface extends BasePagination {
  results: RoadInterventionInterface[];
}

export interface RoadInterventionStatisticsInterface {
  total: number;
  intervention_status: Record<RoadInterventionStatustype, number>;
}

export const RoadInterventionStatusList = ["pending", "running", "finished"];
