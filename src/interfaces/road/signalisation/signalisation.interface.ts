import { BasePagination } from "@/interfaces/base.interface";

export interface BaseInterface {
  id: string;
  code: string;
  created_at: string;
  updated_at: string;
}

// signalisation status
export enum SignalisationStatusType {
  functional = "functional",
  non_functional = "non_functional",
}

export enum SignalisationPhysicalStateType {
  good = "good",
  moderate = "moderate",
  poor = "poor",
}

// signalisation function
export enum SignalisationFunctionType {
  traffic_lights = "traffic_lights",
  stop = "stop",
  school = "school",
  no_motorcycle_taxis = "no_motorcycle_taxis",
  no_parking = "no_parking",
  no_entry = "no_entry",
  no_left_turn = "no_left_turn",
  no_right_turn = "no_right_turn",
  left_turn = "left_turn",
  roundabout = "roundabout",
  trucks_allowed = "trucks_allowed",
  speed_limit = "speed_limit",
  no_overtaking = "no_overtaking",
  one_way = "one_way",
  speed_bump = "speed_bump",
}

// degradation type
export enum SignalisationDegradationType {
  light_failure = "light_failure",
  signal_fallen = "signal_fallen",
  signal_missing = "signal_missing",
  signal_vandalized = "signal_vandalized",
  signal_obstructed = "signal_obstructed",
  signal_misplaced = "signal_misplaced",
}

// degradation severity
export enum SignalisationDegradationDegreeType {
  minor = "minor",
  major = "major",
  critical = "critical",
}

// degradation origin
export enum SignalisationDegradationOriginType {
  user = "user",
  responsible = "responsible",
}

// degradation status
export enum SignalisationDegradationStatusType {
  identified = "identified",
  pending = "pending",
  resolved = "resolved",
}

// intervention status
export enum SignalisationInterventionStatustype {
  pending = "pending",
  running = "running",
  finished = "finished",
}

// Signalisation core information
export interface SignalisationInterface extends BaseInterface {
  sig_status: SignalisationStatusType; // not required during creation
  function: SignalisationFunctionType;
  sig_physic_state: SignalisationPhysicalStateType;
  geom: string | any;
  street: string; // optional
  quater: string; // optional
  subdivision: string; // optional
  street_id?: string; // optional
  quater_id?: string; // optional
  subdivision_id?: string; // optional
}

export interface SignalisationFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: SignalisationInterface;
}

export interface SignalisationFeatureCollection {
  type: "FeatureCollection";
  features: SignalisationFeature[];
  totalFeatures: number;
}

export interface SignalisationStatisticsInterface {
  total: number;
  byStatus: Record<SignalisationStatusType, number>;
  byFunction: Record<SignalisationFunctionType, number>;
  byPhysicalState: Record<SignalisationPhysicalStateType, number>;
  byStreet: Record<string, number>;
  byQuater: Record<string, number>;
  bySubdivision: Record<string, number>;
}

// Degradation report related to a signalisation
export interface SignalisationDegradationInterface extends BaseInterface {
  signalisation: string; // UUID of the related signalisation
  resolution_date: string; // ISO date string not required during creation
  picture: string | File; // URL or base64-encoded image optional field
  sig_type: SignalisationDegradationType;
  degree: SignalisationDegradationDegreeType;
  origin: SignalisationDegradationOriginType; // not required during creation
  location: string;
  sigDeg_status: SignalisationDegradationStatusType; // not required during creation
  description: string; // optional field
  quater_id?: string; // optional
  subdivision_id?: string; // optional
}

export interface SignalisationDegradationFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: SignalisationDegradationInterface;
}

export interface SignalisationDegradationFeatureCollection {
  type: "FeatureCollection";
  features: SignalisationDegradationFeature[];
  totalFeatures: number;
}

export interface SignalisationDegradationInterfaceWithPagination
  extends BasePagination {
  results: SignalisationDegradationInterface[];
}

