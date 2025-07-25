// import { BasePagination } from "@/interfaces/base.interface";

export interface BaseInterface {
  id: string;
  code: string;
  created_at: string;
  updated_at: string;
}

export interface CollectionRouteInterface extends BaseInterface {
  geom: string | GeoJSON.Geometry;
  length: number;
  creation_date: string;
  landfill_id?: string;
  quater_id?: string;
  subdivision_id?: string;
  quater_name?: string;
  subdivision_name?: string;

  subcontractor?: string | { id: string };
}

export interface CollectionRouteFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: CollectionRouteInterface;
}

export interface CollectionRouteFeatureCollection {
  type: "FeatureCollection";
  features: CollectionRouteFeature[];
  totalFeatures: number;
}

export interface CollectionRouteStatisticsInterface {
  total: number;
  byQuater: Record<string, number>;
  bySubdivision: Record<string, number>;
}
