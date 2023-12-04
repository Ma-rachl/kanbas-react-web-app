import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Navigate, Route, Routes} from "react-router-dom";
import SignIn from "./users/signin";
import SignUp from "./users/signup";
import Account from "./users/account";
import Nav from "./nav";
import UserTable from "./users/table";
import Table from "./users/table";


function Project() {
    return (
        <div className="row container-fluid mt-2">
            <div className="col-3">
                <Nav/>
            </div>
            <div className="col-9">
                <h1>PROJECT</h1>
                <Routes>
                    <Route path="/" element={<Navigate to="/project/signin" />} />
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/users" element={<Table />} />
                    <Route path="/account" element={<Account/>}/>
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/account/:id" element={<Account />} />

                </Routes>
            </div>
        </div>
    );
}

export default Project;