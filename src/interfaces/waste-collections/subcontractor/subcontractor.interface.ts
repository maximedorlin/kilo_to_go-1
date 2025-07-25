import { BasePagination } from "@/interfaces/base.interface";


export interface SubcontractorInterface {
    id: string;
    name: string,
    niu_number: string ,
    registration_number: string ,
    legal_status: "SARL" | "SA" | "SAS" | "SASU" | "SCI" | "Association" | "Entreprise_individuelle" | "Auto_entrepreneur" | "Micro_entreprise" | "Cooperative",
    creation_date: string,
    headquarters_address: string,
    phone: string ,
    email: string ,
    website: string ,
    representative_name: string,
    representative_position: string ,
    representative_phone: string ,
    representative_email: string ,
    id_document_type: "CNI" | "passport",
    id_document_number: string,
}

export type ObsevationCreation = Omit<SubcontractorInterface, "id" >;

export interface SubcontractorWithPagination extends BasePagination {
  [x: string]: any;
  results: SubcontractorInterface[];
}


export interface SubcontractorStatisticsInterface {
  total: number;
  legal_status: Record<string, number>;
}


export const SubcontractiorLegalStatusList = [
  "SARL",
  "SA",
  "SAS",
  "SASU",
  "SCI",
  "Association",
  "Entreprise_individuelle",
  "Auto_entrepreneur",
  "Micro_entreprise",
  "Cooperative",
] as const;

export const SubcontractiorDocumentTypeList = [
  "CNI",
  "passport",
] as const;