import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Zoom Meetings","Assignments", "Quizzes","Grades","People","Discussions","Announcements","Pages","Files","Rubrics","Collaborations","Syllabus"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={` mx-2 inner-nav-links ${pathname.includes(link) && "active active-bar"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}


export default CourseNavigation;