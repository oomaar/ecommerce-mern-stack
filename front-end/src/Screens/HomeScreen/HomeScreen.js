import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../../Components";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { selectDarkMode } from "../../redux/darkModeSlice";
import "./HomeScreen.css";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const dark = useSelector(selectDarkMode);
    const {
        products,
        loading,
        error
    } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="homescreen">
            <h2 className={`homescreen__title ${dark && 'homescreen__title__dark'}`}>Latest Products</h2>

            <div className="homescreen__products">
                {loading
                    ? <h2>Spinner...</h2>
                    : error
                        ? <h2>{error}</h2>
                        : products.map(product => (
                            <Product
                                darkMode={dark}
                                key={product._id}
                                imageUrl={product.imageUrl}
                                name={product.name}
                                price={product.price}
                                description={product.description}
                                productId={product._id}
                            />
                        ))}
            </div>
        </div>
    );
};

export default HomeScreen;
