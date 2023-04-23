import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name: "clients",
    initialState: {
        loading: false,
        error:null,
        clients: [],
    },
    reducers:{
        addClientRequest(state,action){
            state.loading = true;
            state.error = null;
        },
        addClientRequestSuccess(state,action){
            state.loading = false;
            state.error = null;
            state.clients = action.payload;
        },
        addClientRequestFail(state,action){
            state.loading = false;
            state.error = action.payload;
        },
        getClientRequest(state,action){
            state.loading = true;
            state.error = null;
            state.clients = null;
        },
        getClientRequestSuccess(state,action){
            state.loading = false;
            state.error = null;
            state.clients = action.payload;
        },
        getClientRequestFail(state,action){
            state.loading = false;
            state.error = action.payload;
        },
        editClientRequest(state,action){
            state.loading = true;
            state.error = null;
        },
        editClientRequestSuccess(state,action){
            state.loading = false;
            state.error = null;
            state.clients = action.payload;
        },
        editClientRequestFail(state,action){
            state.loading = false;
            state.error = action.payload;
        },
        deleteClientRequest(state,action){
            state.loading = true;
            state.error = null;
        },
        deleteClientRequestSuccess(state,action){
            state.loading = false;
            state.error = null;
            state.clients = action.payload;
        },
        deleteClientRequestFail(state,action){
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const clientActions = clientSlice.actions;
export default clientSlice;