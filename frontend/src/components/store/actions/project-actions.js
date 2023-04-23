import { projectActions } from "../slices/projectSlice";

export const addProject = (projectData) => async (dispatch) => {
    dispatch(projectActions.addProjectRequest());
    const {
        _id,
        projectName,
        clientName,
        startDate,
        endDate,
        budget,
        priority,
        projectLeader,
        team,
        pdescription,
        progress,
    } = projectData;

    const res = await fetch(`https://backend-9npc.onrender.com/addproject/:${_id}`, {
        method: "POST",
        body: JSON.stringify({
            projectName,
            clientName,
            startDate,
            endDate,
            budget,
            priority,
            projectLeader,
            team,
            pdescription,
            progress,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const out = await res.json();
    console.log("in actions ",out);
    console.log(out.data.newuser.projects);

    if (out.message === "successfully added a project") {
        dispatch(projectActions.addProjectRequestSuccess(out.data.newuser.projects));
    } else {
        dispatch(projectActions.addProjectRequestFail(out.message));
    }
};


export const getProject = (data)=> async dispatch=>{
    dispatch(projectActions.getProjectRequest());
    const id=data;
    console.log(`https://backend-9npc.onrender.com/getproject/:${id}`);
    const res = await fetch(`https://backend-9npc.onrender.com/getproject/:${id}`)
    const out = await res.json();
    console.log(out.data);
    if(out.message==="success"){
        console.log("in getproject request");
        dispatch(projectActions.getProjectRequestSuccess(out.data));
    }
    else{
        dispatch(projectActions.getProjectRequestFail(out.message));
    }

}

export const deleteProject = data => async dispatch=>{
    dispatch(projectActions.deleteProjectRequest());
    const id = data;
    const res = await fetch(`https://backend-9npc.onrender.com/deleteproject/:${id}`)
    const out = await res.json();
    // console.log(out.data);
    if(out.message==="successfully deleted a project"){
        // console.log("in getproject request");
        dispatch(projectActions.deleteProjectRequestSuccess(out.message));
    }
    else{
        dispatch(projectActions.getProjectRequestFail(out.error));
    }
}

export const editProject = (data)=>async dispatch =>{
    dispatch(projectActions.editProjectRequest);
    
}