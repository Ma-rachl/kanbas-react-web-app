
import React from 'react';
import { Link } from 'react-router-dom';
const Welcome = ()=>{
    return (
        <div>
            <h2>Welcome to WebDev assignments 123 :)</h2>

            <a href="/labs/a1/index.html">Lab 1</a><br/>
            <a href="/kanbas/home.html">Assignment 1</a><br/>
            <a href="/labs/a2/index.html">Lab 2</a><br/>
            <a href="#/Labs/a3">  Lab 3</a><br/>
            <a href="#/Kanbas">Assignment 3</a>
        </div>
    )
}

export default Welcome;