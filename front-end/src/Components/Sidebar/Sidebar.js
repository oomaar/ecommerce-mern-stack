import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ toggleShow, click }) => {
    const sideBarClass = ['sidebar'];
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    if (toggleShow) {
        sideBarClass.push('toggleShow');
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };


    return (
        <div className={sideBarClass.join(" ")}>
            <ul className="sidebar__links" onClick={click}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidebar__cartBadge">{getCartCount()}</span>
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
