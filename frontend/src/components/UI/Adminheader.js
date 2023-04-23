import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Buffer } from 'buffer';

export default function Adminheader(props) {
    const logoutHandler = () => {
        console.log("item removed");
        localStorage.removeItem("jwttoken");
    };
    const UserObj  = useSelector((state) => state.auth);
    console.log(UserObj);
    const user = UserObj.user
    console.log("user in header: ", user);

    let base64String;
    if (user.profile) {
        const img = user.profile;
        // const base64String = Buffer.from(String.fromCharCode(...new Uint8Array(img.data.data)), 'base64').toString('base64');
        base64String = btoa(
            String.fromCharCode(...new Uint8Array(img.data.data))
        );
    }

    return (
        <React.Fragment>
            <div className='header'>
                {/* logo */}
                <div className='header-left'>
                    <a href='' className='logo'>
                        <img src={base64String ? `data:image/jpeg;base64,${base64String}` : require("../../public/Images/review3.png")} alt='' />
                    </a>
                </div>

                {/* toggle button */}
                <a id='toggle_btn' onClick={props.onToggle}>
                    <i className='fa fa-bars'></i>
                </a>

                {/* <!-- Header Title --> */}
                <div className='page-title-box'>
                    <a href='/home'>
                        <h3>WebOffice</h3>
                    </a>
                </div>

                {/* <!-- Header Menu --> */}
                <ul className='nav user-menu'>
                    {/* <!-- Search --> */}
                    <li className='nav-item'>
                        <div className='top-nav-search'>
                            <form action='search.html'>
                                <input className='form-control' type='text' placeholder='Search here' />
                                <button className='btn' type='submit'>
                                    <i className='fa fa-search'></i>
                                </button>
                            </form>
                        </div>
                    </li>
                    {/* <!-- /Search --> */}
                    
                    {/* Profile and Logout drop  */}
                    <li className='nav-item dropdown has-arrow main-drop'>
                        <a href='#' className='dropdown-toggle nav-link' data-bs-toggle='dropdown'>
                            <span className='user-img'>
                                <img alt='' src={base64String ? `data:image/jpeg;base64,${base64String}` : require("../../public/Images/review3.png")} />
                            </span>
                            <span className='status online'></span>
                            <span style={{ fontSize: "1.25rem", textTransform: "capitalize" }}> {user.name}</span>
                        </a>
                        <div className='dropdown-menu'>
                            <a className='dropdown-item' href='/employeeprofile'>
                                My Profile
                            </a>
                            <a className='dropdown-item' href='#'>
                                Settings
                            </a>
                            <a className='dropdown-item' href='/login' onClick={logoutHandler}>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
                {/* <!-- /Header Menu --> */}
            </div>
        </React.Fragment>
    );
}
