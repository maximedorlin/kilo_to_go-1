
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetDatasArgs } from "@/interfaces/base.interface";
import {
  buildFilterParams,
  buildOrderingParam,
} from "@/utils/transform-sorting";
import { ParticipantsInterface, ParticipantsStatisticsInterface, ParticipantsWithPagination } from "@/interfaces/administrative.interface";

export const ParticipantsApi = createApi({
  reducerPath: "ParticipantsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}roads/participants/`,
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
    getParticipants: builder.query<ParticipantsWithPagination, GetDatasArgs>(
      {
        query: ({ pageIndex, pageSize, sorting, filters , manualFilter }) => {
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
      }
    ),

    getParticipant: builder.query<
          ParticipantsInterface[],
          void
        >({
          query: () => ``,
    }),
    
      
    createParticipants: builder.mutation<
      ParticipantsInterface,
      Omit<ParticipantsInterface, "id" | "created_at" | "updated_at">
    >({
      query: (participants) => ({
        url: ``,
        method: "POST",
        body: participants,
      }),
    }),

    getSingleParticipants: builder.query<ParticipantsInterface, string>({
      query: (id) => `${id}/`,
    }),

    updateParticipants: builder.mutation<
      ParticipantsInterface,
      { id: string; data: Partial<ParticipantsInterface> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    partialUpdateParticipants: builder.mutation<
          void,
          { id: string; data: Partial<ParticipantsInterface> }
        >({
          query: ({ id, data }) => ({
            url: `${id}/`,
            method: "PATCH",
            body: data,
          }),
        }),

    deleteParticipants: builder.mutation<any, string>({
      query: (id) => ({
        url: `${id}/`,
        method: "DELETE",
      }),
    }),

    getParticipantStatistics: builder.query<
          ParticipantsStatisticsInterface,
          void
        >({
          query: () => `Statistics/`,
    }),

    
    deleteMultipleParticipants: builder.mutation<void, string[]>({
      query: (data) => ({
        url: `bulk-delete/`,
        method: "DELETE",
        body: { ids: data },
      }),
    }),

  }),
});

export const {
  useCreateParticipantsMutation,
  useDeleteMultipleParticipantsMutation,
  useDeleteParticipantsMutation,
  useGetParticipantQuery,
  useGetParticipantsQuery,
  useGetSingleParticipantsQuery,
  usePartialUpdateParticipantsMutation,
  useUpdateParticipantsMutation,
  useLazyGetSingleParticipantsQuery,
  useLazyGetParticipantQuery,
  useGetParticipantStatisticsQuery,
} = ParticipantsApi;
