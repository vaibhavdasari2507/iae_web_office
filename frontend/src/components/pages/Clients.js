/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState , useEffect} from "react";
import Dashboardtemplate from "../UI/Dashboardtemplate";
import "../../public/assests/clients.css";
import ClientList from "../cards_container/ClientList";
import Addclient from "../popup-models/Addclient";
import Editclient from "../popup-models/Editclient";
import Deleteclient from "../popup-models/Deleteclient";
import { useSelector, useDispatch } from "react-redux";
import { getClient } from "../store/actions/client-actions";

export default function Clients() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const NULLURL = ""
    const [Client, setClient] = useState({})


    // const onSubmitHandler = (c) => {
    //     setclientsDetails( (pre) => [...pre, c]);
    // }

    const useremail = String(user.email)
    const adminrole = useremail.includes("@manager")
    console.log(adminrole);
    useEffect(() => {
        dispatch(getClient(user._id));
    }, [dispatch, user._id]);
    
    const clients = user.clients;
    const ClientHandler = (event, eId) => {
        clients.forEach(Client => {
            if (Client.id === eId) {
                console.log(Client);
                setClient(Client);
                return;
            }
        })
        // console.log(event, editId);
    };

    console.log('i am the array');
    console.log(clients);
    // let ClientsList = <p className="emptylist">No Clients Found</p>;



    return (
        <Dashboardtemplate>
            {/* <!-- Page Header --> */}
            <div className="page-header">
                <div className="row">
                    <div className="col">
                        <h3 className="page-title">Clients</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/dashboard">Dashboard</a>
                            </li>
                            <li className="breadcrumb-item active">Client</li>
                        </ul>
                    </div>
                    {
                        adminrole && <div className="col-auto float-right ml-auto">
                        <a
                            href={NULLURL}
                            className="btn add-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#add_client"
                        >
                            <i className="fa fa-plus"></i> Add Client
                        </a>
                    </div>
                    }
                    
                </div>
            </div>

            {/* <!-- Search bar  --> */}
            <div className="row filter-row">
                <div className="col-sm-6 col-md-3">
                    <div className="form-group form-focus">
                        <input
                            type="text"
                            className="form-control floating"
                            placeholder="Client ID"
                        />
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="form-group form-focus">
                        <input
                            type="text"
                            className="form-control floating"
                            placeholder="Username"
                        />
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="form-group form-focus">
                        <select className="select-focus">
                            <option>CompanyName</option>
                            <option>Globol Technologies</option>
                            <option>Infotech</option>
                            <option>Zoltan</option>
                            <option>Uracle</option>
                            <option>Delta Infotech</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <a href={NULLURL} className="btn btn-success btn-block">
                        {" "}
                        Search{" "}
                    </a>
                </div>
            </div>

            {/* employees list */}
            <div className="row staff-grid-row">
                { clients && <ClientList clientHandler={ClientHandler} />}
            </div>

            <Addclient />
            
            <Editclient client={Client} />
            <Deleteclient client={Client} />

        </Dashboardtemplate>
    );
}
