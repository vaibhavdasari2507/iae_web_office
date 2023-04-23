import React from "react";
import { deleteProject } from "../store/actions/project-actions";
import { useDispatch } from "react-redux";

export default function DeleteProject(props) {
    const dispatch = useDispatch();

    const deleteHandler = (e) => {
        e.preventDefault();
        console.log(props.id);
        dispatch(deleteProject(props.id));
        window.location.reload();
    };
    return (
        <div className='modal custom-modal fade' id='delete_project' role='dialog'>
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>
                    <div className='modal-body'>
                        <div className='form-header'>
                            <h3>Delete Project</h3>
                            <p>Are you sure want to delete?</p>
                        </div>
                        <div className='modal-btn delete-action'>
                            <div className='row'>
                                <div className='col-6'>
                                    <a href={"/projects"} className='btn btn-primary continue-btn' onClick={deleteHandler}>
                                        Delete
                                    </a>
                                </div>
                                <div className='col-6'>
                                    <a href='' data-bs-dismiss='modal' className='btn btn-primary cancel-btn'>
                                        Cancel
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
