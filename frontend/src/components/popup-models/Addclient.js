import React from "react"
import { useState } from "react"
// eslint-disable-next-line no-unused-vars

export default function Addclient(props) {

    const [client, setClient] = useState({
        _id: "",
        fname: "",
        lname: "",
        uname: "",
        email: "",
        designation: "",
        phone: "",
        company: ""
    })

    const [idvalid, setidvalid] = useState(null);
    const [fnamevalid, setfnamevalid] = useState(null);
    const [lnamevalid, setlnamevalid] = useState(null);
    const [unamevalid, setunamevalid] = useState(null);
    const [emailvalid, setemailidvalid] = useState(null);
    const [designvalid, setdesignvalid] = useState(null);
    const [phonevalid, setphonevalid] = useState(null);
    const [companyvalid, setcompanyvalid] = useState(null);
    const [validform, setValidform] = useState(false);

    const onChange = (e) => {
        setClient({...client, [e.target.name] : e.target.value})
    }

    const SubmitHandler = (e) => {
        if(
            client._id === "" ||
            client.fname === "" ||
            client.lname === "" ||
            client.uname === "" ||
            client.company === "" ||
            client.email === "" ||
            client.designation === "" ||
            client.phone === ""
        )
        {
            if(client._id === "") setidvalid(false);
            if(client.fname === "") setfnamevalid(false);
            if(client.lname === "") setlnamevalid(false);
            if(client.uname === "") setunamevalid(false);
            if(client.email === "") setemailidvalid(false);
            if(client.company === "") setcompanyvalid(false);
            if(client.phone === "") setphonevalid(false);
            if(client.designation === "") setdesignvalid(false);
            return;
        }
        else{
            setValidform(true);
            e.preventDefault();
            props.onSubmit(client);        
        }
    }
    return (
        <div id="add_client" class="modal custom-modal fade" role="dialog" aria-modal="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role={document}>
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add Client</h5>
                        <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form id="Addclient">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">First Name <span
                                            class="text-danger">*</span></label>
                                        <input class="form-control" name="fname" type="text" onChange={onChange} />
                                    </div>
                                    {fnamevalid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation '></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Last Name</label>
                                        <input class="form-control" name="lname" type="text" onChange={onChange} />
                                    </div>
                                    {lnamevalid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation '></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Username <span
                                            class="text-danger">*</span></label>
                                        <input class="form-control" name="uname" type="text" onChange={onChange} />
                                    </div>
                                    {unamevalid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation '></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Email <span class="text-danger">*</span></label>
                                        <input class="form-control floating" name="email" type="email" onChange={onChange} />
                                    </div>
                                    {emailvalid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation '></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Client ID <span
                                            class="text-danger">*</span></label>
                                        <input class="form-control floating" name="_id" type="text" onChange={onChange} />
                                    </div>
                                    {idvalid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation '></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Company Name</label>
                                        <input class="form-control" name="company" type="text" onChange={onChange} />
                                    </div>
                                    {companyvalid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation '></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Designation</label>
                                        <input class="form-control" name="designation" type="text" onChange={onChange} />
                                    </div>
                                    {designvalid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation '></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label class="col-form-label">Phone </label>
                                        <input class="form-control" name="phone" type="text"  onChange={onChange} />
                                    </div>
                                    {phonevalid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation '></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div class="submit-section">
                                <button type="button" class="btn btn-primary submit-btn" 
                                    data-bs-dismiss={
                                        validform === true
                                            ? "modal"
                                            : ""
                                    }
                                    aria-label={
                                        validform === true
                                            ? "Close"
                                            : ""
                                    }
                                    onClick={SubmitHandler}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}