export interface interventions
 {
  id: number;
  drain_id : number;
  commune : string,
  quartier : string,
  type_int?:
    | "diagnostique"
    | "demande"
    | "descente"
    | "blocage";
  statut_int?:
    | "en attente"
    | "diagnostiqué"
    | "signalé"
    | "terminé"
    | "planifié"
  date: string,
  description : string,
  responsable : string
}

export const INTERVENTION_STATUT = [
  "en attente",
  "diagnostiqué",
  "signalé",
  "terminé",
  "planifié"
];


export const INTERVENTION_TYPE = [
  "diagnostique",
  "demande",
  "descente",
  "blocage"
];