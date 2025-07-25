// import { BaseData } from "@/interfaces/base.interface";

export enum CollectionPointRequestStateType {
  pending = "pending",
  running = "running",
  processed = "processed",
  archived = "archived",
}

export interface BaseInterface {
  id: string;
  code: string;
  created_at: string;
  updated_at: string;
}
export interface CollectionPointRequest extends BaseInterface {
  description: string;
  request_type: "denunciation" | "report" | "complaint";
  image: File | string;
  status: CollectionPointRequestStateType;
  geom: string | any;
  // location?: string;
  quater?: string; // optional
  subdivision?: string; // optional
}

export interface CollectionPointRequestFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: CollectionPointRequest;
}

export interface CollectionPointRequestFeatureCollection {
  type: "FeatureCollection";
  features: CollectionPointRequestFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface CollectionPointRequestCreation {
  description: string;
  request_type: "denunciation" | "report" | "complaint";
  image: File | string;
  status: CollectionPointRequestStateType;
  geom: string;
  // location?: string;
  quater?: string; // optional
  subdivision?: string; // optional
}

export const CollectionPointRequestStateList = [
  "pending",
  "running",
  "processed",
  "archived",
] as const;
