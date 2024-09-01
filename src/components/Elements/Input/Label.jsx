import DarkModeContext from "../../../context/DarkMode";
import { useContext } from "react";
const Label = (props) => {
    const { htmlFor, children} = props;
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
    return (
        <label 
        htmlFor={htmlFor} className={`block text-gray-700 text-sm font-bold mb-2  ${isDarkMode ? "text-white" : ""}`}>
        {children}
      </label>
    );
};

export default Label;

