import ModuleList from "../Modules/ModuleList";
import ButtonGroupSide from "../Modules/ButtonGroupSide";
import React from "react";
import "./index.css";


function Home() {
    return (
        <div className="row">

            <div className="col-sm-12 col-xs-12 col-md-9 ">
                <ModuleList />
            </div>
            <div className="col d-flex justify-content-end col col-lg-3 d-none d-xl-block">
                <div>
                    <h5>Course Status</h5>

                    <ButtonGroupSide/>
                    <span>To do</span>
                    <hr className="hrSpace"/>


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
                    <hr className="hrSpace"/>

                    <div className="row align-items-center">
                        <div className="col-2 text-center">
                            <i className="fa fa-calendar"></i>
                        </div>
                        <div className="col-10">
                            <span className="text-danger small-text">Lecture</span><br/>
                            <span className="small-text text-wrap">CS 4550.126.4.1.34</span>
                        </div>
                    </div>


                    <div className="row mt-2 align-items-center">
                        <div className="col-2 text-center">
                            <i className="fa fa-calendar"></i>
                        </div>
                        <div className="col-10">
                            <span className="text-danger small-text">Lecture</span><br/>
                            <span className="small-text text-wrap">CS 4550.126.4.1.34</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default Home;