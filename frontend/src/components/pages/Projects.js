import React from "react";
import { useState , useEffect} from "react";
import Dashboardtemplate from "../UI/Dashboardtemplate";
import ProjectList from "../cards_container/ProjectList";
import "../../public/assests/projects.css";
import Addproject from "../popup-models/Addproject";
import Editproject from "../popup-models/Editproject";
import DeleteProject from "../popup-models/DeleteProject";
import { useSelector,useDispatch } from "react-redux";
import { getProject } from "../store/actions/project-actions";
// import { set } from "immer/dist/internal";

export default function Projects(props) {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(getProject(user._id));
    }, [dispatch, user._id]);
    
    const projects = user.projects;
    const NULLURL = "";
    const [Prj, setPrj] = useState({});
    const [id,setId] = useState({})
    const idHandler = (event, pId) => {
        projects.forEach((project) => {
            if (project._id === pId) {
                console.log(project);
                setPrj(project);
                return;
            }
        });
        setId(pId);
    };

    const useremail = String(user.email)
    const adminrole = useremail.includes("@manager")
    console.log(adminrole);

    return (
        <Dashboardtemplate>
            {/* <!-- Page Header --> */}
            <div className='page-header'>
                <div className='row align-items-center'>
                    <div className='col'>
                        <h3 className='page-title'>Projects</h3>
                        <ul className='breadcrumb'>
                            <li className='breadcrumb-item'>
                                <a href='/dashboard'>Dashboard</a>
                            </li>
                            <li className='breadcrumb-item active'>Projects</li>
                        </ul>
                    </div>
                    {
                        adminrole && <div className='col-auto float-end ms-auto'>
                        <a
                            href={NULLURL}
                            className='btn add-btn'
                            data-bs-toggle='modal'
                            data-bs-target='#create_project'
                        >
                            <i className='fa fa-plus'></i> Create Project
                        </a>
                        <div className='view-icons'>
                            <a href='/projects' className='grid-view btn active'>
                                <i className='fa fa-th'></i>
                            </a>
                            <a href={NULLURL} className='list-view btn'>
                                <i className='fa fa-bars'></i>
                            </a>
                        </div>
                    </div>
                    }
                    
                </div>
            </div>


            {/* <!-- Cards  --> */}
            {user && <ProjectList idHandler = {idHandler}/>}

            <Addproject />
            <Editproject prj={Prj} id={id}/>
            <DeleteProject id={id}/>
        </Dashboardtemplate>
    );
}
