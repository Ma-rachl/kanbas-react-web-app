import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import ButtonGroupSide from "./ButtonGroupSide";
import "./index.css"
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import * as client from "./client";
import {findModulesForCourse, createModule} from "./client";

{/*<ButtonGroupSide buttons={["Collapse All", "View Progress", "PublishAll","Module",""]}/>*/
}

function ModuleList() {
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const {courseId} = useParams();
    // const [modules,setModules] = useState(db.modules);
    // const [module, setModule] = useState({
    //     name: "New Module",
    //     description: "New Description",
    //     course: courseId,
    // });

    // const addModule = (module) => {
    //     setModules([
    //         { ...module, _id: new Date().getTime().toString() },
    //         ...modules,
    //     ]);
    // };
    //
    // const deleteModule = (moduleId) => {
    //     setModules(modules.filter(
    //         (module) => module._id !== moduleId));
    // };
    // const updateModule = () => {
    //     setModules(
    //         modules.map((m) => {
    //             if (m._id === module._id) {
    //                 return module;
    //             } else {
    //                 return m;
    //             }
    //         })
    //     );
    // }
    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };




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
                <li className="list-group-item">
                    {/*<button   onClick={() => dispatch(addModule({ ...module, course: courseId }))} >Add</button>*/}
                    <button  onClick={handleUpdateModule}>
                        Update
                    </button>
                    <button
                        onClick={handleAddModule}>
                        Add
                    </button>

                    <input value={module.name}
                           onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                    />
                    <textarea className="desc-box" value={module.description} onChange={(e) =>

                    dispatch(setModule({ ...module, description: e.target.value }))}
                    />
                </li>

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
                                    <button className="edit-button-2"
                                            onClick={() => dispatch(setModule(module))}>
                                        Edit
                                    </button>

                                    <button className="delete-button-2"
                                            onClick={() =>handleDeleteModule(module._id)}>
                                        Delete
                                    </button>

                                    <h4>{module.name}</h4>
                                    <p>{module.description}</p>
                                </div>
                                <div className="float-end d-flex justify-content-between symbols">

                                    <i className="float-end fa fa-regular fa-check-circle fa-2x check-icon"></i>
                                    <i className="float-end fa fa-regular fa-ellipsis-v fa-2x "> </i>
                                </div>


                            </li>
                        ))
                }
            </ul>



        </div>







);
}

export default ModuleList;