import { useParams } from "react-router";
import CourseNavigation from "./CourseNavigation";
import db from "../Database";
import {Navigate, Routes, Route, useParms, useLocation} from "react-router-dom";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import "./index.css"

import 'font-awesome/css/font-awesome.min.css';


import 'bootstrap/dist/css/bootstrap.min.css';

function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    const courses = db.courses;
    const location = useLocation();
    const pathname = location.pathname;
    const filename = pathname.split("/").pop();
    return (
        <div>
            {/*<div className="breadcrumb-item mx-4">*/}
            {/*    <i className="fa fa-bars fa-regular fa-2x icon-color mx-2"><span className="breadcrumb-item"><a className="class-breadcrumb" href="#">{course.number}</a>*/}
            {/*        <div className="breadcrumb-item"> <span>> </span></div>*/}
            {/*    </span></i>*/}


            {/*</div>*/}

            <div className="row">
                <div className="d-flex align-items-center">
                    <i className="fa fa-bars fa-regular fa-2x icon-color" style={{ marginRight: '5px' }}></i>
                    <a className="class-breadcrumb" href="#" style={{ marginRight: '5px' }}>{course.number}</a>
                    <span style={{ marginRight: '5px' }}>&gt;</span>
                    {filename}
                </div>
            </div>






            <h6 className="class-breadcrumb mt-4">{course.number}</h6>
            <CourseNavigation />
            <div>
                <div
                    className="overflow-y-scroll position-fixed bottom-0 end-0"
                    style={{
                        left: "320px",
                        top: "50px",
                    }}
                >

                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />

                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />




                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}/>
                        />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>
            </div>




        </div>


    );
}

export default Courses;