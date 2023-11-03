import {Link} from "react-router-dom";

function Card({ course }) {
    return (
        <Link to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
            {course.name}
        </Link>
    );
}

export default Card;