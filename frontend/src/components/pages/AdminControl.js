import React from "react";
import Admintemplate from "../UI/Admintemplate";
import "../../public/assests/dashboard.css";
// import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Col, Row} from "react-bootstrap";
import Axios from "axios";
import DataTable from "react-data-table-component";
import customStyles from "../../public/assests/Datatable";

export default function AdminControl(props) {
  const { user } = useSelector((state) => state.auth);
  console.log("Admin user : ", user);
  const [usersList, setUsersList] = useState([])

  const getAllUsers = async () => {
    const res = await Axios.get("https://backend-9npc.onrender.com/getallusers");
    const out = await res.data;
    console.log(out);
    
    if (out.message === "success") {
      setUsersList(out.data.users)
    } else {
      console.log("Error: " + out.message);
    }
  }
  useEffect(() => {
    getAllUsers();
  }, []);

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Valid Token",
      selector: (row) => row.token,
    },
    {
      name: "Actions",
      selector: (row) => row.action,
    },
  ];

  return (
    <Admintemplate>
      {/* <!-- Page Header --> */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">
              Welcome{" "}
              <span style={{ textTransform: "capitalize" }}> Admin </span>{" "}
              !
            </h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item active">
                <a href="/admin">Users</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- /Page Header --> */}

      <Row>
        <Col lg={12}>
          <div className="d-flex justify-content-between">
            <div className="w-100 p-4 bg-grey-50 rounded-3">
              <h2 className="fs-4">List of Users</h2>
              <div className="mt-4">
                <Row>
                  <Col>
                    <DataTable
                      columns={columns}
                      data={usersList
                        .map((res, index) => ({
                          id: index+1,
                          name: res.name,
                          email: res.email,
                          token: res.tokens.length > 0 ? "Valid" : "Invalid",
                          action: (
                            <div >
                              <a
                                className=''
                                data-bs-toggle='modal'
                                data-bs-target='#edit_user'
                                >
                                {" "}
                                Edit User{" "}
                              </a>

                              <a
                                className='ms-5 '
                                data-bs-toggle='modal'
                                data-bs-target='#delete_user'
                                >
                                {" "}
                                Delete User{" "}
                              </a>
                            </div>
                          )
                        }))}
                      customStyles={customStyles}
                      pagination
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="modal custom-modal fade" id="delete_user" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="form-header">
                        <h3>Delete User</h3>
                        <p>Are you sure want to delete?</p>
                    </div>
                    <div className="modal-btn delete-action">
                        <div className="row">
                            <div className="col-6">
                                <a className="btn btn-primary continue-btn" data-bs-dismiss="modal"
                                  aria-label="Close">Delete</a>
                            </div>
                            <div className="col-6">
                                <a data-bs-dismiss="modal" aria-label="Close" className="btn btn-primary cancel-btn">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	    </div>
      <div id="edit_user" className="modal custom-modal fade" role="dialog" aria-modal="true" >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit User</h5>
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
              <form className="editform" >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="col-form-label">Name <span className="text-danger">*</span></label>
                      <input
                      className="form-control"
                      name="fname"
                      type="text"
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
                        type="email"
                        />
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
    </Admintemplate>
  );
}
