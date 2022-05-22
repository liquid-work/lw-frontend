import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const deploymentApi = createApi({
    reducerPath: "deploymentApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.IS_DEV === "true" ? "http://localhost:3001/" : "https://api.liquidwork.io/" }),
    endpoints: (builder) => ({
        estimateDeployment: builder.mutation<{ flowRate: string, matic: number }, { file: string }>({
            query: ({ file }) => ({
                url: `deployment/estimate`,
                method: "POST",
                body: {
                    file
                }
            })
        })
    })
});

export const {
    useEstimateDeploymentMutation,
} = deploymentApi;