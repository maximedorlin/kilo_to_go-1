import { SanitaryEstablishmentInterface } from "./establishments.interface";
import { StatisticsDiseaseInterface } from "./statistics-disease.interface";

export interface EtablishmentDiseaseInterface {
  quantity: number;
  disease: StatisticsDiseaseInterface;
  healthEtablishment: SanitaryEstablishmentInterface;
}

export type EtablishmentDiseaseCreation = Omit<
  EtablishmentDiseaseInterface,
  "id"
>;
