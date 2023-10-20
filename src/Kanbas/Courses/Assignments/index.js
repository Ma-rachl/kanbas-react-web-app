import React from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import ModuleList from "../Modules/ModuleList";
import "./index.css"
import {Route, Routes} from "react-router";
import AssignmentEditor from "./AssignmentEditor";

function Assignments() {
    const {courseId} = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>


            <div className="col-12 col-sm-11 col-md-11 col-lg-10 col-xl-8 d-block">

                <div className="row flex-nowrap ">
                    <div className="col-md-4 col-sm-4"></div>
                    <div className="col-sm-1 text-end mx-3">
                        <button type="button" className="btn btn-light text-nowrap  btn-sm ">Collapse All</button>
                    </div>
                    <div className="col-sm-1 text-end mx-4">
                        <button type="button" className="btn btn-light  text-nowrap btn-sm">View Progress</button>
                    </div>
                    <div className="col-sm-1 text-end mx-4">
                        <button type="button" className="btn btn-light text-nowrap btn-sm ml">
                            <i className="fa fa-check-circle text-success">Publish All</i>
                        </button>
                    </div>
                    <div className="col-sm-1 mx-5 ">
                        <button type="button" className="btn btn-danger text-nowrap btn-sm mx-2">+ Module</button>
                    </div>
                    <div className="col-sm-1 ">
                        <button type="button" className="btn btn-light btn-sm ">
                            <i className=" fa fa-ellipsis-v "></i>
                        </button>
                    </div>
                </div>


                <hr/>
                <div
                    className=" list-group-item-secondary list-group-item col-sm-12 col-xs-12 col-md-12  module-item text-start">
                    <i className="fas fa-ellipsis-v fa-2x">ASSIGNMENTS</i>
                    <i className="fa fa-ellipsis-v fa-2x"></i>
                </div>


                <div className=" list-group list-group-item col-md-12  assignment-item ">
                    <tbody>
                    {courseAssignments.map((assignment) => (
                        <row key={courseId} className="an-assignment">
                            <td>
                                <i className="fa fa-ellipsis-v fa-2x assignment-icons float-start"></i>
                                <i className="fa fa-book fa-2x assignment-icons float-start text-success"></i>
                            </td>
                            <td>

                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="text-decoration-none text-dark list-group-item"
                                >
                                    <span className="text-left h4">{assignment.title}</span>
                                </Link>


                                <p>Week X - SETUP - Week Starting on Monday, September 5th | Due Sep 18, 2022 at 11:59pm
                                    |
                                    100 pts</p>
                            </td>
                            <td>
                                <i className="fas fa-regular fa-ellipsis-v fa-2x assignment-icons float-end"></i>
                                <i className="fa fa-regular fa-check-circle fa-2x check-icon assignment-icons float-end"></i>
                            </td>
                        </row>
                    ))}
                    </tbody>


                    {/*    <div className="row">*/}
                    {/*        <div className="col-sm-1 ">*/}
                    {/*            <i className="fa fa-ellipsis-v fa-2x float-start assignment-icons"></i>*/}
                    {/*            <i className="fa fa-book fa-2x float-start text-success  assignment-icons"></i>*/}

                    {/*        </div>*/}
                    {/*        <div className="col">*/}
                    {/*            <i className="float-end fas fa-regular fa-ellipsis-v fa-2x assignment-icons"> </i>*/}
                    {/*            <i className="float-end fa fa-regular fa-check-circle fa-2x check-icon assignment-icons"></i>*/}
                    {/*    {courseAssignments.map((assignment) => (*/}
                    {/*        <Link*/}
                    {/*            key={assignment._id}*/}
                    {/*            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}*/}
                    {/*            className="list-group-item">*/}
                    {/*            <a href="/kanbas/assignments/edit.html" className="text-decoration-none text-dark"><span*/}
                    {/*                className="text-left h6">{assignment.title}</span></a>*/}
                    {/*            Week 0 - SETUP - Week Starting on Monday September 5th |*/}
                    {/*        Due Sep 18,2022 at 11:59pm | 100 pts*/}
                    {/*    <hr/>*/}
                    {/*        </Link>*/}
                    {/*    ))}*/}
                    {/*        </div>*/}
                    {/*</div>*/}
                </div>
            </div>

        </div>
    );
}

export default Assignments;