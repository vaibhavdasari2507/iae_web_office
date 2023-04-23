import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import projectSlice from "./slices/projectSlice";
import employeeSlice from "./slices/employeeSlice";
import clientSlice from "./slices/clientSlice";
const store = configureStore({
    reducer: {
        auth:authSlice.reducer,
        project :projectSlice.reducer,
        employees :employeeSlice.reducer,
        clients: clientSlice.reducer,
    },
});

export default store;
