import React from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import ButtonGroupSide from "./ButtonGroupSide";
import "./index.css"

{/*<ButtonGroupSide buttons={["Collapse All", "View Progress", "PublishAll","Module",""]}/>*/
}

function ModuleList() {

    const {courseId} = useParams();
    const modules = db.modules;
    return (



        <div className="">

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

            <ul className="list-group mt-10">
                {
                    modules
                        .filter((module) => module.course === courseId)
                        .map((module, index) => (
                            <li key={index}
                                className=" list-group-item-secondary list-group-item col-10  module-item text-start">
                                <div className="row">
                                    <div className="col-sm-1">
                                        <i className="fa fa-ellipsis-v "></i>
                                    </div>
                                    <h4>{module.name}</h4>
                                    <p>{module.description}</p>
                                </div>
                                <div className="float-end d-flex justify-content-between symbols">

                                    <i className="float-end fa fa-regular fa-check-circle fa-2x check-icon"></i>
                                    <i className="float-end fas fa-regular fa-ellipsis-v fa-2x "> </i>
                                </div>


                            </li>
                        ))
                }
            </ul>



        </div>







);
}

export default ModuleList;