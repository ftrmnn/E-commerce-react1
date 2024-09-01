import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow-lg m-5 flex flex-col">
            {children}
        </div>
    );
};

const Header = (props) => {
    const { image, id } = props;
    return (
        <Link to={`/product/${id}`}> 
            <img src={image} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
        </Link>
    );
};

const Body = (props) => {
    const { children, title } = props;
    return (
        <div className="px-5 pb-5 flex-grow">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-white">{title.substring(0, 10)}..</h5>
                <p className="mb-3 font-normal text-white">{children.substring(0, 80)}</p>
            </a>
        </div>
    );
};

const Footer = (props) => {
    const { price, id } = props;
    const dispatch = useDispatch();
    return (
        <div className="flex justify-between items-center px-5 pb-5">
            <span className="text-2xl font-bold text-white">{price.toLocaleString('id-ID', {style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol' })}</span>
            <Button variant="bg-blue-600" onClick={() => dispatch(addToCart({id, qty: 1})) }> Add </Button>
        </div>
    );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
