import Assignment3 from "./a3";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Nav from "../Nav";
import Dashboard from "../Kanbas/Dashboard";
import Courses from "../Kanbas/Courses";

function Labs() {
    return(
        <div className="container">
            <Link to="/hello">Hello</Link> |
            <Link to="/Labs/a3">A3</Link> |
            <Link to="/Kanbas">Kanbas</Link>
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Navigate to="a3" />} />*/}
            {/*</Routes>*/}

            <Nav/>
           <Assignment3/>
        </div>
    );
}
export default Labs;