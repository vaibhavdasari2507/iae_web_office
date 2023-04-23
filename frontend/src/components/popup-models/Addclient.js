import React from "react"
import { useState } from "react"
import { useDispatch,useSelector } from "react-redux";
import { addClient } from "../store/actions/client-actions";

// eslint-disable-next-line no-unused-vars

export default function Addclient() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [client, setClient] = useState({
        uid:user._id,
        id: "",
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
            client.id === "" ||
            client.fname === "" ||
            client.lname === "" ||
            client.uname === "" ||
            client.company === "" ||
            client.email === "" ||
            client.designation === "" ||
            client.phone === ""
        )
        {
            if(client.id === "") setidvalid(false);
            if(client.fname === "") setfnamevalid(false);
            if(client.lname === "") setlnamevalid(false);
            if(client.uname === "") setunamevalid(false);
            if(client.email === "") setemailidvalid(false);
            if(client.company === "") setcompanyvalid(false);
            if(client.phone === "") setphonevalid(false);
            if(client.designation === "") setdesignvalid(false);
            return;
        }
        const c = client;
        console.log('i am c');
        console.log(c);
        dispatch(addClient(c));
        window.location.reload();

    }
    return (
        <div id="add_client" className="modal custom-modal fade" role="dialog" aria-modal="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role={document}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Client</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="Addclient">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">First Name <span
                                            className="text-danger">*</span></label>
                                        <input className="form-control" name="fname" type="text" onChange={onChange} />
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
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Last Name</label>
                                        <input className="form-control" name="lname" type="text" onChange={onChange} />
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
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Username <span
                                            className="text-danger">*</span></label>
                                        <input className="form-control" name="uname" type="text" onChange={onChange} />
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
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Email <span className="text-danger">*</span></label>
                                        <input className="form-control floating" name="email" type="email" onChange={onChange} />
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
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Client ID <span
                                            className="text-danger">*</span></label>
                                        <input className="form-control floating" name="id" type="text" onChange={onChange} />
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
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Company Name</label>
                                        <input className="form-control" name="company" type="text" onChange={onChange} />
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
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Designation</label>
                                        <input className="form-control" name="designation" type="text" onChange={onChange} />
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
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label className="col-form-label">Phone </label>
                                        <input className="form-control" name="phone" type="text"  onChange={onChange} />
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
                            <div className="submit-section">
                                <button type="button" className="btn btn-primary submit-btn" 
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