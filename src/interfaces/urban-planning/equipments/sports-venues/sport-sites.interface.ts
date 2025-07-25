import { BaseData } from "@/interfaces/base.interface";

export interface SportHighFeature {
  type: string;
  features: SportFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
  crs: Crs;
}

export interface SportFeature {
  type: string;
  id: string;
  geometry: SportGeometry;
  geometry_name: string | undefined;
  properties: SportProperties;
}

export interface SportApiFeature {
  type: string;
  id: string;
  geometry: SportGeometry;
  geometry_name: string | undefined;
  properties: SportInterface;
}

export interface SportGeometry {
  type: string;
  coordinates: number[];
}

export interface SportProperties extends Omit<BaseData, "id"> {
  name: string;
  code: string;
  description: string;
  statut: "actif" | "inactif" | "suspendu";
  quater_id: any;
  street_id: any;
  subdivision_id: any;
}

export interface SportInterface extends BaseData {
  name: string;
  code: string;
  description: string;
  statut: "actif" | "inactif" | "suspendu";
  quater: string | null;
  quarter_name: string | null;
  subdivision_name: string | null;
  street: string | null;
  subdivision: string | null;
  geom: string | SportGeometry | null;
}
export type SportCreateInterface = Omit<
  SportInterface,
  "id" | "created_at" | "updated_at"
>;
export interface SportFilterInterface extends BaseData {
  name: string;
  code: string;
  description: string;
  statut: "actif" | "inactif" | "suspendu";
  quater: string | null;
  quater_id: string | null;
  street: string | null;
  subdivision: string | null;
  subdivision_id: string | null;
  geom: string | SportGeometry | null;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  name: string;
}

export const SPORT_STATES = ["actif", "inactif", "suspendu"];
