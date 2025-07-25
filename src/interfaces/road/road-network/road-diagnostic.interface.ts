import { BasePagination } from "@/interfaces/base.interface";
import { BaseInterface } from "./road-network.interface";

export enum RoadDiagnosticTraficImpactType {
  light = "light",
  moderated = "moderated",
  high = "high",
}

export interface RoadDiagnosticInterface extends BaseInterface {
  diagnostic_date: string;
  trafic_impact: string;
  recommanded_action: string;
  road_degradation: string;
  quater_id?: string; // optional
  subdivision_id?: string; // optional
}

export interface RoadDiagnosticFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: RoadDiagnosticInterface;
}

export interface RoadDiagnosticFeatureCollection {
  count: number;
  type: "FeatureCollection";
  features: RoadDiagnosticFeature[];
  totalFeatures: number;
}


export interface RoadDiagnosticInterfaceWithPagination extends BasePagination {
  results: RoadDiagnosticInterface[];
}

export interface RoadDiagnosticStatisticsInterface {
  total: number;
  trafic_impact: Record<RoadDiagnosticTraficImpactType, number>;
}

export const RoadDiagnosticTraficImpactList = [
  "light",
  "moderated",
  "high",
] as const;
