import { BasePagination } from "@/interfaces/base.interface";

export interface BaseInterface {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface CabinetInterface extends BaseInterface {
  code: string;
  installation_date: string;
  geom?: GeoJSON.Geometry | string | any;
  physic_state: "functional" | "damaged" | "out_of_service";
}

export interface CabinetFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: CabinetInterface;
}

//  export interface Geometry {
//    type: string
//    coordinates: any[]
//  }

export interface CabinetFeatureCollection {
  type: "FeatureCollection";
  features: CabinetFeature[];
  totalFeatures: number;
}

export interface CabinetInterface {
  id: string;
  code: string;
  created_at: string;
  updated_at: string;
  installation_date: string;
  physic_state: "functional" | "damaged" | "out_of_service";
}

export const PHYSIC_STATES = ["functional", "damaged", "out_of_service"];

// export type stats = Pick<CabinetInterface, "stats">;

export interface CabinetInterfaceWithPagination extends BasePagination {
  results: CabinetInterface[];
}
export interface CabinetStatisticsInterface {
  total: number;
  functional: number;
  damaged: number;
  out_service: number;
}
