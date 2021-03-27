import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({ item, qtyHandleChange, handleRemoveFromCart }) => {
    return (
        <div className="cartItem">
            <div className="cartItem__image">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <Link to={`/products/${item.product}`} className="cartItem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartItem__price">${item.price}</p>
            <select
                className="cartItem__select"
                value={item.qty}
                onChange={(e) => qtyHandleChange(item.product, e.target.value)}
            >
                {[...Array(item.countInStock).keys()].map(opt => (
                    <option key={opt + 5} value={opt + 1}>{opt + 1}</option>
                ))}
            </select>

            <button
                className="cartItem__deleteButton"
                onClick={() => handleRemoveFromCart(item.product)}
            >
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default CartItem;
