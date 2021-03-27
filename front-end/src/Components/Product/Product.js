import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({
    imageUrl,
    name,
    price,
    description,
    productId,
    darkMode
}) => {
    return (
        <div className={`product ${darkMode && 'product__dark'}`}>
            <img src={imageUrl} alt={name} />

            {/* <div className={`product__info ${darkMode && 'product__info__dark'}`}> */}
            <div className="product__info">
                <p className="info__name">{name}</p>
                <p className="info__descripton">{description.substring(0, 100)}...</p>
                <p className="info__price">${price}</p>

                <Link
                    to={`/product/${productId}`}
                    className={`info__button ${darkMode && 'info__button__dark'}`}
                >
                    View
                </Link>
            </div>
        </div>
    );
};

export default Product;
