import ModuleList from "./ModuleList";
import ButtonGroupSide from "./ButtonGroupSide";
import React from "react";

function Modules() {
    return (
        <div className="row">
            <div className="col d-flex justify-content-end">

                <button className="btn btn-light ">
                    <i className="fas fa-glasses mx-2"></i>
                    Student View
                </button>
            </div>

            <hr/>
            <div className="col-sm-12 col-xs-12 col-md-9  ">
                <ModuleList/>
            </div>

            <div className="col d-flex justify-content-end col col-lg-3 d-none d-xl-block">
                <h5>Course Status</h5>
                <div className="row">
                    <div className="col-4  ">
                        <button className="btn btn-light ">UnPublished</button>
                    </div>
                    <div className="col-4 mx-5 text-end">
                        <button className="btn btn-success  ">Published</button>
                    </div>

                </div>
                <ButtonGroupSide/>
                <span>To do</span>
                <hr class="hrSpace"/>


                <div className="row align-items-center ">
                    <div className="col-2 text-center">
                        <i className="fa fa-exclamation-circle text-danger"></i>
                    </div>
                    <div className="col-10">
                        <span className="text-danger small-text">Grade A1-ENV</span><br/>
                        <span className="small-text text-wrap">Grade A1-ENV + HTML</span>
                    </div>
                </div>


                <div className="row mt-2">
                    <div className="col-sm-6">
                        <h6 className="mt-1">Coming up</h6>
                    </div>
                    <div className="col mx-1">
                        <i className="fa fa-calendar text-danger"/>
                        <span className="text-danger small-text mx-2">View Calendar</span>

                    </div>


                </div>
                <hr class="hrSpace"/>

                <div className="row align-items-center">
                    <div className="col-2 text-center">
                        <i className="fa fa-calendar-day"></i>
                    </div>
                    <div className="col-10">
                        <span className="text-danger small-text">Lecture</span><br/>
                        <span className="small-text text-wrap">CS 4550.126.4.1.34</span>
                    </div>
                </div>


                <div className="row mt-2 align-items-center">
                    <div className="col-2 text-center">
                        <i className="fa fa-calendar-day"></i>
                    </div>
                    <div className="col-10">
                        <span className="text-danger small-text">Lecture</span><br/>
                        <span className="small-text text-wrap">CS 4550.126.4.1.34</span>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default Modules;