import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ClaimInterface,
  ClainStatisticsInterface,
} from "@/interfaces/public-lighting/corrective-maintenance/claim.interface";
import { DiagnosticInterface } from "@/interfaces/public-lighting/corrective-maintenance/diagnostics.interface";

export const ClaimApi = createApi({
  reducerPath: "ClaimApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}public-lighting/clains/`,
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
    createClaim: builder.mutation<void, ClaimInterface | FormData>({
      query: (body) => ({
        url: ``,
        method: "POST",
        body,
      }),
    }),

    getClaims: builder.query<ClaimInterface[], void>({
      query: () => ``,
    }),

    getSingleClaim: builder.query<ClaimInterface, string>({
      query: (id) => `${id}/`,
    }),

    updateClaim: builder.mutation<
      void,
      { id: string; data: Partial<ClaimInterface> | FormData }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    partialUpdateClaim: builder.mutation<
      void,
      { id: string; data: Partial<ClaimInterface> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteClaim: builder.mutation<void, string>({
      query: (id) => ({
        url: `${id}/`,
        method: "DELETE",
      }),
    }),
    getDiagnosticWithClaim: builder.query<DiagnosticInterface, string>({
      query: (id) => `${id}/ClainDiagnostic/`,
    }),
    getClainStatistics: builder.query<ClainStatisticsInterface, void>({
      query: () => `statistics/`,
    }),
  }),
});

export const {
  useCreateClaimMutation,
  useGetClaimsQuery,
  useGetSingleClaimQuery,
  useLazyGetSingleClaimQuery,
  useUpdateClaimMutation,
  useDeleteClaimMutation,
  useGetClainStatisticsQuery,
  useGetDiagnosticWithClaimQuery,
  usePartialUpdateClaimMutation,
} = ClaimApi;
