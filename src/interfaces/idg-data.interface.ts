import { CRS } from "./administrative.interface";

export interface IdgClaimFeatureCollection {
  type: string;
  features: IdgClaimFeatureFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: Date;
  crs: CRS;
}

export interface IdgClaimFeatureFeature {
  type: string;
  id: string;
  geometry: Geometry;
  geometry_name: string;
  properties: IdgClaimFeatureProperties;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface BaseClaimProperties {
  created_at: string;
  updated_at: string;
  code: string;
  user_name: string;
  user_phone: string;
  user_email: string;
  photo: string | null;
  claim_type: "road" | "drain" | "signage" | "lighting" | "unknown";
  claim_state: string;
  description: string;
  is_closed: boolean;
}

export interface GeoLocationProperties {
  quater_id: string;
  quater_name: string;
  subdivision_id: string;
  subdivision_name: string;
}

export interface IdgClaimFeatureProperties
  extends BaseClaimProperties,
    GeoLocationProperties {}

export interface IdgClaimInterface extends BaseClaimProperties {
  id: string;
  quater_name: string;
  subdivision_name: string;
  geom: string | Geometry | null;
}

export interface IdgApiFeature {
  id: string;
  type: string;
  geometry: Geometry;
  properties: IdgClaimInterface;
}
