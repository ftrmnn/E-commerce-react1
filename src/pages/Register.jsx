import AuthLayout from "../components/Layout/AuthLayouts"; 
import FormLogin from "../components/Fragments/FormRegister";
import FormRegister from "../components/Fragments/FormRegister";


const RegisterPage = () => {
    return (
        <AuthLayout title="Register" type="register"> 
            <FormRegister />
        </AuthLayout>
    );
};

export default RegisterPage;
