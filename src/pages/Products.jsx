import { Fragment, useEffect, useState, useContext } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layout/Navbar";
import DarkModeContext from "../context/DarkMode";

const ProductsPage = () => {
    // const [cart, setCart] = useState([]);
    // const [totalprice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
    useLogin();

    // Mengambil token dari localStorage di dalam useEffect
    // useEffect(() => {
    //     setCart(JSON.parse(localStorage.getItem("cart")) || []);
    // }, []);



    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    }, []);
    

    return (
        <Fragment>
            <Navbar />
            <div className={`flex justify-center py-5 ${isDarkMode ? "bg-slate-800" : ""}`}>

                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 && 
                    products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} id={product.id} />
                            <CardProduct.Body title={product.title}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer 
                                price={product.price} 
                                id={product.id}
                                
                            />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/3">
                    <h1 className="text-3xl font-bold text-blue-600 mb-2">Cart</h1>
                    <TableCart products={products}/>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductsPage;
