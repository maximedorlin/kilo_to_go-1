import { EquipementInterface } from "./equipement.interface";
import { SanitaryEstablishmentInterface } from "./establishments.interface";

export interface EtablishmentEquipementInterface {
  quantity: number;
  equipment: EquipementInterface;
  healthEtablishment: SanitaryEstablishmentInterface;
}

export type EtablishmentEquipementCreation = Omit<
  EtablishmentEquipementInterface,
  "id"
>;
