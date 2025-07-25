import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface EntertainmentHighFeature {
  id: string;
  type: "Feature";
  properties: EntertainmentInterface;
  geometry: string;
}

export interface EntertainmentFeatureCollection {
  type: "FeatureCollection";
  features: EntertainmentHighFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface EntertainmentFeature {
  type: string;
  id: string;
  geometry: EntertainmentGeometry;
  geometry_name: string;
  properties: EntertainmentProperties;
}

export interface EntertainmentGeometry {
  type: string;
  coordinates: number[];
}

export interface EntertainmentProperties extends Omit<BaseData, "id"> {
  name: string;
  code: string;
  type: string;
  description: string;
  statut: string;
  quater_id: any;
  street_id: any;
  subdivision_id: any;
}

export interface EntertainmentInterface extends BaseData {
  name: string;
  code: string;
  description: string;
  type: string;
  statut: string;
  quater: string;
  quarter_name: string;
  subdivision: string;
  subdivision_name: string;
  geom: string;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  name: string;
}

export const ENTERTAINMENT_TYPE = ["public", "prive", "mixte"];
export const ENTERTAINMENT_STATUT = ["actif", "inactif", "en_maintenance"];

export type EntertainmentCreation = Omit<EntertainmentInterface, "id">;

export interface EntertainmentInterfaceWithPagination extends BasePagination {
  results: EntertainmentInterface[];
}
