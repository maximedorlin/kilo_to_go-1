import { Material } from "@/interfaces/public-lighting/public-lighting.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MaterialApi = createApi({
  reducerPath: "MaterialApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}public-lighting/material/`,
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
    getMaterials: builder.query<Material[], string>({
      query: (query) => `?${query}`,
    }),

    createMaterial: builder.mutation<
      Material,
      Omit<Material, "id" | "created_at" | "updated_at">
    >({
      query: (service) => ({
        url: ``,
        method: "POST",
        body: service,
      }),
    }),

    getSingleMaterial: builder.query<Material, string>({
      query: (id) => `${id}/`,
    }),

    updateMaterial: builder.mutation<
      Material,
      { id: string; data: Partial<Material> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    updateMaterialStaeMultiple: builder.mutation<
      Material,
      { ids: string[]; state: string }
    >({
      query: ({ ids, state }) => ({
        url: `bulk-update/`,
        method: "PUT",
        body: { ids: ids, state: state },
      }),
    }),

    deleteMaterial: builder.mutation<any, string>({
      query: (id) => ({
        url: `${id}/`,
        method: "DELETE",
      }),
    }),

    deleteMaterialMultiple: builder.mutation<any, string[]>({
      query: (data) => ({
        url: `delete/`,
        method: "DELETE",
        body: { ids: data },
      }),
    }),
  }),
});

export const {
  useGetMaterialsQuery,
  useCreateMaterialMutation,
  useUpdateMaterialMutation,
  useUpdateMaterialStaeMultipleMutation,
  useDeleteMaterialMutation,
  useLazyGetMaterialsQuery,
  useGetSingleMaterialQuery,
  useDeleteMaterialMultipleMutation,
} = MaterialApi;
