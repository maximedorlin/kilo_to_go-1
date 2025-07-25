import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface SchoolHighFeature {
  id: string;
  type: "Feature";
  properties: SchoolInterface;
  geometry: string;
}

export interface SchoolFeatureCollection {
  type: "FeatureCollection";
  features: SchoolHighFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface SchoolFeature {
  type: string;
  id: string;
  geometry: SchoolGeometry;
  geometry_name: string;
  properties: SchoolProperties;
}

export interface SchoolGeometry {
  type: string;
  coordinates: number[];
}

export interface SchoolProperties extends Omit<BaseData, "id"> {
  name: string;
  code: string;
  type: string;
  description: string;
  statut: string;
  quater_id: any;
  subdivision_id: any;
}

export interface SchoolInterface extends BaseData {
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

export const SCHOOL_TYPE = ["primaire", "secondaire", "lycee", "universite"];

export const SCHOOL_STATUT = ["functionnal", "non_functionnal"];

export type SchoolCreation = Omit<SchoolInterface, "id">;

export interface SchoolInterfaceWithPagination extends BasePagination {
  results: SchoolInterface[];
}