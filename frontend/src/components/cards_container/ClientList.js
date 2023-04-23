import React from "react";
import "../../public/assests/employee.css";
import { useSelector, useDispatch } from "react-redux";
import { getClient } from "../store/actions/client-actions";
import { useEffect } from "react";

export default function ClientList(props) {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const NULLURL = "";
    const useremail = String(user.email);
    const adminrole = useremail.includes("@manager");
    console.log(adminrole);
    useEffect(() => {
        dispatch(getClient(user._id));
    }, [dispatch, user._id]);
    
    const clients = user.clients;

    // console.log("employees : ", employees);

    let ClientList = <p className='emptylist'>No Clients Found</p>;
    if (clients.length > 0) {
        ClientList = clients.map((e) => (
            <div className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3">
                <div className="profile-widget">
                    <div className="profile-img">
                        <a href="/clientprofile" className="avatar">
                            <img src={require("../../public/Images/review3.png")} alt="" />
                        </a>
                    </div>
                    {
                        adminrole && <div className="dropdown profile-action">
                        <a
                            href={NULLURL}
                            className="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href={NULLURL} className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit_client" onClick={event => props.clientHandler(event, e.id)} >
                                <i className="fa fa-pencil m-r-5"></i> Edit
                            </a>
                            <a href={NULLURL} class="dropdown-item" data-bs-toggle="modal" data-bs-target="#delete_client" onClick={event => props.clientHandler(event, e.id)}>
                                <i class="fa fa-trash-o m-r-5"></i> Delete
                            </a>
                        </div>
                    </div>
                    }
                    
                    <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                        <a href="/clientprofile">{e.fname}</a>
                    </h4>
                    <div className="small text-muted">{e.designation}</div>
                </div>
            </div>
        ));
                }

    return <React.Fragment>{ClientList}</React.Fragment>;
}
