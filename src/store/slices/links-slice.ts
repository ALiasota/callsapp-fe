import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ILink {
  id: number;
  linkPath: string;
}

export const linksApi = createApi({
  reducerPath: 'linksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  tagTypes: ['links'],
  endpoints: (build) => ({
    fetchLinks: build.query<ILink[], void>({
      query: () => `/link`,
      providesTags: ['links'],
    }),
    addLink: build.mutation<ILink, Partial<ILink>>({
      query: (newContact) => ({
        url: `/link`,
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['links'],
    }),
    delLink: build.mutation<{ message: string }, number>({
      query: (id) => ({
        url: `/link/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['links'],
    }),
    updateLink: build.mutation<ILink, ILink>({
      query: ({ id, linkPath }: { id: number; linkPath: string }) => ({
        url: `/link/${id}`,
        method: 'PUT',
        body: { linkPath },
      }),
      invalidatesTags: ['links'],
    }),
  }),
});

export const {
  useFetchLinksQuery,
  useAddLinkMutation,
  useDelLinkMutation,
  useUpdateLinkMutation,
} = linksApi;
