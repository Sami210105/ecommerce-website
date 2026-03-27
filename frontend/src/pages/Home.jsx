import ProductList from "../components/ProductList";

function Home() {
    return (
        <div className="min-h-screen px-6 py-8">
            
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Our Products
                </h1>
                <p className="text-gray-500 text-lg">
                    Find your perfect cup, one sip at a time
                </p>
            </div>

            {/* Product Section */}
            <div className="max-w-7xl mx-auto">
                <ProductList />
            </div>

        </div>
    );
}

export default Home;