export interface SignalisationDegradationStatisticsInterface {
  total: number;
  by_sig_type: Record<SignalisationDegradationType, number>;
  by_degree: Record<SignalisationDegradationDegreeType, number>;
  by_origin: Record<SignalisationDegradationOriginType, number>;
  by_sigDeg_status: Record<SignalisationDegradationStatusType, number>;
}

// Needs for repairing a degraded signalisation
export interface SignalisationNeedsInterface extends BaseInterface {
  sig_degradation: string; // UUID of the signalisation degradation
  sig_materials: string[]; // UUIDs of required materials
  estimated_coast: number;
  participants: string[]; // UUIDs of assigned participants
  quater_id?: string;
  subdivision_id?: string;
}

export interface SignalisationNeedsFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: SignalisationNeedsInterface;
}

export interface SignalisationNeedsFeatureCollection {
  type: "FeatureCollection";
  features: SignalisationNeedsFeature[];
  totalFeatures: number;
}

export interface SignalisationNeedsInterfaceWithPagination
  extends BasePagination {
  results: SignalisationNeedsInterface[];
}

// Intervention related to a need
export interface SignalisationInterventionInterface extends BaseInterface {
  signalisation_needs: string; // UUID of the signalisation need not required during creation
  previsional_startDate: string; // ISO date string
  previsional_duration: number; // in days
  real_startDate?: string; // ISO date string not required during creation
  real_duration?: number; // in days not required during creation
  sig_intervention_status: SignalisationInterventionStatustype; // not required during creation
  quater_id?: string;
  subdivision_id?: string;
}

export interface SignalisationInterventionFeature {
  id: string;
  type: "Feature";
  geometry: GeoJSON.Geometry | string;
  properties: SignalisationInterventionInterface;
}

export interface SignalisationInterventionFeatureCollection {
  type: "FeatureCollection";
  features: SignalisationInterventionFeature[];
  totalFeatures: number;
}

export interface SignalisationInterventionInterfaceWithPagination
  extends BasePagination {
  results: SignalisationInterventionInterface[];
}

export interface SignalisationInterventionStatisticsInterface {
  total: number;
  sig_intervention_status: Record<SignalisationInterventionStatustype, number>;
}

// Enum for type_participant
export enum RoadParticipantType {
  physique = "physique",
  morale = "morale",
}

// Enum for profil
export enum RoadParticipantProfile {
  chef_equipe = "chef_equipe",
  technicien = "technicien",
  superviseur = "superviseur",
  entreprise = "entreprise",
}

export interface RoadParticipantInterface extends BaseInterface {
  type_participant: RoadParticipantType;
  profil: RoadParticipantProfile;
  nom_complet: string; // 1 to 100 characters
  telephone: string; // 1 to 20 characters
  email: string; // valid email, 1 to 254 characters
}

export const RoadParticipantTypeList = ["physique", "morale"] as const;

export const RoadParticipantProfileList = [
  "chef_equipe",
  "technicien",
  "superviseur",
  "entreprise",
] as const;

export const SignalisationStatusList = [
  "functional",
  "non_functional",
] as const;

export const SignalisationPhysicalStateList = ["good", "moderate", "poor"];

export const SignalisationFunctionList = [
  "traffic_lights",
  "stop",
  "school",
  "no_motorcycle_taxis",
  "no_parking",
  "no_entry",
  "no_left_turn",
  "no_right_turn",
  "left_turn",
  "roundabout",
  "trucks_allowed",
  "speed_limit",
  "no_overtaking",
  "one_way",
  "speed_bump",
] as const;

export const SignalisationDegradationTypeList = [
  "light_failure",
  "signal_fallen",
  "signal_missing",
  "signal_vandalized",
  "signal_obstructed",
  "signal_misplaced",
] as const;

export const SignalisationDegradationDegreeList = [
  "minor",
  "major",
  "critical",
] as const;

export const SignalisationDegradationOriginList = [
  "user",
  "responsible",
] as const;

export const SignalisationDegradationStatusList = [
  "identified",
  "pending",
  "resolved",
] as const;

export const SignalisationInterventionStatusList = [
  "pending",
  "running",
  "finished",
] as const;
