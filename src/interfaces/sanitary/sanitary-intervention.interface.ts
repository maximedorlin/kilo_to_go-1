import { BaseData } from "../base.interface";
import { DescentProgramInterface } from "./descent-programms.interface";

export interface BaseInterface extends BaseData {
  code: string;
}

export interface SanitaryInterventionFeatureCollection {
  type: string;
  features: SanitaryInterventionFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: Date;
  crs: CRS;
}

export interface CRS {
  type: string;
  properties: CRSProperties;
}

export interface CRSProperties {
  name: string;
}

export interface SanitaryInterventionFeature {
  type: string;
  id: string;
  geometry: GeoJSON.Geometry | null | any;
  geometry_name: string;
  properties: SanitaryFeatureProperties;
}

export interface Geometry {
  type: string;
  coordinates: number[];
}

export interface SanitaryFeatureProperties
  extends Omit<BaseInterface, "id">,
    SanitaryInterventionBaseInterface {
  drop_down_program: string;
}
export interface HealthEstablishment {
  id: string;
  name: string;
  statut: null;
}

export interface SanitaryInterventionBaseInterface {
  previsional_start_date: string;
  previsional_duration: number;
  real_start_date: string;
  real_duration: number;
  intervention_status: "finished" | "running" | "pending";
  drop_down_program_data: DescentProgramInterface | null;
}

export interface SanitaryInterventionInterface
  extends BaseInterface,
    SanitaryInterventionBaseInterface {
  object: string;
  description: string;

  geometry: null;
  drop_down_program: null | string;
  health_area?: string;
  health_district?: string;
  geom?: string | GeoJSON.Geometry | null | any;
}

export interface InterventionsInterfaceWithPagination {
  count: number; // total éléments
  next: string | null;
  previous: string | null;
  results: SanitaryInterventionInterface[];
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
  health_establishment: HealthEstablishment;
  observations: null;
}

export interface Need {
  quantity: number;
  type: string;
  id: string;
  name: string;
}

export type InterventionsCreation = Partial<SanitaryInterventionBaseInterface>;

export const INTERVENTIONS_STATUS = ["pending", "running", "finished"];
