import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query<any, string>({
      query: (name) => `todos/${name}`,
      providesTags: ['Todos']
    }),
    deleteTodos:builder.mutation<any , number>({
      query:(id)=> ({
        url: `todos/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Todos']
    }),
    addTodos:builder.mutation<any , number>({
      query:(body)=> ({
        url: `todos/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Todos']
    })
  }),
});

export const { useGetTodosQuery , useDeleteTodosMutation , useAddTodosMutation} = todosApi;
