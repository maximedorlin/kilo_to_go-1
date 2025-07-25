import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetDatasArgs } from "@/interfaces/base.interface";
import {
  buildFilterParams,
  buildOrderingParam,
} from "@/utils/transform-sorting";
import {
  Disease,
  DiseaseWithPagination,
} from "@/interfaces/administrative.interface";

export const DiseaseApi = createApi({
  reducerPath: "DiseaseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}sanitary/diseases/`,
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
    getDisease: builder.query<DiseaseWithPagination, GetDatasArgs>({
      query: ({ pageIndex, pageSize, sorting, filters, manualFilter }) => {
        const params = new URLSearchParams({
          page: pageIndex.toString(),
          size: pageSize.toString(),
        });

        if (sorting && typeof buildOrderingParam(sorting) != "undefined") {
          params.append("ordering", buildOrderingParam(sorting) as string);
        }
        if (filters) {
          console.log(filters);

          const filterParams = buildFilterParams(filters);
          Object.entries(filterParams).forEach(([key, value]) => {
            params.append(key, value);
          });
        }

        return `?${params.toString()}&${manualFilter}`;
      },
    }),

    getSubcontractor: builder.query<Disease[], void>({
      query: () => `../Disease-names/`,
    }),

    createDisease: builder.mutation<
      Disease,
      Omit<Disease, "id" | "created_at" | "updated_at">
    >({
      query: (disease) => ({
        url: ``,
        method: "POST",
        body: disease,
      }),
    }),

    getSingleDisease: builder.query<Disease, string>({
      query: (id) => `${id}/`,
    }),

    updateDisease: builder.mutation<
      Disease,
      { id: string; data: Partial<Disease> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    partialUpdateDisease: builder.mutation<
      void,
      { id: string; data: Partial<Disease> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteDisease: builder.mutation<any, string>({
      query: (id) => ({
        url: `${id}/`,
        method: "DELETE",
      }),
    }),

    getDiseaseStatistics: builder.query<Disease, void>({
      query: () => `statistics/`,
    }),

    deleteMultipleDisease: builder.mutation<void, string[]>({
      query: (data) => ({
        url: `bulk-delete/`,
        method: "DELETE",
        body: { ids: data },
      }),
    }),
  }),
});

export const {
  useGetDiseaseQuery,
  useCreateDiseaseMutation,
  useLazyGetDiseaseQuery,
  useLazyGetSingleDiseaseQuery,
  useUpdateDiseaseMutation,
  usePartialUpdateDiseaseMutation,
  useDeleteMultipleDiseaseMutation,
  useDeleteDiseaseMutation,
  useGetDiseaseStatisticsQuery,
  useGetSingleDiseaseQuery,
} = DiseaseApi;
