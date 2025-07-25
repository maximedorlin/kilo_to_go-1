import { BasePagination } from "@/interfaces/base.interface";
import { BaseInterface } from "./drain.interface";

export interface DrainNeedsInterface extends BaseInterface {
  blockage: string;
  materials: string[];
  estimated_cost: number;
  participants: string[];
  quater_id?: string; // optional
  subdivision_id?: string; // optional
}


export interface DrainNeedsFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: DrainNeedsInterface;
}

export interface DrainNeedsFeatureCollection {
  type: "FeatureCollection";
  features: DrainNeedsFeature[];
  totalFeatures: number;
}


export interface DrainNeedsInterfaceWithPagination extends BasePagination {
  results: DrainNeedsInterface[];
}
