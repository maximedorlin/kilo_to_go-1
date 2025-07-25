export interface BaseInterface {
  id: string;
  code: string;
  created_at: string;
  updated_at: string;
}

export enum CollectionPointStateType {
  good = "good",
  moderate = "moderate",
  poor = "poor",
}

export enum CollectionPointWildType {
  True = "True",
  False = "False",
}

export interface CollectionPoint extends BaseInterface {
  point_sauvage: boolean;
  state: "good" | "moderate" | "poor";
  geom: any | GeoJSON.Geometry;
  quater?: string; // optional
  quater_id?: string; // optional
  subdivision?: string; // optional
  subdivision_id?: string; // optional
}

export interface CollectionPointFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: CollectionPoint;
}

export interface CollectionPointFeatureCollection {
  type: "FeatureCollection";
  features: CollectionPointFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export type CollectionPointCreation = Omit<CollectionPoint, "id">;

export interface CollectionPointStatisticsInterface {
  total: number;
  point_sauvage: Record<CollectionPointWildType, number>;
  state: Record<CollectionPointStateType, number>;
}

export const CollectionPointStateList = ["good", "moderate", "poor"] as const;
