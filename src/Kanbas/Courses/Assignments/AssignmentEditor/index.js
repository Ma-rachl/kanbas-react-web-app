import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
    const {assignmentId} = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="col-md-10">
            <h4>Assignment Name </h4>
            <input value={assignment.title}
                   className="form-control mb-2"/>

            {/*Text box*/}
            <textarea className="form-control p-3 mt-4 "
                      id="textarea1"
                      rows="3"></textarea>


            <div className="row mt-4">
                <div className="col-sm-2">
                    Points
                </div>
                <div className="col-sm-6 ">
                    <input type="number"
                           className="form-control"
                           id="numbers"
                           value="100"/>
                </div>


            </div>

            <div className="row mt-4">
                <div className="col-sm-2">
                    Assignment Group
                </div>
                <div className="col-sm-6 ">
                    <select className="form-select" id="assignmentGroup">
                        <option selected>ASSIGNMENTS</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>


            </div>

            <div className="row mt-4">
                <div className="col-sm-2 ">
                    Display grade as
                </div>
                <div className="col-sm-6 ">
                    <select className="form-select" id="gradeType">
                        <option selected>Percentage</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="row mt-4">
                    <div className="col-sm-2 ">

                    </div>
                    <div className="col-sm-6 ">
                        <div className="form-check">
                            <input className="form-check-input"
                                   type="checkbox" id="r6"/>
                            <label className="form-check-label" htmlFor="r6">
                                Do not count this assignment towards the final grade</label>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-sm-2 ">

                    </div>
                    <div className="col-sm-6 border border-dark ">

                        <div className="row mt-4">
                            <div className="col-sm-6">
                                <select className="form-select" id="submissionType">
                                    <option selected>Online</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <h6 className="mt-4">Online Entry Options</h6>

                        <div className="row mt-2 p-3">


                            <div className="form-check ">
                                <input className="form-check-input" type="checkbox" value="" id="check1"/>
                                <label>
                                    Text Entry

                                </label>

                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="check2"/>
                                <label>
                                    Website URL
                                </label>

                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="check3"/>
                                <label>
                                    Media Recordings
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="check4"/>
                                <label>
                                    Student Annotation
                                </label>

                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="check5"/>
                                <label>
                                    File Uploads
                                </label>

                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-sm-2 ">

                        </div>
                        <div className="col-sm-6 border border-dark ">

                            <form>

                                <div className="row mb-3 mt-4">
                                    <label htmlFor="assignTo" className=" col-form-label h4">Assign To</label>
                                    <div className="col-sm-10">
                                        <div className="input-group mb-3" id="assignTo">
                                            <span className="input-group-text">$</span>
                                            <span className="input-group-text">0.00</span>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-sm-10">
                                    <label htmlFor="due" className=" col-form-label h4">Due</label>
                                    <div className="col-sm-10">
                                        <div className="input-group mb-3" id="due">
                                            <input type="date"
                                                   className="form-control"
                                                   placeholder="Sep 18,2023,11:59PM"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="available" className=" col-form-label h4">Available from</label>
                                        <div className="col-sm-10">
                                            <div className="input-group mb-3" id="available">
                                                <input type="date"
                                                       className="form-control"
                                                       placeholder="Sep 18,2023,11:59PM"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="until" className=" col-form-label h4">Until</label>
                                        <div className="col-sm-10">
                                            <div className="input-group mb-3" id="until">
                                                <input type="date"
                                                       className="form-control"
                                                       placeholder="Sep 18,2023,11:59PM"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                                    <button type="submit" className="btn btn-secondary">+Add</button>

                                </div>

                        <row className="justify-content-end float-end">
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                                  className="btn btn-danger float-end">
                                Cancel
                            </Link>
                            <button onClick={handleSave} className="btn btn-secondary me-2 float-end">
                                Save
                            </button>
                        </row>

                        </div>

                    </div>

                </div>
            </div>
            );
            }


            export default AssignmentEditor;

