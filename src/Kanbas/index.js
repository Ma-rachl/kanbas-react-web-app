import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {useEffect, useState} from "react";
import db from "./Database";
import {Provider} from "react-redux";
import store from "./store";
import axios from "axios";

function Kanbas() {
    // const [courses, setCourses] = useState(db.courses);
    const [courses, setCourses] = useState([]);

    const URL = "http://localhost:4000/api/courses";





    const [course, setCourse] = useState({
        name: "New Course",      number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = async() => {
        const response = await axios.post(URL,course);
        setCourses([...courses, { ...course, _id: new Date().getTime() }]);
        // setCourses([response.data, ...courses,]);



    };




    const deleteCourse = async (course) => {
        console.log("Course:", course);
        const deleteURL = `${URL}/${course}`;
        console.log("Delete URL:", deleteURL);
        const response = await axios.delete(deleteURL);

        setCourses(courses.filter((c) => c._id !== course));
    };


    const updateCourse = async (course) => {
        console.log("This is inside update", course)
        const response = await axios.put(
            `${URL}/${course}`,
            course
        );

        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }
                return c;

            })
        );
        setCourse({ name: "" });
    };


    const findAllCourses = async () => {

        console.log("IN HERE",URL);
        const response = await axios.get(URL);
        setCourses(response.data);
    };

    useEffect(() => {
        findAllCourses();
    }, []);


    return (
        <Provider store={store}>
        <div className="row">
            <div className="wd-navbar col-sm-1 no-margin-padding">
            <KanbasNavigation />
            </div>
            <div className="col">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    {/*<Route path="Account" element={<Account/>} />*/}
                    <Route path="Dashboard" element={
                        <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}/>
                    } />
                    <Route path="Courses/:courseId/*" element={<Courses  courses={courses} />} />
                    <Route path="Calendar" element={<h1>Calendar</h1>} />
                </Routes>

            </div>
        </div>
        </Provider>
    );
}


// function Kanbas() {
//     return (
//         <div className="d-flex">
//             <KanbasNavigation />
//             <div>
//                 <Routes>
//                     <Route path="/" element={<Navigate to="Dashboard" />} />
//                     {/*<Route path="Account" element={<Account/>} />*/}
//                     <Route path="Dashboard" element={<Dashboard />} />
//                     <Route path="Courses/:courseId/*" element={<Courses />} />
//                     <Route path="Calendar" element={<h1>Calendar</h1>} />
//                 </Routes>
//
//             </div>
//         </div>
//     );
// }
export default Kanbas;