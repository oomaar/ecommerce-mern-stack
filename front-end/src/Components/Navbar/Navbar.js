import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import { selectDarkMode } from "../../redux/darkModeSlice";
import { setDark } from "../../redux/darkModeSlice";

const Navbar = ({ click }) => {
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dark = useSelector(selectDarkMode);
    const dispatch = useDispatch();

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };

    const darker = () => dispatch(setDark());

    return (
        <nav className={`navbar ${dark && 'navbar__dark'}`}>
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="cart__link">
                        <span>
                            <i className="fas fa-shopping-cart"></i>
                        </span>
                        Cart
                        <span className="cartLogo__badge">{getCartCount()}</span>
                    </Link>
                </li>
                <li>
                    <button className="navBTN" onClick={darker}>Dark Mode</button>
                </li>
            </ul>

            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navbar;
