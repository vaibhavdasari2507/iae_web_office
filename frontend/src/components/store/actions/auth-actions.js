import { authActions } from "../slices/authSlice";
import Axios from "axios";

export const register = (userData) => async (dispatch) => {
    dispatch(authActions.registerUserreq());
    const res = await Axios.post("https://backend-9npc.onrender.com/signUp", userData);
    const out = await res.data;
    if (out.message === "signed up successfully") {
        dispatch(authActions.registerUsersuccess(out.data.user));
    } else {
        dispatch(authActions.registerUserfail(out.message));
    }
};

export const login = (userData) => async (dispatch) => {
    dispatch(authActions.loginRequest());
    const res = await fetch("https://backend-9npc.onrender.com/signIn", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const out = await res.json();
    localStorage.setItem("jwttoken", JSON.stringify(out.data.userLogin.tokens[out.data.userLogin.tokens.length - 1]));
    if (out.message === "logged in successfully") dispatch(authActions.loginRequestSuccess(out.data.userLogin));
    else dispatch(authActions.loginRequestFail(out.message));
};

export const loadUser = () => async (dispatch) => {
    dispatch(authActions.loadUserRequest());
    const res = await fetch("https://backend-9npc.onrender.com/getbytoken", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            jwttoken: localStorage.getItem("jwttoken"),
        },
    });
    const out = await res.json();
    console.log(out);
    if (out.message === "success") {
        dispatch(authActions.loadUserRequestSuccess(out.data.user));
    } else {
        dispatch(authActions.loadUserRequestFail(out.message));
    }
};
