import axios from "axios";

export const getProducts = (callback) => {
    axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
            console.log("Products fetched:", res.data); 
            callback(res.data);
        })
        .catch((err) => {
            console.log("Error fetching products:", err); 
        });
};

export const getDetailProduct = (id, callback) => {
    axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            console.log("Product details fetched:", res.data); 
            callback(res.data);
        })
        .catch((err) => {
            console.log("Error fetching product details:", err); 
        });
};
