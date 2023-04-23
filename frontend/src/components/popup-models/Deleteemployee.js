import React from 'react'
import { deleteEmployee } from "../store/actions/employee-actions";
import { useDispatch } from "react-redux";

export default function Deleteemployee(props) {
    const dispatch = useDispatch();

    const onsubmitHandler = (e) => {
        e.preventDefault();
        console.log(props.emp._id);
        dispatch(deleteEmployee(props.emp._id));
        window.location.reload();
    }

    return (
        <div className="modal custom-modal fade" id="delete_employee" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="form-header">
                            <h3>Delete Employee</h3>
                            <p>Are you sure want to delete?</p>
                        </div>
                        <div className="modal-btn delete-action">
                            <div className="row">
                                <div className="col-6">
                                    <a onClick={onsubmitHandler} className="btn btn-primary continue-btn" data-bs-dismiss="modal"
                                        aria-label="Close">Delete</a>
                                </div>
                                <div className="col-6">
                                    <a href="/employee" data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
