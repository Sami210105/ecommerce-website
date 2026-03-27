import {useEffect, useState} from "react";
import ProductCard from "./ProductCard";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/api/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {products.map(product => (
                <ProductCard key = {product._id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;