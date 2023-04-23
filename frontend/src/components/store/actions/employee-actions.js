import { employeeActions } from "../slices/employeeSlice";
export const addEmployee = (eData) => async (dispatch) => {
    dispatch(employeeActions.addEmployeeRequest());
    const {
        uid,
        id,
        fname,
        lname,
        uname,
        email,
        jdate,
        phone,
        company,
        designation,
        department,
    } = eData;

    const res = await fetch(`https://backend-9npc.onrender.com/addemployee/:${uid}`, {
        method: "POST",
        body: JSON.stringify({
            uid,
            id,
            fname,
            lname,
            uname,
            email,
            jdate,
            phone,
            company,
            designation,
            department
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const out = await res.json();
    console.log("in actions ",out);
    console.log(out.data.newuser.employees);

    if (out.message === "successfully added a employee") {
        dispatch(employeeActions.addEmployeeRequestSuccocess(out.data.newuser.employees));
    } else {
        dispatch(employeeActions.addEmployeeRequestFail(out.message));
    }
};


export const getEmployee = (data)=> async dispatch=>{
    dispatch(employeeActions.getEmployeeRequest());
    const id=data;
    const res = await fetch(`https://backend-9npc.onrender.com/getemployee/:${id}`)
    const out = await res.json();
    if(out.message==="success"){
        console.log('hello i am here');
        console.log(out.data);
        const emp=out.data
        console.log(emp);
        dispatch(employeeActions.getEmployeeRequestSuccess(emp));
    }
    else{
        dispatch(employeeActions.getEmployeeRequestFail(out.message));
    }
}

export const deleteEmployee = data => async dispatch=>{
    dispatch(employeeActions.deleteEmployeeRequest());
    const id = data;
    const res = await fetch(`https://backend-9npc.onrender.com/deleteemployee/:${id}`)
    const out = await res.json();
    // console.log(out.data);
    if(out.message==="successfully deleted an employee"){
        // console.log("in getproject request");
        dispatch(employeeActions.deleteEmployeeRequestSuccess(out.message));
    }
    else{
        dispatch(employeeActions.getEmployeeRequestFail(out.error));
    }
}

export const editEmployee = (eData)=>async dispatch =>{
    dispatch(employeeActions.editEmployeeRequest());
    const {
        uid,
        id,
        fname,
        lname,
        uname,
        email,
        jdate,
        phone,
        company,
        designation,
        department,
    } = eData;
    const res = await fetch(`https://backend-9npc.onrender.com/editemployee/:${id}`, {
        method: "POST",
        body: JSON.stringify({
            uid,
            id,
            fname,
            lname,
            uname,
            email,
            jdate,
            phone,
            company,
            designation,
            department
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const out = await res.json();
    console.log("in actions ",out);
    console.log(out.data.newuser.employees);

    if (out.message === "successfully edited a employee") {
        dispatch(employeeActions.editEmployeeRequestSuccess(out.data.newuser.employees));
    } else {
        dispatch(employeeActions.editEmployeeRequestFail(out.message));
    }
}