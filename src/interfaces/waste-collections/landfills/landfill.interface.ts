
export interface BaseInterface {
  id: string;
  code: string;
  created_at: string;
  updated_at: string;
}

export interface Landfill extends BaseInterface {
  landfill_name: string;
  area: number;
  municipality_name: string;
  neighborhood_name: string;
  geom: any;
  state: "good" | "moderate" | "poor";
  quarter?: string | null;
}

export interface LandfillFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: Landfill;
}

export interface LandfillFeatureCollection {
  type: "FeatureCollection";
  features: LandfillFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export type LandfillCreation = Omit<Landfill, "id">;
