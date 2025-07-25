export interface BaseInterface {
  id: string;
  created_at: string;
  updated_at: string;
}

export interface ConsumptionInterface extends BaseInterface {
  code : string;
  start_date: string;
  end_date: string;
  consumption_units: number;
  
}

export interface ConsumptionFeature {
  id: string;
  type: "Feature";
  properties: ConsumptionInterface;
}

// export interface Geometry {
//   type: string
//   coordinates: any[]
// }

export interface ConsumptionFeatureCollection {
  type: "FeatureCollection";
  features: ConsumptionFeature[];
  totalFeatures: number;
}

