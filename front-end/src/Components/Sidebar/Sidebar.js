import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ toggleShow, click }) => {
    const sideBarClass = ['sidebar'];

    if (toggleShow) {
        sideBarClass.push('toggleShow');
    };

    return (
        <div className={sideBarClass.join(" ")}>
            <ul className="sidebar__links" onClick={click}>
                <li>
                    <Link>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <pan className="sidebar__cartBadge">0</pan>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">Shop</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
