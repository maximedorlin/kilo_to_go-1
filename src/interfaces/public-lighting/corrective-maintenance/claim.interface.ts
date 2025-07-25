export interface BaseInterface {
  code: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface ClaimInterface extends BaseInterface {
  type: string;
  notification_date: string;
  location: string;
  origin: string;
  picture?: string | File | null;
  description: string;
  state?:
    | "clain_pending"
    | "clain_approved"
    | "clain_confirm"
    | "clain_rejected";
  street?: string; // UUID
  quater: string; // UUID
  subdivision: string; // UUID
  street_id?: string; // UUID
  quater_id?: string; // UUID
  subdivision_id?: string; // UUID
  streetlamps?: string[];
  geom?: any;
}

export interface ClaimFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: ClaimInterface;
}

export interface ClaimFeatureCollection {
  type: "FeatureCollection";
  features: ClaimFeature[];
  totalFeatures: number;
}

export const CLAIM_STATES = [
  "clain_pending",
  "clain_approved",
  "clain_confirm",
  "clain_rejected",
];

export interface ClainStatisticsInterface {
  total: number;
  pending: number;
  approved: number;
  confirm: number;
  rejected: number;
}

export const CLAIM_TYPES = [
  "light_failure",
  "light_obstructed",
  "vandalized_lamp",
  "missing_lamp",
  "flickering_lamp",
  "physical_damage",
  "buzzing_or_smoke",
];
