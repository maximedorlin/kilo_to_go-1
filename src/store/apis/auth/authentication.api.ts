import {
  ChangePasswordInterface,
  LoginCredentials,
  LoginResponse,
  ResetPassword,
  UserInterface,
  UserInterfaceWithPagination,
} from "@/interfaces/auth/authinterfaces";
import { GetDatasArgs } from "@/interfaces/base.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface NotificationInterface {
  id: number;
  content: string;
  date_creation: string;
}

export const AuthenticationApi = createApi({
  reducerPath: "AuthenticationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
    prepareHeaders: (headers, api) => {
      const token = localStorage.getItem("access");
      if (token && api.endpoint != "login") {
        const userParsed = JSON.parse(token);
        headers.set("authorization", `Bearer ${userParsed}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (data) => {
        return {
          url: `auth/api/token/`,
          method: "POST",
          body: data,
          headers: {
            authorization: "",
          },
        };
      },
    }),
    getUserProfile: builder.query<UserInterface, void>({
      query: () => "auth/api/get-user-profile/",
    }),
    getSingleUser: builder.query<UserInterface, string>({
      query: (id) => `auth/users/${id}/`,
    }),

    getUsers: builder.query<UserInterfaceWithPagination, GetDatasArgs>({
      query: ({ pageIndex, pageSize }) => {
        const params = new URLSearchParams({
          page: pageIndex.toString(),
          size: pageSize.toString(),
        });
        return `auth/users/?${params.toString()}`;
      },
    }),

    // lockUser: builder.mutation<User, string>({
    //   query: (id) => {
    //     return {
    //       method: "POST",
    //       url: `auth/lock_user/${id}/`,
    //     };
    //   },
    // }),
    // unlockUser: builder.mutation<User, string>({
    //   query: (id) => {
    //     return {
    //       method: "POST",
    //       url: `auth/unlock_user/${id}/`,
    //     };
    //   },
    // }),

    createUser: builder.mutation<any, UserInterface>({
      query: (data) => ({
        url: "auth/users/",
        method: "POST",
        body: data,
      }),
    }),

    updateUser: builder.mutation<
      any,
      { id: string; data: Partial<UserInterface> }
    >({
      query: ({ data, id }) => ({
        url: `auth/users/${id}/`,
        method: "PUT",
        body: data,
      }),
    }),

    resetPasswordGetToken: builder.mutation<any, { email: string }>({
      query: (email) => {
        return {
          url: `auth/reset_password_get_token/`,
          method: "POST",
          body: email,
        };
      },
    }),

    resetPassword: builder.mutation<
      any,
      { uidb64: string; token: string; body: ResetPassword }
    >({
      query: ({ uidb64, token, body }) => {
        return {
          url: `auth/reset_password_confirm/${uidb64}/${token}/`,
          method: "POST",
          body: body,
        };
      },
    }),

    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `${id}/`,
        method: "DELETE",
      }),
    }),

    changePassword: builder.mutation<any, ChangePasswordInterface>({
      query: (data) => {
        return {
          url: `auth/change-password/`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserProfileQuery,
  useLazyGetUserProfileQuery,
  useCreateUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
  useGetSingleUserQuery,
  useResetPasswordGetTokenMutation,
  useResetPasswordMutation,
  useDeleteUserMutation,
  useChangePasswordMutation,
} = AuthenticationApi;
