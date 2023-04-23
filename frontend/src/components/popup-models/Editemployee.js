import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { editEmployee } from "../store/actions/employee-actions";
export default function Editemployee(props) {
  const curremp = props.emp
  const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    console.log(user);
    const [employee, setEmployee] = useState({
        uid:user._id,
        id: "",
        fname: "",
        lname: "",
        uname: "",
        email: "",
        jdate: "",
        phone: "",
        company: "",
        department: "",
        designation: ""
    });

    const onChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
        console.log(employee);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const ep = employee;
        console.log('in handle submit');
        console.log(ep);
        if (
            ep.id === "" ||
            ep.fname === "" ||
            ep.lname === "" ||
            ep.uname === "" ||
            ep.email === "" ||
            ep.jdate === "" ||
            ep.phone === "" ||
            ep.company === "" ||
            ep.department === "" ||
            ep.designation === ""
        ) {
            if (ep.id === "") ep.id = curremp.id;
            if (ep.fname === "") ep.fname = curremp.fname;
            if (ep.lname === "") ep.lname = curremp.lname;
            if (ep.uname === "") ep.uname= curremp.uname;
            if (ep.email === "") ep.email = curremp.email;
            if (ep.jdate === "") ep.jdate= curremp.jdate;
            if (ep.phone === "")ep.phone = curremp.phone;
            if (ep.company === "") ep.company = curremp.company;
            if (ep.department === "")ep.department = curremp.department;
            if (ep.designation === "") ep.designation = curremp.designation;
        }

        dispatch(editEmployee(ep));
        window.location.reload();
    };
  return (
    <div id="edit_employee" className="modal custom-modal fade" role="dialog" aria-modal="true" >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Employee</h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="editform" onSubmit={handleSubmit} >
              <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                                <label className="col-form-label">First Name <span className="text-danger">*</span></label>
                                <input
                                className="form-control"
                                name="fname"
                                defaultValue={curremp.fname}
                                type="text"
                                onChange={onChange}
                                />
                        </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                          <label className="col-form-label">Last Name</label>
                          <input
                          className="form-control"
                          name="lname"
                          defaultValue={curremp.lname}
                          type="text"
                          onChange={onChange}
                          />
                      </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-form-label">
                        Username <span className="text-danger">*</span>
                        </label>
                        <input
                        className="form-control"
                        name="uname"
                        defaultValue={curremp.uname}
                        type="text"
                        onChange={onChange}
                        />
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-form-label">
                        Email <span className="text-danger">*</span>
                        </label>
                        <input
                        className="form-control"
                        name="email"
                        defaultValue={curremp.email}
                        type="email"
                        onChange={onChange}
                        />
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-form-label">
                        Employee ID <span className="text-danger">*</span>
                        </label>
                        <input
                        type="text"
                        defaultValue={curremp.id}
                        readOnly=""
                        name="id"
                        className="form-control floating"
                        />
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-form-label">
                        Joining Date <span className="text-danger">*</span>
                        </label>
                        <div className="cal-icon">
                        <input
                            className="form-control datetimepicker"
                            defaultValue={curremp.jdate}
                            name="jdate"
                            type="text"
                            onChange={onChange}
                        />
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-form-label">Phone </label>
                        <input
                        className="form-control"
                        name="phone"
                        defaultValue={curremp.phone}
                        type="text"
                        onChange={onChange}
                        />
                    </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                          <label className="col-form-label">Company</label>
                          <select
                          className="select"
                          name="company"
                          tabIndex="-1"
                          aria-hidden="true"
                          onChange={onChange}
                          >
                          <option defaultValue="">Select Company</option>
                          <option defaultValue="Global Technologies">
                              Global Technologies
                          </option>
                          <option defaultValue="Delta Infotech">Delta Infotech</option>
                          </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <label>
                        Department <span className="text-danger">*</span>
                        </label>
                        <select
                        className="select"
                        name="department"
                        tabIndex="-1"
                        aria-hidden="true"
                        onChange={onChange}
                        >
                        <option defaultValue="">Select Department</option>
                        <option defaultValue="Web Development">Web Development</option>
                        <option defaultValue="IT Management">IT Management</option>
                        <option defaultValue="Marketing">Marketing</option>
                        </select>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <label>
                        Designation <span className="text-danger">*</span>
                        </label>
                        <select
                        className="select"
                        name="designation"
                        tabIndex="-1"
                        aria-hidden="true"
                        onChange={onChange}
                        >
                        <option defaultValue="">Select Designation</option>
                        <option defaultValue="Web Designer">Web Designer</option>
                        <option defaultValue="Web Developer">Web Developer</option>
                        <option defaultValue="Android Developer">
                            Android Developer
                        </option>
                        </select>
                    </div>
                    </div>
              </div>
              <div className="submit-section">
                    <button type="submit" className="btn btn-primary submit-btn" data-bs-dismiss="modal"
                      aria-label="Close">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
