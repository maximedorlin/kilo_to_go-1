import { BasePagination } from "@/interfaces/base.interface";
import { SubcontractorInterface } from "./subcontractor.interface";

export enum ContractStatusType {
  pending = "pending",
  in_progress = "in_progress",
  terminated = "terminated",
  suspendu = "suspendu",
}

export interface CircuitData {
  id: string;
  code: string;
  length: number;
}

export interface ContractInterface {
  id: string;
  code: string;
  subcontractor: string | SubcontractorInterface;
  circuits: string[];
  circuits_datas: string[];
  volume: number;
  status: ContractStatusType;
  start_date: string;
  end_date: string;
  contract_file: File | string;
}

export type ObsevationCreation = Omit<ContractInterface, "id">;

export interface ContractWithPagination extends BasePagination {
  [x: string]: any;
  results: ContractInterface[];
}

export interface ContractStatisticsInterface {
  total: number;
  status: Record<ContractStatusType, number>;
  subcontractor: Record<string, number>;
}

export const ContractStatusList = [
  "pending",
  "in_progress",
  "terminated",
  "suspendu",
] as const;
