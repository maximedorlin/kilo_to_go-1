// import { BasePagination } from "@/interfaces/base.interface";

export interface BaseInterface {
  code: string;
  id: string;
  created_at: string;
  updated_at: string;
}

export interface StreetLightCategorieInterface extends BaseInterface {
  type: string;
  notification_date: string;
  location: string;
  origin: string;
  description: string;
  installation_date?: string;
  road_type?: string;
  support_type?: string;
  lamp_type?: string;
  lamp_property?: string;
  light_type?: string;
  light_orientation?: string;
  network_type?: string;
  state_night?: string;
  has_bulb?: string;
  power?: string;
  state_day?: string;
  street_lamp_category?: string;
  lamp_meter?: string;
  geom: string | undefined;
  state?: "lamp_running" | "watting_for_descent" | "lamp_not_running";
  street?: string;
  quater?: string;
  subdivision?: string;
}

// export interface StreetHightFeature {
//   id: string;
//   type: "Feature";
//   geometry: GeoJSON.Geometry | number;
//   // geometry: {
//   //   type: "Point";
//   //   coordinates: [number, number];
//   // };
//   properties: StreetLightInterface;
// }

// export interface StreetHightFeatureCollection {
//   type: "FeatureCollection";
//   features: StreetHightFeature[];
//   totalFeatures: number;
//   numberMatched: number
//   numberReturned: number
//   timeStamp: string
// }

// export const STREETLIGHT_STATES = [
//   "lamp_running",
//   "watting_for_descent",
//   "lamp_not_running",
// ] ;

// export type SteetLightCreation = Omit<StreetLightInterface, "id" >;

// export interface SteetLightInterfaceWithPagination extends BasePagination {
//   results: StreetLightInterface[];
// }
