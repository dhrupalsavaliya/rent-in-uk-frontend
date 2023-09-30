import { configureStore } from "@reduxjs/toolkit";
import agentSlice from "../features/agent/agentSlice";
import { api } from "../features/api/api";
import filterSlice from "../features/filter/filterSlice";
import propertiesSlice from "../features/properties/propertiesSlice";
import propertyListsSlice from "../features/propertyLists/propertyListsSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        properties: propertiesSlice,
        filter: filterSlice,
        agent: agentSlice,
        propertyList: propertyListsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
