import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetDatasArgs } from "@/interfaces/base.interface";
import {
  buildFilterParams,
  buildOrderingParam,
} from "@/utils/transform-sorting";
import {
  Personnel,
  PersonnelWithPagination,
} from "@/interfaces/administrative.interface";

export const PersonnelAdminApi = createApi({
  reducerPath: "PersonnelAdminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}sanitary/personnel/`,
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
    getPersonnel: builder.query<PersonnelWithPagination, GetDatasArgs>({
      query: ({ pageIndex, pageSize, sorting, filters, manualFilter }) => {
        const params = new URLSearchParams({
          page: pageIndex.toString(),
          size: pageSize.toString(),
        });

        if (sorting && typeof buildOrderingParam(sorting) !== "undefined") {
          params.append("ordering", buildOrderingParam(sorting) as string);
        }

        if (filters) {
          const filterParams = buildFilterParams(filters);
          Object.entries(filterParams).forEach(([key, value]) => {
            params.append(key, value);
          });
        }

        return `?${params.toString()}&${manualFilter}`;
      },
    }),

    getPersonnels: builder.query<Personnel[], void>({
      query: () => ``,
    }),

    createPersonnel: builder.mutation<
      Personnel,
      Omit<Personnel, "id" | "created_at" | "updated_at">
    >({
      query: (personnel) => ({
        url: ``,
        method: "POST",
        body: personnel,
      }),
    }),

    getSinglePersonnel: builder.query<Personnel, string>({
      query: (id) => `${id}/`,
    }),

    updatePersonnel: builder.mutation<
      Personnel,
      { id: string; data: Partial<Personnel> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    partialUpdatePersonnel: builder.mutation<
      void,
      { id: string; data: Partial<Personnel> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PATCH",
        body: data,
      }),
    }),

    deletePersonnel: builder.mutation<any, string>({
      query: (id) => ({
        url: `${id}/`,
        method: "DELETE",
      }),
    }),

    getPersonnelStatistics: builder.query<Personnel, void>({
      query: () => `statistics/`,
    }),

    deleteMultiplePersonnel: builder.mutation<void, string[]>({
      query: (data) => ({
        url: `bulk-delete/`,
        method: "DELETE",
        body: { ids: data },
      }),
    }),
  }),
});

// ✅ Exports avec les bons hooks générés
export const {
  useGetPersonnelQuery, // Renommé ici
  useCreatePersonnelMutation,
  useLazyGetPersonnelQuery,
  useLazyGetSinglePersonnelQuery,
  useUpdatePersonnelMutation,
  usePartialUpdatePersonnelMutation,
  useDeleteMultiplePersonnelMutation,
  useDeletePersonnelMutation,
  useGetPersonnelStatisticsQuery,
  useGetSinglePersonnelQuery,
} = PersonnelAdminApi;
