import { useContext } from "react";
import { Link } from "react-router-dom";
import DarkModeContext from "../../context/DarkMode";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const AuthLayout = (props) => {
    const { children, title, type } = props; 
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
    {
        console.log(isDarkMode);
    }

    return (
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-800"}`}>
            <div className="w-full max-w-xs">
                <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded" onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? <MdSunny className="w-6 h-auto" /> : <FaMoon className="w-6 h-auto" />}</button>
                <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
                <p className={`font-medium  ${isDarkMode ? "text-white" : ""}`}>Welcome, please enter your details</p>
                {children}
                <p className={`mt-4 text-center  ${isDarkMode ? "text-white" : ""}`}>
                    {type === "login" 
                        ? <>Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></> 
                        : <>Already have an account? <Link to="/login" className="text-blue-500">Login</Link></>
                    }
                </p>
            </div>
        </div>
    );
};

export default AuthLayout;
