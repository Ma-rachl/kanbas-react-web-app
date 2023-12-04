import Kanbas from "./Kanbas";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import {HashRouter} from "react-router-dom";


import {Routes, Route, Navigate} from "react-router";
import Welcome from "./Welcome";
import Project from "./project";
import Signin from "./project/users/signin";
function App() {
    return (
        <HashRouter>
            <div>
                <Routes>
                    {/*<Route path="/" element={<Welcome/>} />*/}
                    {/*<Route path="/hello"    element={<HelloWorld/>}/>*/}
                    {/*<Route path="/Labs/*"   element={<Labs/>}/>*/}
                    {/*<Route path="/Kanbas/*" element={<Kanbas/>}/>*/}
                    <Route path="/" element={<Navigate to="/project" />} />
                    <Route path="/project/*" element={<Project />} />
                    <Route path="/Labs/*" element={<Labs />} />
                    <Route path="/Kanbas/*" element={<Kanbas />} />
                    <Route path="/hello" element={<HelloWorld />} />




                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;


