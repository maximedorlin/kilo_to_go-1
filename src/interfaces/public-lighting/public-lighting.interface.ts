import { GeoJSONFeatureCollection } from "ol/format/GeoJSON";
import { BaseData, BasePagination } from "../base.interface";
import { BaseInterface } from "./corrective-maintenance/claim.interface";

export interface StreetLampCategoryInterface {
  id: string;
  code: string;

  street_lamp_category: string | null; // ID de StreetLampCategory
  lamp_meter: string | null; // ID de LampMeter

  installation_date: string; // format ISO

  state: string;

  geom:
    | {
        type: "Point";
        coordinates: [number, number];
      }
    | null
    | string;

  street: string | null; // ID de GeoStreet
  quater: string | null; // ID de GeoQuater
  subdivision: string | null; // ID de GeoSubDivision

  road_type: string | null;
  support_type: string | null;
  lamp_type: string | null;
  lamp_property: string | null;
  light_type: string | null;
  light_orientation: string | null;
  network_type: string | null;

  has_bulb: boolean;
  power: number;

  state_day: string;
  state_night: string;
  state_workflow: string;

  created_at: string;
  updated_at: string;
  quater_id: string;
  subdivision_id: string;
}

export interface StreetLampInterface {
  id: string;
  street_lamp_category: string | StreetLampCategoryInterface; // Could be ID or populated object
  lamp_meter?: string;
  installation_date: string;
  state: string;
  geom?: {
    type: "Point";
    coordinates: [number, number];
  } | null;
  street: string | GeoJSONFeatureCollection; // Could be ID or object
  quater: string | GeoJSONFeatureCollection;
  subdivision: string | GeoJSONFeatureCollection;
  created_at: string;
  updated_at: string;
}

export interface NeedExpressionSheetInterface extends BaseInterface {
  clain_diagnostic: string;
  materials: string[];
  estimated_coast: number;
  participants: string[];
  geom?: GeoJSON.Geometry | string;
}

export interface NeedExpressionSheetInterfaceWithPagination
  extends BasePagination {
  results: NeedExpressionSheetInterface[];
}

export interface NeedExpressionSheetFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: NeedExpressionSheetInterface;
}

export interface NeedExpressionSheetFeatureCollection {
  type: "FeatureCollection";
  features: NeedExpressionSheetFeature[];
  totalFeatures: number;
  numberReturned: number;
}

export interface Material extends BaseData {
  name: string;
  type: string;
  state: string;
}
