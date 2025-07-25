import { BaseInterface } from "../corrective-maintenance/claim.interface";

export interface DescentInterface extends BaseInterface {
  type: "descent_preventive" | "descent_simple";
  description?: string;
  date: string;
  installation_date: string;
  street?: string; 
  quater?: string;
  subdivision?:string;
  state?:
  | "descent_pending"
  | "descent_approved"
  | "descent_confirm"
  | "descent_rejected";
  geom: string;  
}


export interface DescentFeature {
  id: string;
  type: "Feature";
  geometry: Geometry | string;
  properties: DescentInterface;
}

export interface Geometry {
  type: string;
  coordinates: any; 
}

export interface DescentFeatureCollection {
  type: "FeatureCollection";
  features: DescentFeature[];
  totalFeatures: number;
}



export interface DescentGeoserver {
  type: string
  features: DescentFeature[]
  totalFeatures: number
  numberMatched: number
  numberReturned: number
  timeStamp: string

}

export const DESCENT_STATES = [
  "descent_pending",
  "descent_approved",
  "descent_confirm",
  "descent_rejected",
];
