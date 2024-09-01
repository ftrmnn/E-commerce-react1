import { useNavigate } from "react-router-dom";
import Button from "../components/Elements/Button";

const Home = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login"); 
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
            <h1 className="text-2xl font-bold">Welcome To Website E-Commerce</h1>
            <p className="mt-2">Please login first to enter e-commerce</p>
            <Button variant="bg-blue-600 mt-2" onClick={handleLoginClick}>
                To Login
            </Button>
        </div>
    );
};

export default Home;
