import { GroupInterface } from "@/interfaces/auth/authinterfaces";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const GroupsApi = createApi({
  reducerPath: "GroupsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}auth/groups/`,
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
    getGroups: builder.query<GroupInterface[], void>({
      query: () => "",
    }),
    createGroup: builder.mutation<GroupInterface, Omit<GroupInterface, "id">>({
      query: (group) => {
        return {
          url: "",
          method: "POST",
          body: group,
        };
      },
    }),

    getSingleGroup: builder.query<GroupInterface, string>({
      query: (id) => `${id}/`,
    }),

    // Mettre à jour un Group
    updateGroup: builder.mutation<
      GroupInterface,
      { id: string; data: Partial<GroupInterface> }
    >({
      query: ({ id, data }) => ({
        url: `${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    // Supprimer un Group
    deleteGroup: builder.mutation<void, string>({
      query: (id) => ({
        url: `${id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetGroupsQuery,
  useCreateGroupMutation,
  useDeleteGroupMutation,
  useGetSingleGroupQuery,
  useLazyGetGroupsQuery,
  useLazyGetSingleGroupQuery,
  useUpdateGroupMutation,
} = GroupsApi;
