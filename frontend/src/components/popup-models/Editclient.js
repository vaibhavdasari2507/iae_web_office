import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editClient } from "../store/actions/client-actions";

export default function Editclient(props) {
    const curclient = props.client;
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    console.log(user);
    const [client, setClient] = useState({
        uid: user._id,
        id: "",
        fname: "",
        lname: "",
        uname: "",
        email: "",
        designation: "",
        phone: "",
        company: "",
    });

    const onChange = (e) => {
        setClient({ ...client, [e.target.name]: e.target.value });
        console.log(client);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const cli = client;
        console.log("in handle submit");
        console.log(cli);
        if (
            cli.id === "" ||
            cli.fname === "" ||
            cli.lname === "" ||
            cli.uname === "" ||
            cli.email === "" ||
            cli.jdate === "" ||
            cli.phone === "" ||
            cli.company === "" ||
            cli.department === "" ||
            cli.designation === ""
        ) {
            if (cli.id === "") cli.id = curclient.id;
            if (cli.fname === "") cli.fname = curclient.fname;
            if (cli.lname === "") cli.lname = curclient.lname;
            if (cli.uname === "") cli.uname = curclient.uname;
            if (cli.email === "") cli.email = curclient.email;
            if (cli.jdate === "") cli.jdate = curclient.jdate;
            if (cli.phone === "") cli.phone = curclient.phone;
            if (cli.company === "") cli.company = curclient.company;
            if (cli.department === "") cli.department = curclient.department;
            if (cli.designation === "") cli.designation = curclient.designation;
        }

        dispatch(editClient(cli));
        window.location.reload();
    };

    return (
        <div
            id="edit_client"
            class="modal custom-modal fade"
            role="dialog"
            aria-modal="true"
        >
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Client</h5>
                        <button
                            type="button"
                            class="close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form
                            class="editform"
                            onSubmit={handleSubmit}
                        >
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">
                                            First Name <span class="text-danger">*</span>
                                        </label>
                                        <input
                                            class="form-control"
                                            name="fname"
                                            defaultValue={props.client.fname}
                                            type="text"
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Last Name</label>
                                        <input
                                            class="form-control"
                                            name="lname"
                                            defaultValue={props.client.lname}
                                            type="text"
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">
                                            Username <span class="text-danger">*</span>
                                        </label>
                                        <input
                                            class="form-control"
                                            name="uname"
                                            defaultValue={props.client.uname}
                                            type="text"
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">
                                            Email <span class="text-danger">*</span>
                                        </label>
                                        <input
                                            class="form-control"
                                            name="email"
                                            defaultValue={props.client.email}
                                            type="email"
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">
                                            client ID <span class="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={props.client.id}
                                            readOnly=""
                                            name="_id"
                                            class="form-control floating"
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Phone </label>
                                    <input
                                        class="form-control"
                                        name="phone"
                                        defaultValue={props.client.phone}
                                        type="text"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <label class="col-form-label">Company</label>
                                    <select
                                        className="select"
                                        name="company"
                                        tabIndex="-1"
                                        aria-hidden="true"
                                        defaultValue={props.client.company}
                                        onChange={onChange}
                                    >
                                        <option defaultValue="">Select Company</option>
                                        <option defaultValue="Global Technologies">
                                            Global Technologies
                                        </option>
                                        <option defaultValue="Delta Infotech">
                                            Delta Infotech
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="col-form-label">Designation</label>
                                    <input
                                        className="form-control"
                                        name="designation"
                                        type="text"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            </div>
                         
                            <div class="submit-section">
                                <button type="submit" class="btn btn-primary submit-btn">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
