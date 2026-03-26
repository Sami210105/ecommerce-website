import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="flex justify-between ml-1 bg-gray-100">
            <h1>E-commerce website</h1>
            <div className="p-1 mr-1 space-x-4">
                <Link to = "/">Home</Link>
                <Link to = "/cart">Cart</Link>
            </div>
        </nav>
    )
}

export default Navbar;