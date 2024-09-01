import { useEffect, useState, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import DarkModeContext from "../../context/DarkMode";

const TableCart = (props) => {
    const { products } = props;
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);
    const { isDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                if (product) {
                    return acc + product.price * item.qty;
                }
                return acc;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    const totalPriceRef = useRef(null);

    useEffect(() => {
        if (totalPriceRef.current) {
            totalPriceRef.current.textContent = totalPrice.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'USD',
                currencyDisplay: 'narrowSymbol'
            });
        }
    }, [totalPrice]);

    return (
        <table className={`text-left table-auto border-separate border-spacing-x-2 ${isDarkMode ? "text-white font-extralight" : ""}`}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th className="text-center">Quantity</th> {/* Pusatkan header kolom */}
                    <th>Total</th>
                </tr>
            </thead>
            <tbody className="text-left font-extralight">
                {cart.length > 0 && cart.map((item) => {
                    const product = products.find((product) => product.id === item.id);
                    if (!product) {
                        return <tr key={item.id}><td colSpan={4}>Product not found</td></tr>;
                    }
                    return (
                        <tr key={item.id}>
                            <td>{product.title ? product.title.substring(0, 10) : 'No Title'}</td>
                            <td>{product.price ? product.price.toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'USD',
                                currencyDisplay: 'narrowSymbol'
                            }) : 'No Price'}</td>
                            <td className="text-center">{item.qty}</td> {/* Pusatkan kuantitas */}
                            <td>{(item.qty * product.price).toLocaleString('id-ID', {
                                style: 'currency',
                                currency: 'USD',
                                currencyDisplay: 'narrowSymbol'
                            })}</td>
                        </tr>
                    );
                })}
                <tr>
                    <td colSpan={3}><b>Total Price</b></td>
                    <td><b ref={totalPriceRef}>{totalPrice.toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'USD',
                        currencyDisplay: 'narrowSymbol'
                    })}</b></td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableCart;
