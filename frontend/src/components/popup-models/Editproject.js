import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { editProject } from "../store/actions/project-actions";

export default function Editproject(props) {
  const proj = props.prj
  const id = props.id
  console.log("proj = ", proj);
  const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    console.log(user);
    const [project, setProject] = useState({
      // _id:'',
      projectName:'',
      clientName:'',
      startDate:'',
      endDate:'',
      budget:'',
      priority:'',
      projectLeader:'',
      team:'',
      pdescription:'',
      progress:'',
    });

    const onChange = (e) => {
        setProject({ ...project, [e.target.name]: e.target.value });
        console.log(project);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const ep = project;
        console.log('in handle submit');
        console.log(ep);
        if (
            // ep.id === "" ||
            ep.projectName === "" ||
            ep.clientName === "" ||
            ep.startDate === "" ||
            ep.endDate === "" ||
            ep.budget === "" ||
            ep.priority === "" ||
            ep.projectLeader === "" ||
            ep.team === "" ||
            ep.pdescription === "" ||
            ep.progress === "" 
        ) {
            if(ep.projectName === "" )ep.projectName=proj.projectName;
            if(ep.clientName === "" )ep.clientName=proj.clientName;
            if(ep.startDate === "" )ep.startDate=proj.startDate;
            if(ep.endDate === "" )ep.endDate=proj.endDate;
            if(ep.budget === "" )ep.budget=proj.budget;
            if(ep.priority === "" )ep.priority=proj.priority;
            if(ep.projectLeader === "")ep.projectLeader=proj.projectLeader;
            if(ep.team === "" )ep.team=proj.team;
            if(ep.pdescription === "" )ep.pdescription=proj.pdescription;
            if(ep.progress === "" )ep.progress=proj.progress;
        }
        ep.id = id;
        console.log(ep);
        dispatch(editProject(ep));
        window.location.reload();
    };
  return (
    <div
      id="edit_project"
      className="modal custom-modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Project</h5>
            <button
              type="button"
              className="btn-close btn-outline-light"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form method="post" action="" id="editproject" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Project Title</label>
                    <input
                      name="projectName"
                      className="form-control minput"
                      placeholder="Project name"
                      type="text"
                      defaultValue={proj.projectName}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Client</label>
                    <select
                      name="clientName"
                      className="select modal-select minput"
                      defaultValue={proj.clientName}
                      onChange={onChange}
                    >
                      <option value="">-- Select --</option>
                      <option value="Global Technologies">
                        Global Technologies
                      </option>
                      <option value="Delta Infotech">Delta Infotech</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Start Date</label>
                    <div className="cal-icon">
                      <input
                        name="startDate"
                        className="form-control datetimepicker minput"
                        type="text"
                        defaultValue={proj.startDate}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>End Date</label>
                    <div className="cal-icon">
                      <input
                        name="endDate"
                        className="form-control datetimepicker minput"
                        type="text"
                        defaultValue={proj.endDate}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Rate</label>
                    <input
                      name="budget"
                      placeholder="₹500"
                      className="form-control minput"
                      type="text"
                      defaultValue={proj.budget}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Priority</label>
                    <select
                      name="priority"
                      className="select modal-select minput"
                      defaultValue={proj.priority}
                      onChange={onChange}
                    >
                      <option value="Top">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Add Project Leader</label>
                    <input
                      name="projectLeader"
                      className="form-control minput"
                      type="text"
                      defaultValue={proj.projectLeader}
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Add Team</label>
                    <input
                      name="team"
                      id="teaminput"
                      className="form-control minput"
                      type="text"
                      defaultValue={proj.team}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="pdescription"
                  rows="4"
                  className="form-control summernote minput"
                  placeholder="Enter your message here"
                  defaultValue={proj.pdescription}
                  onChange={onChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label>Upload Files</label>
                <input className="form-control minput" type="file" onChange={onChange}/>
              </div>
              <div className="submit-section">
                <button type="submit" className="btn btn-primary submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
