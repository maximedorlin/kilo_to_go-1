import { SanitaryEstablishmentInterface } from "./establishments.interface";
import { PersonnalInterface } from "./personnel.interface";

export interface EtablishmentPersonnalInterface {
  quantity: number;
  personnal: PersonnalInterface;
  healthEtablishment: SanitaryEstablishmentInterface;
}

export type EtablishmentPersonnalCreation = Omit<
  EtablishmentPersonnalInterface,
  "id"
>;
