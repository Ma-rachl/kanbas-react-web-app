import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import "./index.css"
import {Route, Routes} from "react-router";
import AssignmentEditor from "./AssignmentEditor";
import {setAssignment} from "./assignmentReducer";
import {deleteModule, setModule} from "../Modules/modulesReducer";
import {addAssignment} from "./assignmentReducer";
import {useDispatch, useSelector} from "react-redux";
function Assignments() {

    // const assignments = db.assignments;
    const assignments = useSelector((state) => state.assignmentReducer.assignments);
    const assignment = useSelector((state) => state.assignmentReducer.assignment);
    const dispatch = useDispatch();
    const {courseId} = useParams();




    // const courseAssignments = assignments.filter(
    //     (assignment) => assignment.course === courseId);
    // const [assignmentsList, setAssignmentsList] = useState(courseAssignments);
    console.log(db.assignments);
    useEffect(() => {
        console.log("Assignments from Redux:", assignments);
    }, [assignments]);



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
                        {/* eslint-disable-next-line no-undef */}
                        <Link  to={`/Kanbas/Courses/${courseId}/Assignments/create`}>
                            <button type="button" className="btn btn-danger text-nowrap btn-sm mx-2">+ Assignment</button>
                        </Link>

                            {/*<button type="button" className="btn btn-danger text-nowrap btn-sm mx-2">+ Module</button>*/}
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
                    <i className="fa fa-ellipsis-v fa-2x">ASSIGNMENTS</i>
                    <i className="fa fa-ellipsis-v fa-2x"></i>
                </div>

                <ul className=" list-group list-group-item col-md-12  assignment-item ">
                    {
                        assignments
                            .filter((assignment) => assignment.course === courseId)
                            .map((assignment, index) => (
                                <li key={index}
                                    className=" list-group-item-secondary list-group-item col-10  module-item text-start">


                                    <div className="row">
                                        <div className="col-sm-1">
                                            <i className="fa fa-ellipsis-v "></i>
                                        </div>
                                        {/*<button className="edit-button-2"*/}
                                        {/*        onClick={() => dispatch(setAssignments(assignment))}>*/}
                                        {/*    Edit*/}
                                        {/*</button>*/}

                                        {/*<button className="delete-button-2"*/}
                                        {/*        onClick={() => dispatch(deleteModule(module._id))}>*/}
                                        {/*    Delete*/}
                                        {/*</button>*/}

                                        <Link
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                            className="text-decoration-none text-dark list-group-item"
                                        ><h4>{assignment.title}</h4>   </Link>
                                        <p>{assignment.description}</p>
                                        <p>Due Date: {assignment.duedate}</p>

                                    </div>
                                    <div className="float-end d-flex justify-content-between symbols">

                                        <i className="float-end fa fa-regular fa-check-circle fa-2x check-icon"></i>
                                        <i className="float-end fa fa-regular fa-ellipsis-v fa-2x "> </i>
                                    </div>


                                </li>
                            ))
                    }
                </ul>


                {/*<div className=" list-group list-group-item col-md-12  assignment-item ">*/}
                {/*    <tbody>*/}
                {/*    {courseAssignments.map((assignment) => (*/}
                {/*        <row key={courseId} className="an-assignment">*/}
                {/*            <td>*/}
                {/*                <i className="fa fa-ellipsis-v fa-2x assignment-icons float-start"></i>*/}
                {/*                <i className="fa fa-book fa-2x assignment-icons float-start text-success"></i>*/}
                {/*            </td>*/}
                {/*            <td>*/}

                {/*                <Link*/}
                {/*                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}*/}
                {/*                    className="text-decoration-none text-dark list-group-item"*/}
                {/*                >*/}
                {/*                    <span className="text-left h4">{assignment.title}</span>*/}
                {/*                </Link>*/}


                {/*                <p>Week X - SETUP - Week Starting on Monday, September 5th | Due Sep 18, 2022 at 11:59pm*/}
                {/*                    |*/}
                {/*                    100 pts</p>*/}
                {/*            </td>*/}
                {/*            <td>*/}
                {/*                <i className="fa fa-regular fa-ellipsis-v fa-2x assignment-icons float-end"></i>*/}
                {/*                <i className="fa fa-regular fa-check-circle fa-2x check-icon assignment-icons float-end"></i>*/}
                {/*            </td>*/}
                {/*        </row>*/}
                {/*    ))}*/}
                {/*    </tbody>*/}
                {/*    /!*<tbody>*!/*/}
                {/*    /!*{assignmentsList.map((assignment) => (*!/*/}
                {/*    /!*    <row key={assignment._id} className="an-assignment">*!/*/}
                {/*    /!*        <td>*!/*/}
                {/*    /!*            <i className="fa fa-ellipsis-v fa-2x assignment-icons float-start"></i>*!/*/}
                {/*    /!*            <i className="fa fa-book fa-2x assignment-icons float-start text-success"></i>*!/*/}
                {/*    /!*        </td>*!/*/}
                {/*    /!*        <td>*!/*/}
                {/*    /!*            <Link*!/*/}
                {/*    /!*                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}*!/*/}
                {/*    /!*                className="text-decoration-none text-dark list-group-item"*!/*/}
                {/*    /!*            >*!/*/}
                {/*    /!*                <span className="text-left h4">{assignment.title}</span>*!/*/}
                {/*    /!*            </Link>*!/*/}
                {/*    /!*            <p>Week X - SETUP - Week Starting on Monday, September 5th | Due {assignment.dueDate} | {assignment.points} pts</p>*!/*/}
                {/*    /!*        </td>*!/*/}
                {/*    /!*        <td>*!/*/}
                {/*    /!*            <i className="fa fa-regular fa-ellipsis-v fa-2x assignment-icons float-end"></i>*!/*/}
                {/*    /!*            <i className="fa fa-regular fa-check-circle fa-2x check-icon assignment-icons float-end"></i>*!/*/}
                {/*    /!*        </td>*!/*/}
                {/*    /!*    </row>*!/*/}
                {/*    /!*))}*!/*/}
                {/*    /!*</tbody>*!/*/}








                {/*</div>*/}
            </div>

        </div>
    );
}

export default Assignments;