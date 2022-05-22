import { configureStore } from "@reduxjs/toolkit";
import { deploymentApi } from "../api/deployment";
import appReducer from "./slices/app";

export const store = configureStore({
    reducer: {
        app: appReducer,
        [deploymentApi.reducerPath]: deploymentApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        deploymentApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;