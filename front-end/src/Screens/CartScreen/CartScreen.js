import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem } from "../../Components";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { selectDarkMode } from "../../redux/darkModeSlice";
import "./CartScreen.css";

const CartScreen = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const dark = useSelector(selectDarkMode);

    const qtyHandleChange = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0);
    };

    return (
        <div className={`cartscreen ${dark && 'cartscreen__dark'}`}>
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div className={`${dark && 'darkCartScreenText'}`}>
                        Your cart is empty
                        <Link to="/" className={`back__button ${dark && 'back__button__dark'}`}>
                            Back to Shop
                        </Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem
                        key={item.countInStock + 150 + item.imageUrl}
                        item={item}
                        qtyHandleChange={qtyHandleChange}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />
                ))}
            </div>
            <div className={`cartscreen__right ${dark && 'cartscreen__right__dark'}`}>
                <div className={`cartscreen__info ${dark && 'cartscreen__info__dark'}`}>
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div className={`cartscreen__button ${dark && 'cartscreen__button__dark'}`}>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartScreen;
