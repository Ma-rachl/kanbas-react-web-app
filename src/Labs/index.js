import Assignment3 from "./a3";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import Nav from "../Nav";
import Dashboard from "../Kanbas/Dashboard";
import Courses from "../Kanbas/Courses";
import Assignment4 from "./a4";
import {Provider} from "react-redux";
import store from "./store";
import Assignment5 from "./a5";
function Labs() {
    return(
        <Provider store={store}>
        <div className="container">
            <Link to="a3">Assignment 3</Link>
            <Link to="a4">Assignment 4</Link>
            <Link to="a5">Assignment 5</Link>
            {/*<Nav/>*/}
         <Routes>
             <Route path="/"
                    element={<Navigate
                        to="a3"/>}/>
             <Route path="a3"
                    element={<Assignment3/>}/>
             <Route path="a4"
                    element={<Assignment4/>}/>
             <Route path="a5"
                    element={<Assignment5/>}/>

         </Routes>

            {/*<Nav/>*/}
           {/*<Assignment3/>*/}
        </div>
        </Provider>
    );
}
export default Labs;