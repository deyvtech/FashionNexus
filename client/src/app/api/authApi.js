import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_DOMAIN}` }),
    endpoints: (builder) => ({
        getUserData: builder.query({
            query: () => "/auth/profile",
        })
    }),
});

export const { useGetUserDataQuery } = authApi;
export default authApi;