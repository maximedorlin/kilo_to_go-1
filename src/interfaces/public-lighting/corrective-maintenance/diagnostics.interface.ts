import { BasePagination } from "@/interfaces/base.interface";
export interface DiagnosticInterface {
  id: string;
  code: string;
  clain: string;
  works_list: string;
  geom?: string | GeoJSON.Geometry;
  cause: string;
  proposed_solution: string;
  approbal_status?:
    | "clain_pending"
    | "clain_approved"
    | "clain_confirm"
    | "clain_rejected";
  created_at: string;
  updated_at: string;
}

export interface DiagnosticFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: DiagnosticInterface;
}

export interface DiagnosticFeatureCollection {
  type: "FeatureCollection";
  features: DiagnosticFeature[];
  totalFeatures: number;
  numberReturned: number;
}

export type ObsevationCreation = Omit<DiagnosticInterface, "id">;

export interface DiagnosticInterfaceWithPagination extends BasePagination {
  results: DiagnosticInterface[];
}
