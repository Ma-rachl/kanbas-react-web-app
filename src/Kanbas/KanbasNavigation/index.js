import {Link, useLocation} from "react-router-dom";
//import "/Kanbas/navbar2.css";
// import "/public/kanbas/home.css";
// import "/public/kanbas/innernav.css";
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import db from "../Database";

function KanbasNavigation() {
    const links = db.navbar;
    const {pathname} = useLocation();
    return (
        <div className="d-flex">
            <div className="nav list-group nav-bar-group flex-column">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={`/Kanbas/${link.name}`}
                        className={`list-group-item  navbar-text text-white nav-bar-item ${pathname.includes(link.name) && "active"}`}>

                        <i className={`fa ${link.icon} fa-3x fa-regular text-danger`}></i>{link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default KanbasNavigation;