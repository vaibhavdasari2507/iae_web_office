import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function Adminnavigation(props) {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

  return (
    <>
        <div className={props.activeClass ? "navigation active" : "navigation"} >
            <ul>
                <li className={splitLocation[1] === "admin" || "dashboard" ? "active-btn" : ""}>
                    < Link  to='/admin'>
                        <span className="icon">
                            <i className="fa-solid fa-people-group"></i>
                        </span>
                        <span className="title">Users</span>
                    </Link>
                </li>
                <li className={splitLocation[1] === "settings" ? "active-btn" : ""}>
                    <Link to='/settings'>
                        <span className="icon">
                            <ion-icon name="settings-outline"></ion-icon>
                        </span>
                        <span className="title">Settings</span>
                    </Link>
                </li>
            </ul>
        </div>
    </>
  )
}
