import { PermissionInterface } from "@/interfaces/auth/authinterfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const PermissionApi = createApi({
  reducerPath: "PermissionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}auth/permissions_list/`,
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
    getPermissions: builder.query<PermissionInterface[], void>({
      query: () => "",
    }),
    createRule: builder.mutation<
      PermissionInterface,
      Omit<
        PermissionInterface,
        "id" | "date_modification" | "date_creation" | "archived"
      >
    >({
      query: (rule) => {
        return {
          url: "",
          method: "POST",
          body: rule,
        };
      },
    }),

    getSinglePermission: builder.query<PermissionInterface, number>({
      query: (id) => `${id}/`,
    }),

    // Mettre à jour un Poste
    updatePermission: builder.mutation<
      PermissionInterface,
      { id: number; data: Partial<PermissionInterface> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    // Supprimer un Poste
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deletePermission: builder.mutation<any, number>({
      query: (id) => ({
        url: `${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPermissionsQuery,
  useCreateRuleMutation,
  useDeletePermissionMutation,
  useGetSinglePermissionQuery,
  useLazyGetPermissionsQuery,
  useLazyGetSinglePermissionQuery,
  useUpdatePermissionMutation,
} = PermissionApi;
