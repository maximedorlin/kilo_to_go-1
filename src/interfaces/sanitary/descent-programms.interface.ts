import { BaseData, BasePagination } from "@/interfaces/base.interface";

export interface DescentProgramHighFeature {
  id: string;
  type: "Feature";
  properties: DescentProgramInterface;
  geometry: string;
}

export interface DescentProgramFeatureCollection {
  type: "FeatureCollection";
  features: DescentProgramHighFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface DescentProgramFeature {
  type: string;
  id: string;
  geometry: DescentProgramGeometry;
  geometry_name: string;
  properties: DescentProgramProperties;
}

export interface DescentProgramGeometry {
  type: string;
  coordinates: number[];
}

export interface DescentProgramProperties extends Omit<BaseData, "id"> {
  code: string;
  description: string;
  object: string;
  status: string;
  descent_date: string;
  health_establishment: any;
  observations: any;
  needs: any;
}
export interface HealthEstablishment {
  id: string;
  name: string;
  statut: null;
}
export interface Need {
  quantity: number;
  type: string;
  id: string;
  name: string;
}

export interface Properties {
  code: string;
  created_at: Date;
  updated_at: Date;
  description: string;
  descent_date: Date;
  object: string;
  status: string;
  needs: Need[];
  intervention: any;
  health_establishment: any;
  observations: any;
}
export interface DescentProgramInterface extends BaseData {
  code: string;
  description: string;
  object: string;
  status: string;
  descent_date: string;
  properties?: Properties;
  health_establishment: any;
  needs: any;
  intervention: any;
  observations: any;
  geom: string;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  name: string;
}

export const DP_STATUT = ["confirmed", "validated", "standby"];

export type DescentProgramCreation = Omit<DescentProgramInterface, "id">;

export interface DescentProgramInterfaceWithPagination extends BasePagination {
  results: DescentProgramInterface[];
  features: DescentProgramHighFeature[];
}
