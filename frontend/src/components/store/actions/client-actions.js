import { clientActions } from "../slices/clientSlice";
export const addClient = (eData) => async (dispatch) => {

    dispatch(clientActions.addClientRequest());
    const {
        uid,
        id,
        fname,
        lname,
        uname,
        email,
        phone,
        company,
        designation,
    } = eData;

    const res = await fetch(`https://backend-9npc.onrender.com/addclient/:${uid}`, {
        method: "POST",
        body: JSON.stringify({
            uid,
            id,
            fname,
            lname,
            uname,
            email,
            phone,
            company,
            designation,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const out = await res.json();
    console.log("in actions ",out);
    console.log(out.data.newuser.clients);

    if (out.message === "successfully added a employee") {
        dispatch(clientActions.addClientRequestSuccess(out.data.newuser.clients));
    } else {
        dispatch(clientActions.addClientRequestFail(out.message));
    }
};


export const getClient = (data)=> async dispatch=>{
    dispatch(clientActions.getClientRequest());
    const id=data;
    const res = await fetch(`https://backend-9npc.onrender.com/getclient/:${id}`)
    const out = await res.json();
    if(out.message==="success"){
        console.log('hello i am here');
        console.log(out.data);
        const emp=out.data
        console.log(emp);
        dispatch(clientActions.getClientRequestSuccess(emp));
    }
    else{
        dispatch(clientActions.getClientRequestFail(out.message));
    }
}

export const deleteClient = data => async dispatch=>{
    dispatch(clientActions.deleteClientRequest());
    const id = data;
    const res = await fetch(`https://backend-9npc.onrender.com/deleteclient/:${id}`)
    const out = await res.json();
    
    if(out.message==="successfully deleted an employee"){
        dispatch(clientActions.deleteClientRequestSuccess(out.message));
    }
    else{
        dispatch(clientActions.getClientRequestFail(out.error));
    }
}

export const editClient = (data)=>async dispatch =>{
    dispatch(clientActions.editClientRequest);
    const {
        uid,
        id,
        fname,
        lname,
        uname,
        email,
        phone,
        company,
        designation,
    } = data;

    const res = await fetch(`https://backend-9npc.onrender.com/editclient/:${id}`, {
        method: "POST",
        body: JSON.stringify({
            uid,
            id,
            fname,
            lname,
            uname,
            email,
            phone,
            company,
            designation,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const out = await res.json();
    console.log("in actions ",out);
    console.log(out.data.newclient);

    if (out.message === "successfully added a client") {
        dispatch(clientActions.editClientRequestSuccess(out.data.newclient));
    } else {
        dispatch(clientActions.editClientRequestFail(out.message));
    }
}