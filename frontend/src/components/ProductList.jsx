import ProductCard from "./ProductCard";

const dummyProducts = [
    {
        id:1,
        name: "Latte",
        price: 150,
        image: "https://i.pinimg.com/1200x/67/5a/ce/675ace2c99404fbab403c7762effada1.jpg"
    },
    {
        id:2,
        name: "Frappe",
        price: 180,
        image: "https://i.pinimg.com/736x/ac/fd/9c/acfd9c5c59f1ce078f20bd059f93c984.jpg"
    }
]
function ProductList() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {dummyProducts.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ProductList;