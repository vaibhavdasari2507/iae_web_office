import React from 'react'
import { deleteClient } from "../store/actions/client-actions";
import { useDispatch } from "react-redux";

export default function Deleteclient(props) {
    const dispatch = useDispatch();

    const onsubmitHandler = (e) => {
        e.preventDefault();
        console.log(props.client._id);
        dispatch(deleteClient(props.client._id));
        window.location.reload();
    }

    return (
        <div className="modal custom-modal fade" id="delete_client" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="form-header">
                            <h3>Delete client</h3>
                            <p>Are you sure want to delete?</p>
                        </div>
                        <div className="modal-btn delete-action">
                            <div className="row">
                                <div className="col-6">
                                    <a onClick={onsubmitHandler} className="btn btn-primary continue-btn">Delete</a>
                                </div>
                                <div className="col-6">
                                    <a href="/client" data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}