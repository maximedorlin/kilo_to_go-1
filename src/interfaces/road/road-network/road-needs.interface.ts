import { BasePagination } from "@/interfaces/base.interface";
import { BaseInterface } from "./road-network.interface";

export interface RoadNeedsInterface extends BaseInterface {
  road_diagnostic: string;
  materials: string[];
  estimated_coast: number;
  participants: string[];
  quater_id?: string; // optional
  subdivision_id?: string; // optional
  geom?: GeoJSON.Geometry | string;
}

export interface RoadNeedsFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: RoadNeedsInterface;
}

export interface RoadNeedsFeatureCollection {
  count: number;
  type: "FeatureCollection";
  features: RoadNeedsFeature[];
  totalFeatures: number;
}

export interface RoadNeedsInterfaceWithPagination extends BasePagination {
  results: RoadNeedsInterface[];
}
