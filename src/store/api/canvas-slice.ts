import { apiSlice } from './api-slice';

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (_) => ({}),
});

export const {} = extendedApiSlice;
