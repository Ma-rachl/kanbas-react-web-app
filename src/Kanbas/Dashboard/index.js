import db from "../Database";
// import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
import "./index.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from "react-router-dom";
import {useState} from "react";


function Dashboard({courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {




        // const courses = db.courses;
   // const [courses, setCourses] = useState(db.courses);
   //  const [course, setCourse] = useState({
   //      name: "New Course", number: "New Number",
   //      startDate: "2023-09-10", endDate: "2023-12-15",
   //  });
   //  const addNewCourse = () => {
   //      setCourses([...courses,
   //          {
   //              ...course,
   //              _id: new Date().getTime()
   //          }]);
   //  };
   //  const deleteCourse = (courseId) => {
   //      setCourses(courses.filter((course) => course._id !== courseId));
   //  };
   //
   //  const updateCourse = () => {
   //      setCourses(
   //          courses.map((c) => {
   //              if (c._id === course._id) {
   //                  return course;
   //              } else {
   //                  return c;
   //              }
   //          })
   //      );
   //  };


    return (

        <div className="mx-5">
            <h1>Dashboard</h1>
            <hr/>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                   onChange={(e) => setCourse({...course, name: e.target.value})}/>
            <input value={course.number} className="form-control"
                   onChange={(e) => setCourse({...course, number: e.target.value})}/>
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
            <button onClick={addNewCourse}>
                Add
            </button>
            <button onClick={(event) => {
                event.preventDefault();
                updateCourse(course);
            }}>



                Update
            </button>

            <h2>Published Courses ({courses.length})</h2>
            <div className="col-sm-2 col-md-6 col-lg-12">
                <div className="d-flex flex-wrap flex-row">

                    {courses.map((course, index) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                            <div className="card m-2 h-35" style={{width: '275px'}}>
                                <div className="button-row">
                                    <div className="button-left">
                                        <button className="edit-button"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}>
                                            Edit
                                        </button>
                                    </div>
                                    <div className="button-right">

                                        <button className="delete-button"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }}>
                                            Delete
                                        </button>
                                    </div>
                                </div>


                                <img
                                    src="https://htmlcolorcodes.com/assets/images/colors/pastel-blue-color-solid-background-1920x1080.png"
                                    class="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>


                                    <h5>{course._id}</h5>
                                    <p class="card-text">
                                        2023_Spring {course.name} section 1
                                    </p>
                                    <Link
                                        key={course._id}
                                        to={`/Kanbas/Courses/${course._id}`}
                                        className="btn "
                                    >
                                        <i className="fa fa-edit course-icon fa-1x"></i>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default Dashboard;
