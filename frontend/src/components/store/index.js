import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/authSlice";
import projectSlice from "./slices/projectSlice";
import employeeSlice from "./slices/employeeSlice";
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        project :projectSlice.reducer,
        employee : employeeSlice.reducer
    },
});

export default store;
