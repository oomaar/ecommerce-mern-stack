import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";
import { selectDarkMode } from "../../redux/darkModeSlice";
import "./ProductScreen.css";

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.getProductDetails);
    const dark = useSelector(selectDarkMode);
    const {
        loading,
        error,
        product
    } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, product, match]);

    const handleAddToCart = () => {
        dispatch(addToCart(product._id, qty));
        history.push("/cart");
    }

    return (
        <div className="productscreen">
            {loading
                ? <h2>Spinner...</h2>
                : error
                    ? <h2>{error}</h2>
                    : (
                        <>
                            <div className="productscreen__left">
                                <div className="left__image">
                                    <img src={product.imageUrl} alt={product.name} />
                                </div>
                                <div className={`left__info ${dark && 'left__info__dark'}`}>
                                    <p className="left__name">{product.name}</p>
                                    <p className="left__price">${product.price}</p>
                                    <p className="left__description">{product.description}</p>
                                </div>
                            </div>
                            <div className="productscreen__right">
                                <div className={`right__info ${dark && 'right__info__dark'}`}>
                                    <p>
                                        Price: <span>${product.price}</span>
                                    </p>
                                    <p>
                                        Status: <span>{
                                            product.countInStock > 0 ? "In Stock" : "Out Of Stock"
                                        }</span>
                                    </p>
                                    <p>
                                        QTY:
                                        <select
                                            value={qty}
                                            onChange={e => setQty(e.target.value)}
                                        >
                                            {[...Array(product.countInStock).keys()]
                                                .map(opt => (
                                                    <option key={opt + 5} value={opt + 1}>{opt + 1}</option>
                                                ))}
                                        </select>
                                    </p>
                                    <p>
                                        <button
                                            onClick={handleAddToCart}
                                            type="button"
                                            className={`
                                            productScreen__addButton ${dark && 'productScreen__addButton__dark'}
                                            `}
                                        >
                                            Add To Cart
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
        </div>
    );
};

export default ProductScreen;
