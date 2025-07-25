import { BasePagination } from "@/interfaces/base.interface";

export interface BaseInterface {
  code: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface StreetLightInterface extends BaseInterface {
  road_type: "main_road" | "secondary_road" | "quater";
  support_type:
    | "steel_galvanized"
    | "concrete_reinforced"
    | "wood_treated"
    | "composite";
  lamp_type: "led" | "discharge";
  installation_date: string;
  lamp_property: "single_arm" | "double_arm" | "bowl_and_projector";
  light_type: "white" | "yellow" | "other";
  light_orientation: "orientation_road" | "orientation_house";
  network_type?:
    | "network_bt"
    | "network_ep"
    | "network_solar_normal"
    | "network_solar_converted";
  has_bulb: boolean;
  state_night: "lamp_on" | "lamp_off";
  power: number;
  state_day: "lamp_on" | "lamp_off";
  street_lamp_category?: string;
  lamp_meter: string;
  geom: string | any;
  state: "lamp_running" | "watting_for_descent" | "lamp_not_running";
  street: string;
  quater: string;
  subdivision: string;
  state_workflow: string;
}

export interface StreetHightFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: StreetLightInterface;
}

export interface StreetHightFeatureCollection {
  type: "FeatureCollection";
  features: StreetHightFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export const STREETLIGHT_STATES = [
  "lamp_running",
  "watting_for_descent",
  "lamp_not_running",
];

export const ROAD_TYPES = ["main_road", "secondary_road", "quater"];
export const SUPPORT_TYPES = [
  "steel_galvanized",
  "concrete_reinforced",
  "wood_treated",
  "composite",
];

export const HAS_BUIB = ["true", "false"];

export const LAMP_TYPES = ["led", "discharge"];
export const LAMP_PROPERTIES = [
  "single_arm",
  "double_arm",
  "bowl_and_projector",
];
export const LIGHT_TYPES = ["white", "yellow", "other"];
export const LIGHT_ORIENTATIONS = ["orientation_road", "orientation_house"];
export const NETWORK_TYPES = [
  "network_bt",
  "network_ep",
  "network_solar_normal",
  "network_solar_converted",
];
export const STATE_NIGHT = ["lamp_on", "lamp_off"];
export const STATE_DAY = ["lamp_on", "lamp_off"];

export type SteetLightCreation = Omit<StreetLightInterface, "id">;

export interface SteetLightInterfaceWithPagination extends BasePagination {
  results: StreetLightInterface[];
}
