
import React from 'react';
import { Link } from 'react-router-dom';
import {Navigate, Route, Routes} from "react-router";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
const Welcome = ()=>{
    return (
        <div>
            <h2>Welcome to WebDev assignments 123 :)</h2>

            <a href="/labs/a1/index.html">Lab 1</a><br/>
            <a href="/kanbas/home.html">Assignment 1</a><br/>
            <a href="/labs/a2/index.html">Lab 2</a><br/>
            <a href="#/Labs/a3">  Lab 3</a><br/>
            <a href="#/Kanbas">Assignment 3</a><br/>
            <a href="#/Labs/a4">  Lab 4</a><br/>
            <a href="#/Kanbas"> <h3>KANBAS</h3></a><br/>
            <a href="#/signin"> <h1>KANBAS Assignment 6</h1></a><br/>
            <Routes>
                {/*<Route path="/" element={<Navigate to="/Kanbas" />} />*/}
                <Route path="/Labs/*" element={<Labs />} />
                <Route path="/Kanbas/*" element={<Kanbas />} />
                <Route path="/hello" element={<HelloWorld />} />
            </Routes>


        </div>
    )
}

export default Welcome;