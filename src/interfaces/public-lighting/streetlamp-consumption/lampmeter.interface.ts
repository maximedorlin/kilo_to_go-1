export interface LampMeterProperties {
  created_at: string;
  updated_at: string;
  code: string;
  capacity: string;
  state: "lamp_metter_running" | "lamp_metter_not_running" | string;
  id: string;
  physic_state: "functional" | "damaged" | "out_of_service" | string;
  cabinet: string;
  street: string;
  quater: string;
  subdivision: string;
  geom: string | null;
  quater_id: string;
  subdivision_id: string;
}

export const PHYSIC_STATES = ["functional", "damaged", "out_of_service"];

export const LAMPMETER_STATES = [
  "lamp_metter_running",
  "lamp_metter_not_running",
];

export const LAMPMETER_FIELDS = [
  { label: "Code", value: "code" },
  { label: "Capacity", value: "capacity" },
  { label: "State", value: "state" },
  { label: "Physic State", value: "physic_state" },
  { label: "Cabinet", value: "cabinet" },
  { label: "Subdivision", value: "subdivision" },
  { label: "Quarter", value: "quater" },
  { label: "Street", value: "street" },
  { label: "Geometry", value: "geom" },
];

export interface LampMeterFeature {
  id: string;
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: LampMeterProperties;
}

export interface LampMeterFeatureCollection {
  type: "FeatureCollection";
  features: LampMeterFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
}

export interface LampMeterStatisticsInterface {
  total: number;
  functional: number;
  // damaged:     number;
  out_service: number;
  functional_state: number;
  not_functional_state: number;
}

export interface LampMeterAdminStatisticsInterface {
  zone: string;
  type: string;
  compteur_count: number;
}
