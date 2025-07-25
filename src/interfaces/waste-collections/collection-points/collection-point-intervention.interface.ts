import { BaseData } from "@/interfaces/base.interface";

export interface CollectionPointIntervention extends BaseData {
  code: string;
  intervention: string;
  intervention_type: "pending" | "running" | "close";
  rating: number;
  intervention_report: File;
  collection_points: string[];
  request: any;
  previsional_startDate: string;
  previsional_duration: number;
  real_startDate?: string;
  real_duration?: number;
  geom?: GeoJSON.Geometry | string | any;
}

export interface CollectionPointInterventionFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: CollectionPointIntervention;
}

export interface CollectionPointInterventionFeatureCollection {
  type: "FeatureCollection";
  features: CollectionPointInterventionFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface CollectionPointInterventionCollection {
  count: number;
  next: any;
  previous: any;
  results: CollectionPointIntervention[];
}

export type CollectionPointInterventionCreation = Omit<
  CollectionPointIntervention,
  "real_startDate" | "real_duration"
>;
