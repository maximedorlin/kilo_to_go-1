import { IdgApiFeature } from "@/interfaces/idg-data.interface";
import { SportCreateInterface } from "@/interfaces/urban-planning/equipments/sports-venues/sport-sites.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type ExportGetFileInterface = {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
};

export const IdgClaimApi = createApi({
  reducerPath: "IdgClaimApi",
  baseQuery: fetchBaseQuery({
    // http://localhost:8000/v1/claims/idg-claims/
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}claims/idg-claims/`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access");
      if (token) {
        const userParsed = JSON.parse(token);
        headers.set("authorization", `Bearer ${userParsed}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSingleIdgClaim: builder.query<IdgApiFeature, string>({
      query: (id) => `${id}/`,
    }),

    updateSportVenue: builder.mutation<
      void,
      { id: string; data: Partial<SportCreateInterface> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    deleteSportVenue: builder.mutation<void, string>({
      query: (id) => ({
        url: `${id}/`,
        method: "DELETE",
      }),
    }),

    fetchFileMutation: builder.mutation<Blob, ExportGetFileInterface>({
      query: (data) => ({
        url: data.path,
        method: "POST",
        body: data.body,

        responseHandler: async (response) => {
          return await response.blob();
          // return blob
        },
        headers: {},
      }),
    }),

    importSport: builder.mutation<void, FormData>({
      query: (body) => ({
        url: `ImportExcelCsv/`,
        method: "POST",
        body,
      }),
    }),

    MultipleStateFunctionnal: builder.mutation<void, string[]>({
      query: (data) => ({
        url: `fonctionnel/`,
        method: "POST",
        body: { uuids: data },
      }),
    }),

    buldValidateClaim: builder.mutation<
      void,
      {
        claim_ids: string[];
        claim_type: "road" | "drain" | "signage" | "lighting" | "unknown";
      }
    >({
      query: (data) => ({
        url: `bulk-validate/`,
        method: "PUT",
        body: data,
      }),
    }),

    deleteMultipleSportVenue: builder.mutation<void, string[]>({
      query: (data) => ({
        url: `bulk-delete/`,
        method: "DELETE",
        body: { ids: data },
      }),
    }),
    exportTemplateSportFacility: builder.mutation<Blob, void>({
      query: () => ({
        url: "download_template/",
        method: "GET",
        responseHandler: (response) => response.blob(),
        cache: "no-store",
      }),
    }),
  }),
});

export const {
  useGetSingleIdgClaimQuery,
  useUpdateSportVenueMutation,
  useDeleteSportVenueMutation,
  useFetchFileMutationMutation,
  useImportSportMutation,
  useMultipleStateFunctionnalMutation,
  useDeleteMultipleSportVenueMutation,
  useExportTemplateSportFacilityMutation,
  useBuldValidateClaimMutation,
} = IdgClaimApi;
