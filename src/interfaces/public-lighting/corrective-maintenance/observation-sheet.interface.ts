import { BasePagination } from "@/interfaces/base.interface";
import { ClaimFeature } from "./claim.interface";

export interface ObservationSheetInterface {
    id: string;
    clain: string;
    code : string;
    approbal_status: "clain_pending" | "clain_approved" | "clain_confirm" | "clain_rejected";
    created_at: string;
    updated_at: string;
    cause: string;
    proposed_solution: string;
    streetlamps: string[];
    observation_data: ClaimFeature
}

export type ObsevationCreation = Omit<ObservationSheetInterface, "id" >;

export interface ObsevationInterfaceWithPagination extends BasePagination {
  [x: string]: any;
  // [x: string]: any;
  results: ObservationSheetInterface[];
}
