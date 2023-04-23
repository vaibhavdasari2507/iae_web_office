import React, { useState } from "react";
import "../../public/assests/login.css";
import { useDispatch,useSelector } from "react-redux";
import { addEmployee } from "../store/actions/employee-actions";

export default function Addemployee(props) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [idvalid, setidvalid] = useState(null);
    const [fnamevalid, setfnamevalid] = useState(null);
    const [lnamevalid, setlnamevalid] = useState(null);
    const [unamevalid, setunamevalid] = useState(null);
    const [emailvalid, setemailvalid] = useState(null);
    const [jdatevalid, setjdatevalid] = useState(null);
    const [phonevalid, setphonevalid] = useState(null);
    const [companyvalid, setcompanyvalid] = useState(null);
    const [dptvalid, setdptvalid] = useState(null);
    const [designvalid, setdesignvalid] = useState(null);
    console.log('i am in the add emp');
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(employee);
        if (
            employee.id === "" ||
            employee.fname === "" ||
            employee.lname === "" ||
            employee.uname === "" ||
            employee.email === "" ||
            employee.jdate === "" ||
            employee.phone === "" ||
            employee.company === "" ||
            employee.department === "" ||
            employee.designation === ""
        ) {
            if (employee.id === "") setidvalid(false);
            if (employee.fname === "") setfnamevalid(false);
            if (employee.lname === "") setlnamevalid(false);
            if (employee.uname === "") setunamevalid(false);
            if (employee.email === "") setemailvalid(false);
            if (employee.jdate === "") setjdatevalid(false);
            if (employee.phone === "") setphonevalid(false);
            if (employee.company === "") setcompanyvalid(false);
            if (employee.department === "") setdptvalid(false);
            if (employee.designation === "") setdesignvalid(false);
            return;
        }
        const ep = employee;
        console.log('i am ep');
        console.log(ep);
        dispatch(addEmployee(ep));
        window.location.reload();
    };
    const oncloseHandler = (e) => {
        e.preventDefault();
        setidvalid(null);
        setfnamevalid(null);
        setlnamevalid(null);
        setunamevalid(null);
        setemailvalid(null);
        setjdatevalid(null);
        setphonevalid(null);
        setcompanyvalid(null);
        setdptvalid(null);
        setdesignvalid(null);

        setEmployee({
            id: "",
            fname: "",
            lname: "",
            uname: "",
            email: "",
            jdate: "",
            phone: "",
            company: "",
            department: "",
            designation: "",
        });
    };
    return (
        <div id='add_employee' className='modal custom-modal fade' role='dialog' aria-modal='true'>
            <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>Add Employee</h5>
                        <button type='button' className='close' data-bs-dismiss='modal' aria-label='Close' onClick={oncloseHandler}>
                            <span aria-hidden='true'>×</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <form action='/employee' id='Addemp' method='post' onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label className='col-form-label'>
                                            First Name <span className='text-danger'>*</span>
                                        </label>
                                        <input className='form-control' name='fname' type='text' onChange={onChange} />
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
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label className='col-form-label'>Last Name</label>
                                        <input className='form-control' name='lname' type='text' onChange={onChange} />
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
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label className='col-form-label'>
                                            Username <span className='text-danger'>*</span>
                                        </label>
                                        <input className='form-control' name='uname' type='text' onChange={onChange} />
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
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label className='col-form-label'>
                                            Email <span className='text-danger'>*</span>
                                        </label>
                                        <input
                                            className='form-control'
                                            id='email'
                                            name='email'
                                            type='email'
                                            onChange={onChange}
                                        />
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

                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label className='col-form-label'>
                                            Employee ID <span className='text-danger'>*</span>
                                        </label>
                                        <input type='text' name='id' className='form-control' onChange={onChange} />
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
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label className='col-form-label'>
                                            Joining Date
                                            <span className='text-danger'>*</span>
                                        </label>
                                        <div className='cal-icon'>
                                            <input
                                                className='form-control datetimepicker'
                                                name='jdate'
                                                type='text'
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                    {jdatevalid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation '></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label className='col-form-label'>Phone </label>
                                        <input className='form-control' name='phone' type='text' onChange={onChange} />
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
                                <div className='col-sm-6'>
                                    <div className='form-group'>
                                        <label className='col-form-label'>Company</label>
                                        <select
                                            className='select'
                                            name='company'
                                            tabIndex='-1'
                                            aria-hidden='true'
                                            onChange={onChange}
                                        >
                                            <option value=''>Select Company</option>
                                            <option value='Global Technologies'>Global Technologies</option>
                                            <option value='Delta Infotech'>Delta Infotech</option>
                                        </select>
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
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>
                                            Department <span className='text-danger'>*</span>
                                        </label>
                                        <select
                                            className='select'
                                            name='department'
                                            tabIndex='-1'
                                            aria-hidden='true'
                                            onChange={onChange}
                                        >
                                            <option value='NA'>Select Department</option>
                                            <option value='Web Development'>Web Development</option>
                                            <option value='IT Management'>IT Management</option>
                                            <option value='Marketing'>Marketing</option>
                                        </select>
                                    </div>
                                    {dptvalid === false && (
                                        <div className='null_err'>
                                            <span>
                                                {" "}
                                                <i className='fa-solid fa-circle-exclamation '></i>
                                                field is required
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>
                                            Designation <span className='text-danger'>*</span>
                                        </label>
                                        <select
                                            className='select'
                                            name='designation'
                                            tabIndex='-1'
                                            aria-hidden='true'
                                            onChange={onChange}
                                        >
                                            <option value='NA'>Select Designation</option>
                                            <option value='Web Designer'>Web Designer</option>
                                            <option value='Web Developer'>Web Developer</option>
                                            <option value='Android Developer'>Android Developer</option>
                                        </select>
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
                            </div>
                            <div className='submit-section'>
                                <button className='btn btn-primary submit-btn' 
                                    data-bs-dismiss={
                                        fnamevalid === null
                                            ? "modal"
                                            : ""
                                    }
                                    aria-label={
                                        fnamevalid === null
                                            ? "Close"
                                            : ""
                                    }
                                    type='submit'>
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
