const Input = (props) => {
    const { type, placeholder, name } = props;
    return (
        <input 
            type={type}  // Menggunakan type dari props, bukan props itu sendiri
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder={placeholder} 
            name={name} 
        />
    );
};

export default Input;
