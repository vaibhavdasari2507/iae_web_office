import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employees",
    initialState: {
        loading: false,
        error:null,
        employees_array: [],
    },
    reducers:{
        addEmployeeRequest(state,action){
            state.loading = true;
            state.error = null;
        },
        addEmployeeRequestSuccess(state,action){
            state.loading = false;
            state.error = null;
            state.employees_array = action.payload;
        },
        addEmployeeRequestFail(state,action){
            state.loading = false;
            state.error = action.payload;
        },
        getEmployeeRequest(state,action){
            state.loading = true;
            state.error = null;
            state.employees_array = null;
        },
        getEmployeeRequestSuccess(state,action){
            state.loading = false;
            state.error = null;
            state.employees_array = action.payload;
        },
        getEmployeeRequestFail(state,action){
            state.loading = false;
            state.error = action.payload;
        },
        editEmployeeRequest(state,action){
            state.loading = true;
            state.error = null;
        },
        editEmployeeRequestSuccess(state,action){
            state.loading = false;
            state.error = null;
            state.employees_array = action.payload;
        },
        editEmployeeRequestFail(state,action){
            state.loading = false;
            state.error = action.payload;
        },
        deleteEmployeeRequest(state,action){
            state.loading = true;
            state.error = null;
        },
        deleteEmployeeRequestSuccess(state,action){
            state.loading = false;
            state.error = null;
            state.employees_array = action.payload;
        },
        deleteEmployeeRequestFail(state,action){
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const employeeActions = employeeSlice.actions;
export default employeeSlice;