import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  DiagnosticInterface,
  DiagnosticInterfaceWithPagination,
} from "@/interfaces/public-lighting/corrective-maintenance/diagnostics.interface";
import {
  buildFilterParams,
  buildOrderingParam,
} from "@/utils/transform-sorting";
import { GetDatasArgs } from "@/interfaces/base.interface";
import { NeedExpressionSheetInterface } from "@/interfaces/public-lighting/public-lighting.interface";

export const DiagnosticsApi = createApi({
  reducerPath: "DiagnosticsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}public-lighting/diagnostic/`,
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
    createDiagnostic: builder.mutation<
      DiagnosticInterface,
      DiagnosticInterface
    >({
      query: (body) => ({
        url: ``,
        method: "POST",
        body,
      }),
    }),

    getDiagnostics: builder.query<
      DiagnosticInterfaceWithPagination,
      GetDatasArgs
    >({
      query: ({ pageIndex, pageSize, sorting, filters }) => {
        const params = new URLSearchParams({
          page: pageIndex.toString(),
          size: pageSize.toString(),
        });

        if (sorting && typeof buildOrderingParam(sorting) != "undefined") {
          params.append("ordering", buildOrderingParam(sorting) as string);
        }
        if (filters) {
          const filterParams = buildFilterParams(filters);
          Object.entries(filterParams).forEach(([key, value]) => {
            params.append(key, value);
          });
        }

        return `?${params.toString()}`;
      },
    }),

    getSingleDiagnostic: builder.query<DiagnosticInterface, string>({
      query: (id) => `${id}/`,
    }),

    updateDiagnostic: builder.mutation<
      DiagnosticInterface,
      { id: string; data: Partial<DiagnosticInterface> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    partialUpdateDiagnostic: builder.mutation<
      void,
      { id: string; data: Partial<DiagnosticInterface> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteDiagnostic: builder.mutation<void, string>({
      query: (id) => ({
        url: `${id}/`,
        method: "DELETE",
      }),
    }),
    getNeedWithDiagnostic: builder.query<NeedExpressionSheetInterface, string>({
      query: (id) => `${id}/DiagnosticNeed/`,
    }),
  }),
});

export const {
  useCreateDiagnosticMutation,
  useGetDiagnosticsQuery,
  useGetSingleDiagnosticQuery,
  useLazyGetSingleDiagnosticQuery,
  useUpdateDiagnosticMutation,
  useDeleteDiagnosticMutation,
  useGetNeedWithDiagnosticQuery,
} = DiagnosticsApi;
