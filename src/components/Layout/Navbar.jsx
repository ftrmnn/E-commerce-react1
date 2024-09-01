import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux"; 
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import DarkModeContext from "../../context/DarkMode";
import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-5">
            <span>{username}</span>
            <Button variant="ml-2 bg-black flex justify-center items-center text-center" onClick={handleLogout}> 
                <FaCircleUser className="mr-2" />
                Logout
            </Button>
            <div className="flex items-center bg-black p-2 rounded-md ml-5 mr-5">
            <FaCartShopping className="mr-2" />
            <h3 className="mr-2">:</h3> 
                {totalCart} Items
            </div>
            <button className="top-2 bg-black text-white p-2 rounded" onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ?  <MdSunny className="w-6 h-auto" /> : <FaMoon className="w-6 h-auto" /> }</button>
        </div>
    );
};

export default Navbar;
