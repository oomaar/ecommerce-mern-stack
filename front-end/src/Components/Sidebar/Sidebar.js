import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectDarkMode } from "../../redux/darkModeSlice";
import { setDark } from "../../redux/darkModeSlice";
import "./Sidebar.css";

const Sidebar = ({ toggleShow, click }) => {
    const sideBarClass = ['sidebar'];
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dark = useSelector(selectDarkMode);
    const dispatch = useDispatch();

    if (toggleShow) {
        sideBarClass.push('toggleShow');
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };

    const darker = () => dispatch(setDark());

    return (
        <div className={`${sideBarClass.join(" ")} ${dark && "sidebar__dark"}`}>
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
                <li>
                    <button className="darkmodeBTN" onClick={darker}>Dark Mode</button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
