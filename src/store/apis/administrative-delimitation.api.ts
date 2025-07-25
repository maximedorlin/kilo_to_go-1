import {
  QuaterFeature,
  QuaterInterface,
  QuatersInterface,
  QuaterSubdivisionStreet,
  SubdivisionHighFeature,
  SubdivisionsInterface,
} from "@/interfaces/administrative.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  TOTAL FEATURE :
export const AdministrativeApi = createApi({
  reducerPath: "AdministrativeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}data/`,
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
    getSubdvisionAndQuaterByLngLnt: builder.query<
      QuaterSubdivisionStreet,
      {
        lng: number;
        lat: number;
      }
    >({
      // http://localhost:8000/v1/data/get-subvisition-and-quater-with-point/?lng=568872.3334056879&lat=454464.2714385177
      query: ({ lat, lng }) => ({
        url: `get-subvisition-and-quater-with-point/?lng=${lng}&lat=${lat}`,
      }),
    }),
    getGeoQuater: builder.query<QuaterFeature, void>({
      query: () => ({
        url: "quaters/",
      }),
    }),

    getGeoSubdivision: builder.query<SubdivisionHighFeature, void>({
      query: () => ({
        url: "subdivisions/",
      }),
    }),
    getSingleSubdivision: builder.query<SubdivisionsInterface, string>({
      query: (id) => ({
        url: `subdivisions/${id}/`,
      }),
    }),
    getSingleQuarter: builder.query<QuatersInterface, string>({
      query: (id) => ({
        url: `quaters/${id}/`,
      }),
    }),
    updateQuater: builder.mutation<
      void,
      { id: string; data: Partial<QuaterInterface> }
    >({
      query: ({ id, data }) => ({
        url: `quaters/${id}/`,
        method: "PUT",
        body: data,
      }),
    }),
    updateSubdivision: builder.mutation<
      void,
      { id: string; data: Partial<QuaterInterface> }
    >({
      query: ({ id, data }) => ({
        url: `subdivisions/${id}/`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteSubdivision: builder.mutation<void, string>({
      query: (id) => ({
        url: `subdivisions/${id}/`,
        method: "DELETE",
      }),
    }),
    deleteQuater: builder.mutation<void, string>({
      query: (id) => ({
        url: `quaters/${id}/`,
        method: "DELETE",
      }),
    }),
    getAllQuaters: builder.mutation<
      void,
      { id: string; data: Partial<QuaterInterface> }
    >({
      query: () => ({
        url: `quaters/`,
        method: "GET",
        // body: data,
      }),
    }),
  }),
});

export const {
  useGetGeoQuaterQuery,
  useGetGeoSubdivisionQuery,
  useGetSingleSubdivisionQuery,
  useGetSingleQuarterQuery,
  useUpdateQuaterMutation,
  useUpdateSubdivisionMutation,
  useDeleteSubdivisionMutation,
  useDeleteQuaterMutation,
  useGetAllQuatersMutation,
  useGetSubdvisionAndQuaterByLngLntQuery,
  useLazyGetSubdvisionAndQuaterByLngLntQuery,
} = AdministrativeApi;
