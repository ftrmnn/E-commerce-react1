import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
const FormRegister = () => {
    return (
        <form action="">
        <InputForm 
        label="FullName" 
        type="text" 
        placeholder="name" 
        name="fullname"
        />
        <InputForm 
        label="Email" 
        type="email" 
        placeholder="example@gmail" 
        name="email"
        />
        <InputForm 
        label="Pasword" 
        type="pasword" 
        placeholder="*********" 
        name="pasword"
        />
        <InputForm 
        label="Confirm Pasword" 
        type="pasword" 
        placeholder="*********" 
        name="confrim pasword"
        />
        <Button variant="bg-blue-500 w-full">Register</Button>
        </form>
    );
};

export default FormRegister;