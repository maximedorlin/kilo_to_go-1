import { GetDatasArgs } from "@/interfaces/base.interface";
import { InterventionInterface } from "@/interfaces/public-lighting/corrective-maintenance/intervention.interface";
import {
  NeedExpressionSheetInterface,
  NeedExpressionSheetInterfaceWithPagination,
} from "@/interfaces/public-lighting/public-lighting.interface";
import {
  buildFilterParams,
  buildOrderingParam,
} from "@/utils/transform-sorting";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const NeedExpressionSheetApi = createApi({
  reducerPath: "NeedExpressionSheetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}public-lighting/needsheets/`,
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
    getNeedExpressionSheet: builder.query<
      NeedExpressionSheetInterfaceWithPagination,
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
    createNeedExpressionSheet: builder.mutation<
      NeedExpressionSheetInterface,
      Partial<NeedExpressionSheetInterface>
    >({
      query: (needSheet) => ({
        url: ``,
        method: "POST",
        body: needSheet,
      }),
    }),
    updateNeedSheetExpressionSheet: builder.mutation<
      NeedExpressionSheetInterface,
      {
        id: string;
        data: Partial<NeedExpressionSheetInterface>;
      }
    >({
      query: (needSheet) => ({
        url: `${needSheet.id}/`,
        method: "PUT",
        body: needSheet.data,
      }),
    }),

    updateNeedSheetExpressionStatus: builder.mutation<
      NeedExpressionSheetInterface,
      {
        id: string;
        approbal_status:
          | "clain_pending"
          | "clain_approved"
          | "clain_confirm"
          | "clain_rejected";
      }
    >({
      query: (needSheet) => ({
        url: `${needSheet.id}/`,
        method: "PATCH",
        body: { approbal_status: needSheet.approbal_status },
      }),
    }),
    getSingleNeedExpressionSheet: builder.query<
      NeedExpressionSheetInterface,
      string
    >({
      query: (id) => `${id}/`,
    }),
    getInterventionWithNeed: builder.query<InterventionInterface, string>({
      query: (id) => `${id}/get-need-sheet/`,
    }),
  }),
});

export const {
  useGetNeedExpressionSheetQuery,
  useCreateNeedExpressionSheetMutation,
  useGetSingleNeedExpressionSheetQuery,
  useLazyGetSingleNeedExpressionSheetQuery,
  useUpdateNeedSheetExpressionSheetMutation,
  useUpdateNeedSheetExpressionStatusMutation,
  useGetInterventionWithNeedQuery,
} = NeedExpressionSheetApi;
