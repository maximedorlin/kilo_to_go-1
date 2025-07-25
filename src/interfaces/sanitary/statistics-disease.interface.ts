import { BasePagination } from "../base.interface";
import { BaseInterface } from "./establishments.interface";

export interface StatisticsDiseaseInterface extends BaseInterface {
  geometry: boolean;
  properties: any;
  code: string;
  disease_name: string;
  disease_symptoms: string;
  transmissible: boolean;
  predefined_category:
    | "infectious"
    | "genetic"
    | "autoimmune"
    | "degenerative"
    | "metabolic"
    | "environmental";
  geom: string;
}

export const DISEASE_CATEGORIES = [
  "infectious",
  "genetic",
  "autoimmune",
  "degenerative",
  "metabolic",
  "environmental",
] as const;

export const TRANSMISSIBLE = [true, false]; // Remplacer string par boolean

export interface StatisticsDiseaseFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry;
  properties: StatisticsDiseaseInterface;
}

export interface StatisticsDiseaseFeatureCollection {
  type: "FeatureCollection";
  features: StatisticsDiseaseFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export type StatisticsDiseaseCreation = Omit<StatisticsDiseaseInterface, "id">;

export interface StatisticsDiseaseInterfaceWithPagination
  extends BasePagination {
  totalFeatures: number;
  results: StatisticsDiseaseInterface[];
}
