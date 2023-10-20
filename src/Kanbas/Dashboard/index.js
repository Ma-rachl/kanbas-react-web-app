import db from "../Database";
// import "./index.css";
import 'font-awesome/css/font-awesome.min.css';


import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";



function Dashboard() {
    const courses = db.courses;
    return (
        <div className="mx-5">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <div className="col-sm-2 col-md-6 col-lg-12">
                <div className="d-flex flex-wrap flex-row">

                    {courses.map((course, index) => (
                        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                        <div className="card m-2 h-35"  style={{ width: '275px' }}>
                            <img src="https://htmlcolorcodes.com/assets/images/colors/pastel-blue-color-solid-background-1920x1080.png" class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{course.name}</h5>


                                <h5>{course.id}</h5>
                                <p class="card-text">
                                 2023_Spring {course.name}  section 1
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
