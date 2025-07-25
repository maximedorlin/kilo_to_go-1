import { GetDatasArgs } from "@/interfaces/base.interface";
import {
  InterventionInterface,
  InterventionInterfaceWithPagination,
} from "@/interfaces/public-lighting/corrective-maintenance/intervention.interface";
import {
  buildFilterParams,
  buildOrderingParam,
} from "@/utils/transform-sorting";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const InterventionApi = createApi({
  reducerPath: "InterventionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}public-lighting/interventions/`,
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
    createIntervention: builder.mutation<
      InterventionInterface,
      InterventionInterface
    >({
      query: (body) => ({
        url: ``,
        method: "POST",
        body,
      }),
    }),

    getInterventions: builder.query<
      InterventionInterfaceWithPagination,
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

    getSingleIntervention: builder.query<InterventionInterface, string>({
      query: (id) => `${id}/`,
    }),

    updateIntervention: builder.mutation<
      InterventionInterface,
      { id: string; data: Partial<InterventionInterface> | FormData }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteIntervention: builder.mutation<void, string>({
      query: (id) => ({
        url: `${id}/`,
        method: "DELETE",
      }),
    }),
    partialUpdateIntervention: builder.mutation<
      void,
      { id: string; data: Partial<InterventionInterface> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateInterventionMutation,
  useGetInterventionsQuery,
  useGetSingleInterventionQuery,
  useLazyGetSingleInterventionQuery,
  useUpdateInterventionMutation,
  useDeleteInterventionMutation,
  usePartialUpdateInterventionMutation,
} = InterventionApi;
