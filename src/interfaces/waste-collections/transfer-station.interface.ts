export interface TransferStationHighFeature {
  type: string;
  features: TransferStationFeature[];
  totalFeatures: number;
  numberMatched: number;
  numberReturned: number;
  timeStamp: string;
  crs: Crs;
}

export interface TransferStationInterface {
  code: string;
  id: string;
  created_at: string;
  creation_date: string;
  updated_at: string;
  geom: any;
  //   landfill_name: string;
  //   municipality_name: string;
  //   neighborhood_name: string;
  subdivision: string;
  state: string;
  area: number;
  name: string;
  //   street: string;
  //   quater: string;
  //   subdivision: string;
}
export interface TransferStationFilterInterface {
  code: string;
  id: string;
  created_at: string;
  creation_date: string;
  updated_at: string;
  //   landfill_name: string;
  //   municipality_name: string;
  //   neighborhood_name: string;
  subdivision: string;
  state: string;
  area: number;
  statut: "goog" | "moderate" | "poor";
  name: string;
  //   street: string;
  //   quater: string;
  //   subdivision: string;
}

export interface TransferStationFeature {
  type: string;
  id: string;
  geometry: TransferStationGeometry;
  geometry_name: string;
  properties: TransferStationProperties;
  created_at: string;
  updated_at: string;
}

export interface TransferStationGeometry {
  type: string;
  coordinates: number[];
}

export interface TransferStationProperties {
  created_at: string;
  updated_at: string;
  code: string;
  area: number;
  creation_date: string;
  subdivision: string;
  subdivision_name: string;
  quater: string;
  quater_name: string;
  state: string;
  name: string;
  geom: string;
}
export interface TransferStationCreation {
  code: string;
  area: number;
  creation_date: string;
  subdivision: string;
  quater: string;
  state: string;
  name: string;
  geom: string;
}

export interface Crs {
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  name: string;
}
