// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// // Définir les types des données retournées par l'API
// interface Patrimoine {
//   id: string; // Utilisation de string pour l'ID basé sur ton exemple (UUID)
//   name: string;
//   description: string;
//   parent: string; // ID du parent
//   quartier: number;
//   commune: number;
//   latitude: number;
//   longitude: number;
//   created_at: string;
//   updated_at: string;
//   zone_chalandise: number;
//   categorie: number;
//   departement: number;
//   zone_adress: number;
//   info_suplementaires: Record<string, any>; // Informations supplémentaires sous forme d'objet
// }

// interface PatrimoineResponse {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: Patrimoine[];
// }

// interface Sort {
//   id: string;
//   desc: boolean;
// }

// interface Filter {
//   id: string;
//   value: any;
// }

// interface GetPatrimoinesArgs {
//   pageIndex: number;
//   pageSize: number;
//   sorting?: Sort[];
//   filters?: Filter[];
// }

// // Création de l'API avec RTK Query
// export const ServerlessApi = createApi({
//   reducerPath: 'ServerlessApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}patrimoine/`, prepareHeaders: (headers) => {
//       const token = localStorage.getItem("access");
//       if (token) {
//         const userParsed = JSON.parse(token);
//         headers.set("authorization", `Bearer ${userParsed}`);
//       }
//       return headers;
//     },
//   }), // Assure-toi que l'URL est correcte

//   endpoints: (builder) => ({
//     // Endpoint pour obtenir les patrimoines avec pagination, tri, et filtres
//     getPatrimoines: builder.query<PatrimoineResponse, GetPatrimoinesArgs>({
//       query: ({ pageIndex, pageSize, sorting, filters }) => {
//         const params = new URLSearchParams({
//           page: pageIndex.toString(),
//           size: pageSize.toString(),
//         });

//         // Ajoute les paramètres de tri
//         if (sorting) {
//           sorting.forEach((s) =>
//             params.append('sort', `${s.id}:${s.desc ? 'desc' : 'asc'}`)
//           );
//         }

//         // Ajoute les paramètres de filtrage
//         if (filters) {
//           filters.forEach((f) => params.append(`filter_${f.id}`, f.value));
//         }

//         return `patrimoine-filter/?${params.toString()}`; // Utilise l'endpoint correspondant à "patrimoines"
//       },
//     }),
//   }),
// });

// export const { useGetPatrimoinesQuery } = ServerlessApi;
